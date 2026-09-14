import { Link } from "react-router-dom";
import { MogulFigure } from "../components/MogulFigure";
import { categoryE } from "../data/categoryE";

export function ProposalIndexPage() {
  return (
    <article className="home">
      <h1>Proposal problems</h1>
      <p className="lede">
        Shorter tasks in the same style as the major moguls assignment, written so they can stand
        alone in a research proposal. They share one situation and one diagram. Each asks for a
        small, inspectable piece of the model.
      </p>
      <MogulFigure />
      <p className="caption">
        All tasks below use this terrain. The full-length version lives under Major Collaborative
        Problems.
      </p>
      <div className="card-grid">
        {categoryE.map((problem) => (
          <Link key={problem.id} to={problem.detailPath ?? `/proposal/${problem.id}`} className="problem-card">
            <div className="card-meta">
              <span className="badge badge-E">Proposal</span>
              <span className="mins">{problem.estimatedMinutes} min</span>
            </div>
            <h3>{problem.title}</h3>
            {problem.jaggedFeature ? (
              <p className="jagged">Focus: {problem.jaggedFeature}</p>
            ) : null}
          </Link>
        ))}
      </div>
    </article>
  );
}
