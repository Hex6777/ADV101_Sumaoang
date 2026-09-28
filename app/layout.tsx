import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Aguinaldo Lawrence | Digital Portfolio",
  description: "Portfolio of Aguinaldo Lawrence Sumaoang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}