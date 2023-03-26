import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="bg-[#0c1324] text-white h-screen min-h-fit py-[8rem] lg:px-[5rem]">
      <div className="w-full h-full flex gap-3 flex-col items-center ">
        <h1 className="text-center uppercase ">Word Game Like Never Before</h1>
        <div className="w-full h-fit">
          <svg viewBox="0 0 2100 350">
            <text
              className="text-[13rem] md:text-[22rem] lg:text-15xl"
              x="50%"
              y="50%"
              dy=".4em"
              fill="transparent"
              textAnchor="middle">
              QUIDDLE
            </text>
          </svg>
        </div>

        <h1 className="text-center uppercase ">
          Experience The Next Level of Words Game
        </h1>
        <Link href="/play">
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="px-[10rem] py-4 mt-[4rem] rounded-md text-[1.5rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Play Now
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
