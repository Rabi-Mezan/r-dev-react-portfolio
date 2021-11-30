import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/R.dev.png'

const About = () => {
    return (
        <div style={{ backgroundColor: '#111111', height: '100%' }} >
            <h1 className='lg:text-5xl text-3xl text-center font-bold text-white py-10'>ABOUT <span style={{ color: '#FFB400' }} className=' font-extrabold text-white'>ME</span>
            </h1>
            <div className='flex items-center justify-around'>
                <div className=' w-4/5'>
                    <div className='w-3/4 m-auto text-left '>
                        <h1 className='lg:text-2xl  font-bold text-white py-10'>MYSELF <br /> <span style={{ color: '#FFB400' }} className=' lg:text-5xl text-2xl font-extrabold text-white'> RABIUL ISLAM</span> </h1>
                        <p className='text-sm text-white -mt-8'>FRONTEND DEVELOPER , UI DESIGNER</p>
                        <a href="https://drive.google.com/file/d/1QX5gJPq1JUjYlb21SF4tEPSk0XQyP-o7/view?usp=sharing" target='_blank' rel="noreferrer">
                            <button style={{ border: '2px solid #FFB400 ' }} className='rounded-full my-5 m-auto lg:ml-2   lg:w-1/2 w-60  h-12 hover:bg-yellow-400 hover:text-black hover:scale-105 transition transform duration-500 text-white text-xl font-semibold flex  justify-between px-2 items-center'>My Resume <span style={{ color: 'black' }}><i class="fas fa-arrow-right bg-yellow-400  w-10  h-10 p-2 rounded-full"></i></span>
                            </button>
                        </a>
                    </div>

                    <div className='w-3/4 grid lg:grid-cols-2 grid-col-1 gap-4 m-auto'>
                        <div className='border-2 lg:w-1/2 rounded-lg border-gray-900 p-5'>
                            <h1 style={{ color: '#FFB400' }} className='text-left text-5xl font-bold flex felx-col  items-center justify-start'>2 <sup>+</sup></h1>
                            <div className='flex items-center justify-start'>
                                <div className='h-1 mr-2 w-10 bg-yellow-400'>

                                </div>
                                <h1 className='text-white text-sm' >YEARS OF <br />
                                    EXPERIENCE</h1>
                            </div>
                        </div>
                        <div className='border-2 lg:w-1/2 rounded-lg border-gray-900 p-5'>
                            <h1 style={{ color: '#FFB400' }} className='text-left text-5xl font-bold flex felx-col  items-center justify-start'>15<sup>+</sup></h1>
                            <div className='flex items-center justify-start'>
                                <div className='h-1 mr-2 w-10 bg-yellow-400'>

                                </div>
                                <h1 className='text-white text-sm'>COMPLETED
                                    PROJECTS</h1>
                            </div>
                        </div>
                        <div className='border-2 lg:w-1/2 rounded-lg border-gray-900 p-5'>
                            <h1 style={{ color: '#FFB400' }} className='text-left text-5xl font-bold flex felx-col  items-center justify-start'>5 <sup>+</sup></h1>
                            <div className='flex items-center justify-start'>
                                <div className='h-1 mr-2 w-10 bg-yellow-400'>

                                </div>
                                <h1 className='text-white text-sm'>HAPPY
                                    CUSTOMERS</h1>
                            </div>
                        </div>
                        <div className='border-2 lg:w-1/2 rounded-lg border-gray-900 p-5'>
                            <h1 style={{ color: '#FFB400' }} className='text-left text-5xl font-bold flex felx-col  items-center justify-start'>2<sup>+</sup></h1>
                            <div className='flex items-center justify-start'>
                                <div className='h-1 mr-2 w-10 bg-yellow-400'>

                                </div>
                                <h1 className='text-white text-sm'>AWARDS
                                    WON</h1>
                            </div>
                        </div>

                    </div>
                </div>
                <div
                    className='flex flex-col  justify-around items-center text-black '>
                    <img className='w-16 h-16 flex  ml-auto ' src={logo} alt="" />
                    <Link to='/home'>
                        <i class="fas fa-home mt-5 flex items-center justify-center  bg-yellow-400 w-10  h-10 p-2 rounded-full hover:scale-105 transition transform duration-500 hover:bg-green-400 hover:text-white"> </i>
                    </Link>
                    <Link to='/about'>
                        <i class="fas fa-user mt-5 flex items-center justify-center bg-yellow-400 w-10  h-10 p-2 rounded-full hover:scale-105 transition transform duration-500 hover:bg-green-400 hover:text-white"></i>
                    </Link>
                    <Link to='/project'>
                        <i class="fas fa-briefcase flex items-center justify-center mt-5 bg-yellow-400 w-10  h-10 p-2 rounded-full hover:scale-105 transition transform duration-500 hover:bg-green-400 hover:text-white"></i>
                    </Link>
                    <Link to='/contact'>
                        <i class="fas fa-envelope flex items-center justify-center mt-5 bg-yellow-400 w-10  h-10 p-2 rounded-full hover:scale-105 transition transform duration-500 hover:bg-green-400 hover:text-white"></i>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default About;