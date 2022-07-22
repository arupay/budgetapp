import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      Oops, this page does not exist. Click below to return to homepage
      <button>
        <Link to="/">Return</Link>
      </button>
    </div>
  );
}

export default Error;
