import { Routes, Route } from "react-router-dom";
import { KeyboardLayoutProvider } from "./contexts/KeyboardLayoutContext";
import HomePage from "./pages/Home";
import TypingLesson from "./pages/TypingLesson";

function App() {
  return (
    <KeyboardLayoutProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/typing" element={<TypingLesson />} />
      </Routes>
    </KeyboardLayoutProvider>
  );
}

export default App;
