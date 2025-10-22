import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Atum’s Abyss",
  description:
    "Next-level survival horror in the void. Can you take back Atum and save the humanity? Stay turned for secret airdrop only for those who is ready to fight",
};

const atypDisplay = localFont({
  src: [
    {
      path: "../fonts/atyp/AtypDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/atyp/AtypDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/atyp/AtypDisplay-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/atyp/AtypDisplay-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/atyp/AtypDisplay-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/atyp/AtypDisplay-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/atyp/AtypDisplay-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/atyp/AtypDisplay-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../fonts/atyp/AtypDisplay-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/atyp/AtypDisplay-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../fonts/atyp/AtypDisplay-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/atyp/AtypDisplay-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
  ],
});

export const rimma = localFont({
  src: [
    {
      path: "../fonts/rimma/rimma-sans-bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--rimma",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${rimma.variable} ${atypDisplay.className}`}
      >
        {children}
      </body>
    </html>
  );
}
