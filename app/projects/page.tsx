import FloatingMenu from "../components/pages/home/floating-menu";
import ProjectHero from "../components/pages/projects/project-hero";

export default function Page(){
    return(
        <div className=" md:mt-15">
            <FloatingMenu/>
            <ProjectHero/>
        </div>
    );
}
    