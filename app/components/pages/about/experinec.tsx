import { onest } from '@/app/fonts/fonts';
import { BriefcaseBusiness } from 'lucide-react';
export default function Experience() {
  return (
    <div className="flex flex-col gap-4">
        <div>
                <h1 className={`text-2xl font-bold mb-4 md:text-3xl ${onest.className}`}  data-aos="fade-up" data-aos-delay="200">Experience</h1>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-3  items-center p-10 rounded-2xl bg-gray-900/20 mb-5" data-aos="fade-up" data-aos-delay="250">
                    <div className="flex justify-center">
                        <BriefcaseBusiness className='text-[#EB8B3F]'/>
                    </div>
                    <div className="flex flex-col ps-5">
                        <h1 className={`text-lg  text-[#EB8B3F] font-bold md:text-xl ${onest.className}`} data-aos="fade-up" data-aos-delay="250">Frontend Developer</h1>
                        <p className={`text-base  text-gray-400 md:text-lg ${onest.className}`} data-aos="fade-up" data-aos-delay="300">Explained Digital Private Limited,Thrissur</p>
                        <p className={`text-sm text-gray-500 md:text-base ${onest.className}`} data-aos="fade-up" data-aos-delay="350">Jan 2026 - Present</p>
                    </div>
                    <div className="flex flex-col ps-5">
                        <h1 className={`text-lg  text-[#EB8B3F] font-bold md:text-xl ${onest.className}`} data-aos="fade-up" data-aos-delay="250">Reference</h1>
                        <p className={`text-base text-gray-400 md:text-lg ${onest.className}`} data-aos="fade-up" data-aos-delay="300">Vinay Vinod Marar </p>
                        <p className={`text-base text-gray-400 md:text-lg ${onest.className}`} data-aos="fade-up" data-aos-delay="300" > CEO </p>
                        <p className={`text-sm text-gray-500 md:text-base ${onest.className}`} data-aos="fade-up" data-aos-delay="350">6364174259</p>
                    </div>

                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3  items-center p-10 rounded-2xl bg-gray-900/20 mb-5" data-aos="fade-up" data-aos-delay="250">
                    <div className="flex justify-center">
                        <BriefcaseBusiness className='text-[#EB8B3F]'/>
                        </div>
                    <div className="flex flex-col ps-5">
                        <h1 className={`text-lg  text-[#EB8B3F] font-bold md:text-xl ${onest.className}`} data-aos="fade-up" data-aos-delay="250">Mearn Full Stack Intern</h1>
                        <p className={`text-base text-gray-400 md:text-lg ${onest.className}`} data-aos="fade-up" data-aos-delay="300">Luminar Technolab , Kochi</p>
                        <p className={`text-sm text-gray-500 md:text-base ${onest.className}`} data-aos="fade-up" data-aos-delay="350">Apr 2025 - Nov 2025</p>
                    </div>
                     <div className="flex flex-col ps-5">
                       
                        <h1 className={`text-lg  text-[#EB8B3F] font-bold md:text-xl ${onest.className}`} data-aos="fade-up" data-aos-delay="250">Reference</h1>
                        <p className={`text-base text-gray-400 md:text-lg ${onest.className}`} data-aos="fade-up" data-aos-delay="300">Shanthi Varghese </p>
                        <p className={`text-base text-gray-400 md:text-lg ${onest.className}`} data-aos="fade-up" data-aos-delay="300" > Academic Councelor </p>
                        <p className={`text-sm text-gray-500 md:text-base ${onest.className}`} data-aos="fade-up" data-aos-delay="350">6238023008</p>
                    </div>

                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3  items-center p-10 rounded-2xl bg-gray-900/20 mb-5" data-aos="fade-up" data-aos-delay="250">
                    <div className="flex justify-center">
                        <BriefcaseBusiness  className='text-[#EB8B3F]'/>
                        </div>
                    <div className="flex flex-col ps-5">
                        <h1 className={`text-lg  text-[#EB8B3F] font-bold md:text-xl ${onest.className}`} data-aos="fade-up" data-aos-delay="250">Resident Engineer</h1>
                        <p className={`text-base  text-gray-400 md:text-lg ${onest.className}`} data-aos="fade-up" data-aos-delay="300">Reserve Bank of India, Kochi</p>
                        <p className={`text-sm  text-gray-500 md:text-base ${onest.className}`} data-aos="fade-up" data-aos-delay="350">Dec 2022 - Mar 2025</p>
                    </div>
                     <div className="flex flex-col ps-5">
                        <h1 className={`text-lg  text-[#EB8B3F] font-bold md:text-xl ${onest.className}`} data-aos="fade-up" data-aos-delay="250">Reference</h1>
                        <p className={`text-base text-gray-400 md:text-lg ${onest.className}`} data-aos="fade-up" data-aos-delay="300">Flt. Lt. Shabeer Ali N.M </p>
                        <p className={`text-base text-gray-400 md:text-lg ${onest.className}`} data-aos="fade-up" data-aos-delay="300" > Manager, Protocol & Security </p>
                        <p className={`text-sm text-gray-500 md:text-base ${onest.className}`} data-aos="fade-up" data-aos-delay="350">9526406495</p>
                    </div>

                </div>
                
            </div>
    </div>
  );
}