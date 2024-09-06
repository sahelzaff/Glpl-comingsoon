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
                <img src={assets.fair_events_logo_white} alt="Logo" className="h-10 sm:h-12 md:h-14" />
                <span className="ml-2 text-lg sm:text-xl md:text-2xl font-bold font-outfit text-white">Goodrich Fair & Events</span>
            </div>

          
        </div>
    );
};

export default Header;
