import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SideBarRow from "./SideBarRow";
import {
    UserIcon,
    RectangleStackIcon,
    PlusIcon,
} from "@heroicons/react/24/outline";
import BookButton from "./BookButton";
import { useNavigate } from "react-router-dom";

const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
];

const OfflineAppointment: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

    const navigate = useNavigate();

    return (
        <div className="p-12  bg-gradient-to-r from-slate-50 to-emerald-100 to90%">
            <div className="flex justify-center w-24 lg:justify-start">
                <BookButton
                    onClick={() => navigate("/")}
                    des={"Home"}
                ></BookButton>
            </div>
            <h1 className="py-2 tracking-wide text-2xl text-slate-700">
                <span className="drop-shadow-sm font-bold text-stone-900 text-5xl">
                    Book your{" "}
                    <span className="text-emerald-900">"Offline" </span>
                    Slot in Simple Steps
                </span>
            </h1>
            <h1 className="text-2xl text-gray-700 font-bold mt-6">
                Vaibhavi Multi-Speciality Hospital
            </h1>

            <h2 className="text-sm mb-6">
                A leading healthcare institution dedicated to providing
                exceptional medical care
            </h2>

            <div className="lg:max-w-3xl m-auto p-4 rounded-lg">
                <div className="lg:flex justify-between items-center">
                    <ul
                        className="lg:w-72 text-gray-500 item-center shadow-xl bg-gradient-to-r to-slate-100 from-emerald-50 to90% 
                                        lg:text-left p-4 rounded-lg mb-4"
                    >
                        <h1 className="text-center px-2 text-sm font-bold mb-2">
                            How to consult a doctor in person?
                        </h1>
                        <SideBarRow title={"Select slot"} Icon={PlusIcon} />
                        <SideBarRow
                            title={"Visit the doctor at Hospital"}
                            Icon={RectangleStackIcon}
                        />
                        <SideBarRow
                            title={"Make the payment"}
                            Icon={UserIcon}
                        />
                    </ul>

                    <div>
                        <div className="lg:flex justify-center item-center mb-4 p-4">
                            <div className="text-xs lg:text-lg mb-2 mr-2 p-2">
                                Select Date:
                            </div>
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date: Date) => setSelectedDate(date)}
                                className="border-2 bg-gradient-to-r to-slate-100 from-emerald-50 to90%
                                            p-2 rounded-lg shadow-xl"
                            />
                        </div>

                        {selectedDate && (
                            <div>
                                <h3 className="text-lg mb-2">Select a slot:</h3>
                                <div className="lg:max-w-lg grid grid-cols-3 gap-2 m-auto">
                                    {timeSlots.map((slot, index) => (
                                        <div
                                            key={index}
                                            className={`border-2  shadow-xl p-2 rounded-lg text-center
                                                cursor-pointer w-24 ${
                                                    selectedSlot === slot
                                                        ? "bg-emerald-200 text-black"
                                                        : "bg-white"
                                                }`}
                                            onClick={() =>
                                                setSelectedSlot(slot)
                                            }
                                        >
                                            {slot}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {selectedDate && (
                    <div className="flex justify-center lg:justify-end">
                        <BookButton onClick={""} des={"Book"}></BookButton>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OfflineAppointment;
