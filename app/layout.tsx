import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";  // ✅ add this

export const metadata = {
  title: "StudyWeb",
  description: "Smart Online Test Platform",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <Navbar />   {/* ✅ add this */}
        {children}
      </body>
    </html>
  );
}