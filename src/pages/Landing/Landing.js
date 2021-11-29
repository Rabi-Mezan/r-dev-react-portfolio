import React from 'react';
import propic from '../../images/circlepic.png'
import './Landing.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Landing = () => {
    return (
        <div>
            <div className="banner-page min-h-screen">
                <div data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in"
                    style={{ width: '400px' }} className='flex justify-end items-center'>
                    <img id='' className='w-96 h-96  border-4 border-white rounded-full' src={propic} alt="" />
                </div>
                <div style={{ width: '400px' }} className='flex flex-col justify-item-start'>
                    <h1 className='text-5xl text-left font-bold text-white'>HI, I'M A FRONTEND <br />
                        <span style={{ color: '#FFB400' }} className='text-6xl font-extrabold text-white'>DEVELOPER</span>
                    </h1>
                    <button data-aos="fade-down"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="3000"
                        data-aos-easing="ease-in" style={{ border: '2px solid #FFB400 ' }} className='rounded-full my-5 w-2/3 h-12 text-white text-2xl font-semibold flex  justify-between px-2 items-center'>My Resume <span><i class="fas fa-arrow-right bg-yellow-400 w-10  h-10 p-2 rounded-full"></i></span></button>
                </div>
                <div data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="3000"
                    data-aos-easing="ease-in"
                    className='flex flex-col justify-around items-center'>
                    <i class="fas fa-home mb-5 flex items-center justify-center  bg-yellow-400 w-10  h-10 p-2 rounded-full"></i>
                    <i class="fas fa-user mb-5 flex items-center justify-center bg-yellow-400 w-10  h-10 p-2 rounded-full"></i>
                    <i class="fas fa-briefcase flex items-center justify-center mb-5 bg-yellow-400 w-10  h-10 p-2 rounded-full"></i>
                    <i class="fas fa-envelope flex items-center justify-center bg-yellow-400 w-10  h-10 p-2 rounded-full"></i>
                </div>
            </div>
        </div>
    );
};

export default Landing;