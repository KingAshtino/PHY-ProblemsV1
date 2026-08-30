import { Link } from "react-router-dom";
import { countByCategory } from "../data/problems";

export function HomePage() {
  const n = countByCategory();
  return (
    <article className="home">
      <h1>A Physics I collection built around human advantage</h1>
      <p className="lede">
        Ordinary homework is here as a control set. The problems that matter are the ones where the
        work is deciding what is physically meaningful, which model is justified, and whether an
        AI write-up has earned its conclusion.
      </p>
      <div className="cat-grid">
        <section className="cat-panel">
          <p className="kicker">Category A · {n.A} problems</p>
          <h2>Baseline</h2>
          <p>
            Complete information, standard wording, one intended model. Inclines, projectiles,
            collisions, energy, circular motion, center of mass, rotation, SHM. These are what
            current models already solve easily.
          </p>
        </section>
        <section className="cat-panel">
          <p className="kicker">Category B · {n.B} problems</p>
          <h2>Modified twins</h2>
          <p>
            Same physics as A, with a jagged interface: bad FBDs, noisy tables, incomplete
            sketches, conflicting captions, irrelevant numbers, student measurements with two
            origins.
          </p>
        </section>
        <section className="cat-panel cat-panel-c">
          <p className="kicker">Category C · {n.C} problems</p>
          <h2>Human-advantage tasks</h2>
          <p>
            Imperfect diagrams and data. Identify what counts, choose a model, use AI only where
            it helps, and judge whether a planted AI attempt is justified. A numerical answer is
            often the wrong kind of ending.
          </p>
        </section>
      </div>
      <p>
        <Link className="button" to="/browse?category=C">
          Start with Category C
        </Link>
        <Link className="button button-quiet" to="/browse">
          Browse all
        </Link>
      </p>
    </article>
  );
}
