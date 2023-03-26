import React, { useState } from 'react';
import Image from 'next/image';
import OtpInput from 'react-otp-input';
import QuiddleLogo from '../../public/quiddle-logo.svg';
import { TiTickOutline } from 'react-icons/ti';
import { RiCloseLine } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import { gameActions } from '@/store/game-slice';

const Play = () => {
  const dispatch = useDispatch();
  const { remainingChance } = useSelector((state) => state.game);
  const [guessword, setGuessword] = useState('');
  const [isGuessing, setIsGuessing] = useState(true);
  const [isWon, setIsWon] = useState(false);

  const { name } = useSelector((state) => state.auth);
  const ChoosedWord = 'Wood'.toLocaleLowerCase();
  const [correctLetters, setCorrectLetters] = useState(0);
  const [correctLettersWithPosition, setCorrectLettersWithPosition] =
    useState(0);

  const checkWord = (word) => {
    if (word === ChoosedWord) {
      setIsWon(true);
    } else {
      let correctLetters = 0;
      let correctLettersWithPosition = 0;
      for (let i = 0; i < word.length; i++) {
        if (ChoosedWord.includes(word[i])) {
          if (ChoosedWord[i] === word[i]) {
            correctLettersWithPosition++;
          } else {
            correctLetters++;
          }
        }
      }
      setCorrectLetters(correctLetters);
      setCorrectLettersWithPosition(correctLettersWithPosition);
      dispatch(gameActions.reduceRemainingChance());
    }
  };

  const handleGuess = (e) => {
    e.preventDefault();
    if (remainingChance === 1) setIsGuessing(false);

    checkWord(guessword.toLocaleLowerCase());
    setGuessword('');
  };

  return (
    <div
      className="bg-[url('../../public/bg.webp')] bg-no-repeat bg-cover w-full h-screen  text-black py-[5rem] px-[8rem]
    ">
      <div className="bg-black/10 px-10 text-white flex flex-col items-center  rounded-lg py-5 h-full w-full">
        <div className="flex justify-between items-center w-full">
          <Image
            src={QuiddleLogo}
            alt="logo"
            className=" w-[15rem]  rounded-full"
          />
          <p className="text-2xl">Welcome {name}</p>
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

        {!isGuessing ? (
          <p className="mt-4 text-[#4f46e5] font-medium">
            {isWon ? 'Won the Game😇😇' : 'Lost the game😭😭'}
          </p>
        ) : (
          <div className="flex gap-5 mt-4">
            <div className="flex items-center justify-center">
              <RiCloseLine className="text-[2rem]" />
              <p className="text-2xl font-bold text-white ">{correctLetters}</p>
            </div>
            <div className="flex items-center justify-center">
              <TiTickOutline className="text-[2rem]" />
              <p className="text-2xl font-bold text-white ">
                {correctLettersWithPosition}
              </p>
            </div>
          </div>
        )}

        <button
          onClick={(e) => handleGuess(e)}
          className="bg-white/20 px-8 text-xl py-3 text-[#4f46e5] font-medium rounded-md hover:bg-gray-200 transition-colors mt-10">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Play;
