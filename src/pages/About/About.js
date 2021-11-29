import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/R.dev.png'

const About = () => {
    return (
        <div style={{ backgroundColor: '#111111' }} className='min-h-screen'>
            <h1 className='lg:text-5xl text-center font-bold text-white py-10'>ABOUT <span style={{ color: '#FFB400' }} className=' font-extrabold text-white'>ME</span>
            </h1>
            <div className='flex'>
                <div>

                </div>
                <div
                    className='flex flex-col  justify-around items-center text-black -mt-24'>
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