import "./Timestamps.css";

function Timestamps() {
  const updates = [
    {
      category: "Market Overview",
      time: "Today",
      title: "Major indexes mixed as investors watch rates and earnings.",
    },
    {
      category: "Bonds",
      time: "Today",
      title: "Treasury yields remain a key driver for equity valuations.",
    },
    {
      category: "Chips",
      time: "This week",
      title: "AI infrastructure demand continues to shape semiconductor coverage.",
    },
    {
      category: "Defense",
      time: "This week",
      title: "Geopolitical headlines keep defense contractors in focus.",
    },
  ];

  return (
    <section id="market-brief" className="market-brief" aria-labelledby="market-brief-heading">
      <div className="market-brief__header">
        <p className="market-brief__eyebrow">Research feed</p>
        <h2 id="market-brief-heading" className="market-brief__title">
          Recent market brief
        </h2>
      </div>

      <div className="market-brief__list">
        {updates.map((update) => (
          <article className="market-update" key={`${update.category}-${update.title}`}>
            <div>
              <span className="market-update__category">{update.category}</span>
              <h3>{update.title}</h3>
            </div>
            <time>{update.time}</time>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Timestamps;
