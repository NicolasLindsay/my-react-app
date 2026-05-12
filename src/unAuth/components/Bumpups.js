import "./Bumpups.css";

function Bumpups() {
  const agents = [
    {
      title: "Market Overview",
      description: "A broad agent for indexes, macro events, earnings, and daily market direction.",
    },
    {
      title: "Bonds",
      description: "Track yields, duration risk, Fed policy, credit markets, and fixed income themes.",
    },
    {
      title: "Chips",
      description: "Follow CPUs, GPUs, AI accelerators, foundries, and semiconductor supply chains.",
    },
    {
      title: "Defense",
      description: "Monitor contractors, government spending, geopolitics, and defense technology.",
    },
    {
      title: "Mag 7",
      description: "Track Apple, Microsoft, Nvidia, Amazon, Meta, Alphabet, and Tesla.",
    },
    {
      title: "Quantum",
      description: "Organize research around quantum computing, hardware, software, and public companies.",
    },
  ];

  return (
    <section id="agents" className="agent-grid-section" aria-labelledby="agents-heading">
      <div className="agent-grid-section__header">
        <p className="agent-grid-section__eyebrow">Specialized agents</p>
        <h2 id="agents-heading" className="agent-grid-section__title">
          Choose a research lane.
        </h2>
        <p className="agent-grid-section__subtitle">
          Each area can eventually have its own AI assistant, news feed, saved research,
          charts, and custom data sources.
        </p>
      </div>

      <div className="agent-grid">
        {agents.map((agent) => (
          <article className="agent-card" key={agent.title}>
            <h3>{agent.title}</h3>
            <p>{agent.description}</p>
            <a href={`#${agent.title.toLowerCase().replaceAll(" ", "-")}`}>
              Open agent
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Bumpups;
