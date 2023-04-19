import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { Update } from "./components/Update";

import "./App.css";

function App() {
  return (
    // <div className="App">
    //   <h1>Hello</h1>
    // </div>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
