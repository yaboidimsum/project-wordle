import React from "react";
import InputField from "../InputField";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const handleAnswer = (guess) => {
  // console.info({ guess });
  return null;
};

function Game() {
  return (
    <>
      <InputField handleAnswer={handleAnswer} />
    </>
  );
}

export default Game;
