import React, { useRef } from "react";

interface ImageCarouselProps {
    images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            const imageWidth = carouselRef.current.children[0].clientWidth;
            carouselRef.current.scrollBy({
                left: -imageWidth,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            const imageWidth = carouselRef.current.children[0].clientWidth;
            carouselRef.current.scrollBy({
                left: imageWidth,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="relative w-full shadow-lg rounded-lg">
            <div
                ref={carouselRef}
                className="flex overflow-x-auto scrollbar-hide w-full"
                style={{ scrollSnapType: "x mandatory" }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Carousel image ${index + 1}`}
                        className="w-full h-96 rounded-lg shadow-md"
                        style={{ scrollSnapAlign: "center" }}
                    />
                ))}
            </div>
            <button
                onClick={scrollLeft}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white p-2 rounded-full"
            >
                &larr;
            </button>
            <button
                onClick={scrollRight}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white p-2 rounded-full"
            >
                &rarr;
            </button>
        </div>
    );
};

export default ImageCarousel;
