// src/app/artikel/[id]/page.tsx

import { notFound } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ReadArtikel from "@/app/components/ReadArtikel";

type Artikel = {
  id: string;
  judul: string;
  content: string;
  imageUrl?: string;
  author: string;
  createdAt: string;
  deskripsiSingkat?: string;
};

async function getArtikel(id: string): Promise<Artikel | null> {
  try {
    const baseUrl =
      process.env.NODE_ENV === "production"
        ? "https://your-domain.com"
        : "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/artikel?id=${id}`, {
      cache: "no-store",
    });

    if (!res.ok) return null;

    const data = await res.json();
    if (data.error || !data.id) return null;

    return data as Artikel;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

export default async function ArtikelDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const artikel = await getArtikel(id);

  if (!artikel) return notFound();

  return (
    <div className="min-h-screen flex flex-col font-fredoka bg-cover bg-no-repeat">
      <Navbar />
      <ReadArtikel artikel={artikel} />
      <Footer />
    </div>
  );
}
