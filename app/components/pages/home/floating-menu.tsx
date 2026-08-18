"use client";
import { onest, sen } from "@/app/fonts/fonts";
import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

export default function FloatingMenu() {
    const [open, setOpen] = useState(false);
  return (
    <nav aria-label="Site navigation" className={`fixed top-6 left-1/2 z-50 w-[min(95vw,720px)] -translate-x-1/2  md:flex flex-wrap justify-center gap-3 rounded-full border border-white/10 bg-black/20 px-4 py-3 text-sm text-white backdrop-blur-md sm:gap-4 sm:text-base ${sen.className}`}>
      <Link href="/">
        <div className="md:flex hidden cursor-pointer rounded-full px-3 py-1 transition hover:bg-white/10">Home</div>
      </Link>
      <Link href="/about">
        <div className="md:flex hidden cursor-pointer rounded-full px-3 py-1 transition hover:bg-white/10">About</div>
      </Link>
      <Link href="/skills">
        <div className="md:flex hidden cursor-pointer rounded-full px-3 py-1 transition hover:bg-white/10">Skills</div>
      </Link>
      <Link href="/projects">
        <div className="md:flex hidden cursor-pointer rounded-full px-3 py-1 transition hover:bg-white/10">Projects</div>
      </Link>
     
      <Link href="/contact">
        <div className="md:flex hidden cursor-pointer rounded-full px-3 py-1 transition hover:bg-white/10">Connect</div>
      </Link>
      <IoMenu
        onClick={() => setOpen(!open)}
        className="h-7 w-7 md:hidden flex justify-end cursor-pointer text-white"
      />
      {open && (
        <div className="absolute top-16 left-1/2 z-50 w-[min(95vw,720px)] -translate-x-1/2 rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-sm text-white backdrop-blur-md sm:gap-4 sm:text-base">
          <Link href="/">
            <div className="cursor-pointer rounded-full px-3 py-1 transition hover:bg-white/10">Home</div>
          </Link>
          <Link href="/about">
            <div className="cursor-pointer rounded-full px-3 py-1 transition hover:bg-white/10">About</div>
          </Link>
          <Link href="/skills">
            <div className="cursor-pointer rounded-full px-3 py-1 transition hover:bg-white/10">Skills</div>
          </Link>
          <Link href="/projects">
            <div className="cursor-pointer rounded-full px-3 py-1 transition hover:bg-white/10">Projects</div>
          </Link>
          <Link href="/contact">
            <div className="cursor-pointer rounded-full px-3 py-1 transition hover:bg-white/10">Connect</div>
          </Link>
        </div>
      )}
    </nav>
  );
}
