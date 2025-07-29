import React, { useState } from "react";
import { questions } from "./questions";

export default function Quizer() {
  const [step, setStep] = useState(0);
  const question = questions[step];

  return <h1>{question.name}</h1>;
}
