import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Signin from "./signuppage/Signin";
import Signup from "./signuppage/Signup";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
