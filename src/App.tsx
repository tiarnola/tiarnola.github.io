import { Route, Routes } from "react-router-dom";
import {Home, CV} from "./pages"
import "./App.css"


function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </div>
  );
}

export default App;
