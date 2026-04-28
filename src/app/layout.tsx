import type { Metadata } from "next"
import "./globals.css"


export const metadata: Metadata = {
  title: "Unimed Sul Capixaba",
  description: "Hotsite criado para os colaboradores expressarem todo o seu carinho para a Unimed Sul Capuxaba.",
  authors: [{ name: "Marcos Henrique Marcarini Junior" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
      {children}
      </body>
    </html>
  )
}
