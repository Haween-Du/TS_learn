import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./views/login";
import Home from "./views/home";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
