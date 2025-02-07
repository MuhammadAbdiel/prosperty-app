import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import FavoriteProvider from "@/context/FavoriteProvider";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="mytheme">
      <body className={plusJakartaSans.className}>
        <NextTopLoader />
        <Toaster />
        <FavoriteProvider>{children}</FavoriteProvider>
      </body>
    </html>
  );
}
