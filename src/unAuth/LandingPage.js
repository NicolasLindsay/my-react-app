import "./LandingPage.css";
import Bumpups from "./components/Bumpups";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Timestamps from "./components/Timestamps";

function LandingPage() {
  return (
    <div className="landing-page">
      <NavBar />

      <main className="landing-page__main">
        <h1 className="landing-title">Hello Page</h1>
        <p className="landing-subtitle">Welcome to your React landing page.</p>
        <Bumpups />
        <Timestamps />
      </main>

      <Footer />
    </div>
  );
}

export default LandingPage;
