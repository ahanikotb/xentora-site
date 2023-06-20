import { useEffect } from "react";
import "./globals.css";

export const metadata = {
  title: "XENTORA - Agency Growth Partners",
  description: "Agency Growth Partners",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body
        style={{
          background: "black",
        }}
      >
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
