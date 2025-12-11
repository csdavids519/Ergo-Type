// Level One - get keys to muscle memory, aaa, bbb, ccc
// display home row letters in order, x3
// then top row, then lower row
// display random letters x3
// display random letters x1

const [lettersArray] = useState(() =>
  faker.word
    .words(10)
    .split("")
    .map((letter: string) => [letter])
);

<h1 className="text-3xl font-bold">Welcome.</h1>
<div className="m-5 p-5 rounded-lg border-2 border-indigo-700">
  {lettersArray.map((letter, index) => (
    <span key={index} className={`target-text ${textColor(index)}`}>
      {letter}
    </span>
  ))}
</div>;
