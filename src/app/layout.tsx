import { Providers } from "./providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce Store | Catálogo",
  description: "Explora nuestros productos exclusivos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}