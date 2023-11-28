"use client";

import "./globals.css";
import Header from "./conponents/header/Header";
import { SessionProvider } from "next-auth/react";
import Footer from "./conponents/footer/Footer";

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <html lang="en">
        <body>
          <div className="navbar">
            <Header />
          </div>
          {children}
          <Footer />
        </body>
      </html>
    </SessionProvider>
  );
}
