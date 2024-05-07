import { Link } from "react-router-dom";

function Navbar() {
    return(
    <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">La montagna</span>
          <Link to={`/contatti`}>Contatti</Link>
        </div>
    </nav>
    );
}

export default Navbar;