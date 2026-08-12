import { sen } from "@/app/fonts/fonts";

export default function Footer() {
    return (

        <div >
           
                <hr className="m-5"/>
            <div className={`flex justify-between text-sm text-gray-400 m-5 ${sen.className}`}>
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