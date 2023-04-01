import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import OtpInput from 'react-otp-input';
import { TiTickOutline } from 'react-icons/ti';
import { RiCloseLine } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import { gameActions } from '@/store/game-slice';
import { BiHelpCircle } from 'react-icons/bi';
import RulesCard from '@/components/RulesCard';
import ScoreCard from '@/components/ScoreCard';
import selectWord from '@/utils/selectWord';
import toast, { Toaster } from 'react-hot-toast';

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
  const [isGuessedCardOpen, setIsGuessedCardOpen] = useState(false);

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

  const checkWord = (word, loading) => {
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
      toast.success('You Won the Game');
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
    if (guessword.length !== 4) {
      toast.error('Please enter 4 letter word');
      return;
    }
    checkWord(guessword.toLocaleLowerCase());
    if (remainingChance === 1) {
      handleEndGame();
    }
    setGuessword('');
  };

  return (
    <div
      className="bg-[url('../../public/bg.webp')]  bg-no-repeat bg-cover w-full h-screen  text-black px-[1.5rem] py-[2.5rem] lg:py-[3rem] lg:px-[5rem]  2xl:py-[5rem] 2xl:px-[8rem]
    ">
      <div className="relative h-full ">
        <Toaster />
        <div
          className={`bg-black/10 sm:px-10 p-4  text-white rounded-lg py-5 h-full ${
            (isGuessedCardOpen && 'blur-md') ||
            (isRulesOpen && 'blur-md sm:blur-0')
          } `}>
          <div className="flex justify-between items-center w-full">
            <p className="text-[2rem] sm:text-[3rem] uppercase quiddle">
              Quiddle
            </p>
            <p className="text-2xl hidden sm:block">
              Welcome <span>{name}</span>
            </p>

            <p
              onClick={(e) => setIsGuessedCardOpen(true)}
              className="sm:hidden text-[1.5rem]">
              ❤️{remainingChance}
            </p>
          </div>
          <div className="h-[calc(100%-5rem)] sm:h-auto sm:mt-5 flex items-center">
            <div className="flex h-full w-full flex-col items-center justify-center">
              <h1 className="sm:text-4xl text-3xl font-bold text-white pb-5 sm:pb-10">
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
                <p className="mt-4 text-[#4f46e5]   font-medium text-2xl ">
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
                className="hover:bg-white transition-all duration-200 px-8 text-xl py-3 text-[#4f46e5] font-medium rounded-md bg-gray-100/80  mt-10">
                Submit
              </button>
            </div>
            {/* Guessed List */}

            {!isRulesOpen && (
              <div
                onClick={() => setIsRulesOpen(true)}
                className="absolute bottom-0 left-0 m-4 cursor-pointer rounded-full">
                <BiHelpCircle className="text-white   text-[3rem]" />
              </div>
            )}
          </div>
        </div>

        <RulesCard isRulesOpen={isRulesOpen} setIsRulesOpen={setIsRulesOpen} />
        <ScoreCard
          isGuessedCardOpen={isGuessedCardOpen}
          setIsGuessedCardOpen={setIsGuessedCardOpen}
        />
      </div>
    </div>
  );
};

export default Play;
