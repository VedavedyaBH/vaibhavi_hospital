import React from "react";

interface CardProps {
    des: string;
    onClick: any;
}

const BookButton: React.FC<CardProps> = ({ des, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="bg-emerald-50 border-2 hover:bg-emerald-100 hover:shadow-lg text-xs lg:text-sm shadow-md rounded-lg
                        p-4 m-4 lg:h-12 lg:w-48 flex flex-col justify-center items-center"
        >
            <div>{des}</div>
        </div>
    );
};

export default BookButton;
