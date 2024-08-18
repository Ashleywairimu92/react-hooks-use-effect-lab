// import React, { useState } from "react";

// function Question({ question, onAnswered }) {
//   const [timeRemaining, setTimeRemaining] = useState(10);

//   // add useEffect code

//   function handleAnswer(isCorrect) {
//     setTimeRemaining(10);
//     onAnswered(isCorrect);
//   }

//   const { id, prompt, answers, correctIndex } = question;

//   return (
//     <>
//       <h1>Question {id}</h1>
//       <h3>{prompt}</h3>
//       {answers.map((answer, index) => {
//         const isCorrect = index === correctIndex;
//         return (
//           <button key={answer} onClick={() => handleAnswer(isCorrect)}>
//             {answer}
//           </button>
//         );
//       })}
//       <h5>{timeRemaining} seconds remaining</h5>
//     </>
//   );
// }

// export default Question;
import React, { useState, useEffect } from 'react';

function Question({ question, onAnswered }) {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
   
    const timeoutId = setTimeout(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      if (timer <= 0) {
        onAnswered(false);
      }
    };
  }, [timer, onAnswered]);

  useEffect(() => {
    if (timer <= 0) {
      onAnswered(false);
    }
  }, [timer, onAnswered]);

  return (
    <div>
      <div>{question.prompt}</div>
      <div>
        {question.answers.map((answer, index) => (
          <div key={index}>{answer}</div>
        ))}
      </div>
      <div>{timer} seconds remaining</div>
    </div>
  );
}

export default Question;
