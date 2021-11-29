import React from 'react';
import propic from '../../images/circlepic.png'
import logo from '../../images/R.dev.png'
import './Landing.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

AOS.init();

const Landing = () => {
    return (
        <div style={{ backgroundColor: '#111111' }}>

            <div className="banner-page min-h-screen">
                <div data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in"
                    style={{ width: '400px' }} className='lg:flex justify-end items-center'>
                    <img id='' className='lg:w-96 lg:h-96 w-60 h-60 m-auto  border-4 border-white rounded-full lg:-mr-10 lg:-mt-20' src={propic} alt="" />
                </div>
                <div
                    data-aos="fade-down"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in"
                    style={{ width: '400px' }} className='flex flex-col justify-item-start'>
                    <h1 className='lg:text-5xl lg:text-left font-bold text-white'>HI, I'M A FRONTEND <br />
                        <span style={{ color: '#FFB400' }} className='lg:text-6xl font-extrabold text-white'>DEVELOPER</span>
                    </h1>
                    <button style={{ border: '2px solid #FFB400 ' }} className='rounded-full lg:my-5 m-auto  lg:w-96 w-60  h-12 hover:bg-yellow-400 hover:text-black hover:scale-105 transition transform duration-500 text-white text-xl font-semibold flex  justify-between px-2 items-center'>My Resume <span style={{ color: 'black' }}><i class="fas fa-arrow-right bg-yellow-400  w-10  h-10 p-2 rounded-full"></i></span></button>
                </div>
                <div
                    className='flex flex-col justify-around items-center '>
                    <img className='w-16 h-16 flex  lg:ml-auto ' src={logo} alt="" />
                    <div className='flex lg:flex-col flex-row'>
                        <Link to='/home'>
                            <i class="fas fa-home mt-5 mr-2 flex items-center justify-center  bg-yellow-400 w-10  h-10 p-2 rounded-full hover:scale-105 transition transform duration-500 hover:bg-green-400 hover:text-white"> </i>
                        </Link>
                        <Link to='/about'>
                            <i class="fas fa-user mt-5 mr-2 flex items-center justify-center bg-yellow-400 w-10  h-10 p-2 rounded-full hover:scale-105 transition transform duration-500 hover:bg-green-400 hover:text-white"></i>
                        </Link>
                        <Link to='/project'>
                            <i class="fas fa-briefcase flex items-center justify-center mt-5 mr-2 bg-yellow-400 w-10  h-10 p-2 rounded-full hover:scale-105 transition transform duration-500 hover:bg-green-400 hover:text-white"></i>
                        </Link>
                        <Link to='/contact'>
                            <i class="fas fa-envelope flex items-center justify-center mt-5  bg-yellow-400 w-10  h-10 p-2 rounded-full hover:scale-105 transition transform duration-500 hover:bg-green-400 hover:text-white"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;