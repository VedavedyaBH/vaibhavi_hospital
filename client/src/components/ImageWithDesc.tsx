import React from "react";

interface CardProps {
    img: string;
    name: string;
    des: string;
}

const ImageWithDesc: React.FC<CardProps> = ({ img, name, des }) => {
    return (
        <div className="rounded-lg p-4 m-4 flex justify-between items-center md:flex-row flex-col">
            <img
                className="mb-4 md:mr-4 md:mb-0 lg:h-96 w-full md:h-96 border-2 border-slate-400
                            rounded-lg"
                src={img}
                alt="Image"
            />

            <div className="font-light tracking-wide">
                <span className="font-bold underline">{name}</span> {des}
            </div>
        </div>
    );
};

export default ImageWithDesc;
