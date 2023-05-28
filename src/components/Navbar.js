function Navbar() {
  
    return (

<nav className="app-header">
  <div className="logo">IMRAN</div>
  <ul className="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
    <li><a href="#">Blog</a></li>
  </ul>
  <div className="burger">
    <div class="line"></div>
    <div className="line"></div>
    <div className="line"></div>
  </div>
</nav>

    );
  }
  
  export default Navbar;