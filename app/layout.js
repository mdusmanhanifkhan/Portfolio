import { Inter, Montserrat, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});


export const metadata = {
  title: "Usman Hanif",
  description: "Portfolio of Usman Hanif, a passionate Software Engineer specializing in modern web development, building scalable applications, and delivering creative digital solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       className={`${inter.variable} ${montserrat.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
