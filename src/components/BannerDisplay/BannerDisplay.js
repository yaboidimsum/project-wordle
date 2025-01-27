import React from "react";

function BannerDisplay({ answer, totalAnswer, finalAnswer }) {
  const checkTotalAnswer = () => {
    return totalAnswer > 5;
  };

  const checkBanner = () => {
    if (finalAnswer === true) {
      return (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {totalAnswer} guesses</strong>.
          </p>
          <button onClick={() => window.location.reload()}>
            Restart Game!
          </button>
        </div>
      );
    }
    if (checkTotalAnswer() === true) {
      return (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <button onClick={() => window.location.reload()}>
            Restart Game!
          </button>
        </div>
      );
    }
  };

  return <div>{checkBanner()}</div>;
}

export default BannerDisplay;
