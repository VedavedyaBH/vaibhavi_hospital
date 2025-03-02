import React, { useState, useEffect } from "react";
import BookButton from "../components/BookButton";
import { useNavigate } from "react-router-dom";

const images = import.meta.glob("../assets/img_hos/*.jpg", { eager: true });
const galleryImages = Object.values(images).map((img: any) => img.default);

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r from-emerald-100 py-8">
        <div className="flex justify-center w-24 lg:justify-start">
          <BookButton onClick={() => navigate("/")} des={"Home"} />
        </div>
        <div className="items-center p-4 lg:max-w-6xl lg:m-auto lg:p-8">
          <h1 className="text-5xl lg:text-8xl lg:text-right p-4 text-gray-500 font-light">
            Our Gallery
          </h1>
          <p className="lg:text-right font-light p-2">
            Welcome to our hospital gallery, where we showcase moments of care,
            compassion, and dedication. Browse through images of our
            state-of-the-art facilities, advanced medical equipment, and the
            dedicated professionals who work tirelessly to ensure the well-being
            of our patients. From patient care to community outreach programs,
            these images reflect our commitment to providing quality healthcare.
            Click on any image to view it in full detail.
          </p>
        </div>
      </div>
      <div className="p-4 h-auto item-center">
        <div className="max-w-6xl flex mb-12 justify-center m-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-auto object-cover cursor-pointer rounded-lg"
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Focused View"
              className="max-w-full max-h-full p-4"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default GalleryPage;
