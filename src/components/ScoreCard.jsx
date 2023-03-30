import React from 'react';
import GuessedCard from './GuessedCard';
import { useSelector, useDispatch } from 'react-redux';

const ScoreCard = () => {
  const { guessedWords, remainingChance } = useSelector((state) => state.game);

  return (
    <div className="sm:m-5 h-3/5 rounded-lg w-[90%] z-[50] bg-black/10  sm:w-[20%] sm:h-[50%] overflow-y-hidden  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:right-0 ">
      <div className="flex justify-between rounded-t-lg  px-4 py-3 bg-black/[35%]">
        <p className="xl:text-xl text-base text-white">Remaining Chance</p>
        <p className="Xl:text-xl flex items-center font-bold text-white">
          {remainingChance}
          <span>❤️</span>
        </p>
      </div>
      <div className="scrollbar-hide overflow-y-scroll h-[calc(100%-3rem)]">
        {guessedWords.map((word, index) => {
          const { guessedWord, letterInPosition, letterNotInPosition } = word;
          return (
            <GuessedCard
              key={index}
              ChoosedWord={guessedWord}
              correctLetters={letterNotInPosition}
              correctLettersWithPosition={letterInPosition}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ScoreCard;
