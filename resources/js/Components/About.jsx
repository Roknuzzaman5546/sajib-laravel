import { Link } from '@inertiajs/react'
import React from 'react'

const About = () => {
    return (
        <div className=' md:max-w-screen-2xl w-11/12 mx-auto my-24'>
            <h2 className=' text-5xl font-bold font-mono text-center text-black mb-10'>See about</h2>
            <div className=' mx-auto flex flex-col lg:flex-row lg:justify-center xl:justify-between md:gap-[100px] gap-3 md:items-center'>
                <div className=' lg:w-2/5 w-full relative'>
                    <img className=' lg:max-w-[300px] md:min-w-[500px] lg:min-w-[350px] xl:min-w-[504px] md:min-h-[330px] xl:min-h-[404px] rounded-[5px] z-10' src='./assets/about.jpg' alt="" />
                    <div className='absolute top-[150px] md:left-[0px] md:top-[50px] lg:left-[180px] lg:top-[180px] xl:left-[300px]  xl:top-[205px] min-w-[150px] lg:min-w-[200px] xl:min-w-[300px] min-h-[230px] hidden lg:flex'>
                        <img className='min-w-full min-h-full rounded-[5px]' src='./assets/about2.jpg' alt="" />
                    </div>
                </div>
                <div className=' lg:w-2/5 w-full space-y-4'>
                    <h2 className=' text-5xl font-bold font-mono'>Enjoy Our <br /> Place & Hotel For A Weekend Longer Stay</h2>
                    <p className=' text-xl'>Please <Link href={route('contact')} ><span className=' text-red-400 font-bold'>Contact</span></Link> us in our contact page</p>
                    <p>Founded on the principles of wanderlust and a love for exploration, [Your Website Name] is more than just a travel website; its a community of passionate globetrotters dedicated to curating exceptional travel experiences. From the moment you land on our site to the return home, we are committed to making every step of your journey seamless and unforgettable.Your adventure begins with a click, where our carefully designed user interface invites you to explore a world of possibilities. Navigate with ease, discover handpicked destinations, and immerse yourself in a treasure trove of travel inspiration that sparks the wanderer within you. At [Your Website Name], we understand that the journey begins the moment you engage with our platform, and we take pride in crafting an online experience as memorable as the destinations we showcase.</p>
                </div>
            </div>
        </div>
    )
}

export default About
