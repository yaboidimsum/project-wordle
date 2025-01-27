import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function GuessDisplay({ guessAnswer, answer }) {
  // newArray = guessAnswer.map((item) => item.split(""));

  // console.log(`this is the new array {newArray}`);
  // console.log(newArray);
  // console.log(guessAnswer);

  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((_, rowIndex) => (
          <p key={rowIndex} className="guess">
            {
              /*Basically it uses the index from range to return the value from array of guessAnswer and match it with the answer*/
              (checkGuess(guessAnswer[rowIndex], answer) || Array(5).fill(""))
                /*Since the checkGuess return an array of object, i use {letter, status}   */
                .map(({ letter, status }, nestedIndex) => (
                  <span key={nestedIndex} className={`cell ${status}`}>
                    {letter}
                  </span>
                ))
            }
          </p>
        ))}
      </div>
    </>
  );
}

export default GuessDisplay;
