import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { CharacterPage } from "./components/CharactorList/CharacterPage/CharacterPage";
import { FilterPage } from "./components/CharactorList/FilterPage/FilterPage";



function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<FilterPage />}></Route>
          <Route path="/character" element={<CharacterPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
