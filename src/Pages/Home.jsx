import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Aboutme from "../Pages/Aboutme"
import Skills from "../Pages/Skills"
import Projects from "../Pages/Projects"
import Journey from "../Pages/Journey"
import Certificates from "../Pages/Certificates"
import Contact from "../Pages/Contact"
export default function Home() {

    return (
        <>
            <Navbar />
            <Hero/>

            {/* About */}
            <Aboutme/>

            {/* Skills */}
            <Skills/>

            {/* Projects */}
            <Projects/>
            
            {/* Journey */}
            <Journey/>

            {/* Certificates */}
            <Certificates/>

            {/* Contact */}
            <Contact/>
        </>

    );

}