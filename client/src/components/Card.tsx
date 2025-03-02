import React from "react";

interface CardProps {
    logo: string;
    des: string;
}

const Card: React.FC<CardProps> = ({ logo, des }) => {
    return (
        <div
            className="bg-emerald-50 hover:bg-emerald-100 hover:shadow-lg text-sm shadow-md rounded-lg
                        p-4 m-4 h-24 w-24 lg:h-36 lg:w-36 flex flex-col justify-center items-center"
        >
            <img className="mb-4 h-8" src={logo} alt="Logo" />
            <div>{des}</div>
        </div>
    );
};

export default Card;
