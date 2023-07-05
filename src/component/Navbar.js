import React, {useEffect} from "react";
import {
    Link, useLocation
  } from "react-router-dom";
  
const Navbar = () => {

    const location = useLocation();
    useEffect(()=>{
        console.log(location.pathname);
    },[location])


  return (
    <div>
        
    <nav className="navbar static-top navbar-expand-lg bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1" to="/">🅼🆈 🅽🅾🆃🅴🆂</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 p-1">
        <li className="nav-item d-flex">
        <Link className={`nav-link ${location.pathname==='/'? 'active':''}`} aria-current="page" to="/">Home</Link>
        <Link className={`nav-link ${location.pathname==='/about'? 'active':''}`} aria-current="page" to="/about">about</Link>
        <Link className={`nav-link ${location.pathname==='/addnotes'? 'active':''}`} aria-current="page" to="/addnotes">Add Note</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

</div>
  )
}

export default Navbar
