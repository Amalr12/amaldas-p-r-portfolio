import { sen } from "@/app/fonts/fonts";

export default function SkillHero() {
  return (
    <section className="text-center mt-20 md:mt-15">
          <h1 className={` ${sen.className} text-sm font-bold  flex justify-center text-[#EB8B3F]`}>[  Skills  ]</h1>
                    <p className={`md:text-6xl text-3xl text-gray-300  mt-5`}>
                        My Skills.
                    </p>
                     <p className={`flex justify-center text-justify m-5 md:m-10 text-center text-gray-400 mt-5 text-lg ${sen.className}`}>
              I have a strong foundation in web development and a passion for creating
              innovative solutions. My skills include proficiency in front-end and back-end
                technologies, as well as experience with various frameworks and tools. I am
                constantly learning and staying up-to-date with the latest industry trends to
                deliver high-quality, user-friendly applications. 
            </p>
    
      <div>
        
      </div>
    </section>
  );
}