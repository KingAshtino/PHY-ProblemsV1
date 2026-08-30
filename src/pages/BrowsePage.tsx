import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { ProblemCard } from "../components/ProblemCard";
import { filterProblems } from "../data/problems";
import type { Category, Topic } from "../types";
import { TOPICS } from "../types";

const CATS: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "C", label: "C · human advantage" },
  { id: "B", label: "B · jagged twins" },
  { id: "A", label: "A · baseline" },
];

export function BrowsePage() {
  const [params, setParams] = useSearchParams();
  const category = (params.get("category") as Category | "all") || "all";
  const topic = (params.get("topic") as Topic | "all") || "all";

  const list = useMemo(
    () => filterProblems({ category, topic }),
    [category, topic],
  );

  function setCategory(next: Category | "all") {
    const p = new URLSearchParams(params);
    if (next === "all") p.delete("category");
    else p.set("category", next);
    setParams(p);
  }

  function setTopic(next: Topic | "all") {
    const p = new URLSearchParams(params);
    if (next === "all") p.delete("topic");
    else p.set("topic", next);
    setParams(p);
  }

  return (
    <article className="browse">
      <h1>Browse</h1>
      <p className="lede">Filter by category or topic. Category C is listed first in an unfiltered view.</p>
      <div className="filters">
        <div className="chips" role="group" aria-label="Category">
          {CATS.map((c) => (
            <button
              key={c.id}
              type="button"
              className={category === c.id ? "chip on" : "chip"}
              onClick={() => setCategory(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>
        <label className="topic-filter">
          Topic
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value as Topic | "all")}
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
      <p className="count">{list.length} problem{list.length === 1 ? "" : "s"}</p>
      <div className="card-grid">
        {list.map((p) => (
          <ProblemCard key={p.id} problem={p} />
        ))}
      </div>
    </article>
  );
}
