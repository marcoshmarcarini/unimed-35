import localFont from "next/font/local"

export const UnimedSans = localFont({
    src: [
        {
            path: '../../app/fonts/UnimedSans2020/UNIMEDSANS-2020-Regular.OTF',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../app/fonts/UnimedSans2020/UNIMEDSANS2020-RGIT.OTF',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../../app/fonts/UnimedSans2020/UNIMEDSANS2020-BLK.OTF',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../../app/fonts/UnimedSans2020/UNIMEDSANS2020-BLKIT.OTF',
            weight: '900',
            style: 'italic',
        },
        {
            path: '../../app/fonts/UnimedSans2020/UNIMEDSANS2020-BD.OTF',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../app/fonts/UnimedSans2020/UNIMEDSANS2020-BDIT.OTF',
            weight: '700',
            style: 'italic',
        },
        {
            path: '../../app/fonts/UnimedSans2020/UNIMEDSANS-2020-EXTRABOLD.OTF',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../../app/fonts/UnimedSans2020/UNIMEDSANS2020-XDIT.OTF',
            weight: '800',
            style: 'italic',
        },
        {
            path: '../../app/fonts/UnimedSans2020/UNIMEDSANS2020-BK.OTF',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../app/fonts/UnimedSans2020/UNIMEDSANS2020-BKIT.OTF',
            weight: '500',
            style: 'italic',
        },
    ]
})

export const UnimedExtraBoldItalic = localFont({
    src: [
        {
            path: '../../app/fonts/UnimedSans2020/UNIMEDSANS2020-XDIT.OTF',
            weight: '800',
            style: 'italic',
        },
    ]
})

export const UnimedRegular = localFont({
    src: [
        {
            path: '../../app/fonts/UnimedSans2020/UNIMEDSANS-2020-Regular.OTF',
            weight: '400',
            style: 'normal',
        },
    ]
})

export const UnimedBlackItalic = localFont({
    src: [
        {
            path: '../../app/fonts/UnimedSans2020/UNIMEDSANS2020-BLKIT.OTF',
            weight: '900',
            style: 'italic',
        },
    ]
})

export const UnimedBold = localFont({
    src: [
        {
            path: '../../app/fonts/UnimedSans2020/UNIMEDSANS2020-BD.OTF',
            weight: '700',
            style: 'normal',
        },
    ]
})