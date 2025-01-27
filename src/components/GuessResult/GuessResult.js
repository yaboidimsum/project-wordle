import React from "react";

function GuessResult({ guessAnswer }) {
  // console.log(guessAnswer);
  return (
    <div className="guess-results">
      {guessAnswer.map((item, index) => {
        return (
          <p key={index} className="guess">
            {item}
          </p>
        );
      })}
      {/* <p className="guess">FIRST</p>
      <p className="guess">GUESS</p> */}
    </div>
  );
}

export default GuessResult;
