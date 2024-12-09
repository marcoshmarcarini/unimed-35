'use client'

import styles from './Moldura.module.css'
import { UnimedExtraBoldItalic, UnimedRegular, UnimedBlackItalic, UnimedBold } from '../Fonts/page'




interface MolduraProps {
    nome: string
    anos: number
}

export default function Moldura({ nome, anos }: MolduraProps) {


    return (
        <div className={styles.moldura}>
            <svg
                id="Camada_2"
                /* dataName="Camada_2" */
                viewBox="0 0 1080 1080"
                className={styles.img_moldura}
            >
                <defs>
                    <linearGradient
                        id="linear-gradient"
                        x1="0"
                        y1="0"
                        x2="1080"
                        y2="1080"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop
                            offset="0"
                            stopColor="#038c51"
                        />
                        <stop
                            offset="1"
                            stopColor="#08484c"
                        />
                    </linearGradient>
                    <linearGradient
                        id="linear-gradient-2"
                        x1="82.21"
                        y1="-178.02"
                        x2="774.21"
                        y2="404.65"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop
                            offset="0"
                            stopColor="#00985c"
                        />
                        <stop
                            offset="1"
                            stopColor="#afcc4d"
                        />
                    </linearGradient>
                    <clipPath id="clippath">
                        <path
                            className={styles.cls_13}
                            d="M0,0h1080v382.99c0,37.84-30.72,68.56-68.56,68.56H68.56c-37.84,0-68.56-30.72-68.56-68.56V0h0Z"
                        />
                    </clipPath>
                </defs>
                <g
                    id="Layer_1"
                /* dataName="Layer_1" */
                >
                    <path
                        className={styles.cls_47}
                        d="M0,0v1080h1080V0H0ZM411.26,717.74H133.77c-24.17,0-43.77-19.6-43.77-43.77v-315.42c0-24.18,19.6-43.77,43.77-43.77h233.73c24.17,0,43.76,19.59,43.76,43.77v359.19Z"
                    />
                    <path
                        className={styles.cls_1}
                        d="M1080,0v382.99c0,37.87-30.7,68.56-68.56,68.56H411.26v-93c0-24.18-19.59-43.77-43.76-43.77h-233.73c-24.17,0-43.77,19.59-43.77,43.77v93h-21.44c-37.86,0-68.56-30.69-68.56-68.56V0h1080Z"
                    />
                    <g
                        className={styles.cls_48}
                    >
                        <text
                            className={styles.cls_14}
                            transform="translate(387.77 454.72)"
                        >
                            <tspan
                                className={`${styles.cls_4} ${UnimedExtraBoldItalic.style} `}
                                x="50"
                                y="0"

                            >
                                {anos}
                            </tspan>
                        </text>
                    </g>
                    <g>
                        <path className={styles.cls_49} d="M719.08,970.65c0,9.58-7.76,17.34-17.34,17.34h-69.37v-69.35c0-9.58,7.76-17.34,17.34-17.34h52.02c9.58,0,17.34,7.76,17.34,17.34v52.01Z" />
                        <path className={styles.cls_7} d="M649.71,901.3c-9.58,0-17.34,7.76-17.34,17.34v69.35h69.37c9.58,0,17.34-7.76,17.34-17.34v-52.01c0-9.58-7.76-17.34-17.34-17.34h-52.03ZM649.71,899.13h52.03c10.76,0,19.51,8.75,19.51,19.51v52.01c0,10.76-8.75,19.51-19.51,19.51h-71.53v-71.52c0-10.76,8.75-19.51,19.51-19.51" />
                        <path className={styles.cls_39} d="M662.23,973.31v.28h-3.76l-.6-2.14h-4.37l-.6,2.14h-3.74v-.28l4.32-13.74h4.41l4.34,13.74ZM657.01,968.36l-1.32-4.71-1.32,4.71h2.64Z" />
                        <polygon className={styles.cls_39} points="675.95 959.57 675.95 973.59 672.59 973.59 667.56 966.04 667.56 973.59 663.86 973.59 663.86 959.57 667.2 959.57 672.25 967.26 672.25 959.57 675.95 959.57" />
                        <path className={styles.cls_39} d="M677.95,966.62c0-4.42,2.84-7.33,7.09-7.33s6.83,2.64,6.83,7.21-2.8,7.37-7.07,7.37-6.85-2.68-6.85-7.25M688.16,966.54c0-2.54-1.3-4.1-3.28-4.1s-3.22,1.56-3.22,4.12,1.32,4.17,3.22,4.17,3.28-1.58,3.28-4.19" />
                        <path className={styles.cls_39} d="M703.36,959.91l-.72,3.02c-1.16-.3-2.32-.5-3.38-.5-1.36,0-2.12.46-2.12,1.16s.68.96,1.58,1.26c2.3.84,5.01,1.52,5.01,4.59,0,2.74-2.1,4.43-5.61,4.43-1.58,0-3.46-.36-4.78-.92l.84-3.01c1.22.5,2.84.78,3.82.78,1.22,0,1.82-.44,1.82-1.08,0-.82-.96-.96-2.56-1.52-2.04-.74-3.85-1.76-3.85-4.26,0-2.64,2.1-4.57,5.85-4.57,1.3,0,2.82.22,4.11.62" />
                        <path className={styles.cls_39} d="M673.88,942.03c0,6.4-5.28,11.12-15.13,11.12-3.5,0-6.9-.56-9.59-1.47l1.37-6.9c2.54.61,4.97.91,6.95.91,4.47,0,6.6-1.67,6.6-3.86,0-2.44-2.13-3.81-6.19-3.81h-3.4v-7.82h3.96c4.67,0,6.09-1.42,6.09-3.35s-1.63-3.3-6.14-3.3c-2.18,0-4.47.35-7.56,1.02l-1.06-7.01c3.15-.86,7.21-1.37,10.61-1.37,8.43,0,12.89,3.45,12.89,8.88,0,4.52-2.89,7.41-6.45,8.68,4.21,1.02,7.05,3.71,7.05,8.27" />
                        <path className={styles.cls_39} d="M703.72,940.76c0,7.21-5.18,12.38-14.92,12.38-4.11,0-7.92-.81-11.52-2.13l1.77-7.11c3.45,1.12,6.5,1.67,9.04,1.67,4.26,0,6.34-1.73,6.34-4.36s-2.18-4.11-5.58-4.11c-2.44,0-4.16.51-6.3,1.27l-4.16-2.33.86-19.19h22.69v7.51h-14.52l-.25,5.74c1.63-.25,3-.36,4.21-.36,7.92,0,12.34,4.37,12.34,11.02" />
                        <path className={styles.cls_24} d="M360.92,970.65c0,9.58,7.76,17.34,17.34,17.34h225.44v-69.35c0-9.58-7.76-17.34-17.34-17.34h-208.1c-9.58,0-17.34,7.76-17.34,17.34v52.01Z" />
                        <path className={styles.cls_7} d="M586.36,901.3c9.58,0,17.34,7.76,17.34,17.34v69.35h-225.44c-9.58,0-17.34-7.76-17.34-17.34v-52.01c0-9.58,7.76-17.34,17.34-17.34h208.1ZM586.36,899.13h-208.1c-10.76,0-19.51,8.75-19.51,19.51v52.01c0,10.76,8.75,19.51,19.51,19.51h227.61v-71.52c0-10.76-8.75-19.51-19.51-19.51" />
                        <path className={styles.cls_7} d="M445.03,959.59l-.42,1.85c-.93-.26-1.89-.42-2.78-.42-1.53,0-2.36.52-2.36,1.35,0,.91.88,1.17,2.03,1.54,2.11.71,3.82,1.35,3.82,3.51s-1.64,3.45-4.34,3.45c-1.19,0-2.7-.29-3.71-.7l.49-1.87c.99.39,2.29.62,3.17.62,1.4,0,2.18-.58,2.18-1.37,0-1.01-1.01-1.17-2.54-1.71-2.32-.83-3.22-1.66-3.22-3.33,0-1.97,1.58-3.45,4.47-3.45,1.07,0,2.24.19,3.2.52" />
                        <path className={styles.cls_7} d="M454.19,962.53v8.13h-1.38l-.21-.54c-.71.44-1.61.75-2.68.75-1.8,0-2.86-1.11-2.86-2.75v-5.59h2.03v5.06c0,.88.45,1.4,1.43,1.4.68,0,1.19-.15,1.66-.38v-6.08h2.02Z" />
                        <path className={styles.cls_7} d="M460.23,970.53c-.52.23-.98.34-1.64.34-1.27,0-2.23-.63-2.23-2.26v-10.14h2.02v9.54c0,.75.36.99.93.99.23,0,.42-.03.63-.11l.29,1.64Z" />
                        <path className={styles.cls_7} d="M473.26,959.49l-.41,1.84c-.85-.21-1.37-.29-2.1-.29-2.24,0-3.89,1.45-3.89,4.1,0,2.44,1.56,3.76,3.92,3.76.83,0,1.46-.11,2.18-.33l.42,1.84c-.96.34-1.97.47-2.97.47-3.33,0-5.71-1.98-5.71-5.74s2.47-6.06,5.79-6.06c1.02,0,1.89.13,2.76.42" />
                        <path className={styles.cls_7} d="M481.29,965.12v5.54h-1.25l-.29-.5c-.58.46-1.28.71-2.23.71-1.9,0-3.01-1.07-3.01-2.52,0-1.53,1.07-2.55,3.14-2.55h1.61v-.29c0-.89-.68-1.38-1.94-1.38-.7,0-1.53.13-2.26.34l-.34-1.69c1.01-.29,2.13-.46,3.07-.46,2.54,0,3.5,1.15,3.5,2.8M477.89,969.23c.47,0,.94-.1,1.37-.31v-1.58h-1.42c-.88,0-1.25.39-1.25.93,0,.6.5.96,1.3.96" />
                        <path className={styles.cls_7} d="M491.03,966.5c0,2.62-1.64,4.37-4.05,4.37-.63,0-1.19-.1-1.66-.29v4.15h-2.03v-12.19h1.38l.21.5c.57-.46,1.3-.72,2.24-.72,2.34,0,3.9,1.61,3.9,4.18M488.91,966.58c0-1.48-.86-2.42-2.18-2.42-.54,0-1.01.16-1.41.42v4.24c.46.23.91.29,1.33.29,1.48,0,2.26-1.14,2.26-2.54" />
                        <path className={styles.cls_7} d="M495.11,959.85c0,.76-.52,1.25-1.28,1.25s-1.3-.49-1.3-1.25.52-1.24,1.3-1.24,1.28.49,1.28,1.24M494.83,970.66h-2.03v-8.13h2.03v8.13Z" />
                        <polygon className={styles.cls_7} points="504.75 962.71 501.69 966.65 504.5 970.48 504.5 970.66 502.13 970.66 500.44 968.23 498.7 970.66 496.39 970.66 496.39 970.48 499.38 966.74 496.47 962.71 496.47 962.53 498.88 962.53 500.63 965.14 502.45 962.53 504.75 962.53 504.75 962.71" />
                        <path className={styles.cls_7} d="M512.45,965.12v5.54h-1.25l-.29-.5c-.58.46-1.28.71-2.23.71-1.9,0-3.01-1.07-3.01-2.52,0-1.53,1.07-2.55,3.14-2.55h1.61v-.29c0-.89-.68-1.38-1.94-1.38-.7,0-1.53.13-2.26.34l-.34-1.69c1.01-.29,2.13-.46,3.07-.46,2.54,0,3.5,1.15,3.5,2.8M509.06,969.23c.47,0,.94-.1,1.37-.31v-1.58h-1.42c-.88,0-1.25.39-1.25.93,0,.6.5.96,1.3.96" />
                        <path className={styles.cls_7} d="M522.11,966.45c0,2.7-1.64,4.42-3.9,4.42-.88,0-1.63-.21-2.19-.7l-.21.49h-1.38v-12.19h2.03v4.29c.55-.29,1.2-.44,1.93-.44,2.33,0,3.72,1.51,3.72,4.13M520.03,966.52c0-1.58-.83-2.44-2.13-2.44-.5,0-1.01.1-1.45.31v4.15c.42.33.88.49,1.45.49,1.33,0,2.13-.83,2.13-2.5" />
                        <path className={styles.cls_7} d="M530.06,965.12v5.54h-1.25l-.29-.5c-.58.46-1.28.71-2.23.71-1.9,0-3.01-1.07-3.01-2.52,0-1.53,1.07-2.55,3.14-2.55h1.61v-.29c0-.89-.68-1.38-1.94-1.38-.7,0-1.53.13-2.26.34l-.34-1.69c1.01-.29,2.13-.46,3.07-.46,2.54,0,3.5,1.15,3.5,2.8M526.66,969.23c.47,0,.94-.1,1.37-.31v-1.58h-1.42c-.88,0-1.25.39-1.25.93,0,.6.5.96,1.3.96" />
                        <path className={styles.cls_7} d="M386.93,923.53c0-.3.26-.56.56-.56h6.69c.3,0,.56.26.56.56v15.01c0,2.79,1.34,4.49,4.38,4.49s4.35-1.71,4.35-4.49v-15.01c0-.3.26-.56.56-.56h6.69c.3,0,.56.26.56.56v14.56c0,6.54-3.27,11.26-12.15,11.26s-12.19-4.72-12.19-11.26v-14.56ZM414.98,948.42v-18.58c0-.3.26-.56.56-.56h6.32c.3,0,.56.26.56.56v3.38c.89-2.67,3.86-4.31,7.02-4.31,3.71,0,6.05,1.93,6.05,7.06v12.44c0,.3-.26.56-.56.56h-6.31c-.3,0-.56-.26-.56-.56v-11c0-1.78-.59-2.86-2.75-2.86s-2.9.41-2.9,1.08v12.78c0,.3-.26.56-.56.56h-6.32c-.3,0-.56-.26-.56-.56M442.69,921.45c3.23,0,4.12.3,4.12,2.94s-.89,2.97-4.12,2.97-4.16-.26-4.16-2.97.93-2.94,4.16-2.94M439.02,929.85c0-.3.26-.56.56-.56h6.32c.3,0,.56.26.56.56v18.58c0,.3-.26.56-.56.56h-6.32c-.3,0-.56-.26-.56-.56v-18.58ZM450.16,929.85c0-.3.26-.56.56-.56h6.32c.3,0,.56.26.56.56v3.38c.89-2.67,3.83-4.31,6.76-4.31s4.9,1.23,5.65,4.09c1-2.56,3.97-4.09,6.91-4.09,3.68,0,6.09,1.93,6.09,6.69v12.82c0,.3-.26.56-.56.56h-6.32c-.3,0-.56-.26-.56-.56v-11c0-1.78-.59-2.86-2.56-2.86s-2.71.41-2.71,1.08v12.78c0,.3-.26.56-.56.56h-6.31c-.3,0-.56-.26-.56-.56v-11c0-1.78-.59-2.86-2.56-2.86s-2.71.41-2.71,1.08v12.78c0,.3-.26.56-.56.56h-6.32c-.3,0-.56-.26-.56-.56v-18.58ZM496.6,928.92c6.87,0,9.88,3.79,9.88,9.66,0,1.26.04,2.49-1.45,2.49h-11.48c.37,2.34,1.71,3.19,6.13,3.19h5.65c.37,0,.67.33.59.71l-.59,3.01-.22.33c-1.78.74-4.42,1.04-7.5,1.04-8.1,0-11.74-3.9-11.74-10.29s3.53-10.14,10.74-10.14M499.64,937.43c0-2.3-.67-3.75-2.93-3.75-1.9,0-2.97.89-3.23,3.75h6.17ZM516.21,928.92c3.01,0,5.05,1.45,6.24,3.86v-9.26c0-.3.26-.56.56-.56h6.32c.3,0,.56.26.56.56v24.9c0,.3-.26.56-.56.56h-6.32c-.3,0-.56-.26-.56-.56v-2.94c-1.19,2.42-3.23,3.86-6.24,3.86-5.13,0-7.13-4.24-7.13-10.22s2-10.22,7.13-10.22M519.96,943.97c1.75,0,2.49-.78,2.49-1.78v-6.31c0-1.04-.97-1.56-2.49-1.56-2.19,0-3.08,1.52-3.08,4.83s.89,4.83,3.08,4.83" />
                        <path className={styles.cls_7} d="M543.89,948.99h8.24c.48,0,.74-.15,1-.48l5.35-7.26.22-.52c0-.26-.26-.41-.71-.41h-3.08c-.48,0-.74-.22-.74-.52l.22-.52,4.91-6.58.22-.52c0-.3-.26-.52-.74-.52h-3.65c-.48,0-.74-.19-.74-.48l.22-.56,4.76-6.33c.26-.33.63-.44.97-.44s.71.11.96.44l4.76,6.33.22.56c0,.3-.26.48-.74.48h-3.65c-.48,0-.74.22-.74.52l.22.52,4.91,6.58.22.52c0,.3-.26.52-.74.52h-3.08c-.45,0-.71.15-.71.41l.22.52,5.35,7.26c.26.33.56.48,1,.48h8.24c.6,0,.93-.22.93-.59,0-.22-.11-.45-.22-.6l-4.83-6.56-.22-.52c0-.26.26-.41.71-.41h5.8c.59,0,.89-.22.89-.59,0-.22-.11-.45-.22-.6l-11.85-15.7c-.22-.3-.45-.44-.97-.44h-13.3c-.33,0-.71.07-.97.44l-11.48,15.7c-.15.22-.22.41-.22.6,0,.37.3.59.89.59h5.8c.45,0,.71.15.71.41l-.22.52-4.83,6.56c-.11.15-.22.37-.22.6,0,.37.33.59.93.59" />
                    </g>
                    <path className={styles.cls_49} d="M450.62,314.78h493.61c24.16,0,43.77,19.61,43.77,43.77v380.46c0,24.16-19.61,43.77-43.77,43.77h-449.85c-24.16,0-43.77-19.61-43.77-43.77v-424.23h0Z" />
                    <g>
                        <text className={`${styles.cls_26} ${UnimedRegular.style}`} transform="translate(500.59 615.59)">
                            <tspan x="0" y="0">
                                Sua contribuição é essencial <br />
                                para o nosso sucesso.<br />
                                Que venham muitos mais anos<br />
                                de conquistas juntos!<br />
                            </tspan>
                            {/* <tspan className={styles.cls_15} x="55.67" y="0">c</tspan>
                            <tspan x="69.77" y="0">o</tspan>
                            <tspan className={styles.cls_50} x="86.49" y="0">n</tspan>
                            <tspan x="102.89" y="0">tribuição é e</tspan>
                            <tspan className={styles.cls_44} x="264.62" y="0">s</tspan>
                            <tspan x="278.51" y="0">senci</tspan>
                            <tspan className={styles.cls_50} x="346.72" y="0">a</tspan>
                            <tspan className={styles.cls_33} x="361.59" y="0">l</tspan>
                            <tspan className={styles.cls_28} x="0" y="35.33">p</tspan>
                            <tspan x="16.72" y="35.33">a</tspan>
                            <tspan className={styles.cls_28} x="31.7" y="35.33">r</tspan>
                            <tspan className={styles.cls_42} x="42.27" y="35.33">a o no</tspan>
                            <tspan className={styles.cls_44} x="120.81" y="35.33">s</tspan>
                            <tspan x="134.71" y="35.33">so su</tspan>
                            <tspan className={styles.cls_15} x="202.89" y="35.33">c</tspan>
                            <tspan x="216.99" y="35.33">e</tspan>
                            <tspan className={styles.cls_44} x="232.74" y="35.33">s</tspan>
                            <tspan x="246.63" y="35.33">so.</tspan>
                            <tspan className={styles.cls_12} x="0" y="70.65">Q</tspan>
                            <tspan className={styles.cls_33} x="22.2" y="70.65">ue </tspan>
                            <tspan className={styles.cls_2} x="61.26" y="70.65">v</tspan>
                            <tspan x="75.6" y="70.65">e</tspan>
                            <tspan className={styles.cls_15} x="91.35" y="70.65">n</tspan>
                            <tspan x="107.74" y="70.65">ham mui</tspan>
                            <tspan className={styles.cls_34} x="221.79" y="70.65">t</tspan>
                            <tspan x="232.83" y="70.65">os m</tspan>
                            <tspan className={styles.cls_36} x="296.15" y="70.65">a</tspan>
                            <tspan x="311.25" y="70.65">is anos</tspan>
                            <tspan x="0" y="105.98">de </tspan>
                            <tspan className={styles.cls_50} x="39.56" y="105.98">c</tspan>
                            <tspan x="53.67" y="105.98">onqui</tspan>
                            <tspan className={styles.cls_34} x="127.82" y="105.98">s</tspan>
                            <tspan className={styles.cls_50} x="141.66" y="105.98">t</tspan>
                            <tspan x="152.81" y="105.98">as ju</tspan>
                            <tspan className={styles.cls_50} x="213.22" y="105.98">n</tspan>
                            <tspan className={styles.cls_34} x="229.62" y="105.98">t</tspan>
                            <tspan className={styles.cls_42} x="240.66" y="105.98">os!</tspan> */}
                        </text>
                        <text className={`${styles.cls_25} ${UnimedBlackItalic.style}`} transform="translate(500.59 406.61)">
                            <tspan className={styles.cls_10} x="0" y="0">P</tspan>
                            <tspan className={styles.cls_22} x="25.75" y="0">a</tspan>
                            <tspan className={styles.cls_27} x="50.88" y="0">r</tspan>
                            <tspan className={styles.cls_17} x="66.44" y="0">a</tspan>
                            <tspan className={styles.cls_43} x="91.34" y="0">béns por mais</tspan>
                            <tspan className={styles.cls_29} x="0" y="47">um</tspan>
                            <tspan className={styles.cls_10} x="59.76" y="47"></tspan>
                            <tspan className={styles.cls_43} x="65.63" y="47">ano</tspan>
                            <tspan className={styles.cls_10} x="138.34" y="47"></tspan>
                            <tspan className={styles.cls_30} x="144.2" y="47">d</tspan>
                            <tspan className={styles.cls_22} x="169.01" y="47">e</tspan>
                            <tspan className={styles.cls_10} x="192.1" y="47"></tspan>
                            <tspan className={styles.cls_6} x="197.97" y="47">d</tspan>
                            <tspan className={styles.cls_43} x="222.77" y="47">edi</tspan>
                            <tspan className={styles.cls_37} x="282.18" y="47">c</tspan>
                            <tspan className={styles.cls_43} x="301.57" y="47">a</tspan>
                            <tspan className={styles.cls_37} x="326.69" y="47">ç</tspan>
                            <tspan className={styles.cls_43} x="346.09" y="47">ão</tspan>
                            <tspan className={styles.cls_29} x="0" y="94.01">e</tspan>
                            <tspan className={styles.cls_10} x="23.09" y="94.01"></tspan>
                            <tspan className={styles.cls_46} x="28.96" y="94.01">c</tspan>
                            <tspan className={styles.cls_43} x="48.35" y="94.01">omp</tspan>
                            <tspan className={styles.cls_3} x="133.83" y="94.01">r</tspan>
                            <tspan className={styles.cls_43} x="149.39" y="94.01">om</tspan>
                            <tspan className={styles.cls_30} x="209.69" y="94.01">e</tspan>
                            <tspan className={styles.cls_43} x="232.34" y="94.01">time</tspan>
                            <tspan className={styles.cls_30} x="318.13" y="94.01">n</tspan>
                            <tspan className={styles.cls_27} x="341.04" y="94.01">t</tspan>
                            <tspan className={styles.cls_22} x="355.7" y="94.01">o na</tspan>
                            <tspan className={styles.cls_29} x="0" y="141.01">Unimed </tspan>
                            <tspan className={styles.cls_30} x="156.56" y="141.01">S</tspan>
                            <tspan className={styles.cls_43} x="181.82" y="141.01">ul </tspan>
                            <tspan className={styles.cls_11} x="226.52" y="141.01">C</tspan>
                            <tspan className={styles.cls_43} x="251.64" y="141.01">api</tspan>
                            <tspan className={styles.cls_23} x="312.98" y="141.01">x</tspan>
                            <tspan className={styles.cls_17} x="335.22" y="141.01">a</tspan>
                            <tspan className={styles.cls_22} x="360.12" y="141.01">ba!</tspan>
                        </text>
                    </g>
                    <text className={styles.cls_9} transform="translate(159.41 774.13)">
                        <tspan className={styles.cls_38} x="-25" y="0">{nome}</tspan>
                    </text>
                    <g>
                        <text className={styles.cls_18} transform="translate(360.8 228.8)">
                            <tspan className={`${styles.cls_16} ${UnimedExtraBoldItalic.style}`} x="0" y="0">{anos}</tspan>
                            {/* <tspan className={styles.cls_35} x="95.59" y="0">7</tspan> */}
                        </text>
                        <text className={`${styles.cls_8} ${UnimedBold.style}`} transform="translate(563.53 190.07)">
                            <tspan className={styles.cls_40} x="0" y="0">AN</tspan>
                            <tspan className={styles.cls_32} x="91.69" y="0">O</tspan>
                            <tspan className={styles.cls_41} x="139.06" y="0">S</tspan>
                        </text>
                    </g>
                </g>
            </svg>
        </div>
    )
}