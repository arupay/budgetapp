import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <h1>
        <Link to="/">Budget Genie</Link>
      </h1>
      <button>
        <Link to="/new">new transaction</Link>
      </button>
    </div>
  );
}

export default NavBar;
