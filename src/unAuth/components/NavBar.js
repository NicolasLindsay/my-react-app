import "./NavBar.css";

function NavBar() {
  return (
    <header className="navbar">
      <a href="/" className="navbar__brand">
        MarketHub
      </a>

      <nav className="navbar__links" aria-label="Main navigation">
        <a href="#market-brief">Overview</a>
        <a href="#agents">Agents</a>
        <a href="#bonds">Bonds</a>
        <a href="#chips">Chips</a>
        <a href="#saved">Saved</a>
      </nav>
    </header>
  );
}

export default NavBar;