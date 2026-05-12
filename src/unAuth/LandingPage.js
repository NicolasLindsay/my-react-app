import "./LandingPage.css";
import NavBar from "./components/NavBar";
import Bumpups from "./components/Bumpups";
import Timestamps from "./components/Timestamps";
import Footer from "./components/Footer";

function LandingPage() {
  return (
    <div className="landing-page">
      <NavBar />

      <main className="landing-page__main">
        <section className="landing-hero">
          <p className="landing-hero__eyebrow">Market Intelligence Dashboard</p>

          <h1 className="landing-hero__title">
            Specialized AI agents for markets, bonds, chips, defense, and more.
          </h1>

          <p className="landing-hero__subtitle">
            Track news, organize research, monitor key themes, and eventually ask
            focused AI agents questions about specific sectors.
          </p>

          <div className="landing-hero__actions">
            <a href="#agents" className="landing-hero__button landing-hero__button--primary">
              Explore agents
            </a>
            <a href="#market-brief" className="landing-hero__button landing-hero__button--secondary">
              View market brief
            </a>
          </div>
        </section>

        <Bumpups />

        <Timestamps />
      </main>

      <Footer />
    </div>
  );
}

export default LandingPage;