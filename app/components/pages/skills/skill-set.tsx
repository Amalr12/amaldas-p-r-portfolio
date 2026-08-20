"use client"
import  { useEffect } from 'react'
import { FaBootstrap, FaCss3Alt, FaGitAlt, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from 'react-icons/ri';
import { IoLogoAngular, IoLogoJavascript } from 'react-icons/io';
import { SiExpress, SiMongodb } from 'react-icons/si';
import { RiNextjsFill } from "react-icons/ri";
import { FaWebflow } from "react-icons/fa6";
import AOS from 'aos';
import { sen } from '@/app/fonts/fonts';
import { GrMysql } from 'react-icons/gr';
import { FaFigma } from "react-icons/fa";

export default function SkillSet(){

        useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);
    return(
         <section className={`max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-20 ${sen.className} `} data-aos="fade-up">

        <div id='skillcard' className="group shadow-2xl p-5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]" >
          <h2 className="text-3xl font-bold text-[#EB8B3F] " style={{ WebkitTextStroke: "3px black" }}>01</h2>
          <div className="flex items-center justify-between mt-4">
            <h3 className="text-3xl font-bold text-white">HTML</h3>
            <div className="md:w-17 md:h-17 rounded-full bg-[#EB8B3F] flex items-center justify-center">
              <span className="text-black text-6xl " ><a href=""><FaHtml5 /></a></span>
            </div>
          </div>
          <ul className='mt-4 text-gray-500 text-lg'>
            <li>Proficient in writing clean, semantic HTML for modern websites.</li>
            <li>Skilled at structuring web pages using standard HTML elements.</li>
            <li>Strong understanding of forms, tables, and semantic tags.</li>
          </ul>
          <div className="w-full h-px bg-gray-800 mt-6"></div>
        </div>

        <div className="group shadow-2xl p-5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
  <h2 className="text-3xl font-bold text-[#EB8B3F]" style={{ WebkitTextStroke: "3px black" }}>02</h2>

  <div className="flex items-center justify-between mt-4 ">
    <h3 className="text-3xl font-bold text-white ">CSS</h3>

    <div className="md:w-17 md:h-17 rounded-full bg-[#EB8B3F] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
      <span className="text-black text-6xl"><a href=""><FaCss3Alt /></a></span>
    </div>
  </div>

  <ul className='mt-4 text-gray-500 text-lg'>
    <li>Skilled in creating responsive and visually appealing web designs using CSS.</li>
    <li>Expert in writing reusable, scalable, and organized CSS code</li>
  </ul>

  <div className="w-full h-px bg-gray-800 mt-6"></div>
</div>

        <div className="group shadow-2xl p-5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          <h2 className="text-3xl font-bold text-[#EB8B3F]" style={{ WebkitTextStroke: "3px black" }}>03</h2>
          <div className="flex items-center justify-between mt-4">
            <h3 className="text-3xl font-bold text-white">BOOTSTRAP</h3>
            <div className="md:w-17 md:h-17 rounded-full bg-[#EB8B3F] flex items-center justify-center">
              <span className="text-black text-6xl"><a href=""><FaBootstrap /></a></span>
            </div>
          </div>
          <ul className='mt-3 text-gray-500 text-lg'>
            <li>Skilled in building responsive, mobile-first layouts using Bootstrap.</li>
            <li>Proficient in customizing Bootstrap components for modern UI design.</li>
          </ul>
          <div className="w-full h-px bg-gray-800 mt-6"></div>
        </div>

        <div className="group shadow-2xl p-5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          <h2 className="text-3xl font-bold text-[#EB8B3F]" style={{ WebkitTextStroke: "3px black" }}>04</h2>
          <div className="flex items-center justify-between mt-4">
            <h3 className="text-3xl font-bold text-white">TAILWIND CSS</h3>
            <div className="md:w-17 md:h-17 rounded-full bg-[#EB8B3F] flex items-center justify-center">
              <span className="text-black text-6xl"><a href=""><RiTailwindCssFill /></a></span>
            </div>
          </div>
          <ul className='mt-3 text-gray-500 text-lg'>
            <li>Skilled in building fast, responsive interfaces using Tailwind’s utility-first approach.</li>
            <li>Experienced in creating modern UI layouts with  Flexbox & Grid.</li>
          </ul>
          <div className="w-full h-px bg-gray-800 mt-6"></div>
        </div>

        <div className="group shadow-2xl p-5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          <h2 className="text-3xl font-bold text-[#EB8B3F]" style={{ WebkitTextStroke: "3px black" }}>05</h2>
          <div className="flex items-center justify-between mt-4">
            <h3 className="text-3xl font-bold text-white">JavaScript</h3>
            <div className="md:w-17 md:h-17 rounded-full bg-[#EB8B3F] flex items-center justify-center">
              <span className="text-black text-6xl"><a href=""><IoLogoJavascript /></a></span>
            </div>
          </div>
          <ul className='mt-3 text-gray-500 text-lg'>
            <li>Strong understanding of core JavaScript concepts like functions, arrays, objects, and async programming.
              Capable of creating responsive, user-friendly web interactions and logic.
            </li>

          </ul>
          <div className="w-full h-px bg-gray-800 mt-6"></div>
        </div>
        <div className="group shadow-2xl p-5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          <h2 className="text-3xl font-bold text-[#EB8B3F]" style={{ WebkitTextStroke: "3px black" }}>06</h2>
          <div className="flex items-center justify-between mt-4">
            <h3 className="text-3xl font-bold text-white">React.Js</h3>
            <div className="md:w-17 md:h-17 rounded-full bg-[#EB8B3F] flex items-center justify-center">
              <span className="text-black text-6xl"><a href=""><FaReact /></a></span>
            </div>
          </div>
          <ul className='mt-3 text-gray-500 text-lg'>
            <li>Proficient in building dynamic, component-based UIs with React.js.

            </li>
            <li>Experienced in state management, hooks, and building responsive SPA applications.</li>
          </ul>
          <div className="w-full h-px bg-gray-800 mt-6"></div>
        </div>
        <div className="group shadow-xl p-5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"  >
          <h2 className="text-3xl font-bold text-[#EB8B3F]" style={{ WebkitTextStroke: "3px black" }}>07</h2>
          <div className="flex items-center justify-between mt-4">
            <h3 className="text-3xl font-bold text-white">MongoDB</h3>
            <div className="md:w-17 md:h-17 rounded-full bg-[#EB8B3F] flex items-center justify-center">
              <span className="text-black text-6xl"><a href=""><SiMongodb /></a></span>
            </div>
          </div>
          <ul className='mt-3 text-gray-500 text-lg'>
            <li>Skilled in designing and managing NoSQL databases using MongoDB.

            </li>
            <li>Experience in creating efficient schemas and handling large datasets.</li>
          </ul>
          <div className="w-full h-px bg-gray-800 mt-6"></div>
        </div>
        <div className="group shadow-2xl p-5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          <h2 className="text-3xl font-bold text-[#EB8B3F]" style={{ WebkitTextStroke: "3px black" }}>08</h2>
          <div className="flex items-center justify-between mt-4">
            <h3 className="text-3xl font-bold text-white">Express.js</h3>
            <div className="md:w-17 md:h-17 rounded-full bg-[#EB8B3F] flex items-center justify-center">
              <span className="text-black text-6xl"><a href=""><SiExpress /></a></span>
            </div>
          </div>
          <ul className='mt-3 text-gray-500 text-lg'>
            <li>Experienced in building RESTful APIs and backend services ,
              Strong understanding of middleware, routing, and server-side logic.

            </li>
            <li></li>
          </ul>
          <div className="w-full h-px bg-gray-800 mt-6"></div>
        </div>
        <div className="group shadow-2xl p-5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          <h2 className="text-3xl font-bold text-[#EB8B3F]" style={{ WebkitTextStroke: "3px black" }}>09</h2>
          <div className="flex items-center justify-between mt-4">
            <h3 className="text-3xl font-bold text-white">Angular</h3>
            <div className="md:w-17 md:h-17 rounded-full bg-[#EB8B3F] flex items-center justify-center">
              <span className="text-black text-6xl"><a href=""><IoLogoAngular /></a></span>
            </div>
          </div>
          <ul className='mt-3 text-gray-500 text-lg'>
            <li>Skilled in developing structured, scalable web apps using Angular framework.

            </li>
            <li>Strong understanding of components, services, and two-way data binding.</li>
          </ul>
          <div className="w-full h-px bg-gray-800 mt-6"></div>
        </div>
        <div className="group shadow-2xl p-5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          <h2 className="text-3xl font-bold text-[#EB8B3F]" style={{ WebkitTextStroke: "3px black" }}>10</h2>
          <div className="flex items-center justify-between mt-4">
            <h3 className="text-3xl font-bold text-white">Node.js</h3>
            <div className="md:w-17 md:h-17 rounded-full bg-[#EB8B3F] flex items-center justify-center">
              <span className="text-black text-6xl"><a href=""><FaNode /></a></span>
            </div>
          </div>
          <ul className='mt-3 text-gray-500 text-lg'>
            <li>Skilled in building fast, scalable server-side applications using Node.js.

            </li>
            <li>Experience with asynchronous programming and REST API development.</li>
          </ul>
          <div className="w-full h-px bg-gray-800 mt-6"></div>
        </div>
        <div className="group shadow-2xl p-5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          <h2 className="text-3xl font-bold text-[#EB8B3F]" style={{ WebkitTextStroke: "3px black" }}>11</h2>
          <div className="flex items-center justify-between mt-4">
            <h3 className="text-3xl font-bold text-white">Git</h3>
            <div className="md:w-17 md:h-17 rounded-full bg-[#EB8B3F] flex items-center justify-center">
              <span className="text-black text-6xl"><a href=""><FaGitAlt /></a></span>
            </div>
          </div>
          <ul className='mt-3 text-gray-500 text-lg'>
            <li>Proficient in using Git for version control, branching, and collaboration.

            </li>
            <li>Experienced in managing repositories and maintaining clean commit history.</li>
          </ul>
          <div className="w-full h-px bg-gray-800 mt-6"></div>
        </div>
        <div className="group shadow-2xl p-5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          <h2 className="text-3xl font-bold text-[#EB8B3F]" style={{ WebkitTextStroke: "3px black" }}>12</h2>
          <div className="flex items-center justify-between mt-4">
            <h3 className="text-3xl font-bold text-white">Next.js</h3>
            <div className="md:w-17 md:h-17 rounded-full bg-[#EB8B3F] flex items-center justify-center">
              <span className="text-black text-6xl"><a href=""><RiNextjsFill /></a></span>
            </div>
          </div>
          <ul className='mt-3 text-gray-500 text-lg'>
            <li>Proficient in using Next.js for building server-side rendered and statically generated applications.

            </li>
            <li>Skilled in Next.js for developing modern, SEO-friendly, and high-performance web applications.</li>
          </ul>
          <div className="w-full h-px bg-gray-800 mt-6"></div>
        </div>
        <div className="group shadow-2xl p-5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          <h2 className="text-3xl font-bold text-[#EB8B3F]" style={{ WebkitTextStroke: "3px black" }}>13</h2>
          <div className="flex items-center justify-between mt-4">
            <h3 className="text-3xl font-bold text-white">MySQL</h3>
            <div className="md:w-17 md:h-17 rounded-full bg-[#EB8B3F] flex items-center justify-center">
              <span className="text-black text-6xl"><a href=""><GrMysql /></a></span>
            </div>
          </div>
          <ul className='mt-3 text-gray-500 text-lg'>
            <li>Proficient in using MySQL for relational database management

            </li>
            <li>writing SQL queries, and handling structured application data.</li>
          </ul>
          <div className="w-full h-px bg-gray-800 mt-6"></div>
        </div>
        <div className="group shadow-2xl p-5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          <h2 className="text-3xl font-bold text-[#EB8B3F]" style={{ WebkitTextStroke: "3px black" }}>14</h2>
          <div className="flex items-center justify-between mt-4">
            <h3 className="text-3xl font-bold text-white">Webflow</h3>
            <div className="md:w-17 md:h-17 rounded-full bg-[#EB8B3F] flex items-center justify-center">
              <span className="text-black text-6xl"><a href=""><FaWebflow /></a></span>
            </div>
          </div>
          <ul className='mt-3 text-gray-500 text-lg'>
            <li>Skilled in using Webflow to create responsive, visually engaging websites with modern layouts and interactive components.

            </li>
            <li>Experienced in using Webflow to develop responsive websites, customize layouts, and implement interactive web components.</li>
          </ul>
          <div className="w-full h-px bg-gray-800 mt-6"></div>
        </div>
          <div className="group shadow-2xl p-5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          <h2 className="text-3xl font-bold text-[#EB8B3F]" style={{ WebkitTextStroke: "3px black" }}>14</h2>
          <div className="flex items-center justify-between mt-4">
            <h3 className="text-3xl font-bold text-white">figma</h3>
            <div className="md:w-17 md:h-17 rounded-full bg-[#EB8B3F] flex items-center justify-center">
              <span className="text-black text-6xl"><a href=""><FaFigma /></a></span>
            </div>
          </div>
          <ul className='mt-3 text-gray-500 text-lg'>
            <li>Proficient in using Figma for wireframing, prototyping, UI/UX design, design systems, and creating responsive web application interfaces.

            </li>
            <li>Experienced in using Figma to create wireframes, prototypes, UI designs, and design systems for responsive web applications.</li>
          </ul>
          <div className="w-full h-px bg-gray-800 mt-6"></div>
        </div>

      </section>
    );
}