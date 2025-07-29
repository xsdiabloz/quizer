import React from "react";
import "./results.css";

export const Results = ({ corrected, questions, setStep, setCorrected }) => {
  const tryAgain = () => {
    setStep(0);
    setCorrected(0);
  };

  return (
    <div className="result">
      <h1>
        Your score is {corrected} of {questions.length}
      </h1>
      <button onClick={tryAgain}>Try again</button>
    </div>
  );
};
