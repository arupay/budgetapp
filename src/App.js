import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Favicon from "react-favicon";

//Components
import NavBar from "./Components/NavBar";

//Pages
import Error from "./Pages/Error";
import Homepage from "./Pages/Homepage";
import New from "./Pages/New";
import ShowPage from "./Pages/ShowPage";
import Edit from "./Pages/Edit";
import RootPage from "./Pages/RootPage";
import About from "./Pages/About";

function App() {
  return (
    <div className="App">
      <Favicon url="https://gcdnb.pbrd.co/images/0SnLKWeEcSzD.png?o=1" />
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<RootPage />} />
          <Route path="/transactions" element={<Homepage />} />
          <Route path="/about" element={<About />} />
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
