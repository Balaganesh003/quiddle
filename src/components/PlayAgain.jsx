import React from 'react';
import celebration from '../../public/confetti.gif';
import Image from 'next/image';
import { useState } from 'react';
import { BsArrowClockwise } from 'react-icons/bs';

function Modal() {
  const [isRetrying, setIsRetrying] = useState(false);
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-20 pb-20 text-center ">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 backdrop-filter backdrop-blur"></div>
        </div>

        <div className="inline-block  bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all  sm:max-w-lg sm:w-full ">
          <div>
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              {'You won' === 'You won' ? (
                <Image src={celebration} alt="celebration" />
              ) : (
                <svg
                  className="h-6 w-6 text-red-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </div>
            <div className="mt-3 text-center sm:mt-5">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                You won
              </h3>
            </div>
          </div>
          <div className="mt-5 sm:mt-6 flex w-full gap-10 px-5">
            <button
              type="button"
              className="inline-flex justify-center w-1/2 rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm">
              Play Again
            </button>

            <button class="flex items-center space-x-2 justify-center px-4 py-2 w-1/2 font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 group ">
              <BsArrowClockwise className="group-hover:animate-spin" />
              <span>Retry</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
