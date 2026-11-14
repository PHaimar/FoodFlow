import "./globals.css";

export const metadata = {
  title: "Food Flow",
  description: "Peça seus pratos favoritos em poucos cliques."
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
