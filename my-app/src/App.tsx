import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./signuppage/Signup";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
