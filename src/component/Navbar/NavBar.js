import React from 'react'
import Cryp from './cryp.jpeg'
import './Navbar.css'
import Coin from '../Coin/Coin'
//import News from '../News/News'
const NavBar = () => {

  function home(e) {
    e.preventDefault();
    window.location = '../log';
}
function bh(e) {
  e.preventDefault();
  window.location = '../coinexchanges';
}
function mh(e) {
  e.preventDefault();
  window.location = '../news';
}
  return (

    <>
    <div>
      
       <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
<div className="left">
<img src={Cryp} alt="" className="image" />
</div>
    
    <div className="right">
      
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
  </button>
    </div>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/coinexchanges"  onClick={bh}>Coins exchanges</a>
        </li>
        
        <li className="nav-item">
          <a href="/portfolio"className="nav-link ">portfolio</a>
        </li>
        <li className="nav-item">
          <a href="/log " onClick={home} className="nav-link ">Log In</a>
        </li>
        <li className="nav-item">
          <a href="/news " onClick={mh} className="nav-link ">News</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <div className="bsdk"> <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
       </div>
       <div className="bh">
       <button className="btn btn-outline-success" type="submit">Search</button>

       </div>
        
      </form>
    </div>
  </div>
</nav>

</div>
<Coin />
    </>
  )
} 

export default NavBar;
