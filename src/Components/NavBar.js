import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <h1>
        <Link to="/transactions">Budget Genie</Link>
      </h1>
      <button>
        <Link to="/transactions/new">new transaction</Link>
      </button>
    </div>
  );
}

export default NavBar;
