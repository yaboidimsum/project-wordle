import React from "react";

function InputField({ handleAnswer }) {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = guess.toUpperCase();

    // Alternate check for the regex
    if (value.length < 5 || value.length > 5) {
      window.alert("Please Input 5 alphabet");
      setGuess("");
      return;
    }

    handleAnswer(value);
    console.info({ guess: value });
    setGuess("");
  };

  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          id="guess-input"
          type="text"
          value={guess}
          onChange={(e) => {
            setGuess(e.target.value);
          }}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
        />
      </form>
    </div>
  );
}

export default InputField;
