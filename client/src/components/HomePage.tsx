import React from "react";
import Card from "./Card";
import OnlineAppointment from "../assets/OnlineaApp.png";
import HealthRecord from "../assets/healthRecord.png";
import OfflineAppointment from "../assets/offlineApp.png";
import ImageWithDesc from "./ImageWithDesc";
import doc2 from "../assets/Image_23.jpg";
import ward1 from "../assets/img_hos/Image_11.jpg";
import ward2 from "../assets/img_hos/Image_13.jpg";
import ward3 from "../assets/img_hos/Image_26.jpg";
import ward4 from "../assets/img_hos/Image_21.jpg";
import BookButton from "./BookButton";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const services = [
    { logo: OnlineAppointment, name: "Emergency Care" },
    { logo: OfflineAppointment, name: "Surgery" },
    { logo: HealthRecord, name: "Maternity" },
    { logo: HealthRecord, name: "Pediatrics" },
    { logo: HealthRecord, name: "Radiology" },
    { logo: OnlineAppointment, name: "Emergency Care" },
    { logo: OfflineAppointment, name: "Surgery" },
    { logo: HealthRecord, name: "Maternity" },
    { logo: HealthRecord, name: "Pediatrics" },
    { logo: HealthRecord, name: "Radiology" },
    { logo: OnlineAppointment, name: "Emergency Care" },
    { logo: OfflineAppointment, name: "Surgery" },
];

