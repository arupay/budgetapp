import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import NavBar from "./Components/NavBar";

//Pages
import Error from "./Pages/Error";
import Homepage from "./Pages/Homepage";
import New from "./Pages/New";
import ShowPage from "./Pages/ShowPage";
import Edit from "./Pages/Edit";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/transactions" element={<Homepage />} />
          <Route path="*" element={<Error />} />
          <Route path="/transactions/new" element={<New />} />
          <Route path="/transactions/:idx/edit" element={<Edit />} />
          <Route path="/transactions/:idx" element={<ShowPage />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
