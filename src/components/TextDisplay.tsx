import TextColor from "./TextColor";
// Display text for user to type based on level

interface TextDisplayProps {
  correctness: string[];
  lettersArray: string[][];
  cursorPosition: number;
}

export default function TextDisplay({
  correctness,
  lettersArray,
  cursorPosition,
}: TextDisplayProps) {
  return (
    <>
      {lettersArray.map((letter, index) => (
        <span
          key={index}
          className={`target-text ${TextColor(
            index,
            correctness,
            cursorPosition
          )}`}
        >
          {letter}
        </span>
      ))}
    </>
  );
}
