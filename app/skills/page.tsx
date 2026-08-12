import FloatingMenu from "../components/pages/home/floating-menu";
import SkillHero from "../components/pages/skills/skill-hero";
import SkillSet from "../components/pages/skills/skill-set";

export default function Page (){
    return (
        <div className=" md:mt-15">
            <FloatingMenu/>
            <SkillHero/>
            <SkillSet/>
        </div>
    );
}