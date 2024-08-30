import React, { useState } from 'react';
import assets from '../../public/assets/assets';
import { FaEnvelope } from 'react-icons/fa';
import { CiBellOn } from "react-icons/ci";
import Header from './Header';

const Hero_Home = () => {
    const [email, setEmail] = useState('');
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setIsButtonEnabled(value.includes('@'));
    };

    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${assets.banner2})` }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
            <div className="relative flex flex-col items-center justify-between h-full w-full p-4">
                <div className='w-full max-w-screen-2xl'>
                    <Header />
                </div>
                <div className='flex flex-col items-center justify-center h-full text-center'>
                    <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold font-outfit mb-4">
                        Fair Events Coming Soon
                    </h1>
                    <div className='pt-2'>
                        <p className='font-poppins text-xs sm:text-sm md:text-base lg:text-lg text-gray-300'>
                            We're preparing something exciting! Our events page will showcase how
                        </p>
                        <p className='font-poppins text-xs sm:text-sm md:text-base lg:text-lg text-gray-300'>
                            Goodrich Logistics is revolutionizing container transport for businesses worldwide.
                        </p>
                    </div>
                    <div className='pt-10 w-full flex items-center justify-center'>
                        <div className="relative flex items-center w-full max-w-xs sm:max-w-sm">
                            <div className="flex items-center border rounded-full border-gray-300 bg-white p-2">
                                <span className="p-2">
                                    <FaEnvelope className="text-glplred text-xl md:text-2xl" />
                                </span>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={handleChange}
                                    placeholder="Enter your email address"
                                    className="flex-grow py-2 px-4 rounded-full border-none focus:outline-none text-sm sm:text-base"
                                />
                                <button
                                    disabled={!isButtonEnabled}
                                    className={`py-2 px-4 rounded-full text-white flex gap-2 items-center transition-colors font-poppins duration-300 ${isButtonEnabled ? 'bg-red-600 cursor-pointer' : 'bg-gray-400 cursor-not-allowed'}`}
                                >
                                    <div className='text-xl md:text-2xl'>
                                        <CiBellOn />
                                    </div> Notify
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full pb-2'>
                    <p className='w-full font-poppins text-white text-center text-xs sm:text-sm'>
                        Copyright 2024 © Goodrich Logistics. All Right Reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero_Home;
