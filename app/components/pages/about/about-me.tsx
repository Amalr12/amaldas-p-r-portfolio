import { onest } from "@/app/fonts/fonts";
import Image from "next/image";


export default function AboutMe() {
    return (
        <div className="space-y-10 px-4 py-8 sm:px-6 lg:px-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div className="grid gap-8 md:grid-cols-[2fr_4fr] md:items-center" data-aos="fade-up" data-aos-delay="100">
                <div className="overflow-hidden rounded-3xl">
                    <Image
                        src="/hero2.jpeg"
                        alt="Surendar Selvaraj"
                        width={720}
                        height={720}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className={`flex flex-col justify-center p-5 text-gray-400 ${onest.className}`}>
                    <h1 className="text-2xl text-white font-bold mb-4 md:text-3xl" data-aos="fade-up" data-aos-delay="200">
                        Who am I?
                    </h1>
                    <p className="text-base text-justify leading-relaxed md:text-lg" data-aos="fade-up" data-aos-delay="300">
                        I'm Amaldas P R, a Frontend Developer based in Kerala, India, passionate about building modern, responsive, and user-focused web applications. I specialize in creating clean interfaces, smooth interactions, and scalable frontend architectures using React.js, Next.js, TypeScript, and Tailwind CSS.

                        My work focuses on transforming ideas into intuitive digital experiences through thoughtful design, reusable components, and performance-driven development. From portfolio websites and business landing pages to real estate platforms, healthcare applications, and job portals, I enjoy creating products that are both visually engaging and technically reliable.

                        I work closely with designers, developers, and stakeholders to ensure every interface is responsive, accessible, and production-ready. I'm continuously exploring modern frontend technologies, animation libraries like GSAP and Framer Motion, and best practices that help create fast, polished, and engaging user experiences.
                    </p>
                    <h1 className="text-2xl text-white font-bold mb-4 mt-6 md:text-3xl" data-aos="fade-up" data-aos-delay="350">
                        What I do?
                    </h1>
                    <ul className="list-disc space-y-3 text-base text-gray-400 md:text-lg">
                        <li data-aos="fade-up" data-aos-delay="400">
                            <span className="font-bold">Frontend Development:</span> Building responsive, accessible, and high-performance web applications using React.js, Next.js, TypeScript, and Tailwind CSS.
                        </li>
                        <li data-aos="fade-up" data-aos-delay="450">
                            <span className="font-bold">Modern UI Engineering:</span> Creating reusable component libraries, responsive layouts, smooth animations, and intuitive user experiences with GSAP, Framer Motion, and modern CSS.
                        </li>
                        <li data-aos="fade-up" data-aos-delay="500">
                            <span className="font-bold">Full-Stack Development:</span> Developing complete web applications by integrating REST APIs, authentication, databases, and backend services using Node.js, Express.js, and MongoDB.
                        </li>
                        <li data-aos="fade-up" data-aos-delay="550">
                            <span className="font-bold">Performance & optimization:</span> Improving page speed, SEO, code maintainability, responsive design, and cross-browser compatibility for production-ready applications.
                        </li>
                    </ul>
                    <div className="flex flex-col items-center justify-center gap-4 px-2 py-6 text-base sm:flex-row sm:flex-wrap sm:px-0 sm:text-lg">
                        <button className="w-full rounded-xl border border-transparent bg-gray-500 px-6 py-3 text-black transition hover:border-gray-400 hover:bg-black hover:text-gray-400 sm:w-auto">
                            View My Works
                        </button>
                        <button className="w-full rounded-xl border border-transparent bg-gray-500 px-6 py-3 text-black transition hover:border-gray-400 hover:bg-black hover:text-gray-400 sm:w-auto">
                            Get In Touch
                        </button>
                        <button className="w-full rounded-xl border border-transparent bg-gray-500 px-6 py-3 text-black transition hover:border-gray-400 hover:bg-black hover:text-gray-400 sm:w-auto">
                            Resume
                        </button>
                    </div>
                </div>


            </div>

            

        </div>
    );
}