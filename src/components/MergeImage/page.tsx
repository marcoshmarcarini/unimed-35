"use client";
import Moldura from "@/components/Moldura/page";
import { useState } from "react";
import styles from "./MergeImage.module.css";
import { Info } from "lucide-react";

export default function MergeImage() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [anos, setAnos] = useState(0);
  const [uploadImage, setUploadImage] = useState<string | null>(null);
  const [mergedImage, setMergedImage] = useState<string | null>(null);
  const [svgImagePath, setSvgImagePath] = useState<string | null>(null);
  const [converting, setConverting] = useState("");

  const resizeImage = (
    imageSrc: string,
    targetWidth: number,
    targetHeight: number,
  ): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = targetWidth;
        canvas.height = targetHeight;

        const ctx = canvas.getContext("2d");
        if (ctx) {
          // Preenche o fundo com transparência, se necessário
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // Calcula o fator de escala para manter a proporção
          const scale = Math.min(
            targetWidth / img.width,
            targetHeight / img.height,
          );

          const newWidth = img.width * scale;
          const newHeight = img.height * scale;

          // Centraliza a imagem no canvas
          const offsetX = (targetWidth - newWidth) / 2;
          const offsetY = (targetHeight - newHeight) / 2;

          ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);

          resolve(canvas.toDataURL("image/png"));
        } else {
          reject("Erro ao obter contexto do canvas.");
        }
      };
      img.onerror = () => reject("Erro ao carregar a imagem.");
      img.src = imageSrc;
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async () => {
        const base64Image = reader.result as string;

        try {
          // Redimensiona a imagem para caber na moldura (ajuste as dimensões conforme necessário)
          const resizedImage = await resizeImage(base64Image, 700, 1150);
          setUploadImage(resizedImage);
        } catch (error) {
          console.error("Erro ao redimensionar a imagem:", error);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const fetchFontAsBase64 = async (url: string): Promise<string> => {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const convertSVGToImage = async (
    svgElement: SVGSVGElement,
  ): Promise<string> => {
    const svgClone = svgElement.cloneNode(true) as SVGSVGElement;

    try {
      // 1. Buscamos as fontes
      const regularBase64 = await fetchFontAsBase64(
        "/fonts/UnimedSans2020/UNIMEDSANS-2020-Regular.woff",
      );
      const bookBase64 = await fetchFontAsBase64(
        "/fonts/UnimedSans2020/UNIMEDSANS2020-BKCD.woff",
      );
      const boldBase64 = await fetchFontAsBase64(
        "/fonts/UnimedSans2020/UNIMEDSANS2020-BD.woff",
      );
      const semiBoldItalicBase64 = await fetchFontAsBase64(
        "/fonts/UnimedSans2020/UNIMEDSANS2020-BDIT.woff",
      );

      // 2. Criamos a tag style
      const style = document.createElement("style");
      style.type = "text/css";

      // 3. MÁGICA FINAL: Juntamos as FONTES e TODAS AS SUAS CORES em um lugar só!
      const cssCompleto = `
        @font-face {
          font-family: 'UniBold';
          src: url('${boldBase64}') format('woff');
          font-weight: 900;
          font-style: normal;
        }
        @font-face {
          font-family: 'UniRegular';
          src: url('${regularBase64}') format('woff');
          font-weight: 400;
          font-style: normal;
        }

        @font-face {
          font-family: 'UniSemiBoldItalic';
          src: url('${semiBoldItalicBase64}') format('woff');
          font-weight: 600;
          font-style: italic;
        }

        @font-face {
          font-family: 'UniBook';
          src: url('${bookBase64}') format('woff');
          font-weight: 300;
          font-style: normal;
        }


        .st0 {fill: #038a51;}
        .st1, .st2, .st3, .st4, .st5, .st6, .st7, .st8 {isolation: isolate;}
        .st1, .st2, .st3, .st4, .st7, .st8 {fill: #004e4c;}
        .st1, .st2, .st6, .st7 {font-weight: 700;}
        .st1, .st3, .st4 {font-size: 90.7px;}
        .st1, .st7 {font-family: 'UniBold';}
        .st9, .st6 {fill: #fff;}
        .st10, .st11 {fill: none;}
        .st12 {fill: #008c50;}
        .st13 {fill: url(#Gradiente_sem_nome);}
        .st2 {font-family: 'UniSemiBoldItalic';font-size: 90px;font-style: italic;}
        .st11 {stroke: #004e4c;stroke-miterlimit: 10;stroke-width: 6px;}
        .st14 {clip-path: url(#clippath-1);}
        .st3 {font-family: font-family: 'UniRegular';}
        .st4 {font-family: font-family: 'UniRegular';}
        .st6 {font-family: 'UniBold';font-size: 75px;}
        .st7 {font-size: 207.4px;}
        .st8 {font-family: 'UniBook'; font-size: 60px;}
        .st15 {clip-path: url(#clippath);}
      `;

      style.appendChild(document.createTextNode(cssCompleto));
      svgClone.insertBefore(style, svgClone.firstChild);

      const svgString = new XMLSerializer().serializeToString(svgClone);

      return new Promise((resolve, reject) => {
        const img = new Image();

        img.onload = () => {
          // SEGREDO 1: O atraso de 150ms para o iPhone "respirar" e renderizar a fonte
          setTimeout(() => {
            const canvas = document.createElement("canvas");
            canvas.width = svgElement.clientWidth || 1080;
            canvas.height = svgElement.clientHeight || 1350;
            const ctx = canvas.getContext("2d");

            if (ctx) {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              ctx.drawImage(img, 0, 0);
              resolve(canvas.toDataURL("image/png"));
            } else {
              reject("Erro ao criar o contexto do canvas.");
            }
          }, 150);
        };

        img.onerror = () => reject("Erro ao carregar SVG como imagem.");

        // SEGREDO 2: Empacotar o SVG em Base64 puro para o iOS não se perder nos caracteres
        const svgBase64 = btoa(unescape(encodeURIComponent(svgString)));
        img.src = `data:image/svg+xml;base64,${svgBase64}`;
      });
    } catch (error) {
      console.error("Erro ao converter as fontes dinamicamente:", error);
      throw error;
    }
  };

  const handleConvertSVG = async () => {
    const svgElement = document.querySelector("svg") as SVGSVGElement;
    if (!svgElement) {
      console.log("Erro: SVG não encontrado.");
      return;
    }
    try {
      const svgPath = await convertSVGToImage(svgElement);
      setSvgImagePath(svgPath);
      console.log("SVG convertido com sucesso!");
      setConverting(
        "Seus dados foram processados, vamos para o próximo passo!",
      );
    } catch (error) {
      console.error("Erro ao converter SVG:", error);
      console.log("Erro ao converter SVG.");
    }
  };

  const handleMergeImage = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!uploadImage || !svgImagePath) {
      console.log(
        "Por favor, carregue uma imagem e converta o SVG antes de combinar.",
      );
      return;
    }
    try {
      const mergeImages = (await import("merge-images")).default;

      const result = await mergeImages(
        [
          { src: uploadImage, x: 440, y: -120 },
          { src: svgImagePath, x: 0, y: 0 },
        ],
        {
          width: 1080,
          height: 1350,
        },
      );

      setMergedImage(result);
    } catch (error) {
      console.error("Erro ao combinar imagens:", error);
      console.log("Erro ao combinar imagens.");
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.description}>
        Demonstre o seu carinho pela Unimed Sul Capixaba. Crie sua moldura
        abaixo.
      </p>
      <p className={styles.part_1}>Insira o seu nome e o seu tempo consoco.</p>
      <div>
        <Moldura nome={nome} sobrenome={sobrenome} anos={anos} />
      </div>
      <div className={styles.inputs_area}>
        <div className={`flex flex-col gap-2`}>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome"
            className={styles.input_nome}
            maxLength={15} // 10
          />

          <span className="flex items-center gap-2 text-xs text-green-700  px-1 py-1 rounded text-center">
            <Info color="#15803d" size={20} />
            Utilize no máximo 15 caracteres
          </span>
        </div>
        <div className={`flex flex-col gap-2`}>
          <input
            type="text"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
            placeholder="Digite seu sobrenome"
            className={styles.input_nome}
            maxLength={20} // 15
          />
          <span className="flex items-center gap-2 text-xs text-green-700  px-1 py-1 rounded text-center">
            <Info color="#15803d" size={20} />
            Utilize no máximo 20 caracteres
          </span>
        </div>
        <div className={styles.slider_area}>
          <p className={styles.question}>Há quantos anos está conosco?</p>
          <p className={styles.answer}>
            {anos > 1 ? `${anos} anos` : `${anos} ano`}
          </p>
          <input
            className={styles.slider}
            step={1}
            type="range"
            min="0"
            max="36"
            value={anos}
            onChange={(e) => setAnos(parseInt(e.target.value))}
          />
        </div>
        <button
          onClick={handleConvertSVG}
          className={styles.button_criar_moldura}
        >
          Próximo
        </button>
        <p>{converting}</p>
        <div>
          <label htmlFor="fileUp" className={styles.label_file}>
            Carregar Foto
          </label>
          <input
            id="fileUp"
            type="file"
            accept="image/*;capture=camera"
            onChange={handleFileUpload}
            className={styles.input_file}
          />
          <span className="flex items-center gap-2 text-xs text-green-700  px-1 py-1 rounded text-center">
            <Info color="#15803d" size={20} />
            Formato recomendado: PNG ou JPEG. 1080x1920px. 9:16
          </span>
        </div>

        <button
          onClick={handleMergeImage}
          className={styles.button_criar_imagem}
        >
          Criar Imagem
        </button>
      </div>
      {mergedImage && (
        <div className={styles.result}>
          <p className={`${styles.result_title}`}>Imagem combinada:</p>
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
  );
}
