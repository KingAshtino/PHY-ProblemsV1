import { Link } from "react-router-dom";
import type { Problem } from "../types";
import { TOPICS } from "../types";

export function CategoryBadge({ category }: { category: Problem["category"] }) {
  if (category === "D") {
    return <span className="badge badge-D">Major</span>;
  }
  return <span className={`badge badge-${category}`}>Category {category}</span>;
}

export function ProblemCard({ problem }: { problem: Problem }) {
  const topic = TOPICS.find((t) => t.id === problem.topic)?.label ?? problem.topic;
  return (
    <Link to={problem.detailPath ?? `/problem/${problem.id}`} className="problem-card">
      <div className="card-meta">
        <CategoryBadge category={problem.category} />
        <span className="topic">{topic}</span>
        <span className="mins">{problem.estimatedMinutes} min</span>
      </div>
      <h3>{problem.title}</h3>
      {problem.jaggedFeature ? (
        <p className="jagged">Jagged feature: {problem.jaggedFeature}</p>
      ) : null}
      {problem.category === "C" ? (
        <p className="card-blurb">Messy stimulus · modeling · AI critique</p>
      ) : null}
      {problem.category === "D" ? (
        <p className="card-blurb">Major assignment · graph modeling · GenAI collaboration</p>
      ) : null}
    </Link>
  );
}
