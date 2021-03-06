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
                if (result.text) {
                    alert('Thank you for contacting us !')
                    form.current.reset();
                }
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contact' style={{ backgroundColor: '#111111' }}>
            <h1
                data-aos="fade-out"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in"

                className='lg:bg-gray-500 lg:mx-40 lg:text-5xl text-2xl text-center font-bold text-white  py-8'>GET IN <span style={{ color: '#FFB400' }} className=' font-extrabold text-white'>TOUCH</span>
            </h1>
            <div className='contact-page lg:-mt-16 lg:mx-20  min-h-screen text-white text-left'>
                <div style={{ width: '400px' }} className='text-left lg:w-full w-full lg:p-0 p-8'>
                    <h1 style={{ color: '#FFB400' }} className='lg:text-3xl font-bold mb-3'>FEEL FREE TO CONTACT !</h1>
                    <p className='text-sm'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                    <div>
                        <div className='flex items-center my-4'>
                            <i class="fas fa-envelope text-4xl text-yellow-400 mr-3"></i>
                            <div>
                                <h1>MAIL ME</h1>
                                <p className='font-semibold'>rabiulislam.dev@gmail.com</p>
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
                    <div className='my-3'>
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

                <form ref={form} onSubmit={sendEmail} className='lg:-ml-24 flex w-100 flex-col justify-center lg:px-0 px-2 '>
                    <div className='flex flex-col lg:p-0 p-5 '>
                        <div className='flex justify-center items-center w-full '>
                            <input required name="user_name" placeholder='Your Name' className='w-1/2  lg:h-14 h-10  rounded-lg  hover:border-2 border-yellow-400 mr-2 p-4 bg-gray-600' type="text" />
                            <input required name="user_email" placeholder='Your Email' className='w-1/2  lg:h-14 h-10  rounded-lg  hover:border-2 bg-gray-600  border-yellow-400 lg:p-4 px-5 text' type="email" />
                        </div>
                        <textarea required name="message" placeholder='Your Message' className='w-full  m-auto hover:border-2  rounded-lg my-5 bg-gray-600  p-4' id="" cols="10" rows="5"></textarea>
                    </div>
                    <div className=' m-auto w-full '>

                        <button type='submit' style={{ border: '2px solid #FFB400 ' }} className='rounded-full lg:my-5 lg:w-full w-3/4 m-auto mb-10  h-12 hover:bg-yellow-400 hover:text-black hover:scale-105 transition transform duration-500 text-white text-sm font-semibold flex  justify-between px-2 items-center'>SEND MASSAGE <span style={{ color: 'black' }}><i class="fas fa-paper-plane bg-yellow-400  w-10  h-10 p-2 rounded-full flex items-center justify-center"></i></span></button>
                    </div>
                </form>

                {/* <div
                    className=' flex lg:order-last my-5 order-first  flex-col justify-around items-center  lg:-mt-60'>
                    <img className='w-16 h-16 flex  lg:ml-auto ' src={logo} alt="" />
                    <div className='flex lg:flex-col flex-row text-black'>
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

export default Contact;