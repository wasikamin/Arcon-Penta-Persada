import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import Carousel from "@/components/carousel/Carousel";

export default function Home() {
  const carouselItem: CarouselItems[] = [
    {
      url: "https://arconpentapersada.com/wp-content/uploads/2022/08/OM-Services.png",
      title: "OM Services",
    },
    {
      url: "https://arconpentapersada.com/wp-content/uploads/2022/08/OM-Services.png",
      title: "OM Services",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Head>
        <title>Arcon Penta Persada</title>
      </Head>
      <Navbar />
      <section className="flex flex-col items-center justify-center gap-7">
        <div className="w-full">
          <Carousel items={carouselItem} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold text-center mt-8">
            Next.js + Tailwind CSS
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-gray-500">
            This is a template for Next.js + Tailwind CSS.
          </p>
          <a href="" />
        </div>
      </section>
    </main>
  );
}
