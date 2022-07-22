import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import NavBar from "./Components/NavBar";

//Pages
import Error from "./Pages/Error";
import Homepage from "./Pages/Homepage";
import New from "./Pages/New";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<Error />} />
          <Route path="/new" element={<New />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
