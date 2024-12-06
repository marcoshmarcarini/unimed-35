'use client'
import Moldura from "@/components/Moldura/page"
import { useState } from "react"
import styles from "./MergeImage.module.css"

export default function MergeImage() {
    const [nome, setNome] = useState('Seu Nome')
    const [anos, setAnos] = useState(0)
    const [uploadImage, setUploadImage] = useState<string | null>(null)
    const [mergedImage, setMergedImage] = useState<string | null>(null)
    const [svgImagePath, setSvgImagePath] = useState<string | null>(null)

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = () => setUploadImage(reader.result as string)
            reader.readAsDataURL(file)
        }
    }

    const convertSVGToImage = (svgElement: SVGSVGElement): Promise<string> => {
        return new Promise((resolve, reject) => {
            const svgClone = svgElement.cloneNode(true) as SVGSVGElement

            // Adicionar estilos inline
            const styleSheets = Array.from(document.styleSheets)
            const style = document.createElement('style')
            style.type = 'text/css'

            styleSheets.forEach((sheet) => {
                try {
                    const rules = Array.from(sheet.cssRules).map((rule) => rule.cssText).join('\n')
                    style.appendChild(document.createTextNode(rules))
                } catch (err) {
                    console.warn('Não foi possível acessar algumas regras de estilo:', err)
                }
            })

            svgClone.insertBefore(style, svgClone.firstChild)

            const svgString = new XMLSerializer().serializeToString(svgClone)
            const img = new Image()
            img.onload = () => {
                const canvas = document.createElement('canvas')
                canvas.width = svgElement.clientWidth || 1080
                canvas.height = svgElement.clientHeight || 1080
                const ctx = canvas.getContext('2d')
                if (ctx) {
                    ctx.drawImage(img, 0, 0)
                    resolve(canvas.toDataURL('image/png'))
                } else {
                    reject('Erro ao criar o contexto do canvas.')
                }
            }
            img.onerror = () => reject('Erro ao carregar SVG como imagem.')
            img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`
        });
    };

    const handleConvertSVG = async () => {
        const svgElement = document.querySelector('svg') as SVGSVGElement
        if (!svgElement) {
            console.log('Erro: SVG não encontrado.')
            return
        }

        try {
            const svgPath = await convertSVGToImage(svgElement)
            setSvgImagePath(svgPath)
            console.log('SVG convertido com sucesso!')
        } catch (error) {
            console.error('Erro ao converter SVG:', error)
            console.log('Erro ao converter SVG.')
        }
    };

    const handleMergeImage = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!uploadImage || !svgImagePath) {
            console.log('Por favor, carregue uma imagem e converta o SVG antes de combinar.')
            return;
        }

        try {
            const mergeImages = (await import('merge-images')).default

            const result = await mergeImages(
                [
                    { src: uploadImage, x: 90, y: 310 },
                    { src: svgImagePath, x: 0, y: 0 },
                ],
                {
                    width: 1080,
                    height: 1080,
                    /*  background: { r: 0, g: 0, b: 0, a: 0 }, */
                }
            );

            setMergedImage(result)
        } catch (error) {
            console.error('Erro ao combinar imagens:', error)
            console.log('Erro ao combinar imagens.')
        }
    };

    return (
        <div className={styles.container}>
            <p className={styles.description}>
                Demonstre o seu carinho pela Unimed Sul Capixaba. Crie sua moldura abaixo.
            </p>
            <div>
                <Moldura nome={nome} anos={anos} />
                {/* {svgImagePath && (
                    <div>
                        <p>Pré-visualização do SVG convertido:</p>
                        <img
                            src={svgImagePath}
                            alt="SVG convertido"
                            width={300}
                            height={300}
                        />
                    </div>
                )} */}

            </div>
            <div className={styles.inputs_area}>
                <div>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Digite seu nome"
                        className={styles.input_nome}
                    />
                </div>
                <div className={styles.slider_area}>
                    <p className={styles.question}>
                        Há quantos anos está conosco?
                    </p>
                    <p className={styles.answer}>
                        {anos} anos
                    </p>
                    <input
                        className={styles.slider}
                        step={1}
                        type="range"
                        min="0"
                        max="35"
                        value={anos}
                        onChange={(e) => setAnos(parseInt(e.target.value))}
                    />
                </div>
                <button onClick={handleConvertSVG} className={styles.button_criar_moldura}>
                    Criar Moldura
                </button>
                <label
                    htmlFor="fileUp"
                    className={styles.label_file}
                >
                    Carregar Foto
                </label>
                <input
                    id="fileUp"
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className={styles.input_file}
                />
                <button onClick={handleMergeImage} className={styles.button_criar_imagem}>
                    Criar Imagem
                </button>
            </div>
            {mergedImage && (
                <div className={styles.result}>
                    <p className={styles.result_title}>Imagem combinada:</p>
                    <img
                        src={mergedImage}
                        alt="Imagem combinada"
                        width={250}
                        height={250}
                    />
                    <a
                        href={mergedImage}
                        download="unimed35anos.png"
                        className={styles.button_download}
                    >
                        Download
                    </a>
                </div>
            )}

        </div>
    )
}
