import React from "react";
import Button from '@mui/joy/Button';
import {
    Link, useLocation,useNavigate
  } from "react-router-dom";
  
const Navbar = (props) => {

    const location = useLocation();
    const nevigate = useNavigate();

    const handeClick=()=>{
      localStorage.removeItem('token');
      nevigate("/");
    }


  return (
    <div>
        
    <nav className={`navbar static-top navbar-expand-lg bg-dark border-bottom border-bottom-dark ${(location.pathname==='/' || location.pathname==='/signup' )  ? 'invisible':'visible'}`} data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1" to="/">🅼🆈 🅽🅾🆃🅴🆂</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 p-1">
        <li className="nav-item mx-3">
        <Link className={`nav-link ${location.pathname==='/about'? 'active':''}`}  aria-current="page" to="https://main.d3qcdmbk3rdvdq.amplifyapp.com/">About</Link>
        </li>
        <li className="nav-item mx-3">
        <Link className={`nav-link ${location.pathname==='/notes'? 'active':''}`}  aria-current="page" to="/notes">Notes</Link>
        </li>
        <li className="nav-item mx-3">
        <Link className={`nav-link ${location.pathname==='/addnotes'? 'active':''}`} aria-current="page" to="/addnotes" >Add Note</Link>
        </li>
      </ul>
      
      <div>
        <Button className="btn btn-outline-danger mx-1 fs-6" variant="contained"  onClick={handeClick}>Logout</Button>
      </div>

    </div>
  </div>
</nav>

</div>
  )
}

export default Navbar
