// src/app/layout.tsx
import type { Metadata } from "next"
import "./globals.css"
import { unimedSansRegular } from "@/components/fonts/page" // Importe do arquivo novo!

export const metadata: Metadata = {
  title: "Unimed Sul Capixaba",
  description: "Hotsite criado para os colaboradores expressarem todo o seu carinho para a Unimed Sul Capuxaba.",
  authors: [{ name: "Marcos Henrique Marcarini Junior" }], // Ah, vi seu nome aqui nos metadados, ficou chique!
}

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