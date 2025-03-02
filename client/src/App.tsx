import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { Bars3Icon } from "@heroicons/react/24/outline";
import OnlineAppointment from "./components/OnlineAppointment";
import OfflineAppointment from "./components/OfflineAppointment";
import GalleryPage from "./pages/Gallery";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSideBar = () => {
        setIsOpen(!isOpen);
    };

    const onClose = () => {
        setIsOpen(false);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <BrowserRouter>
                <Header
                    toggleSideBar={toggleSideBar}
                    isOpen={isOpen}
                    onClose={onClose}
                />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route
                            path="/onlineAppointment"
                            element={<OnlineAppointment />}
                        />
                        <Route
                            path="/offlineAppointment"
                            element={<OfflineAppointment />}
                        />
                        <Route path="/gallery"
                            element={<GalleryPage />} />

                    </Routes>
                </main>
                <Footer
                    address={"Vaibhavi Multi-Speciality Hospital"}
                    email={"vaibhavi@hospitals.com"}
                    phone={"9480191196"}
                />
            </BrowserRouter>
        </div>
    );
}

const Header = ({ toggleSideBar, isOpen, onClose }: any) => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <>
            {isHomePage && (
                <div className="hidden lg:block p-8">
                    <NavBar />
                </div>
            )}
            {isHomePage && (
                <div className="lg:hidden p-8 flex justify-between">
                    <Bars3Icon
                        className="h-5 lg:h-8 pt-1 lg:pt-0"
                        onClick={toggleSideBar}
                    />
                    <SideBar isOpen={isOpen} onClose={onClose} />
                    <div>
                        <a
                            href="tel:9480191196"
                            className="border-2 rounded-lg p-2 text-red-900"
                        >
                            Emergency -{" "}
                            <span className="font-bold text-red-900">
                                9480191196
                            </span>
                        </a>
                    </div>
                </div>
            )}
        </>
    );
};

export default App;
