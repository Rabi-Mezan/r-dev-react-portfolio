import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'
import logo from '../../images/R.dev.png'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9gi72g6', 'contact_form', form.current, 'user_oIAWe2Sg6piFWKdb1ReeF')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div style={{ backgroundColor: '#111111' }}>
            <h1 className='lg:text-5xl text-center font-bold text-white py-10'>GET IN <span style={{ color: '#FFB400' }} className=' font-extrabold text-white'>TOUCH</span>
            </h1>
            <div className='contact-page  min-h-screen text-white text-left'>
                <div style={{ width: '300px' }} className='text-left lg:w-1/2 w-1/3 '>
                    <h1 className='lg:text-2xl font-bold mb-3'>FEEL FREE TO CONTACT !</h1>
                    <p className=''>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                    <div>
                        <div className='flex items-center my-4'>
                            <i class="fas fa-envelope text-4xl text-yellow-400 mr-3"></i>
                            <div>
                                <h1>MAIL ME</h1>
                                <p className='font-semibold'>ravimezan@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex items-center my-4'>
                            <i class="fas fa-phone-alt text-4xl text-yellow-400 mr-3"></i>
                            <div>
                                <h1>CALL ME</h1>
                                <p className='font-semibold'>+088 01997763407</p>
                            </div>
                        </div>
                    </div>
                    <div className='my-5'>
                        <a href="https://github.com/Rabi-Mezan">
                            <button >
                                <i class="fab fa-github flex items-center justify-center mt-5 bg-gray-600 w-10  h-10 p-2 rounded-full hover:scale-105 transition transform duration-500 hover:bg-yellow-400 hover:text-black mr-3"></i>
                            </button>
                        </a>
                        <a href="https://www.instagram.com/">
                            <button >
                                <i class="fab fa-instagram flex items-center justify-center mt-5 bg-gray-600 w-10  h-10 p-2 rounded-full hover:scale-105 transition transform duration-500 hover:bg-yellow-400 hover:text-black mr-3"></i>
                            </button>
                        </a>
                        <a href="https://www.linkedin.com/in/rabiul-islam-3435a7222/">
                            <button >
                                <i class="fab fa-linkedin flex items-center justify-center mt-5 bg-gray-600 w-10  h-10 p-2 rounded-full hover:scale-105 transition transform duration-500 hover:bg-yellow-400 hover:text-black mr-3"></i>
                            </button>
                        </a>
                        <a href="https://www.facebook.com/rabi.mexan/">
                            <button >
                                <i class="fab fa-facebook-f flex items-center justify-center mt-5 bg-gray-600 w-10  h-10 p-2 rounded-full hover:scale-105 transition transform duration-500 hover:bg-yellow-400 hover:text-black"></i>
                            </button>
                        </a>
                    </div>
                </div>

                <form ref={form} onSubmit={sendEmail} style={{ width: '550px' }} className='lg:flex flex-col lg:justify-center '>
                    <div className='flex justify-center items-center '>
                        <input name="user_name" placeholder='Your Name' style={{ backgroundColor: '#3D3A32' }} className='lg:w-1/2 w-1/4 lg:h-14 h-10 rounded-full  hover:border-2 border-yellow-400 mr-2 p-4' type="text" />
                        <input name="user_email" placeholder='Your Email' style={{ backgroundColor: '#3D3A32' }} className='lg:w-1/2 w-1/4 lg:h-14 h-10 rounded-full  hover:border-2  border-yellow-400 p-4' type="email" />
                    </div>
                    <textarea name="message" placeholder='Your Message' className='lg:w-full w-2/4   hover:border-2  rounded-lg my-5  p-4' style={{ backgroundColor: '#3D3A32' }} id="" cols="30" rows="5"></textarea>
                    <button type='submit' style={{ border: '2px solid #FFB400 ' }} className='rounded-full lg:my-5 lg:w-1/3 w-2/4  h-12 hover:bg-yellow-400 hover:text-black hover:scale-105 transition transform duration-500 text-white text-sm font-semibold flex  justify-between px-2 items-center'>SEND MASSAGE <span style={{ color: 'black' }}><i class="fas fa-paper-plane bg-yellow-400  w-10  h-10 p-2 rounded-full flex items-center justify-center"></i></span></button>
                </form>


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

export default Contact;