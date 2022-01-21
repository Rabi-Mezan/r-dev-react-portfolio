import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css'
import logo from '../../images/R.dev.png'
import AOS from 'aos';
import 'aos/dist/aos.css';



const Project = () => {
    return (
        <div id='projects' style={{ backgroundColor: '#111111' }} className='min-h-screen pb-5'>
            <h1
                data-aos="fade-out"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in"

                className='lg:bg-gray-500 lg:mx-40 lg:text-5xl text-2xl text-center font-bold text-white py-10'>MY <span style={{ color: '#FFB400' }} className=' font-extrabold text-white'>PROJECTS</span>
            </h1>
            <div className='flex flex-col lg:flex-row  justify-around lg:items-start  items-center my-10'>
                <div className='grid  gap-2  grid-cols-1 place-content-center w-full'>
                    <div
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in"
                    >
                        <div class="flex my-6 antialiased">
                            <div class="relative m-auto">
                                <div class="z-50 p-3 mx-3 mt-10 lg:max-w-lg w-xs grid grid-cols-1 cursor-default select-none rounded bg-gray-400 dark:bg-gray-900 shadow-lg">
                                    <div class="font-semibold text-xl mb-2 ml-2 text-gray-900 dark:text-white">Heaven Trip</div>
                                    <div class="flex">
                                        <a href="https://heaven-trip-95a98.web.app/home">
                                            <button
                                                class="transform mouse-pointer bg-gray-900 text-sm text-white mx-2 py-1 px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-90   focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Live</button>
                                        </a>
                                        <a href="https://github.com/Rabi-Mezan/Heaven-trip-client">
                                            <button
                                                class="transform mouse-pointer bg-gray-900 text-sm text-white px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600  hover:scale-90 dark:focus:bg-gray-600 focus:outline-none">Code</button>
                                        </a>
                                    </div>
                                    <div class="my-2 mx-2 mr-5">
                                        <p class="text-gray-900 text-xs">
                                            Heaven Trip is a tour and trip offering website where one can book a trip plan from various trip plans they offer...
                                        </p>
                                    </div>
                                    <div>
                                        <div class="font-semibold text-l text-gray-900">Tech Stack:</div>
                                        <div className='text-white'>
                                            <span class="transform transition-all duration-150 inline-block bg-blue-400 bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-blue-900  hover:shadow-sm  hover:scale-105">ReactJS</span>
                                            <span class="transform transition-all duration-150 inline-block bg-pink-400 bg-opacity-100 rounded px-1 py-1  text-xs font-thin text-pink-900  hover:shadow-sm  hover:scale-105">Tailwind</span>
                                            <span class="transform transition-all duration-150 inline-block bg-yellow-400  bg-opacity-75 rounded px-1 py-1  text-xs font-thin text-yellow-900 hover:shadow-sm  hover:scale-105">Javascript</span>
                                            <span class="transform transition-all duration-150 inline-block bg-green-400  bg-opacity-75 rounded px-1 py-1  text-xs font-thin text-yellow-900 hover:shadow-sm  hover:scale-105">NodeJS</span>
                                            <span class="transform transition-all duration-150 inline-block bg-indigo-400  bg-opacity-75 rounded px-1 py-1  text-xs font-thin text-yellow-900 hover:shadow-sm  hover:scale-105">MongoDB</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        class="absolute lg:visible invisible z-0 mx-72 -my-56 h-50 max-w-xs w-xl object-cover object-top hover:bg-opacity-50 transform hover:scale-125 border-gray-600 border border-opacity-50 rounded-xl shadow-lg transition-all duration-150"
                                        src="https://i.ibb.co/WfB4Xbz/heaventrip.png" alt=''>
                                    </img>
                                    <Link to='/details'>
                                        <button style={{ border: '2px solid #FFB400 ' }} className='rounded-full lg:my-5 m-auto lg:ml-2   lg:w-2/3 w-3/4 h-12 hover:bg-yellow-400 hover:text-black hover:scale-105 transition transform duration-500 text-white lg:text-xl font-semibold my-3'>See Deatils
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <hr className='my-5' /> */}
                    <div
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in"
                    >
                        <div class="flex my-6  antialiased">
                            <div class="relative m-auto">
                                <div class="z-50 p-3 mx-3 mt-10 lg:max-w-lg w-xs grid grid-cols-1 cursor-default select-none rounded bg-gray-400 dark:bg-gray-900 shadow-lg">
                                    <div class="font-semibold text-xl mb-2 ml-2 text-gray-900 dark:text-white">Flash Corner</div>
                                    <div class="flex">
                                        <a href="https://flash-corner.web.app/">
                                            <button
                                                class="transform mouse-pointer bg-gray-900 text-sm text-white mx-2 py-1 px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-90   focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Live</button>
                                        </a>
                                        <a href="https://github.com/Rabi-Mezan/flash-corner-client">
                                            <button
                                                class="transform mouse-pointer bg-gray-900 text-sm text-white px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600  hover:scale-90 dark:focus:bg-gray-600 focus:outline-none">Code</button>
                                        </a>
                                    </div>
                                    <div class="my-2 mx-2 mr-5">
                                        <p class="text-gray-900 text-xs">
                                            This Website is a for selling only dslr cameras . Here one can find all kind of DSLR camers from all pupular brands in market .
                                        </p>
                                    </div>
                                    <div>
                                        <div class="font-semibold text-l text-gray-900">Tech Stack:</div>
                                        <div className='text-white'>
                                            <span class="transform transition-all duration-150 inline-block bg-blue-400 bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-blue-900  hover:shadow-sm  hover:scale-105">ReactJS</span>
                                            <span class="transform transition-all duration-150 inline-block bg-pink-400 bg-opacity-100 rounded px-1 py-1  text-xs font-thin text-pink-900  hover:shadow-sm  hover:scale-105">Tailwind</span>
                                            <span class="transform transition-all duration-150 inline-block bg-yellow-400  bg-opacity-75 rounded px-1 py-1  text-xs font-thin text-yellow-900 hover:shadow-sm  hover:scale-105">Javascript</span>
                                            <span class="transform transition-all duration-150 inline-block bg-green-400  bg-opacity-75 rounded px-1 py-1  text-xs font-thin text-yellow-900 hover:shadow-sm  hover:scale-105">NodeJS</span>
                                            <span class="transform transition-all duration-150 inline-block bg-indigo-400  bg-opacity-75 rounded px-1 py-1  text-xs font-thin text-yellow-900 hover:shadow-sm  hover:scale-105">MongoDB</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        class="absolute lg:visible invisible z-0 mx-72 -my-56 h-50 max-w-xs w-xl object-cover object-top hover:bg-opacity-50 transform hover:scale-125 border-gray-600 border border-opacity-50 rounded-xl shadow-lg transition-all duration-150"
                                        src="https://i.ibb.co/5M00Ldz/flash.png" alt=''>
                                    </img>
                                    <Link to='/details'>
                                        <button style={{ border: '2px solid #FFB400 ' }} className='rounded-full lg:my-5 m-auto lg:ml-2   lg:w-2/3 w-3/4 h-12 hover:bg-yellow-400 hover:text-black hover:scale-105 transition transform duration-500 text-white lg:text-xl font-semibold my-3'>See Deatils
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <hr className='my-5' /> */}
                    <div data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in">
                        <div class="flex my-6 antialiased">
                            <div class="relative m-auto">
                                <div class="z-50 p-3 mx-3 mt-10 lg:max-w-lg w-xs grid grid-cols-1 cursor-default select-none rounded bg-gray-400 dark:bg-gray-900 shadow-lg">
                                    <div class="font-semibold text-xl mb-2 ml-2 text-gray-900 dark:text-white">Mind Core</div>
                                    <div class="flex">
                                        <a href="https://mindcore-1f680.web.app/">
                                            <button
                                                class="transform mouse-pointer bg-gray-900 text-sm text-white mx-2 py-1 px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-90   focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Live</button>
                                        </a>
                                        <a href="https://github.com/Rabi-Mezan/MindCore-Helath_website">
                                            <button
                                                class="transform mouse-pointer bg-gray-900 text-sm text-white px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600  hover:scale-90 dark:focus:bg-gray-600 focus:outline-none">Code</button>
                                        </a>
                                    </div>
                                    <div class="my-2 mx-2 mr-5">
                                        <p class="text-gray-900 text-xs">
                                            MindCore is a mental health care related website.Here people who are suffering from mental illness can find doctors and ...
                                        </p>
                                    </div>
                                    <div>
                                        <div class="font-semibold text-l text-gray-900">Tech Stack:</div>
                                        <div className='text-white'>
                                            <span class="transform transition-all duration-150 inline-block bg-blue-400 bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-blue-900  hover:shadow-sm  hover:scale-105">ReactJS</span>
                                            <span class="transform transition-all duration-150 inline-block bg-pink-400 bg-opacity-100 rounded px-1 py-1  text-xs font-thin text-pink-900  hover:shadow-sm  hover:scale-105">Tailwind</span>
                                            <span class="transform transition-all duration-150 inline-block bg-yellow-400  bg-opacity-75 rounded px-1 py-1  text-xs font-thin text-yellow-900 hover:shadow-sm  hover:scale-105">Javascript</span>

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        class="absolute lg:visible invisible z-0 mx-72 -my-56 h-50 max-w-xs w-xl object-cover object-top hover:bg-opacity-50 transform hover:scale-125 border-gray-600 border border-opacity-50 rounded-xl shadow-lg transition-all duration-150"
                                        src="https://i.ibb.co/Swhv0J2/mindcore.png" alt=''>
                                    </img>
                                    <Link to='/details'>
                                        <button style={{ border: '2px solid #FFB400 ' }} className='rounded-full lg:my-5 m-auto lg:ml-2   lg:w-2/3 w-3/4  h-12 hover:bg-yellow-400 hover:text-black hover:scale-105 transition transform duration-500 text-white lg:text-xl font-semibold my-3'>See Deatils
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <hr /> */}
                    <div data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in">
                        <div class="flex my-6  antialiased ">
                            <div class="relative m-auto">
                                <div class="z-50 p-3 mx-3 mt-10 lg:max-w-lg w-xs grid grid-cols-1 cursor-default select-none rounded bg-gray-400 dark:bg-gray-900 shadow-lg">
                                    <div class="font-semibold text-xl mb-2 ml-2 text-gray-900 dark:text-white">Click69</div>
                                    <div class="flex">
                                        <a href="https://github.com/Rabi-Mezan/click69-click-with-us">
                                            <button
                                                class="transform mouse-pointer bg-gray-900 text-sm text-white mx-2 py-1 px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-90   focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Live</button>
                                        </a>
                                        <a href="https://github.com/Rabi-Mezan/click69-click-with-us">
                                            <button
                                                class="transform mouse-pointer bg-gray-900 text-sm text-white px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600  hover:scale-90 dark:focus:bg-gray-600 focus:outline-none">Code</button>
                                        </a>
                                    </div>
                                    <div class="my-2 mx-2 mr-5">
                                        <p class="text-gray-900 text-xs">
                                            Click69 is online course offering website .This website offers online photography courses ...
                                        </p>
                                    </div>
                                    <div>
                                        <div class="font-semibold text-l text-gray-900">Tech Stack:</div>
                                        <div className='text-white'>
                                            <span class="transform transition-all duration-150 inline-block bg-blue-400 bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-blue-900  hover:shadow-sm  hover:scale-105">ReactJS</span>
                                            <span class="transform transition-all duration-150 inline-block bg-pink-400 bg-opacity-100 rounded px-1 py-1  text-xs font-thin text-pink-900  hover:shadow-sm  hover:scale-105">Tailwind</span>
                                            <span class="transform transition-all duration-150 inline-block bg-yellow-400  bg-opacity-75 rounded px-1 py-1  text-xs font-thin text-yellow-900 hover:shadow-sm  hover:scale-105">Javascript</span>

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        class="absolute lg:visible invisible z-0 mx-72 -my-56 h-50 max-w-xs w-xl object-cover object-top hover:bg-opacity-50 transform hover:scale-125 border-gray-600 border border-opacity-50 rounded-xl shadow-lg transition-all duration-150"
                                        src="https://i.ibb.co/hBJDvk6/click69.png" alt=''>
                                    </img>
                                    <Link to='/details'>
                                        <button style={{ border: '2px solid #FFB400 ' }} className='rounded-full lg:my-5 m-auto lg:ml-2   lg:w-2/3 w-3/4  h-12 hover:bg-yellow-400 hover:text-black hover:scale-105 transition transform duration-500 text-white lg:text-xl font-semibold my-3'>See Deatils
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <hr /> */}


                </div>

                {/* <div
                    className=' flex mb-5 order-first lg:order-last  flex-col justify-around items-center '>
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
                        <Link to='/blogs'>
                            <i class="fas fa-file-alt flex items-center justify-center mt-5 mr-2 bg-yellow-400 w-10  h-10 p-2 rounded-full hover:scale-105 transition transform duration-500 hover:bg-green-400 hover:text-white"></i>
                        </Link>
                        <Link to='/contact'>
                            <i class="fas fa-envelope flex items-center justify-center mt-5  bg-yellow-400 w-10  h-10 p-2 rounded-full hover:scale-105 transition transform duration-500 hover:bg-green-400 hover:text-white"></i>
                        </Link>
                    </div>
                </div> */}
            </div>
        </div >
    );
};

export default Project;