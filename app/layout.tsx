import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "100"
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
      <body className={`${poppins.className} ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
