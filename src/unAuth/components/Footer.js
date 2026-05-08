import "./Footer.css";

function Footer() {
  return (
    <footer className="landing-footer">
      <p className="landing-footer__copy">© {new Date().getFullYear()} App. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
