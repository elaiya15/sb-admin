
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Buttons from "./Components/Button";
import Cards from "./Components/Cards";
import Tables from "./Components/Table";
import "./vendor/fontawesome-free/css/all.min.css";
import "./css/sb-admin-2.min.css";
import Color from "./Components/Color";
import Boders from "./Components/Boders";
import Animations from "./Components/Animations";
import Other from "./Components/Other";
import Register  from "./Components/Register";
import Password  from "./Components/Password";
import Error from "./Components/404";
import Blank from "./Components/Blank";
import Charts from "./Components/Charts";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/button" element={<Buttons />} />
          <Route path="/card" element={<Cards />} />
          <Route path="/table" element={<Tables />} />
          <Route path="/Color" element={<Color />} />
          <Route path="/border" element={<Boders />} />
          <Route path="/animation" element={<Animations />} />
          <Route path="/other" element={<Other/>} />
          <Route path="/register" element={< Register/>} />
          <Route path="/Password" element={<Password/>} />
          <Route path="/404" element={<Error/>} />
          <Route path="/blank" element={< Blank/>} />
          <Route path="/charts" element={<Charts />} />
          {/* <Route path="/" element={< />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
