"use client";
import React from 'react'

// type animation
import { TypeAnimation } from 'react-type-animation';

// motion
import { motion } from 'framer-motion';

import Image from 'next/image';
import heroBanner from '../components/assets/hero.svg';
import Link from 'next/link';


const Hero = () => {
  return (
    <section className='section' id="home">
	<div className='container mx-auto mt-16'>
		<div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
			<div className='flex-1 text-center font-secondary lg:text-left'>
				<motion.h1  initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}  className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'> WOLSOFT </motion.h1>
				<motion.div initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}  className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-1'>
					<TypeAnimation sequence={[ 'Obsługa informatyczna' , 2000, 'Oprogramowanie' , 2000, 'Sieci komputerowe' , 2000, 'Witryny internetowe' , 2000 ]} speed={50} className='text-teal-500 mr-4' wrapper='span' repeat={Infinity} />
				</motion.div>
				<div>
					<motion.p initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }} className='mb-8 max-w-lg mx-auto lg:mx-0 text-[18px] lg:text[30px]'> Rozumiemy język technologii, a naszą misją jest przekształcanie Twoich pomysłów w innowacyjne rozwiązania cyfrowe. </motion.p>
					<motion.div initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}>
						<Link href={'#offer'}>
							<div><button onClick={() => {}} type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Klikni, aby sprawdzić ofertę</button></div>
					</Link>
					</motion.div>
				</div>
			</div>
			<motion.div initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}>
				<Image className='m-auto' src={heroBanner} alt="hero" />
			</motion.div>
		</div>
	</div>
    </section>
  )
}

export default Hero