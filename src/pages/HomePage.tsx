import { Link } from "react-router-dom";
import { countByCategory } from "../data/problems";

const groups = [
  {
    id: "A" as const,
    kicker: (n: number) => `Category A · ${n} problems`,
    title: "Baseline",
    className: "cat-panel cat-panel-a",
    body: "Complete information, standard wording, one intended model. Inclines, projectiles, collisions, energy, circular motion, center of mass, rotation, SHM. These are what current models already solve easily.",
  },
  {
    id: "B" as const,
    kicker: (n: number) => `Category B · ${n} problems`,
    title: "Modified twins",
    className: "cat-panel cat-panel-b",
    body: "Same physics as A, with a jagged interface: bad FBDs, noisy tables, incomplete sketches, conflicting captions, irrelevant numbers, student measurements with two origins.",
  },
  {
    id: "C" as const,
    kicker: (n: number) => `Category C · ${n} problems`,
    title: "Human-advantage tasks",
    className: "cat-panel cat-panel-c",
    body: "Imperfect diagrams and data. Identify what counts, choose a model, use AI only where it helps, and judge whether a planted AI attempt is justified. A numerical answer is often the wrong kind of ending.",
  },
];

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
        {groups.map((g) => (
          <Link
            key={g.id}
            className={g.className}
            to={`/browse?category=${g.id}`}
          >
            <p className="kicker">{g.kicker(n[g.id])}</p>
            <h2>{g.title}</h2>
            <p>{g.body}</p>
            <p className="cat-go">Browse Category {g.id}</p>
          </Link>
        ))}
      </div>
      <p>
        <Link className="button" to="/browse">
          Browse all categories
        </Link>
      </p>
    </article>
  );
}
