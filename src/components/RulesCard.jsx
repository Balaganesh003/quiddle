import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const RulesCard = ({ setIsRulesOpen }) => {
  return (
    <div className="m-5 rounded-lg w-[20%]  pb-4 h-[50%] bg-black/20  absolute bottom-0 left-0 ">
      <div className="text-center  rounded-t-lg mb-2 px-2 py-3 uppercase relative bg-black/[15%]">
        <p>Rules</p>
        <p
          onClick={(e) => setIsRulesOpen(false)}
          className="absolute cursor-pointer top-2 text-white/50 hover:text-white right-2">
          <AiOutlineCloseCircle className="w-6 h-6" />
        </p>
      </div>
      <div className="px-2  flex h-[calc(100%-3rem)] flex-col gap-2 scrollbar-hide overflow-y-scroll">
        <p className="text-white/70 text-base tracking-tight">
          The computer chooses a four-letter word.
        </p>
        <p className="text-white/70 text-base tracking-tight">
          The player makes a guess by entering a four-letter word.
        </p>
        <p className="text-white/70 text-base tracking-tight">
          The computer responds with the number of wrong❌ and ticks✅ in the
          guess.
        </p>
        <p className="text-white/70 text-base tracking-tight">
          A ❌ means that a letter in the guess is in the correct position,
          while a ✅ means that a letter in the guess is present in the
          computers word, but in the wrong position.
        </p>
        <p className="text-white/70 text-base tracking-tight">
          The player continues to make guesses until they correctly guess the
          computers word, or until they run out of guesses.
        </p>
      </div>
    </div>
  );
};

export default RulesCard;
