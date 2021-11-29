import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css'
import logo from '../../images/R.dev.png'
const Project = () => {
    return (
        <div style={{ backgroundColor: '#111111' }} className='min-h-screen'>
            <h1 className='lg:text-5xl text-center font-bold text-white py-10'>My <span style={{ color: '#FFB400' }} className=' font-extrabold text-white'>PORTFOLIO</span>
            </h1>
            <div className=' flex  justify-around items-center'>
                <div style={{ width: '700px' }} className='grid lg:grid-cols-3 gap-2  grid-cols-1 place-content-center '>
                    <div >
                        <div class="flex  antialiased">
                            <div class="relative m-auto">
                                <div class="z-50 p-3 mt-10 max-w-xs w-xs grid grid-cols-1 cursor-default select-none rounded bg-gray-400 dark:bg-gray-900 shadow-lg">
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
                                {/* <img
                                    class="absolute z-0 mx-72 -my-56 h-50 max-w-xs w-xl object-cover object-top hover:bg-opacity-50 transform hover:scale-125 border-gray-600 border border-opacity-50 rounded-xl shadow-lg transition-all duration-150"
                                    src="https://i.ibb.co/WfB4Xbz/heaventrip.png" alt=''>
                                </img> */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex  antialiased">
                            <div class="relative m-auto">
                                <div class="z-50 p-3 mt-10 max-w-xs w-xs grid grid-cols-1 cursor-default select-none rounded bg-gray-400 dark:bg-gray-900 shadow-lg">
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
                                {/* <img
                                    class="absolute z-0 mx-72 -my-56 h-50 max-w-xs w-xl object-cover object-top hover:bg-opacity-50 transform hover:scale-125 border-gray-600 border border-opacity-50 rounded-xl shadow-lg transition-all duration-150"
                                    src="https://i.ibb.co/5M00Ldz/flash.png" alt=''>
                                </img> */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex  antialiased">
                            <div class="relative m-auto">
                                <div class="z-50 p-3 mt-10 max-w-xs w-xs grid grid-cols-1 cursor-default select-none rounded bg-gray-400 dark:bg-gray-900 shadow-lg">
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
                                            <span class="transform transition-all duration-150 inline-block bg-green-400  bg-opacity-75 rounded px-1 py-1  text-xs font-thin text-yellow-900 hover:shadow-sm  hover:scale-105">NodeJS</span>
                                            <span class="transform transition-all duration-150 inline-block bg-indigo-400  bg-opacity-75 rounded px-1 py-1  text-xs font-thin text-yellow-900 hover:shadow-sm  hover:scale-105">MongoDB</span>
                                        </div>
                                    </div>
                                </div>
                                {/* <img
                                    class="absolute z-0 mx-72 -my-56 h-50 max-w-xs w-xl object-cover object-top hover:bg-opacity-50 transform hover:scale-125 border-gray-600 border border-opacity-50 rounded-xl shadow-lg transition-all duration-150"
                                    src="https://camo.githubusercontent.com/78889a2ff752043bd00ea43b0dc9fb85b8818345e190b2af5ce4d4eff307db64/68747470733a2f2f692e696d6775722e636f6d2f645744334449522e6a7067" alt=''>
                                </img> */}
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
        </div >
    );
};

export default Project;