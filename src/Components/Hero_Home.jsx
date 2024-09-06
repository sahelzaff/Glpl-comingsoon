import React, { useState, useEffect } from 'react';
import assets from '../../public/assets/assets';
import { FaEnvelope } from 'react-icons/fa';
import { CiBellOn } from "react-icons/ci";
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Header from './Header';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero_Home = () => {
    const [email, setEmail] = useState('');
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setIsButtonEnabled(value.includes('@'));
    };

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleNotify = () => {
        if (isButtonEnabled) {
            setShowModal(true);
            setEmail(''); 
            setIsButtonEnabled(false); 

            setTimeout(() => {
                setShowModal(false);
            }, 3000); 
        }
    };

    return (
        <div className="relative h-screen bg-cover bg-center flex items-center justify-center">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src={assets.bg_coming_soon}
                autoPlay
                muted
                loop
                playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>

            <div className="relative flex flex-col items-center justify-between h-full w-full max-w-screen-2xl p-4">
                <div className='w-full'>
                    <Header />
                </div>
                <div className='flex flex-col items-center justify-center w-full max-w-4xl p-6 sm:p-10 md:p-12 lg:p-16 rounded-lg text-center bgglass'>
                    <h1 className="text-glplred text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-outfit mb-4" data-aos="fade-up" data-aos-duration="1000">
                        Fair & Events Coming Soon
                    </h1>
                    <div className='pt-2'>
                        <p className='font-poppins text-sm md:text-base lg:text-lg text-gray-300' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                            We're preparing something exciting! Our events page will showcase how
                        </p>
                        <p className='font-poppins text-sm md:text-base lg:text-lg text-gray-300' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                            For any queries please enter your email address
                        </p>
                    </div>
                    <div className='pt-10 w-full flex items-center justify-center' data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1000">
                        <div className="relative flex items-center w-full max-w-lg">
                            <div className="flex items-center border rounded-full border-gray-300 bg-white p-2 w-full">
                                <span className="p-2">
                                    <FaEnvelope className="text-glplred text-xl md:text-2xl" />
                                </span>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={handleChange}
                                    placeholder="Enter your email address"
                                    className="flex-grow py-2 px-0 rounded-full border-none focus:outline-none text-sm sm:text-base md:text-lg"
                                />
                                <button
                                    onClick={handleNotify}
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

            {showModal && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 sm:p-10 md:p-12 rounded-lg text-center flex flex-col items-center">
                        <AiOutlineCheckCircle className="text-green-500 text-4xl md:text-5xl mb-4" />
                        <p className="text-lg md:text-xl font-bold font-outfit">Thank You!</p>
                        <p className="text-base md:text-lg font-poppins">We'll reach you shortly.</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Hero_Home;
