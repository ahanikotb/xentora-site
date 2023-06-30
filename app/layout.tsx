import { useEffect } from "react";
import "./globals.css";
import Trackers from "@/components/Trackers";

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
            "radial-gradient(circle at 24.1% 68.8%, rgba(50, 50, 70,1) 0%, rgba(0, 2.5, 13,0.85) 99.4%)",
        }}
      >
        <div id="root">{children}</div>
        <Trackers />
      </body>
    </html>
  );
}
