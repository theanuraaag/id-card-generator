import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Generator from "./pages/Generator";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/generate" element={<Generator />} />
    </Routes>
  );
};

export default App;
