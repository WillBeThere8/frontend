import type { Metadata } from "next";
import { Poppins, Figtree } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
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
    <ClerkProvider>
      <html lang="en">
        <body className={`${poppins.className}`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
