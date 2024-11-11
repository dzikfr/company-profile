"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import profilePict from "@/assets/profilePict.png"
import obj from "@/assets/obj.png"
import { animate, useMotionTemplate, useMotionValue, motion } from 'framer-motion'
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

const Hero = () => {
    const color = useMotionValue(COLORS_TOP[0])

    useEffect(() => {
        animate(color, COLORS_TOP, { 
                    ease: "easeInOut",
                    duration: 5, 
                    repeat: Infinity, 
                    repeatType: "mirror" 
                })
    }, [])

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0% ,#000 50%, ${color})`
    const border = useMotionTemplate`1px solid ${color}`
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`

  return (
    <motion.section
    style={{
        backgroundImage
    }}
    className='relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200 '
    >

        <div className='z-10 flex flex-col items-center'>
           
           {/* This is whre you add your content */}

        </div>

        <div className='bg-circle-container'>
            <div className='bg-circle-background'></div>
            <div className='bg-circle'></div>
        </div>

    </motion.section>
  )
}

export default Hero
