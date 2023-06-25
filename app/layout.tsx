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
          overflowX: "hidden",
          background:
            "radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)",
        }}
      >
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
