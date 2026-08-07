import Image from "next/image";
import Hero from "./components/pages/home/hero";
import FloatingMenu from "./components/pages/home/floating-menu";

export default function Home() {
  return (
    <section className="relative flex-1 bg-black overflow-hidden text-white">

        

        <Hero />
        <FloatingMenu />

      </section>
  );
}
