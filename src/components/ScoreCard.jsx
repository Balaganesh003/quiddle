import React from 'react';
import GuessedCard from './GuessedCard';
import { useSelector, useDispatch } from 'react-redux';

const ScoreCard = () => {
  const { guessedWords, remainingChance } = useSelector((state) => state.game);

  return (
    <div className="m-5 rounded-lg w-[20%] h-[50%] overflow-y-hidden bg-black/20 absolute bottom-0 right-0">
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
