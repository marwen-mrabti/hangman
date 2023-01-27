import React from "react";
import { useSetRecoilState } from "recoil";
import { guessedLettersAtom } from "../recoil/atom";

//type definition
interface Keyboard_Props {
  disabled: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
}

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const KeyBoard: React.FC<Keyboard_Props> = ({
  disabled,
  activeLetters,
  inactiveLetters,
}) => {
  const setGuessedLetters = useSetRecoilState<string[]>(guessedLettersAtom);

  return (
    <div className="w-full px-2 grid grid-cols-8 gap-[0.5rem] ">
      {KEYS.map((key, index) => (
        <button
          key={index}
          disabled={disabled || inactiveLetters.includes(key)||activeLetters.includes(key)}
          className={`btn shadow-lg ${activeLetters.includes(key) && "active"} ${
            inactiveLetters.includes(key) && "inactive"
          } `}
          onClick={() => {
            setGuessedLetters((prev) => [...prev, key]);
          }}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

export default KeyBoard;
