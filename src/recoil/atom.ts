import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const wordToGuessPersist = recoilPersist({ key: "wordToGuess" });
const guessedLettersPersist = recoilPersist({ key: "guessedLetters" });

export const wordToGuessAtom = atom({
  key: "wordToGuess",
  default: "",
  dangerouslyAllowMutability: true,
  effects_UNSTABLE: [wordToGuessPersist.persistAtom],
});

export const guessedLettersAtom = atom({
  key: "guessedLetters",
  default: [],
  dangerouslyAllowMutability: true,
  effects_UNSTABLE: [guessedLettersPersist.persistAtom],
});
