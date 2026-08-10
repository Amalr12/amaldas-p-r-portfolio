import ContactDetails from "../components/pages/contact/contact-details";
import ContactHero from "../components/pages/contact/contact-hero";
import FloatingMenu from "../components/pages/home/floating-menu";

export default function page() {
    return (
        <div >
            <ContactHero />   
            <ContactDetails /> 
            <FloatingMenu />      
     </div>
    
    );
}