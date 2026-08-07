import { onest, sen } from "@/app/fonts/fonts";
import Link from "next/link";

export default function FloatingMenu() {
  return (
    <nav aria-label="Site navigation" className={`fixed top-6 left-1/2 z-50 w-[min(95vw,720px)] -translate-x-1/2 flex flex-wrap justify-center gap-3 rounded-full border border-white/10 bg-black/20 px-4 py-3 text-sm text-white backdrop-blur-md sm:gap-4 sm:text-base ${sen.className}`}>
      <Link href="/">
        <div className="cursor-pointer rounded-full px-3 py-1 transition hover:bg-white/10">Home</div>
      </Link>
      <Link href="/about">
        <div className="cursor-pointer rounded-full px-3 py-1 transition hover:bg-white/10">About</div>
      </Link>
      <Link href="/projects">
        <div className="cursor-pointer rounded-full px-3 py-1 transition hover:bg-white/10">Projects</div>
      </Link>
      <Link href="/certifications">
        <div className="cursor-pointer rounded-full px-3 py-1 transition hover:bg-white/10">Certifications</div>
      </Link>
      <Link href="/contact">
        <div className="cursor-pointer rounded-full px-3 py-1 transition hover:bg-white/10">Connect</div>
      </Link>
    </nav>
  );
}
