import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import OtpInput from 'react-otp-input';
import QuiddleLogo from '../../public/quiddle-logo.svg';
import { TiTickOutline } from 'react-icons/ti';
import { RiCloseLine } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import { gameActions } from '@/store/game-slice';
import { BiHelpCircle } from 'react-icons/bi';
import RulesCard from '@/components/RulesCard';
import ScoreCard from '@/components/ScoreCard';
import selectWord from '@/utils/selectWord';

const Play = () => {
  const dispatch = useDispatch();

  const handelChooseWord = () => {
    const word = selectWord();
    dispatch(gameActions.setChoosedWord(word));
  };

  useEffect(() => {
    handelChooseWord();
  }, []);

  const { remainingChance, choosedWord } = useSelector((state) => state.game);

  const [guessword, setGuessword] = useState('');
  const [isGuessing, setIsGuessing] = useState(true);
  const [isWon, setIsWon] = useState(false);
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const { name } = useSelector((state) => state.auth);
  const [correctLetters, setCorrectLetters] = useState(0);
  const [correctLettersWithPosition, setCorrectLettersWithPosition] =
    useState(0);

  const AddGuessedWord = (
    guessword,
    correctLetters,
    correctLettersWithPosition
  ) => {
    dispatch(
      gameActions.addGuessedWord({
        guessedWord: guessword,
        letterInPosition: correctLettersWithPosition,
        letterNotInPosition: correctLetters,
      })
    );
  };

  const handleEndGame = () => {
    setIsGuessing(false);
    dispatch(gameActions.resetRemainingChance());
    dispatch(gameActions.resetGuessedWords());
    dispatch(gameActions.resetChooseWord());
  };

  useEffect(() => {}, [isGuessing]);

  const checkWord = (word) => {
    let correctLetters = 0;
    let correctLettersWithPosition = 0;
    for (let i = 0; i < word.length; i++) {
      if (choosedWord.includes(word[i])) {
        if (choosedWord[i] === word[i]) {
          correctLettersWithPosition++;
        } else {
          correctLetters++;
        }
      }
    }
    if (correctLettersWithPosition === choosedWord.length) {
      handleEndGame();
      setIsWon(true);
    } else {
      AddGuessedWord(guessword, correctLetters, correctLettersWithPosition);
      setCorrectLetters(correctLetters);
      setCorrectLettersWithPosition(correctLettersWithPosition);
      dispatch(gameActions.reduceRemainingChance());
    }
  };

  const handleGuess = (e) => {
    e.preventDefault();
    checkWord(guessword.toLocaleLowerCase());
    if (remainingChance === 1) {
      handleEndGame();
    }
    setGuessword('');
  };

  return (
    <div
      className="bg-[url('../../public/bg.webp')]  bg-no-repeat bg-cover w-full h-screen  text-black py-[5rem] px-[8rem]
    ">
      <div className="bg-black/10 px-10  text-white rounded-lg py-5 h-full w-full  relative">
        <div className="flex justify-between  items-center w-full">
          <Image
            src={QuiddleLogo}
            alt="logo"
            className=" w-[15rem]  rounded-full"
          />
          <p className="text-2xl">Welcome {name}</p>
        </div>
        <div className="">
          <div className="flex h-full flex-col items-center">
            <h1 className="text-4xl font-bold text-white pb-10">
              Guess the word
            </h1>
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
                  <p className="text-2xl font-bold text-white ">
                    {correctLetters}
                  </p>
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
          {/* Guessed List */}
          <ScoreCard
            remainingChance={remainingChance}
            ChoosedWord={choosedWord}
            correctLetters={correctLetters}
            correctLettersWithPosition={correctLettersWithPosition}
          />

          {isRulesOpen ? (
            <RulesCard setIsRulesOpen={setIsRulesOpen} />
          ) : (
            <div
              onClick={() => setIsRulesOpen(true)}
              className="absolute bottom-0 left-0 m-4 cursor-pointer rounded-full">
              <BiHelpCircle className="text-white   text-[3rem]" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Play;
