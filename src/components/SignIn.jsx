import React from 'react';
import GoogleLogo from '../../public/google-icon.svg';
import TwitterLogo from '../../public/twitter-logo.svg';
import Image from 'next/image';

const SignIn = () => {
  return (
    <div className="bg-[#0c1324] min-h-screen min-w-screen py-[8rem] px-[5rem]">
      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className=" h-56 w-56 absolute rounded-full bg-gradient-to-br from-blue-600 to-blue-400 right-[3rem] bottom-[5rem]"></div>
        <div className="h-56 w-56 absolute rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 left-[3rem] top-[5rem]"></div>
      </div>
      <form className=" w-[24rem] min-w-screen  bg-opacity-25 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl backdrop-filter backdrop-blur-lg border-2 border-white border-opacity-10 shadow-lg py-8 px-7">
        <h1 className="text-white text-3xl text-center mb-4">Quiddle</h1>
        <h3 className="text-base font-medium text-white/80 text-center mb-8">
          Sign In to your account
        </h3>

        <label htmlFor="username" className="block font-medium text-white mb-2">
          Username
        </label>
        <input
          type="text"
          placeholder="Email or Phone"
          id="username"
          className="w-full h-10 px-3 bg-white bg-opacity-25 rounded-md text-white placeholder-gray-400 text-sm font-light focus:outline-none focus:bg-opacity-50 mb-4"
        />

        <label htmlFor="password" className="block font-medium text-white mb-2">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="w-full h-10 px-3 bg-white bg-opacity-25 rounded-md text-white placeholder-gray-400 text-sm font-light focus:outline-none focus:bg-opacity-50 mb-8"
        />

        <button className="w-full h-10 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition-colors">
          Sign Up
        </button>
        <p className="text-white text-center my-2">Or</p>
        <div className="flex gap-7">
          <button className="w-1/2 h-10 flex items-center gap-3 justify-center bg-[#fefefe]  font-medium rounded-md  ">
            <Image
              src={GoogleLogo}
              alt="Google Logo"
              className="inline-block"
              width={17}
              height={17}
            />
            Google
          </button>
          <button className="w-1/2 h-10 flex items-center gap-3 justify-center bg-[#fefefe] font-medium rounded-md  transition-colors">
            <Image
              src={TwitterLogo}
              alt="Google Logo"
              className="inline-block"
              width={26}
              height={26}
            />
            Twitter
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
