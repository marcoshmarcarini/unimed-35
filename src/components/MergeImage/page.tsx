'use client'
import Moldura from "@/components/Moldura/page"
import { useState } from "react"
import styles from "./MergeImage.module.css"

export default function MergeImage() {
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [anos, setAnos] = useState(0)
    const [uploadImage, setUploadImage] = useState<string | null>(null)
    const [mergedImage, setMergedImage] = useState<string | null>(null)
    const [svgImagePath, setSvgImagePath] = useState<string | null>(null)
    const [converting, setConverting] = useState('')

    const resizeImage = (
        imageSrc: string,
        targetWidth: number,
        targetHeight: number
    ): Promise<string> => {
        return new Promise((resolve, reject) => {
            const img = new Image()
            img.onload = () => {
                const canvas = document.createElement('canvas')
                canvas.width = targetWidth
                canvas.height = targetHeight

                const ctx = canvas.getContext('2d')
                if (ctx) {
                    // Preenche o fundo com transparência, se necessário
                    ctx.clearRect(0, 0, canvas.width, canvas.height)

                    // Calcula o fator de escala para manter a proporção
                    const scale = Math.min(
                        targetWidth / img.width,
                        targetHeight / img.height
                    )

                    const newWidth = img.width * scale
                    const newHeight = img.height * scale

                    // Centraliza a imagem no canvas
                    const offsetX = (targetWidth - newWidth) / 2
                    const offsetY = (targetHeight - newHeight) / 2

                    ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight)

                    resolve(canvas.toDataURL('image/png'))
                } else {
                    reject('Erro ao obter contexto do canvas.')
                }
            }
            img.onerror = () => reject('Erro ao carregar a imagem.')
            img.src = imageSrc
        })
    }

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = async () => {
                const base64Image = reader.result as string

                try {
                    // Redimensiona a imagem para caber na moldura (ajuste as dimensões conforme necessário)
                    const resizedImage = await resizeImage(base64Image, 700, 1150)
                    setUploadImage(resizedImage)
                } catch (error) {
                    console.error('Erro ao redimensionar a imagem:', error)
                }
            }
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
                canvas.height = svgElement.clientHeight || 1350
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
            setConverting('Seus dados foram processados, vamos para o próximo passo!')
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
                    { src: uploadImage, x:  440, y: -120 },
                    { src: svgImagePath, x: 0, y: 0 },
                ],
                {
                    width: 1080,
                    height: 1350,
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
            <p className={styles.part_1}>Insira o seu nome e o seu tempo consoco.</p>
            <div>
                <Moldura nome={nome} sobrenome={sobrenome} anos={anos} />
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
                <div>
                    <input
                        type="text"
                        value={sobrenome}
                        onChange={(e) => setSobrenome(e.target.value)}
                        placeholder="Digite seu sobrenome"
                        className={styles.input_nome}
                    />
                </div>
                <div className={styles.slider_area}>
                    <p className={styles.question}>
                        Há quantos anos está conosco?
                    </p>
                    <p className={styles.answer}>
                        {anos > 1 ? `${anos} anos` : `${anos} ano`} 
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
                    Próximo
                </button>
                <p>{converting}</p>
                <label
                    htmlFor="fileUp"
                    className={styles.label_file}
                >
                    Carregar Foto
                </label>
                <input
                    id="fileUp"
                    type="file"
                    accept="image/*;capture=camera"
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
