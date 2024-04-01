import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./views/login";
import Home from "./views/home";
import Test from "./views/test";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home" element={<Test />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
