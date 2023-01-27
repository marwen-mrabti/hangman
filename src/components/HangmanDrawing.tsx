import React from "react";

//types definition
interface HangmanDrawingProps {
  numberOfGuesses: number;
  isLoser: boolean;
  isWinner: boolean;
}

const HEAD = (
  <div className="w-[50px] h-[50px]  border-[8px] border-solid border-slate-800 rounded-full absolute top-[4.5vh] left-[-22px]" />
);
const BODY = (
  <div className="absolute top-[9vh] left-[0px] w-[10px] h-[100px] bg-slate-800" />
);

const RIGHT_ARM = (
  <div className="absolute top-[6vh] left-[-40px] w-[10px] h-[100px] bg-slate-800 rotate-[-60deg] transform-origin-left-bottom" />
);

const LEFT_ARM = (
  <div className="absolute top-[6vh] left-[40px] w-[10px] h-[100px] bg-slate-800 rotate-[60deg] transform-origin-right-bottom" />
);

const RIGHT_LEG = (
  <div className="absolute top-[230px] right-[-80px] w-[100px] h-[10px] bg-slate-800 rotate-[60deg] transform-origin-left-bottom" />
);

const LEFT_LEG = (
  <div className="absolute top-[230px] right-[-30px] w-[100px] h-[10px] bg-slate-800 rotate-[-60deg] transform-origin-right-bottom" />
);

let BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

const HangmanDrawing: React.FC<HangmanDrawingProps> = ({
  numberOfGuesses,
  isLoser,
  isWinner,
}) => {
  return (
    <div className="min-h-[38vh] relative my-1">
      {isWinner
        ? null
        : isLoser
        ? BODY_PARTS.slice(0, 6)
        : BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="absolute top-0 left-[-15rem] min-w-[15rem] h-[0.5rem] bg-slate-800" />
      <div className="absolute top-0 left-[0rem] w-[0.5rem] h-[5vh] bg-slate-800" />
      <div className="absolute top-0 left-[-15rem] w-[0.5rem] h-[40vh] bg-slate-800" />
      <div className="absolute top-[40vh] left-[-20rem] min-w-[10rem] h-[0.5rem] bg-slate-800 rounded-lg" />
    </div>
  );
};

export default HangmanDrawing;
