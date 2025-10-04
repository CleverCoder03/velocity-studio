import { Inter, Mona_Sans } from "next/font/google";
import "./globals.css";
import LenisScrollProvider from "./components/LenisScrollProvider";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const monaSans = Mona_Sans({
  variable: "--font-mona-Sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Velocity Technology",
  description: "A digital agency working for leaders & founders",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${monaSans.variable} antialiased`}
      >
        <LenisScrollProvider>{children}</LenisScrollProvider>
      </body>
    </html>
  );
}
