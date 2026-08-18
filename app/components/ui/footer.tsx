import { sen } from "@/app/fonts/fonts";

export default function Footer() {
    return (

        <div >
           
                <hr className="md:m-5 m-2"/>
            <div className={`flex justify-between text-xs md:text-sm text-gray-400 md:m-5 m-2 ${sen.className}`}>
                <div>
                    <h1>@2026 Amaldas P R</h1>
                </div>
                <div>
                    <p>Full stack developer  |  Kerala, India</p>
                  
                </div>
            </div>

        </div>
    );
}