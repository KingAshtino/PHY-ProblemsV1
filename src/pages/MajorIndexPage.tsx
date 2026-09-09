import { Link } from "react-router-dom";
import { categoryD } from "../data/categoryD";

const imgSrc = `${import.meta.env.BASE_URL}skier-moguls.png`;

export function MajorIndexPage() {
  const problem = categoryD[0];
  return (
    <article className="home">
      <h1>Major Collaborative Problems</h1>
      <p className="lede">
        These are longer assignments. You build a model from imperfect or richly structured
        information, keep the representations consistent, and work with generative AI without
        handing it the last word.
      </p>
      <Link to="/major/skier-moguls" className="problem-card major-card">
        <div className="card-meta">
          <span className="badge badge-D">Major</span>
          <span className="topic">Kinematics · forces</span>
          <span className="mins">{problem.estimatedMinutes} min</span>
        </div>
        <h3>{problem.title}</h3>
        <img
          className="card-thumb"
          src={imgSrc}
          alt="Preview of the asymmetric mogul diagram used in the assignment."
        />
        <p className="card-blurb">
          Four qualitative motion graphs, force reasoning at crest and trough, model critique, and
          a required GenAI collaboration record.
        </p>
        <p className="cat-go">Open the assignment</p>
      </Link>
    </article>
  );
}
