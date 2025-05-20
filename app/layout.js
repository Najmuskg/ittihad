import { Public_Sans } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "AL Ittihad",
  description:
    "Official website of AL Ittihad Football Club – get the latest news, match updates, player profiles, fixtures, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${publicSans.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
