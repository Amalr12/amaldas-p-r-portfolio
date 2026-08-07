"use client";
import FloatingMenu from "./floating-menu";
import BackgroundGlow from "./backgroundglow";
import ProfileImage from "./hero-image";
import { onest, sen } from "@/app/fonts/fonts";

const marqueeItems = Array.from({ length: 8 }, () => "AMALDAS PR");

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="marquee-wrapper absolute inset-y-0 left-0 flex items-center">
          <div className="marquee-track flex min-w-[220%] items-center whitespace-nowrap uppercase font-black tracking-[0.35em] text-[clamp(11rem,18vw,16rem)] text-white opacity-15">
            {marqueeItems.map((text, index) => (
              <span key={index} className="mr-28">
                {text}
              </span>
            ))}
            {marqueeItems.map((text, index) => (
              <span key={`dup-${index}`} className="mr-28">
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ProfileImage />
      <BackgroundGlow />
      {/* <FloatingMenu /> */}

      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-slate-400 sm:text-base">
           Creative developer building polished digital experiences.
          </p>
          <p className={` ${onest.className} mx-auto max-w-2xl text-sm leading-7 text-slate-300 sm:text-base`}>
            Transforming ideas into responsive, interactive, and user-focused digital products.
          </p>
        </div>
      </div>

      <div className={`${sen.className} absolute z-30 bottom-10 right-4 text-right text-sm text-slate-300 sm:right-8 sm:text-base`}>
        <div>Based in Kerala, India</div>
        <div className="mt-2">Open to remote & on-site</div>
      </div>
    </section>
  );
}
