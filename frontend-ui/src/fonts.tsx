import { Archivo_Black, Karla, Markazi_Text, Tektur} from "next/font/google";

export const rubik80s = Archivo_Black({
  weight: "400", // only one weight available
  subsets: ["latin"],
  display: "swap",
});

export const karla = Karla({
  weight: ["400", "700"], // normal and bold
  subsets: ["latin"],
  display: "swap",
});




export const tektur = Tektur({
  weight: ["400", "700"], // load 400 & 700
  subsets: ["latin"],
  variable: "--font-tektur",
});

export const markazi = Markazi_Text({
  weight: ["400", "700"], // load 400 & 700
  subsets: ["latin"],
  variable: "--font-markazi-text",
});


