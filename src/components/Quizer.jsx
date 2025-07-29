import React, { useState } from "react";
import { questions } from "./questions/questions";
import { Results } from "./Results/Results";
import { Game } from "./Game/Game";

export default function Quizer() {
  const [step, setStep] = useState(0);
  const question = questions[step];
  const [corrected, setCorrected] = useState(0);

  return (
    <div>
      {step < questions.length ? (
        <Game
          setStep={setStep}
          question={question}
          setCorrected={setCorrected}
        />
      ) : (
        <div>
          <Results
            setCorrected={setCorrected}
            corrected={corrected}
            questions={questions}
            setStep={setStep}
          />
        </div>
      )}
    </div>
  );
}
