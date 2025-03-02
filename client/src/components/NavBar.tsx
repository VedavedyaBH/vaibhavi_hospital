import React from "react";
import SearchBar from "./SearchBar";
import logo from "../assets/logo.png";

const NavBar: React.FC = () => {
    const handleNavLinkClick = (sectionId: string) => {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <nav className="max-w-6xl m-auto pb-6">
            <div className="flex justify-between items-center pb-4">
                <div className="flex">
                    <img className="h-6 mr-2 items-center" src={logo}></img>
                    <div className="text-sm ">Vaibhavi Hospitals</div>
                </div>
                <SearchBar></SearchBar>
                <ul className="flex space-x-8">
                    <li>
                        <button
                            onClick={() => handleNavLinkClick("about")}
                            className="hover:text-gray-400"
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleNavLinkClick("gallery")}
                            className="hover:text-gray-400"
                        >
                            Gallery
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleNavLinkClick("services")}
                            className="hover:text-gray-400"
                        >
                            Services
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleNavLinkClick("docs")}
                            className="hover:text-gray-400"
                        >
                            Doctors
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleNavLinkClick("contact")}
                            className="hover:text-gray-400"
                        >
                            Contact
                        </button>
                    </li>

                    <li>
                        <a
                            href="tel:9480191196"
                            className="border-2 rounded-lg p-2 text-red-900 hover:drop-shadow-xl"
                        >
                            Emergency -{" "}
                            <span className="font-bold text-red-900 hover:drop-shadow-xl">
                                9480191196
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
