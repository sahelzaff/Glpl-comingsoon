import React, { useState } from 'react';
import { RiMenu3Fill } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import assets from '../../public/assets/assets';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative flex items-center justify-between p-4 bg-transparent">
            {/* Left Side: Logo and Text */}
            <div className="flex items-center">
                <img src={assets.glpl_logo} alt="Logo" className="h-10 sm:h-12 md:h-14" />
                <span className="ml-2 text-lg sm:text-xl md:text-2xl font-bold font-outfit text-white">Goodrich Logistics</span>
            </div>

            {/* Right Side: Menu Icon */}
            <div className="relative">
                <div
                    className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-glplred rounded-md cursor-pointer"
                    onClick={toggleMenu}
                >
                    <RiMenu3Fill className="text-lg sm:text-xl text-white" />
                </div>

                {/* Sidebar Menu */}
                <div
                    className={`fixed top-0 right-0 h-full w-64 sm:w-72 bg-glplred shadow-lg transition-transform duration-300 transform ${
                        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    } z-50`}
                >
                    <div className="flex justify-between p-4 border-b border-gray-300">
                        <div className="text-xl sm:text-2xl font-bold font-outfit text-white">Menu</div>
                        <AiOutlineClose
                            className="text-xl sm:text-2xl cursor-pointer text-white"
                            onClick={toggleMenu}
                        />
                    </div>
                    <ul className="p-4 mt-5 space-y-4">
                        {['HOME', 'ABOUT US', 'VISION AND MISSION', 'MANAGEMENT TEAM', 'SERVICES', 'CAREERS', 'BLOGS'].map((item, index) => (
                            <li
                                key={index}
                                className="text-base sm:text-lg font-poppins text-white cursor-pointer hover:text-gray-100 hover:translate-x-1 transition-transform duration-300"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
