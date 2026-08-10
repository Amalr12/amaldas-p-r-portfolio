import { dancingScript, onest, sen } from "@/app/fonts/fonts";

export default function AboutHero() {
    return (
        <div className="grid gap-10 px-4 py-8 mt-10 mb-10 md:grid-cols-2 md:px-10 mt-10" data-aos="fade-up" data-aos-duration="900">
            <div className="flex flex-col gap-4 space-y-5">
                <h1 className={`text-sm text-[#EB8B3F] font-bold mt-5 mb-5 ${onest.className}`} data-aos="fade-up" data-aos-delay="50">
                    [ About ]
                </h1>
                <h1 className={`text-4xl md:text-4xl font-semibold text-white mb-5 ${dancingScript.className} handwritten`} data-aos="fade-up" data-aos-delay="100">
                    Amaldas P R
                </h1>
                <div>
                    <h1 className={`text-4xl font-bold text-gray-400 sm:text-5xl md:text-6xl ${onest.className}`} data-aos="fade-up" data-aos-delay="150">
                        Full Stack Developer
                    </h1>
                    <p className={`mt-4 text-base text-justify text-gray-400 md:text-lg ${onest.className}`} data-aos="fade-up" data-aos-delay="250">
                        I transform ideas into modern digital experiences through clean code, responsive design, and thoughtful interactions. Passionate about crafting intuitive user interfaces, I build scalable web applications using React.js, Next.js, TypeScript, Tailwind CSS, and modern development tools, with a focus on performance, accessibility, and exceptional user experience.
                    </p>
                </div>
            </div>
            <div className="hidden md:block" />
        </div>
    );
}
