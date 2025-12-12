import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import TypingLesson from "./pages/TypingLesson";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/typing" element={<TypingLesson />} />
    </Routes>
  );
}

export default App;
