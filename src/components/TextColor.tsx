// manage text color
export default function textColor(
  index: number,
  correctness: string[],
  cursorPosition: number
) {
  return correctness[index] === "wrong"
    ? "bg-red-500 font-bold"
    : index === cursorPosition
    ? "text-blue-600"
    : correctness[index] === "correct"
    ? "text-slate-100"
    : "text-slate-400";
}
