import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Josefin_Sans, Qwigley} from "next/font/google"
import News_head from "./_components/news_head";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600'], // Choose the weights you need
  variable: '--font-josefin',
  display: 'swap',
});

const qwigley = Qwigley({
  subsets: ["latin"],
  weight: "400", // Qwigley only has 400
});


export const metadata = {
  title: "Faithfully Scripted",
  description: "official site of faithfully scripted: Christian blog platform",
};

export default function RootLayout({ children }) {
  // const [hid, setHid] = useState(true);
  return (
    <html lang="en">
      <body
        className={`${josefin.variable} ${qwigley.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="z-20 fixed inset-0 w-full h-full opacity-20">
                <Image
                  src="/bg.jpg"
                  alt="background"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </div>
        <News_head/>
        {children}
      </body>
    </html>
  );
}
