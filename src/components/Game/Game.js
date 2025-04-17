import React from "react";
import InputField from "../InputField";
import GuessResult from "../GuessResult";
import GuessDisplay from "../GuessDisplay";
import BannerDisplay from "../BannerDisplay";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessAnswer, setGuessAnswer] = React.useState([]);
  const [totalAnswer, setTotalAnswer] = React.useState(0);
  const [finalAnswer, setFinalAnswer] = React.useState(false);

  const arrValue = [...guessAnswer];

  const handleAnswer = (value) => {
    if (value === answer) {
      setFinalAnswer(true);
    }

    arrValue.push(value);
    setGuessAnswer(arrValue);
    setTotalAnswer(totalAnswer + 1);
  };

  return (
    <>
      {/* <GuessResult guessAnswer={guessAnswer} /> */}
      <GuessDisplay guessAnswer={guessAnswer} answer={answer} />
      <BannerDisplay
        answer={answer}
        totalAnswer={totalAnswer}
        finalAnswer={finalAnswer}
      />
      <InputField
        handleAnswer={handleAnswer}
        totalAnswer={totalAnswer}
        finalAnswer={finalAnswer}
      />
    </>
  );
}

export default Game;
