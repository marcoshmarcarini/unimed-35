import localFont from "next/font/local"

export const UnimedSans = localFont({
    src: [
        {
            path: '../../app/fonts/UnimedSans/Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../app/fonts/UnimedSans/RegularItalic.woff2',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../../app/fonts/UnimedSans/Black.woff2',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../../app/fonts/UnimedSans/BlackItalic.woff2',
            weight: '900',
            style: 'italic',
        }
    ]
})