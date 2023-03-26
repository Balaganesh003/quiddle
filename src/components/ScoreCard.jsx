import React from 'react';
import GuessedCard from './GuessedCard';

const ScoreCard = ({
  remainingChance,
  ChoosedWord,
  correctLetters,
  correctLettersWithPosition,
}) => {
  return (
    <div className="m-5 rounded-lg w-[20%] bg-black/20  absolute bottom-0 right-0">
      <div className="relative  ">
        <div className="flex justify-between rounded-t-lg  px-4 py-2 bg-black/[35%]">
          <p className="xl:text-xl text-base text-white">Remaining Chance</p>
          <p className="Xl:text-xl flex items-center font-bold text-white">
            {remainingChance}
            <span>❤️</span>
          </p>
        </div>
        <div className="max-h-[250px] scrollbar-hide  overflow-y-scroll">
          <GuessedCard
            ChoosedWord={ChoosedWord}
            correctLetters={correctLetters}
            correctLettersWithPosition={correctLettersWithPosition}
          />
          <GuessedCard
            ChoosedWord={ChoosedWord}
            correctLetters={correctLetters}
            correctLettersWithPosition={correctLettersWithPosition}
          />
          <GuessedCard
            ChoosedWord={ChoosedWord}
            correctLetters={correctLetters}
            correctLettersWithPosition={correctLettersWithPosition}
          />
          <GuessedCard
            ChoosedWord={ChoosedWord}
            correctLetters={correctLetters}
            correctLettersWithPosition={correctLettersWithPosition}
          />
          <GuessedCard
            ChoosedWord={ChoosedWord}
            correctLetters={correctLetters}
            correctLettersWithPosition={correctLettersWithPosition}
          />
          <GuessedCard
            ChoosedWord={ChoosedWord}
            correctLetters={correctLetters}
            correctLettersWithPosition={correctLettersWithPosition}
          />
          <GuessedCard
            ChoosedWord={ChoosedWord}
            correctLetters={correctLetters}
            correctLettersWithPosition={correctLettersWithPosition}
          />
          <GuessedCard
            ChoosedWord={ChoosedWord}
            correctLetters={correctLetters}
            correctLettersWithPosition={correctLettersWithPosition}
          />
          <GuessedCard
            ChoosedWord={ChoosedWord}
            correctLetters={correctLetters}
            correctLettersWithPosition={correctLettersWithPosition}
          />
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
