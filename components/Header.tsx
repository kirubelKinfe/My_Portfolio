"use client"
import { motion } from 'framer-motion'
import { images } from '@constants/index'
import Image from 'next/image'
import { Linkedin, Github } from 'lucide-react'
import Link from 'next/link'
import Icon1 from '@public/icons.svg'
import Icon2 from '@public/icons (1).svg'
import Icon3 from '@public/icons (2).svg'
import Icon4 from '@public/icons (3).svg'
import Icon5 from '@public/node express.png'


const Header = () => {
  return (
    <div className='bg-[#f9f9f9] flex flex-col justify-center h-[50vh] lg:h-[80vh]  px-40 mt-20 w-full' id='home'>
      <div className='flex items-center justify-center sm:gap-12" id="home"'>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <div className='flex flex-col gap-4 p-5 rounded-md'>
            <p className='text-5xl text-gray-800 font-bold'>Full-Stack Web Developer <span className='text-4xl'>👋</span></p>
            <p className='text-gray-700'>Hi, I'm Kirubel Kinfe. A passionate Full-Stack Web Developer based in Ethiopia, Addis Ababa. 🇪🇹</p>
            <div className='flex items-center gap-2'>
              <Link href={'https://www.linkedin.com/in/kirubel-kinfe-4698ab217'} target='_blank'>
                <Linkedin size={28} className='text-gray-700 hover:text-blue-500' />
              </Link>
              <Link href={'https://github.com/kirubelKinfe'} target='_blank'>
                <Github size={28} className='text-gray-700 hover:text-blue-500' />
              </Link>
            </div>
          </div>
        </motion.div>
        <div className='flex-1 flex items-center justify-center'>
          <div className="rounded-full border-2 border-gray-900 hidden sm:block mt-8">
            <Image
              src={images.personalPic}
              className="w-80 h-80 rounded-full bg-gray-300 object-cover"
              alt="banner"
            />
          </div>

        </div>
      </div>
      <div className='flex items-center gap-4 mt-10 mx-5'>
        <p className='text-gray-800'>Teck Stack</p>
        <p>|</p>
        <div className='flex items-center gap-4'>
          <Image
            src={Icon1}
            className="cursor-pointer hover:-translate-y-2 duration-300 transform"
            alt="tech stack"
          />
          <Image
            src={Icon2}
            className="cursor-pointer hover:-translate-y-2 duration-300 transform"
            alt="tech stack"
          />
          <Image
            src={Icon3}
            className="cursor-pointer hover:-translate-y-2 duration-300 transform"
            alt="tech stack"
          />
          <Image
            src={Icon4}
            className="cursor-pointer hover:-translate-y-2 duration-300 transform"
            alt="tech stack"
          />
          <Image
            src={Icon5}
            width={100}
            height={100}
            className="w-50 h-50 cursor-pointer hover:-translate-y-2 duration-300 transform"
            alt="tech stack"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
