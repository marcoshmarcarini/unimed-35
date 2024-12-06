import localFont from "next/font/local"

export const UnimedSans = localFont({
    src: [
        {
            path: '../../app/fonts/UnimedSans/Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../app/fonts/UnimedSans/RegularItalic.otf',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../../app/fonts/UnimedSans/Black.otf',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../../app/fonts/UnimedSans/BlackItalic.otf',
            weight: '900',
            style: 'italic',
        }
    ]
})