import AboutMe from "../components/pages/about/about-me";
import AboutHero from "../components/pages/about/about-section-hero";
import Experience from "../components/pages/about/experinec";
import FloatingMenu from "../components/pages/home/floating-menu";

export default function About (){
    return (
        <div className="flex min-h-screen flex-col bg-black px-4 py-4 text-white sm:px-6 lg:px-10">
            <AboutHero />
            <AboutMe />
            <Experience />
            <FloatingMenu />
        </div>
    );
}