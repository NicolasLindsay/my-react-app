import "./Timestamps.css";

function Timestamps() {
  return (
    <section className="landing-timestamps" aria-labelledby="timestamps-heading">
      <h2 id="timestamps-heading" className="landing-timestamps__title">
        Recent activity
      </h2>
      <ul className="landing-timestamps__list">
        <li>
          <time dateTime="2026-05-08">May 8, 2026</time>
          <span> Landing scaffold added</span>
        </li>
        <li>
          <time dateTime="2026-05-07">May 7, 2026</time>
          <span> Initial setup</span>
        </li>
      </ul>
    </section>
  );
}

export default Timestamps;
