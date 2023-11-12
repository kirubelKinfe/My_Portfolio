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
    <div className='bg-[#f9f9f9] flex flex-col  justify-center h-[100%] lg:h-[80vh] px-5 lg:px-40 mt-20 w-full' id='home'>
      <div className='flex flex-col-reverse lg:flex-row items-center justify-center sm:gap-12" id="home"'>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <div className='flex flex-col gap-4 sm:px-5 py-5 rounded-md'>
            <p className='text-4xl sm:text-5xl font-poppins text-gray-700 font-bold'>Full-Stack Web Developer <span className='text-4xl'>👋</span></p>
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
          <div className="rounded-full border-2 border-gray-900 mt-8">
            <Image
              src={images.personalPic}
              className="w-80 h-80 rounded-full bg-gray-300 object-cover"
              alt="banner"
            />
          </div>

        </div>
      </div>
      <div className='flex flex-col md:flex-row items-center gap-4 sm:mt-10 mt-5 sm:mx-5'>
        <div className='flex items-center gap-4'>
          <p className='text-gray-800'>Teck Stack</p>
          <p>|</p>
        </div>
        <div className='flex flex-row flex-wrap sm:items-center gap-4'>
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
