"use client";
import BookNow from "@/components/BookNow";
import Nav from "@/components/Nav";
import useScript from "@/components/useScript";
import SalesPage from "@/pages/funnels/SalesPage";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Nav />
      <SalesPage />
      {/* 
      <BookNow /> */}
    </main>
  );
}
