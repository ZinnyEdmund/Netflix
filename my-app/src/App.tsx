import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./signuppage/Signup";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<Signup />} />
        <Route path="/Signup" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
