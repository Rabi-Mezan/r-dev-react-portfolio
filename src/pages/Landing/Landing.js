import React, { useEffect, useState } from 'react';
import propic from '../../images/circlepic.png'
import logo from '../../images/R.dev.png'
import './Landing.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typical from 'react-typical'
import About from '../About/About';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';
import { HashLink } from 'react-router-hash-link';
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";





AOS.init();

const Landing = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    const override = css`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #282c34;
    width: 100%;
    height: 60vh;
        
        `;

    return (
        <>


            {
                loading ?
                    <HashLoader
                        color='yellow'
                        loading={loading}
                        css={override}
                        size={100} />
                    :
                    <div>
                        <div id='home' className=' pb-10' style={{ backgroundColor: '#111111' }}>

                            <div className="banner-page  h-screen">
                                <div data-aos="fade-right"
                                    data-aos-offset="200"
                                    data-aos-delay="50"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in"
                                    style={{ width: '400px' }} className='lg:flex justify-center items-center'>
                                    <img id='' className='lg:w-96 lg:h-96 w-40 h-40 m-auto  border-4 border-white rounded-full lg:-mr-10 lg:-mt-20' src={propic} alt="" />

                                </div>
                                <div
                                    data-aos="fade-down"
                                    data-aos-offset="200"
                                    data-aos-delay="50"
                                    data-aos-duration="2000"
                                    data-aos-easing="ease-in"
                                    style={{ width: '500px' }} className=' flex flex-col lg:justify-item-start justify-center'>
                                    <h1 className='intro lg:text-5xl text-md lg:text-left font-bold text-white lg:-ml-14 my-2'>HI I'M<br />
                                        <span>RABIUL ISLAM</span>
                                        <span style={{ color: '#FFB400' }} className='lg:text-3xl text-xl font-extrabold text-white'>
                                            <Typical
                                                loop={Infinity}
                                                steps={[
                                                    "A FRONTEND DEVELOPER",
                                                    3000,
                                                    "A MERN STACK DEVELOPER",
                                                    3000,
                                                    "A REACT JS DEVELOPER",
                                                    3000,

                                                ]}
                                            />
                                        </span>
                                    </h1>
                                    <div className='intro w-full lg:flex lg:-ml-24'>
                                        <HashLink smooth to='#about' style={{ border: '1px solid #FFB400 ' }} className='rounded-full my-5 m-auto   lg:w-1/2 w-60  h-12 hover:bg-yellow-400 hover:text-black hover:scale-105 transition transform duration-500 text-white text-xl font-semibold flex  justify-between px-3 items-center'>Know More<span style={{ color: 'black' }}><i class="fas fa-arrow-right bg-yellow-400   w-10  h-10 p-2 rounded-full"></i></span></HashLink>

                                        <a href="https://drive.google.com/file/d/1wK12-VRo1zGa0aInKo88zNNWIrgw7Up1/view?usp=sharing" target='_blank' rel="noreferrer">
                                            <button style={{ border: '1px solid #FFB400 ' }} className='rounded-full lg:my-5 m-auto lg:ml-2   lg:w-full w-60  h-12 hover:bg-yellow-400 hover:text-black hover:scale-105 transition transform duration-500 text-white text-xl font-semibold flex  justify-between px-3 items-center'>My Resume <span style={{ color: 'black' }}><i class="fas fa-arrow-right bg-yellow-400  w-10  h-10 p-2 rounded-full"></i></span>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className='lg:fixed  lg:right-10 flex mb-5 order-first lg:order-last  flex-col justify-around items-center shadow-md '>
                                    <img className='w-16 h-16 flex  lg:ml-auto ' src={logo} alt="" />
                                    <div className='flex lg:flex-col flex-row'>
                                        <HashLink
                                            className='cursor-pointer' smooth to="#home">
                                            <i class="fas fa-home mt-5 mr-2 flex items-center justify-center  bg-yellow-400 w-10  h-10 p-2 rounded-full hover:scale-105 transition transform duration-500 hover:bg-green-400 hover:text-white"> </i>
                                        </HashLink >
                                        <HashLink className='cursor-pointer' smooth to="#about">
                                            <i class="fas fa-user mt-5 mr-2 flex items-center justify-center bg-yellow-400 w-10  h-10 p-2 rounded-full hover:scale-105 transition transform duration-500 hover:bg-green-400 hover:text-white"></i>
                                        </HashLink>
                                        <HashLink smooth to="#projects">
                                            <i class="fas fa-briefcase flex items-center justify-center mt-5 mr-2 bg-yellow-400 w-10  h-10 p-2 rounded-full hover:scale-105 transition transform duration-500 hover:bg-green-400 hover:text-white"></i>
                                        </HashLink>
                                        <HashLink smooth to="#home">
                                            <i class="fas fa-file-alt flex items-center justify-center mt-5 mr-2 bg-yellow-400 w-10  h-10 p-2 rounded-full hover:scale-105 transition transform duration-500 hover:bg-green-400 hover:text-white"></i>
                                        </HashLink>
                                        <HashLink smooth to="#contact">
                                            <i class="fas fa-envelope flex items-center justify-center mt-5  bg-yellow-400 w-10  h-10 p-2 rounded-full hover:scale-105 transition transform duration-500 hover:bg-green-400 hover:text-white"></i>
                                        </HashLink>
                                    </div>

                                </div>
                            </div>
                        </div>



                        <About></About>
                        <Project></Project>
                        <Contact></Contact>
                    </div>
            }
        </>

    );
};

export default Landing;