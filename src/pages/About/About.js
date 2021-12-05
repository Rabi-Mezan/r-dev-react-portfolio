import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { Link } from 'react-router-dom';
import logo from '../../images/R.dev.png'
import 'react-circular-progressbar/dist/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ProgressBar from 'react-animated-progress-bar';


const About = () => {
    const percentage = 66;

    const style = {
        // Customize the root svg element
        root: {},
        // Customize the path, i.e. the "completed progress"
        path: {
            // Path color
            stroke: 'gray',
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',
            // Customize transition animation
            transition: 'stroke-dashoffset 0.5s ease 0s',
        },
        // Customize the circle behind the path, i.e. the "total progress"
        trail: {
            // Trail color
            stroke: '#d6d6d6',
        },
        // Customize the text
        text: {
            // Text color
            fill: '#FFB400',
            // Text size
            fontSize: '10px',
            fontWeight: 'bold'
        },
        // Customize background - only used when the `background` prop is true
        background: {
            fill: '#3e98c7',
        },
    }

    return (
        <div style={{ backgroundColor: '#111111' }} >
            <h1 className='lg:text-5xl text-2xl text-center font-bold text-white py-10'>ABOUT <span style={{ color: '#FFB400' }} className=' font-extrabold text-white'>ME</span>
            </h1>
            <div className='flex flex-col lg:flex-row lg:items-start items-center justify-around'>
                <div className='lg:w-3/4 w-full'>
                    <div className='w-full px-5 lg:pl-36 m-auto text-left '>
                        <h1 className='lg:text-2xl mb-2 font-bold text-white py-10'>MYSELF <br /> <span style={{ color: '#FFB400' }} className=' lg:text-5xl text-2xl font-extrabold text-white'> RABIUL ISLAM</span> </h1>
                        <p className='text-sm text-white -mt-8'>FRONTEND DEVELOPER , UI DESIGNER</p>
                        <p className='text-sm text-white lg:w-2/3 my-2 '>I'm a student of Computer science and Engineering and pursuing my BSc degree at Daffodil International University. I want to become a full-stack web developer</p>
                        <a className='my-1 ' href="https://drive.google.com/file/d/1QX5gJPq1JUjYlb21SF4tEPSk0XQyP-o7/view?usp=sharing" target='_blank' rel="noreferrer">
                            <button style={{ border: '2px solid #FFB400 ' }} className='rounded-full my-5  lg:-ml-2   lg:w-1/2 w-60  h-12 hover:bg-yellow-400 hover:text-black hover:scale-105 transition transform duration-500 text-white text-xl font-semibold flex  justify-between px-2 items-center'>My Resume <span style={{ color: 'black' }}><i class="fas fa-arrow-right bg-yellow-400  w-10  h-10 p-2 rounded-full"></i></span>
                            </button>
                        </a>
                    </div>

                    <div
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in"
                        className=' mt-20  flex flex-col justify-center items-center'>
                        <h1 style={{ color: '#FFB400' }} className=' lg:text-5xl text-2xl my-8 font-extrabold text-white text-left'>MY HISTORY</h1>
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
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in"
                        className='flex mb-16 flex-col justify-center items-center lg:w-full   '>
                        <h1 style={{ color: '#FFB400' }} className=' lg:text-5xl text-2xl m mt-14 font-extrabold text-white'>MY SKILLS</h1>
                        <div className='grid lg:grid-cols-2 grid-cols-1 '>

                            <div className='lg:p-10 p-5 ml-0'>
                                <h1 className='lg:text-xl text-sm text-white -mb-5 text-left'>HTML</h1>
                                <ProgressBar
                                    width="320px"
                                    height="15px"
                                    rect
                                    fontColor="gray"
                                    percentage="90"
                                    fontSize='18px'
                                    rectPadding="2px"
                                    rectBorderRadius="20px"
                                    trackPathColor="transparent"
                                    bgColor="#333333"
                                    trackBorderColor="grey"
                                />
                            </div>
                            <div className='lg:p-10 p-5 lg:mt-0 -mt-10'>

                                <h1 className='lg:text-xl text-sm text-white -mb-5 text-left'>CSS</h1>
                                <ProgressBar
                                    width="320px"
                                    height="15px"
                                    rect
                                    fontColor="gray"
                                    percentage="85"
                                    fontSize='18px'
                                    rectPadding="2px"
                                    rectBorderRadius="20px"
                                    trackPathColor="transparent"
                                    bgColor="#333333"
                                    trackBorderColor="grey"
                                />
                            </div>
                            <div className='lg:p-10 p-5  -mt-10'>
                                <h1 className='lg:text-xl text-sm text-white -mb-5 text-left'>BOOTSTRAP</h1>
                                <ProgressBar
                                    width="320px"
                                    height="15px"
                                    rect
                                    fontColor="gray"
                                    percentage="85"
                                    fontSize='18px'
                                    rectPadding="2px"
                                    rectBorderRadius="20px"
                                    trackPathColor="transparent"
                                    bgColor="#333333"
                                    trackBorderColor="grey"
                                />
                            </div>
                            <div className='lg:p-10 p-5  -mt-10'>
                                <h1 className='lg:text-xl text-sm text-white -mb-5 text-left'>TAILWIND</h1>
                                <ProgressBar
                                    width="320px"
                                    height="15px"
                                    rect
                                    fontColor="gray"
                                    percentage="85"
                                    fontSize='18px'
                                    rectPadding="2px"
                                    rectBorderRadius="20px"
                                    trackPathColor="transparent"
                                    bgColor="#333333"
                                    trackBorderColor="grey"
                                />
                            </div>
                            <div className='lg:p-10 p-5  -mt-10'>
                                <h1 className='lg:text-xl text-sm text-white -mb-5 text-left'>REACT JS</h1>
                                <ProgressBar
                                    width="320px"
                                    height="15px"
                                    rect
                                    fontColor="gray"
                                    percentage="70"
                                    fontSize='18px'
                                    rectPadding="2px"
                                    rectBorderRadius="20px"
                                    trackPathColor="transparent"
                                    bgColor="#333333"
                                    trackBorderColor="grey"
                                />
                            </div>
                            <div className='lg:p-10 p-5  -mt-10'>
                                <h1 className='lg:text-xl text-sm text-white -mb-5 text-left'>NODE JS</h1>
                                <ProgressBar
                                    width="320px"
                                    height="15px"
                                    rect
                                    fontColor="gray"
                                    percentage="65"
                                    fontSize='18px'
                                    rectPadding="2px"
                                    rectBorderRadius="20px"
                                    trackPathColor="transparent"
                                    bgColor="#333333"
                                    trackBorderColor="grey"
                                />
                            </div>
                            <div className='lg:p-10 p-5 text-sm -mt-10'>
                                <h1 className='lg:text-xl text-white -mb-5 text-left'>MONGODB</h1>
                                <ProgressBar
                                    width="320px"
                                    height="15px"
                                    rect
                                    fontColor="gray"
                                    percentage="60"
                                    fontSize='18px'
                                    rectPadding="2px"
                                    rectBorderRadius="20px"
                                    trackPathColor="transparent"
                                    bgColor="#333333"
                                    trackBorderColor="grey"
                                />
                            </div>


                        </div>
                    </div>
                    <div

                        className='flex  mb-16 flex-col justify-center items-center lg:w-full   '>


                        <h1 style={{ color: '#FFB400' }} className=' lg:text-5xl text-2xl  mt-14 mb-14 font-extrabold text-white'>MY BACKGROUND</h1>
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="lg:p-10 p-5 vertical-timeline-element--work"
                                contentStyle={{ background: '#333333', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  #FFB400' }}
                                date="2018 -2022"
                                iconStyle={{ background: 'rgb(16, 204, 82)0', color: '#fff' }}
                                icon={<i class=" mt-3 lg:text-2xl fas fa-graduation-cap"></i>}
                            >
                                <h3 className="font-bold lg:text-xl vertical-timeline-element-title">Bachelor of Science in CSE</h3>
                                <h4 className=" text-xs vertical-timeline-element-subtitle">Daffodil International University</h4>
                                <p>
                                    CGPA 3.55
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className=" lg:p-10 p-5 vertical-timeline-element--work"
                                contentStyle={{ background: '#333333', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  #FFB400' }}
                                date="2021 -2022"
                                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                                icon={<i class=" mt-3 lg:text-2xl fas fa-graduation-cap"></i>}
                            >
                                <h3 className="font-bold lg:text-xl vertical-timeline-element-title">Complete Web Development Course</h3>
                                <h4 className=" text-xs vertical-timeline-element-subtitle">Programming Hero</h4>
                                <p>

                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className=" lg:p-10 p-5 vertical-timeline-element--work"
                                contentStyle={{ background: '#333333', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  #FFB400' }}
                                date="2015 -2016"
                                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                                icon={<i class=" mt-3 lg:text-2xl fas fa-graduation-cap"></i>}
                            >
                                <h3 className="  lg:text-xl font-bold vertical-timeline-element-title">Higher Secondary Certificate</h3>
                                <h4 className="text-xs vertical-timeline-element-subtitle">Mia Jinnah Alom College</h4>
                                <p>
                                    GPA <span>4.81</span>
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className=" lg:p-10 p-5 vertical-timeline-element--work"
                                contentStyle={{ background: '#333333', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  #FFB400' }}
                                date="2014"
                                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                                icon={<i class=" mt-3 lg:text-2xl fas fa-graduation-cap"></i>}
                            >
                                <h3 className="  lg:text-xl font-bold vertical-timeline-element-title">Seconday School Certificate</h3>
                                <h4 className="text-xs vertical-timeline-element-subtitle">Garagonj Secondary School</h4>
                                <p>
                                    GPA <span>4.88</span>
                                </p>
                            </VerticalTimelineElement>



                            <VerticalTimelineElement
                                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                                icon={<i class=" mt-3 lg:text-2xl fas fa-graduation-cap"></i>}
                            />
                        </VerticalTimeline>
                    </div>
                </div>
                <div
                    className='flex flex-col order-first lg:order-last mb-5  justify-around items-center text-black '>
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
                </div>

            </div>
        </div>
    );
};

export default About;