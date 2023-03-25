import React, { useState } from 'react';
import GoogleLogo from '../../public/google-icon.svg';
import TwitterLogo from '../../public/twitter-logo.svg';
import Image from 'next/image';
import QuiddleLogo from '../../public/quiddle-logo.svg';
import { useRouter } from 'next/router';

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import app from '../utils/firebase';

const SignIn = () => {
  const router = useRouter();
  const provider = new GoogleAuthProvider();
  const firebaseAuth = getAuth(app);
  const [user, setUser] = useState(null);
  const [signUp, setSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const signInWithGoogle = async () => {
    try {
      const {
        user: { providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      router.push('/play');
      console.log(providerData);
    } catch (error) {
      console.log(error);
    }
  };

  const signUpWithEmail = async (e) => {
    e.preventDefault();
    try {
      const { user } = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      await updateProfile(firebaseAuth.currentUser, { displayName: name });
      setEmail('');
      setPassword('');
      setName('');
      router.push('/play');
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const signInWithEmail = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      setEmail('');
      setPassword('');
      router.push('/play');
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#0c1324]  h-screen overflow-hidden   py-[8rem] lg:px-[5rem] ">
      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="h-40 w-40 sm:h-56 sm:w-56 absolute  animate-pulse rounded-full bg-gradient-to-br from-blue-600 to-blue-400 sm:right-[3rem] -right-[1rem] bottom-[5rem]"></div>
        <div className="h-40 w-40 sm:h-56 sm:w-56 absolute animate-pulse rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 sm:left-[3rem] -left-[1rem]  top-[5rem]"></div>
      </div>
      <form className="sm:w-[24rem] w-[90%]  bg-opacity-25 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl backdrop-blur-lg border-2 border-white border-opacity-10 shadow-lg py-8 px-7">
        <div className="text-white flex items-center mx-auto w-[15rem] justify-center mb-4">
          <Image src={QuiddleLogo} alt="logo" className="" />
        </div>
        {!signUp && (
          <h3 className="text-base font-medium text-white/80 text-center mb-8">
            Welcome Back to quiddle 👋
          </h3>
        )}

        {signUp && (
          <div>
            <label
              htmlFor="username"
              className="block font-medium text-white mb-2">
              Username
            </label>
            <input
              required
              type="text"
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              id="username"
              className="w-full h-10 px-3 bg-white bg-opacity-25 rounded-md text-white placeholder-gray-400 text-sm font-light focus:outline-none focus:bg-opacity-50 mb-4"
            />
          </div>
        )}

        <label htmlFor="username" className="block font-medium text-white mb-2">
          Email
        </label>
        <input
          required
          type="text"
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          id="username"
          className="w-full h-10 px-3 bg-white bg-opacity-25 rounded-md text-white placeholder-gray-400 text-sm font-light focus:outline-none focus:bg-opacity-50 mb-4"
        />

        <label htmlFor="password" className="block font-medium text-white mb-2">
          Password
        </label>
        <input
          required
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          id="password"
          className="w-full h-10 px-3 bg-white bg-opacity-25 rounded-md text-white placeholder-gray-400 text-sm font-light focus:outline-none focus:bg-opacity-50 mb-8"
        />
        {signUp ? (
          <button
            onClick={(e) => signUpWithEmail(e)}
            className="w-full h-10 bg-white mb-4 text-black font-medium rounded-md hover:bg-gray-200 transition-colors">
            Sign Up
          </button>
        ) : (
          <button
            onClick={(e) => signInWithEmail(e)}
            className="w-full h-10 bg-white mb-4 text-black font-medium rounded-md hover:bg-gray-200 transition-colors">
            Sign In
          </button>
        )}

        <p className="text-gray-400 text-center flex items-center justify-center gap-2">
          {signUp ? 'Already have a account yet?' : `Don't have a account yet?`}
          <a
            onClick={(e) => setSignUp(!signUp)}
            className="text-white text-[1.05rem] cursor-pointer">
            {signUp ? 'SignIn' : 'SignUp'}
          </a>
        </p>
        <p className="text-white text-center my-2">Or</p>
        <div className="flex gap-7">
          <button
            type="button"
            onClick={signInWithGoogle}
            className="w-full h-10 flex items-center gap-3 justify-center bg-[#fefefe]  font-medium rounded-md  ">
            <Image
              src={GoogleLogo}
              alt="Google Logo"
              className="inline-block"
              width={17}
              height={17}
            />
            Google
          </button>
          {/* <button className="w-1/2 h-10 flex items-center gap-3 justify-center bg-[#fefefe] font-medium rounded-md  transition-colors">
            <Image
              src={TwitterLogo}
              alt="Google Logo"
              className="inline-block"
              width={26}
              height={26}
            />
            Twitter
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default SignIn;
