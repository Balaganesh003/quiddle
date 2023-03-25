import Image from 'next/image';
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import QuiddleLogo from '../../public/quiddle-logo.svg';
import { TiTickOutline } from 'react-icons/ti';
import { RiCloseLine } from 'react-icons/ri';

const Play = () => {
  const [guessword, setGuessword] = useState('');

  return (
    <div
      className="bg-[url('../../public/bg.webp')] bg-no-repeat bg-cover w-full h-screen  text-black py-[5rem] px-[8rem]
    ">
      <div className="bg-black/10 px-10 text-white flex flex-col items-center  rounded-lg py-5 h-full w-full">
        <div className="flex justify-between items-center w-full">
          <Image src={QuiddleLogo} alt="logo" className=" w-[15rem]" />
          <p className="text-2xl">Welcome Balaganesh...</p>
        </div>
        <h1 className="text-4xl font-bold text-white mb-10">Guess the word</h1>
        <OtpInput
          value={guessword}
          onChange={setGuessword}
          numInputs={4}
          renderInput={(props) => <input {...props} />}
          inputType="string"
          inputStyle={'otp-input'}
        />
        <div className="flex gap-5 mt-4">
          <div className="flex items-center justify-center">
            <RiCloseLine className="text-[2rem]" />
            <p className="text-2xl font-bold text-white ">0</p>
          </div>
          <div className="flex items-center justify-center">
            <TiTickOutline className="text-[2rem]" />
            <p className="text-2xl font-bold text-white ">0</p>
          </div>
        </div>
        <button className="bg-white/20 px-8 text-xl py-3 text-[#4f46e5] font-medium rounded-md hover:bg-gray-200 transition-colors mt-10">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Play;
