import type { Metadata } from "next";
import "./globals.css";

import { UnimedSans } from "@/components/Fonts/page";


export const metadata: Metadata = {
  title: "Unimed Sul Capuxaba",
  description: "Hotsite criado para os colaboradores expressarem todo o seu carinho para a Unimed Sul Capuxaba.",
  authors: [{ name: "Marcos Henrique Marcarini Junior" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${UnimedSans.className}  antialiased`}
      >
      {children}
      </body>
    </html>
  );
}
