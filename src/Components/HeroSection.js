import React from 'react'
import image1 from "../assets/herosection-mage.jpeg"
import SplitText from "../ReactBits/SplitText";
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <div className='relative h-screen'>
      {/* Background image with dark overlay */}
      <div
        style={{
          backgroundImage: `url(${image1})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll',
          backgroundSize: 'cover',
        }}
        className='absolute inset-0 bg-black/60'
      />

      {/* Content with light text */}
      <div className='relative flex flex-col items-center justify-center h-full text-gray-950 text-center px-4'>
        <h1 className='font-bold mx-auto'>
          <SplitText
            text="One-Stop Shop for All Your Electrical Needs"
            className='text-center text-4xl lg:text-4xl font-bold mx-auto'
            delay={25}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className='w-96 mt-3 leading-7 font-medium text-xl text-gray-950'
        >
          From quality wires and switches to everyday electrical essentials — we power your home and business with trusted brands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className='flex w-96 justify-center my-4'
        >
          <button className='bg-shipe-cove-600 hover:bg-shipe-cove-500 text-white me-5 p-2 px-3 rounded'>
            Our Products
          </button>
          <button className='bg-slite-yellow text-shipe-cove-600 hover:opacity-90 p-2 px-3 rounded font-semibold'>
            Get Quote
          </button>
        </motion.div>
      </div>
    </div>
  )
}
