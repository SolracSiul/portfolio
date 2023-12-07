"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"

function Navbar() {
  return (
    <div className='w-full shadow-navbarShadow h-20 lg:-[12vh] sticky top-0 z-40 bg-body px-4 text-white'>
        <div className='max-w-container h-full mx-auto py-1 font-title flex items-center justify-between'>
            <motion.div initial={{x: -10, opacity: 0}}
                        animate={{x:10, opacity: 1}} className='w-14'  transition={{duration: 1}}>
                LOGO
            </motion.div>
            <div className='hidden mdl:inline-flex items-center gap-6'>
                <ul className='flex text-[14px] gap-4'>
                    <Link href="#home" className='flex items-center gap-1 font-medium text-textDark hover:text-greenText cursor-pointer duration-300 nav-link'>
                        <motion.li
                        initial={{x: -10, opacity: 0}}
                        animate={{x:0, opacity: 1}}
                        transition={{duration: 1}}>Home</motion.li>
                    </Link>
                    <Link href="#home" className='flex items-center gap-1 font-medium text-textDark hover:text-greenText cursor-pointer duration-300 nav-link'>
                        <motion.li
                        initial={{x: -10, opacity: 0}}
                        animate={{x:0, opacity: 1}}
                        transition={{duration: 1}}>About</motion.li>
                    </Link>
                    <Link href="#home" className='flex items-center gap-1 font-medium text-textDark hover:text-greenText cursor-pointer duration-300 nav-link'>
                        <motion.li
                        initial={{x: -10, opacity: 0}}
                        animate={{x:0, opacity: 1}}
                        transition={{duration: 1}}>Experience</motion.li>
                    </Link>
                    <Link href="#home" className='flex items-center gap-1 font-medium text-textDark hover:text-greenText cursor-pointer duration-300 nav-link'>
                        <motion.li
                        initial={{x: -10, opacity: 0}}
                        animate={{x:0, opacity: 1}}
                        transition={{duration: 1}}>Project</motion.li>
                    </Link>
                    <Link href="#home" className='flex items-center gap-1 font-medium text-textDark hover:text-greenText cursor-pointer duration-300 nav-link'>
                        <motion.li
                        initial={{x: -10, opacity: 0}}
                        animate={{x:0, opacity: 1}}
                        transition={{duration: 1}}>Contact</motion.li>
                    </Link>
                </ul>
                <a href="https://drive.google.com/file/d/1UZSJcG6NX-SpaS50W_GXs4OvWaFtbHor/view?usp=sharing" target='_blank'>
                        <motion.button
                        initial={{x: -10, opacity: 0}}
                        animate={{x:0, opacity: 1}}
                        transition={{duration: 1}}
                        className='px-4 py-2 rounded-md text-greenText text-[13px] border border-greenText hover:bg-hoverColor duration-300'>
                        RESUME
                        </motion.button>
                    </a>
            </div>
            {/* icon mobile */}
            <div className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-greenText cursor-pointer overflow-hidden group'>
                <span className='w-full h-[2px] bg-greenText inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
                <span className='w-full h-[2px] bg-greenText inline-flex transform group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>
                <span className='w-full h-[2px] bg-greenText inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>

            </div>
        </div>    
    </div>
  )
}

export default Navbar