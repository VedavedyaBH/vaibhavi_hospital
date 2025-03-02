import React from "react";

interface FooterProps {
    address: string;
    email: string;
    phone: string;
}

const Footer: React.FC<FooterProps> = ({ address, email, phone }) => {
    return (
        <footer id="contact" className="bg-teal-900 text-white p-6 h-full">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0 lg:text-left">
                        <h2 className="text-lg font-bold mb-2">Contact Us</h2>
                        <p>{address}</p>
                        <p>Email: {email}</p>
                        <p>Phone: {phone}</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold mb-2">Follow Us</h2>
                        <div className="flex">
                            <a href="#" className="mr-4">
                                Facebook
                            </a>
                            <a href="#" className="mr-4">
                                Twitter
                            </a>
                            <a href="#" className="mr-4">
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-4 text-center text-xs md:text-left">
                    <p>
                        &copy; 2024 Vaibhavi Multi-Speciality Hospital. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
