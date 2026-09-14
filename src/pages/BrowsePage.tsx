import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { ProblemCard } from "../components/ProblemCard";
import { filterProblems } from "../data/problems";
import type { Category, Topic } from "../types";
import { TOPICS } from "../types";

const CATS: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "A", label: "A · baseline" },
  { id: "B", label: "B · jagged twins" },
  { id: "C", label: "C · human advantage" },
  { id: "D", label: "Major collaborative" },
  { id: "E", label: "Proposal" },
];

function browsePath(category: Category | "all", topic: Topic | "all") {
  const p = new URLSearchParams();
  if (category !== "all") p.set("category", category);
  if (topic !== "all") p.set("topic", topic);
  const q = p.toString();
  return q ? `/browse?${q}` : "/browse";
}

export function BrowsePage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const category = (params.get("category") as Category | "all") || "all";
  const topic = (params.get("topic") as Topic | "all") || "all";
  const list = filterProblems({ category, topic });

  return (
    <article className="browse">
      <h1>Browse</h1>
      <p className="lede">Choose a category or topic. Each chip is a separate list.</p>
      <div className="filters">
        <div className="chips" role="navigation" aria-label="Category">
          {CATS.map((c) => (
            <Link
              key={c.id}
              to={browsePath(c.id, topic)}
              className={category === c.id ? "chip on" : "chip"}
            >
              {c.label}
            </Link>
          ))}
        </div>
        <label className="topic-filter">
          Topic
          <select
            value={topic}
            onChange={(e) => {
              navigate(browsePath(category, e.target.value as Topic | "all"));
            }}
          >
            <option value="all">All topics</option>
            {TOPICS.map((t) => (
              <option key={t.id} value={t.id}>
                {t.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <p className="count">
        {list.length} problem{list.length === 1 ? "" : "s"}
      </p>
      <div className="card-grid">
        {list.map((p) => (
          <ProblemCard key={p.id} problem={p} />
        ))}
      </div>
    </article>
  );
}
