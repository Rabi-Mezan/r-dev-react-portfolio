import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/R.dev.png'

const Blogs = () => {
    return (
        <div style={{ backgroundColor: '#111111' }} className='min-h-screen lg:flex justify-around items-center'>
            <div className=''>
                <h1 className='lg:text-5xl text-center font-bold text-white py-10'>BLOGS <span style={{ color: '#FFB400' }} className=' font-extrabold text-white'> <br /> COMING SOON !</span>
                </h1>
            </div>
            <div>
                <div
                    className=' flex mb-5 order-first lg:order-last  flex-col justify-around items-center '>
                    <img className='w-16 h-16 flex m-auto  lg:ml-auto ' src={logo} alt="" />
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
                </div>
            </div>
        </div>
    );
};

export default Blogs;