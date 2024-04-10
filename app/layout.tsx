import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
// import { poppins } from "./ui/font";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: {
    template: "%s | Will Be There",
    default: "Will Be There",
  },
  description:
    "Based platform that empowers users to register, host events, seamlessly share event links with friends, users, or communities, and effortlessly track attendance status.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
