import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

// 1 render random words
// 1.5 add second array to track letter correctness
// 2 listen for key inputs
// a. create cursor tracking
// b. add target letter tracking
// 3 compare key input to target
// 4 set to correct or wrong color
// 5 increase cursor position if correct
//

function App() {
  // 1 render random words
  // use faker
  // split to array for each letter

  const [cursorPosition, setCursorPosition] = useState(0); // create cursor tracking
  const [lettersArray] = useState(() =>
    faker.word // useState to maintain data after re-render
      .words(10)
      .split("")
      .map((letter: string) => [letter])
  );
  const [correctness, setCorrectness] = useState(() =>
    Array(lettersArray.length).fill("static")
  ); // create array length of lettersArray to track correctness

  console.log("currsor pos:", cursorPosition);
  console.log("key Result:", correctness);

  // listen for key inputs
  useEffect(() => {
    // effect - what happens on keypress, and add key listner
    function handleKeyPress(event: KeyboardEvent) {
      console.log("key pressed:", event.key); //.key is a standard property of the DOM
      console.log("TOeval:", lettersArray[cursorPosition][0]);
      console.log("PARENT")
      setCorrectness((prev: string[]) => {
        const next = [...prev]; // dont edit the correctness aray directly, copy with ... spreader function
        console.log("NESTED")
        if (lettersArray[cursorPosition][0] === event.key) {
          next[cursorPosition] = "correct";
          setCursorPosition((x) => x + 1);
        } else {
          next[cursorPosition] = "wrong";
        }
        return next; // return the updated correctness array in full
      });
    }

    window.addEventListener("keydown", handleKeyPress); // 'keydown' is standard JS type as a string

    return () => {
      // cleanup
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [cursorPosition]);

  // manage text color
  function textColor(index: number) {
    console.log("COLOR CHECK", lettersArray[index][0])
    return correctness[index] === "wrong"
      ? "bg-red-500 font-bold"
      : index === cursorPosition
      ? "text-blue-600"
      : correctness[index] === "correct"
      ? "text-slate-100"
      : "text-slate-400";
  }

  return (
    <>
      <h1 className="text-3xl font-bold">Welcome.</h1>
      <div className="m-5 p-5 rounded-lg border-2 border-indigo-700">
        {lettersArray.map((letter, index) => (
          <span key={index} className={`target-text ${textColor(index)}`}>
            {letter}
          </span>
        ))}
      </div>
    </>
  );
}

export default App;
