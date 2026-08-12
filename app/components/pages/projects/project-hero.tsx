import { sen } from "@/app/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import { ProjectData } from "@/data/project-data";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectHero() {
    return (
        <div className="text-center md:mt-15">
            <h1 className={` ${sen.className} text-sm font-bold  flex justify-center text-[#EB8B3F]`}>[  Projects  ]</h1>
            <p className={`text-6xl text-gray-300 ${sen.className} mt-5`}>
                My Works.
            </p>
            <div className="grid gap-8 m-10 sm:grid-cols-2 lg:grid-cols-[2fr_4fr] md:grid-cols-[2fr_4fr] grid-cols-1 justify-around items-center">
                <div className="group relative h-[20rem] overflow-hidden rounded-xl hover:cursor-pointer ">
                    <Image src="/propertyease.png" alt="home" fill quality={100} className="absolute inset-0 object-cover transition duration-500 ease-out group-hover:scale-105 group-hover:blur-sm" />
                    <div className="absolute inset-0 bg-white/50 opacity-0 transition duration-300 group-hover:opacity-100"></div>
                    <div className="absolute z-20 inset-0 flex items-center justify-center flex flex-col opacity-0 transition duration-300 group-hover:opacity-100">
                        <h1 className="text-2xl font-bold text-black mb-3">Propertyease</h1>
                          <h1 className="text-xl  text-black mb-3">Frontend Project</h1>
                            <p className="text-sm  text-black mb-3">Next.js, React.js, Tailwind CSS <br /> Google Maps API,TypeScript</p>
                            
                       <div className="flex gap-4 justify-between items-center">
                         <Link href={"https://propertyease1.vercel.app/"}>
                            <button className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-white hover:text-black cursor-pointer">
                                   <ArrowUpRight />
                            </button>
                         </Link >
                         <Link href={"https://github.com/Amalr12/propertyease.git"}>
                            <button className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-white hover:text-black cursor-pointer">
                               <FaGithub className="text-2xl" />
                            </button>
                         </Link>
                       </div>
                    </div>
                </div>
                <div className="group relative h-[20rem] overflow-hidden rounded-xl">
                   <Image src="/Docpulse.png" alt="home" fill quality={100} className="absolute inset-0 object-cover transition duration-500 ease-out group-hover:scale-105 group-hover:blur-sm" />
                    <div className="absolute inset-0 bg-white/50 opacity-0 transition duration-300 group-hover:opacity-100"></div>
                    <div className="absolute z-20 inset-0 flex items-center justify-center flex flex-col opacity-0 transition duration-300 group-hover:opacity-100">
                        <h1 className="text-2xl font-bold text-black mb-3">DocPulse</h1>
                        <h1 className="text-xl  text-black mb-3">MERN Project</h1>
                            <p className="text-sm  text-black mb-3">MongoDB, Express.js, React.js,Node.js </p>
                       <div className="flex gap-4 justify-between items-center">
                         <Link href={"https://docpulse-frontend.vercel.app/"}>
                            <button className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-white hover:text-black cursor-pointer">
                                   <ArrowUpRight />
                            </button>
                         </Link >
                         <Link href={"https://github.com/username/docpulse"}>
                            <button className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-white hover:text-black cursor-pointer">
                               <FaGithub className="text-2xl" />
                            </button>
                         </Link>
                       </div>
                    </div>
                </div>
            </div>
            <div className={`text-xl text-gray-300 ${sen.className} m-10 grid md:grid-cols-[4fr_2fr] lg:grid-cols-[4fr_2fr] grid-cols-1 gap-4 justify-around items-center`}>
                <div className="group relative h-[20rem] overflow-hidden rounded-xl">
                    <Image src="/furniture.png" alt="home" fill quality={100} className="absolute inset-0 object-cover transition duration-500 ease-out group-hover:scale-105 group-hover:blur-sm" />
                    <div className="absolute inset-0 bg-white/50 opacity-0 transition duration-300 group-hover:opacity-100"></div>
                   <div className="absolute z-20 inset-0 flex items-center justify-center flex flex-col opacity-0 transition duration-300 group-hover:opacity-100">
                        <h1 className="text-2xl font-bold text-black mb-3">Furnicome Furnitures</h1>
                        <h1 className="text-xl  text-black mb-3">Frontend Project</h1>
                            <p className="text-sm  text-black mb-3">Next.js, React.js, Tailwind CSS , TypeScript</p>
                        <div className="flex gap-4 justify-between items-center">
                         <Link href={"furnicome-website-next-js.vercel.app"}>
                            <button className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-white hover:text-black cursor-pointer">
                                   <ArrowUpRight />
                            </button>
                         </Link >
                         <Link href={"https://github.com/Amalr12/furnicome-website-next.js.git"}>
                            <button className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-white hover:text-black cursor-pointer">
                               <FaGithub className="text-2xl" />
                            </button>
                         </Link>
                       </div>
                    </div>
                </div>
                <div className="group relative h-[20rem] overflow-hidden rounded-xl">
                   <Image src="/urban.png" alt="home" fill quality={100} className="absolute inset-0 object-cover transition duration-500 ease-out group-hover:scale-105 group-hover:blur-sm" />
                    <div className="absolute inset-0 bg-white/50 opacity-0 transition duration-300 group-hover:opacity-100"></div>
                    <div className="absolute z-20 inset-0 flex items-center justify-center flex flex-col opacity-0 transition duration-300 group-hover:opacity-100">
                        <h1 className="text-2xl font-bold text-black mb-3">Urban Spices</h1>
                            <h1 className="text-xl  text-black mb-3">Frontend Project</h1>
                            <p className="text-sm  text-black mb-3">Next.js, React.js, Tailwind CSS, TypeScript </p>
                        <div className="flex gap-4 justify-between items-center">
                         <Link href={" https://restaurant-delta-vert.vercel.app"}>
                            <button className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-white hover:text-black cursor-pointer">
                                   <ArrowUpRight />
                            </button>
                         </Link >
                         <Link href={"https://github.com/Amalr12/Urban-Spice.git"}>
                            <button className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-white hover:text-black cursor-pointer">
                               <FaGithub className="text-2xl" />
                            </button>
                         </Link>
                       </div>
                    </div>
                </div>
            </div>
             <div className={`text-xl text-gray-300 ${sen.className} m-10 grid md:grid-cols-[2fr_4fr] lg:grid-cols-[2fr_4fr] grid-cols-1 gap-4 justify-around items-center`}>
                <div className="group relative h-[20rem] overflow-hidden rounded-xl">
                    <Image src="/souls.png" alt="home" fill quality={100} className="absolute inset-0 object-cover transition duration-500 ease-out group-hover:scale-105 group-hover:blur-xs" />
                    <div className="absolute inset-0 bg-white/50 opacity-0 transition duration-300 group-hover:opacity-100"></div>
                   <div className="absolute z-20 inset-0 flex items-center justify-center flex flex-col opacity-0 transition duration-300 group-hover:opacity-100">
                        <h1 className="text-2xl font-bold text-black mb-3">Soul Routes</h1>
                            <h1 className="text-xl  text-black mb-3">Frontend Project</h1>
                            <p className="text-sm  text-black mb-3">HTML ,CSS,JavaScript</p>
                      <div className="flex gap-4 justify-between items-center">
                         <Link href={"https://travel-agency-project-theta.vercel.app/"}>
                            <button className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-white hover:text-black cursor-pointer">
                                   <ArrowUpRight />
                            </button>
                         </Link >
                         <Link href={"https://github.com/Amalr12/travel-agency-project.git"}>
                            <button className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-white hover:text-black cursor-pointer">
                               <FaGithub className="text-2xl" />
                            </button>
                         </Link>
                       </div>
                    </div>
                </div>
                <div className="group relative h-[20rem] overflow-hidden rounded-xl">
                   <Image src="/ijobs.png" alt="home" fill quality={100} className="absolute inset-0 object-cover transition duration-500 ease-out group-hover:scale-105 group-hover:blur-xs" />
                    <div className="absolute inset-0 bg-white/50 opacity-0 transition duration-300 group-hover:opacity-100"></div>
                  <div className="absolute z-20 inset-0 flex items-center justify-center flex flex-col opacity-0 transition duration-300 group-hover:opacity-100">
                        <h1 className="text-2xl font-bold text-black mb-3">iJobs</h1>
                            <h1 className="text-xl  text-black mb-3">Frontend Project</h1>
                            <p className="text-sm  text-black mb-3">Next.js, React.js, Tailwind CSS,TypeScript</p>
                     <div className="flex gap-4 justify-between items-center">
                         <Link href={"https://jobportal-mu-nine.vercel.app/"}>
                            <button className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-white hover:text-black cursor-pointer">
                                   <ArrowUpRight />
                            </button>
                         </Link >
                         <Link href={"https://github.com/Amalr12/iJobs.git"}>
                            <button className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-white hover:text-black cursor-pointer">
                               <FaGithub className="text-2xl" />
                            </button>
                         </Link>
                       </div>
                    </div>
                </div>
            </div>
             <div className={`text-xl text-gray-300 ${sen.className} m-10 grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-4 justify-around items-center`}>
                <div className="group relative h-[20rem] overflow-hidden rounded-xl">
                    <Image src="/empmgnt.png" alt="home" fill quality={100} className="absolute inset-0 object-cover transition duration-500 ease-out group-hover:scale-105 group-hover:blur-xs" />
                    <div className="absolute inset-0 bg-white/50 opacity-0 transition duration-300 group-hover:opacity-100"></div>
                   <div className="absolute z-20 inset-0 flex items-center justify-center flex flex-col opacity-0 transition duration-300 group-hover:opacity-100">
                        <h1 className="text-2xl font-bold text-black mb-3">Employee Management System</h1>
                         <h1 className="text-xl  text-black mb-3">forntend Project</h1>
                        <p className="text-sm  text-black mb-3">HTML,CSS, JavaScript,React.js, Bootstrap</p>
                       <div className="flex gap-4 justify-between items-center">
                         <Link href={"https://employee-frontend-sigma.vercel.app/"}>
                            <button className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-white hover:text-black cursor-pointer">
                                   <ArrowUpRight />
                            </button>
                         </Link >
                         <Link href={"https://github.com/Amalr12/employee-frontend.git"}>
                            <button className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-white hover:text-black cursor-pointer">
                               <FaGithub className="text-2xl" />
                            </button>
                         </Link>
                       </div>
                    </div>
                </div>
                <div className="group relative h-[20rem] overflow-hidden rounded-xl">
                   <Image src="/event.png" alt="home" fill quality={100} className="absolute inset-0 object-cover transition duration-500 ease-out group-hover:scale-105 group-hover:blur-xs" />
                    <div className="absolute inset-0 bg-white/50 opacity-0 transition duration-300 group-hover:opacity-100"></div>
                  <div className="absolute z-20 inset-0 flex items-center justify-center flex flex-col opacity-0 transition duration-300 group-hover:opacity-100">
                        <h1 className="text-2xl font-bold text-black mb-3">Event Scheduler</h1>
                        <h1 className="text-xl  text-black mb-3">MERN Project</h1>
                        <p className="text-sm  text-black mb-3">MongoDB,Node.js,Express.js,HTML,CSS, <br /> JavaScript,React.js, Bootstrap</p>
                       <div className="flex gap-4 justify-between items-center">
                         <Link href={"events-frontend-dusky.vercel.app"}>
                            <button className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-white hover:text-black cursor-pointer">
                                   <ArrowUpRight />
                            </button>
                         </Link >
                         <Link href={"https://github.com/Amalr12/events-frontend.git"}>
                            <button className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-white hover:text-black cursor-pointer">
                               <FaGithub className="text-2xl" />
                            </button>
                         </Link>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
}