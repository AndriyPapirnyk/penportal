import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PenPortal",
  description: "Best blog platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <ClerkProvider>
        <body className={inter.className}>{children}</body>
      </ClerkProvider>
    </html>
  );
}


// appearance={{
//   layout: {
//     logoImageUrl: '/icons/yoom-logo.svg',
//     socialButtonsVariant: 'iconButton'
//   },
//   variables: {
//     colorText: '#fff',
//     colorPrimary: '#0E78F9',
//     colorBackground: '#1c1f2e',
//     colorInputBackground: '#252a41',
//     colorInputText: '#fff'
//   }
// }}