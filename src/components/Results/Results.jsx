import React from "react";

export const Results = ({ corrected, questions }) => {
  return (
    <div className="result">
      <h1>
        Your score is {corrected} of {questions.length}
      </h1>
    </div>
  );
};
