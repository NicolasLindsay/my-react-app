import "./NavBar.css";

function NavBar() {
  return (
    <header className="landing-nav">
      <span className="landing-nav__brand">App</span>
      <nav className="landing-nav__links" aria-label="Main">
        <a href="#features">Features</a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
}

export default NavBar;
