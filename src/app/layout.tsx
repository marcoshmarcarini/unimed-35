import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"


const metadata: Metadata = {
  title: "Unimed Sul Capixaba",
  description: "Hotsite criado para os colaboradores expressarem todo o seu carinho para a Unimed Sul Capuxaba.",
  authors: [{ name: "Marcos Henrique Marcarini Junior" }],
}

export const unimedSansRegular = localFont({
  src: '../../public/fonts/UnimedSans/UnimedSans-Regular.otf',
  variable: '--font-unimed-sans-regular',
})

export const unimedSansLight = localFont({
  src: '../../public/fonts/UnimedSans/UnimedSans-Light.otf',
  variable: '--font-unimed-sans-light',
}) 

export const unimedSansBold = localFont({
  src: '../../public/fonts/UnimedSans/UnimedSans-Bold.otf',
  variable: '--font-unimed-sans-bold',
})

export const unimedSansSemiBoldItalic = localFont({
  src: '../../public/fonts/UnimedSans/UnimedSans-SemiBoldItalic.otf',
  variable: '--font-unimed-sans-semi-bold-italic',
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={unimedSansRegular.variable}>
      {children}
      </body>
    </html>
  )
}
