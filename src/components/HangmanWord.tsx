import React from "react";

//type definition
interface wordProps {
  wordToGuess: string;
  guessedLetters: string[];
  reveal: boolean;
}

const HangmanWord: React.FC<wordProps> = ({ wordToGuess, guessedLetters, reveal }) => {
  return (
    <div className="mb-4 mt-2 flex gap-[1.2rem]  items-center text-6xl font-mono ">
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} className="border-b-[0.4rem] border-solid border-b-zinc-900  ">
          <span
            className="font-bold uppercase"
            style={{
              visibility:
                reveal || guessedLetters.includes(letter) ? "visible" : "hidden",
              color: !reveal || guessedLetters.includes(letter) ? "green" : "red",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
