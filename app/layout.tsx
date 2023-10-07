import { useEffect } from "react";
import "./globals.css";
import Trackers from "@/components/Trackers";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "XENTORA - Real Estate Growth Partners",
  description: "Real Estate Growth Partners",
};

export function TailwindIndicator() {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed bottom-1 left-1 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white">
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  );
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />

        <script type="text/javascript">var _suid=39561;</script>
        <script
          async
          type="text/javascript"
          src="https://d.plerdy.com/public/js/click/plerdy_ab.js?v=edbf1ff"
        ></script>
      </head>
      <body
        style={{
          overflowX: "hidden",

          // background:
          //   "radial-gradient(circle at 24.1% 68.8%, rgba(50, 50, 70,1) 0%, rgba(0, 2.5, 13,0.85) 99.4%)",
        }}
      >
        {/* <style jsx global>
          {`
            body {
              background: radial-gradient(
                circle at 24.1% 68.8%,
                rgba(50, 50, 70, 1) 0%,
                rgba(0, 2.5, 13, 0.85) 99.4%
              );
            }
          `}
        </style> */}

        <div id="root">{children}</div>
        <Trackers />
        <Analytics />

        <TailwindIndicator />
      </body>
    </html>
  );
}