const docdes = [
    {
      img: doc2,
      name: "Dr. Madhusudan",
      des: "is a dedicated and compassionate physician with over 10 years of experience in patient care. He specializes in diagnosing and managing a wide range of medical conditions, ensuring the best possible treatment for his patients. Known for his commitment to personalized care, he stays updated with the latest advancements in the medical field to provide effective and informed healthcare solutions",
    },
  ];

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="p-4">
                <section
                    className="rounded-lg py-4 lg:py-16
                 bg-gradient-to-r from-slate-50 to-emerald-100 to90%"
                >
                    <div className="justify-center">
                        <div className="flex flex-row justify-center items-center">
                            <img className="lg:hidden h-12" src={logo}></img>
                        </div>

                        <h1 className="py-6 tracking-wide text-3xl text-slate-700">
                            <span className="drop-shadow-sm font-bold text-stone-900 lg:text-5xl">
                                Vaibhavi Multi-Speciality Hospital
                            </span>{" "}
                        </h1>
                        <h2 className="lg:text-xl pb-6">
                            A leading healthcare institution dedicated to
                            providing exceptional medical care
                        </h2>
                    </div>

                    <div className="flex flex-wrap justify-center">
                        <BookButton
                            onClick={() => navigate("/onlineAppointment")}
                            des={"Consult online"}
                        />
                        <BookButton
                            onClick={() => navigate("/offlineAppointment")}
                            des={"Offline appointment"}
                        />
                        <BookButton
                            onClick={() => navigate("/")}
                            des={"Health record"}
                        />
                    </div>
                </section>

                <section id="services" className="py-4">
                    <h1 className="font-bold tracking-wide text-2xl text-slate-700">
                        Our Services
                    </h1>
                    <div className="flex flex-wrap justify-center">
                        {services.map((service, index) => (
                            <Card
                                key={index}
                                logo={service.logo}
                                des={service.name}
                            />
                        ))}
                    </div>
                </section>
                <section id="about" className="lg:py-12 max-w-6xl m-auto">
                    <h1 className="font-bold pt-4 tracking-wide text-2xl text-slate-700">
                        More about us
                    </h1>
                    <div className="font-light text-emerald-900 tracking-wide py-4 text-md leading-loose">
                        Situated in the heart of the community, our hospital
                        boasts state-of-the-art facilities and a team of highly
                        skilled healthcare professionals committed to delivering
                        compassionate and comprehensive care to every patient.
                        Our hospital offers a wide range of medical services,
                        including emergency care, surgery, maternity,
                        pediatrics, cardiology, neurology, oncology, and more.
                        Equipped with advanced technology and modern amenities,
                        we strive to ensure the highest standards of patient
                        safety, comfort, and satisfaction.{" "}
                    </div>
                </section>

                <section
                    id={"gallery"}
                    className="py-4 bg-gradient-to-r from-slate-50 to-emerald-100 to90% rounded-lg"
                >
                    <h1 className="font-bold pt-4 tracking-wide text-2xl text-slate-700">
                        Gallery
                    </h1>
                    <div className="h-full py-6 sm:py-8 lg:py-12">
                        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                                <a
                                    href="/gallery"
                                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                                >
                                    <img
                                        src={ward1}
                                        loading="lazy"
                                        alt="Photo by Minh Pham"
                                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                    />

                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                                        Pediatrics
                                    </span>
                                </a>

                                <a
                                    href="/gallery"
                                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                                >
                                    <img
                                        src={ward2}
                                        loading="lazy"
                                        alt="Photo by Magicle"
                                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                                        OPD
                                    </span>
                                </a>

                                <a
                                    href="/gallery"
                                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                                >
                                    <img
                                        src={ward3}
                                        loading="lazy"
                                        alt="Photo by Martin Sanchez"
                                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                    />

                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                                        Surgery
                                    </span>
                                </a>

                                <a
                                    href="/gallery"
                                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                                >
                                    <img
                                        src={ward4}
                                        loading="lazy"
                                        alt="Photo by Lorenzo Herrera"
                                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                    />

                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                                        Children Care
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-center m-auto">
                            <button
                                onClick={() => navigate("/gallery")}
                                className="mt-4 px-4 py-2 text-blue-800"
                            >
                                View Gallery
                            </button>
                        </div>
                    </div>
                </section>

                <section id="about" className="max-w-6xl mx-auto lg:py-12">
                    <h1 className="font-bold pt-4 tracking-wide text-2xl text-slate-700">
                        Stats
                    </h1>

                    <div className="flex flex-wrap justify-center sm:justify-between text-emerald-900 tracking-wide text-md leading-loose">
                        <div className="flex rounded-lg items-center">
                            <Card logo={HealthRecord} des={"Doctors"}></Card>
                            <div className="font-bold text-emerald-900 lg:text-4xl">
                                20+
                            </div>
                        </div>{" "}
                        <div className="flex rounded-lg items-center">
                            <Card logo={HealthRecord} des={"Staff"}></Card>
                            <div className="font-bold text-emerald-900 lg:text-4xl">
                                75+
                            </div>
                        </div>{" "}
                        <div className="flex rounded-lg items-center">
                            <Card logo={HealthRecord} des={"Ambulance"}></Card>
                            <div className="font-bold text-emerald-900 lg:text-4xl">
                                5+
                            </div>
                        </div>
                        <div className="flex rounded-lg items-center">
                            <Card logo={HealthRecord} des={"Wards"}></Card>
                            <div className="font-bold text-emerald-900 lg:text-4xl">
                                50+
                            </div>
                        </div>
                        <div className="flex rounded-lg items-center">
                            <Card logo={HealthRecord} des={"Ambulance"}></Card>
                            <div className="font-bold text-emerald-900 lg:text-4xl">
                                10+
                            </div>
                        </div>
                        <div className="flex rounded-lg items-center">
                            <Card logo={HealthRecord} des={"Wards"}></Card>
                            <div className="font-bold text-emerald-900 lg:text-4xl">
                                50+
                            </div>
                        </div>{" "}
                        <div className="flex rounded-lg items-center">
                            <Card logo={HealthRecord} des={"Wards"}></Card>
                            <div className="font-bold text-emerald-900 lg:text-4xl">
                                18+
                            </div>
                        </div>
                        <div className="flex rounded-lg items-center">
                            <Card logo={HealthRecord} des={"Wards"}></Card>
                            <div className="font-bold text-emerald-900 lg:text-4xl">
                                25+
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="docs"
                    className=" max-w-6xl m-auto bg-gradient-to-r from-emerald-100  rounded-lg mt-2 py-4"
                >
                    <h1 className="font-bold pt-4 tracking-wide text-2xl text-slate-700">
                        Know Our Doctors
                    </h1>
                    <div className="flex flex-wrap justify-center">
                        {docdes.map((doc, index) => (
                            <ImageWithDesc
                                key={index}
                                img={doc.img}
                                name={doc.name}
                                des={doc.des}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default HomePage;
