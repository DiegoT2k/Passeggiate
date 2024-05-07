import { Link } from "react-router-dom";
import '../css/navbar.css';

function Navbar() {
    return(

    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">

        <a className="navbar-brand"><Link className="text-light text-decoration-none" to={`/`}>La Montagna</Link></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page"><Link className="text-light text-decoration-none" to={`/`}>Home</Link></a>
            <a className="nav-link disabled">Features</a>
            <a className="nav-link disabled">Pricing</a>
            <a className="nav-link active" aria-disabled="true"><Link className="text-light text-decoration-none" to={`/contatti`}>Contatti</Link></a>
          </div>
        </div>

      </div>
    </nav>

    );
}

export default Navbar;