import { sen } from "@/app/fonts/fonts";
import Link from "next/link";
import { MoveUpRight } from 'lucide-react';
import Image from "next/image";


export default function ContactDetails() {
    return (
        <div className="text-center md:mt-30">
            <div className={`${sen.className} p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 m-0 bg-black mb-10`}>

                {/* Card */}
                <div className="bg-[#0c0c0c] rounded-xl  p-3 hover:scale-105 transition">
                    <Link href="mailto:amaldaspr12@gmail.com">
                        <div className="flex justify-end text-2xl cursor-pointer">
                            <MoveUpRight className="text-gray-600" />
                        </div>
                    </Link>
                    <div className="flex flex-col items-center justify-center p-3">
                        <Image src={"/Icon Contact1.png"} alt="home" width={50} height={50} className="mb-2" />

                        <p className="text-gray-300 text-sm text-center">amaldaspr12@gmail.com</p>
                    </div>
                </div>
                <div className="bg-[#0c0c0c] rounded-xl  p-3 hover:scale-105 transition">
                    <Link href="tel:+918848446731">
                        <div className="flex justify-end text-2xl cursor-pointer">
                            <MoveUpRight className="text-gray-600" />
                        </div>
                    </Link>
                    <div className="flex flex-col items-center justify-center p-3">
                        <Image src={"/Icon Contact2.png"} alt="home" width={50} height={50} className="mb-2" />

                        <p className="text-gray-300 text-sm text-center">+91 8848446731</p>
                    </div>
                </div>
                <div className="bg-[#0c0c0c] rounded-xl  p-3 hover:scale-105 transition">
                    <Link href="https://www.google.com/maps/place/Propertyease+Headquarters">
                        <div className="flex justify-end text-2xl cursor-pointer">
                            <MoveUpRight className="text-gray-600" />
                        </div>
                    </Link>
                    <div className="flex flex-col items-center justify-center p-3">
                        <Image src={"/Icon Contact3.png"} alt="home" width={50} height={50} className="mb-2" />

                        <p className="text-gray-300 text-sm text-center">Thrissur, Kerala, India</p>
                    </div>
                </div>
                <div className="bg-[#0c0c0c] rounded-xl  p-3 hover:scale-105 transition">
                    <Link href="https://www.twitter.com/propertyease/">
                        <div className="flex justify-end text-2xl cursor-pointer">
                            <MoveUpRight className="text-gray-600" />
                        </div>
                    </Link>
                    <div className="flex flex-col items-center justify-center p-3">
                        <Image src={"/Icon Contact4.png"} alt="home" width={50} height={50} className="mb-2" />

                        <div className="flex gap-3 flex-wrap justify-center text-gray-300 text-sm">
                            <Link href="https://www.linkedin.com/in/amal-r-padayattil/">  <span className="hover:text-yellow-500 cursor-pointer">LinkedIn</span></Link>
                            <Link href="https://github.com/Amalr12">  <span className="hover:text-yellow-500 cursor-pointer">GitHub</span></Link>


                        </div>
                    </div>
                </div>


            </div>
            <div className="flex justify-center mt-10 gap-4 flex-wrap m-5">
            <Link href="mailto:amaldaspr12@gmail.com">
                    <button className="bg-[#EB8B3F] cursor-pointer hover:bg-[#1a1a1a] hover:text-gray-300 border hover:border-[#EB8B3F] text-black text-sm  py-2 px-4 rounded-4xl mr-4">Get in Touch</button>
            </Link>
               <Link href="/Resume_of_AMALDAS_P_R (1).pdf" download>
                 <button className="bg-[##EB8B3F] cursor-pointer hover:bg-[#1a1a1a] text-black border border-[#EB8B3F] text-gray-300 text-sm  py-2 px-4 rounded-4xl">Download Resume</button>
               </Link >
            </div>
        </div>

    );

}