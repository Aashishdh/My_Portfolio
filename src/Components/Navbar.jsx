import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > 50) {

                setScrolled(true);

            } else {

                setScrolled(false);

            }

        };

        window.addEventListener("scroll", handleScroll);

        return () => {

            window.removeEventListener("scroll", handleScroll);

        };

    }, []);

    const navLinks = [
        "Home",
        "About",
        "Skills",
        "Projects",
        "Journey",
        "Certificates",
        "Blog",
        "Contact"
    ];

    return (

        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-slate-900/80 backdrop-blur-lg shadow-lg"
                    : "bg-transparent"
            }`}
        >

            <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

                {/* Logo */}

              <img 
                    src="/logo.png" 
                    alt="logo" 
                    className="h-24 w-24 rounded-full object-cover"
                    />

                {/* Desktop Menu */}

                <ul className="hidden lg:flex gap-8 text-lg">

                    {navLinks.map((item) => (

                        <li key={item}>

                            <a

                                href={`#${item.toLowerCase()}`}

                                className="relative hover:text-cyan-400 duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-cyan-400 after:duration-300 hover:after:w-full"

                            >

                                {item}

                            </a>

                        </li>

                    ))}

                </ul>

                {/* Mobile Button */}

                <button

                    onClick={() => setMenuOpen(!menuOpen)}

                    className="lg:hidden text-2xl"

                >

                    {

                        menuOpen

                        ?

                        <FaTimes />

                        :

                        <FaBars />

                    }

                </button>

            </div>

            {/* Mobile Menu */}

            {

                menuOpen && (

                    <div className="lg:hidden bg-slate-900 px-8 pb-6">

                        {

                            navLinks.map((item) => (

                                <a

                                    key={item}

                                    href={`#${item.toLowerCase()}`}

                                    onClick={() => setMenuOpen(false)}

                                    className="block py-3 hover:text-cyan-400 duration-300"

                                >

                                    {item}

                                </a>

                            ))

                        }

                    </div>

                )

            }

        </nav>

    );

}