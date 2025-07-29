import React, { useState } from "react";
import "../Game/game.css";

export const Game = ({ question, setCorrected, setStep }) => {
  function nextStep(index) {
    setStep((prev) => prev + 1);
    if (question.correct === index) {
      setCorrected((prev) => prev + 1);
    }
  }

  return (
    <div className="game">
      <h1>{question.name}</h1>
      <ul>
        {question.variants.map((val, index) => (
          <li onClick={() => nextStep(index)} key={index}>
            {val}
          </li>
        ))}
      </ul>
    </div>
  );
};
