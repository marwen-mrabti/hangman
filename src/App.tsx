import React, { useEffect } from "react";
import words from "./wordList.json";
import { useRecoilState } from "recoil";
import { guessedLettersAtom, wordToGuessAtom } from "./recoil/atom";
import { HangmanDrawing, HangmanWord, KeyBoard } from "./components";

const App: React.FC = () => {
  const [wordToGuess, setWordToGuess] = useRecoilState<string>(wordToGuessAtom);
  const [guessedLetters, setGuessedLetters] =
    useRecoilState<string[]>(guessedLettersAtom);

  let incorrectLetters = guessedLetters.filter((letter) => !wordToGuess.includes(letter));

  const isLoser =
    incorrectLetters.length >= 6 || incorrectLetters.length >= wordToGuess.length;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  useEffect(() => {
    setWordToGuess(words[Math.floor(Math.random() * words.length)]);
  }, []);

  const handleOnReset = () => {
    setWordToGuess(words[Math.floor(Math.random() * words.length)]);
    setGuessedLetters([]);
  };

  return (
    <div className="max-w-[800px] h-[100vh] bg-zinc-100 flex flex-col items-center justify-start gap-[1rem] mx-auto px-2 py-4">
      <h2 className="text-4xl text-center font-sans font-semibold ">
        Lose and you will be hanged
      </h2>

      <h2
        className={`text-8xl ${isLoser && "text-red-400"} ${
          isWinner && "text-green-600"
        } text-center font-sans font-semibold `}
      >
        {isLoser && "You lost, you will be hanged 😞"}
        {isWinner && "You survived this time 😑"}
      </h2>

      <HangmanDrawing
        numberOfGuesses={incorrectLetters.length}
        isLoser={isLoser}
        isWinner={isWinner}
      />
      <HangmanWord
        wordToGuess={wordToGuess}
        guessedLetters={guessedLetters}
        reveal={isLoser}
      />

      {isWinner || isLoser ? (
        <button
          className="px-3 py-1 bg-sky-700 font-semibold text-2xl shadow-lg "
          onClick={handleOnReset}
        >
          play again
        </button>
      ) : (
        <KeyBoard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter((letter) => wordToGuess.includes(letter))}
          inactiveLetters={incorrectLetters}
        />
      )}
    </div>
  );
};

export default App;
