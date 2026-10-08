import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSituation, situations } from "../data/situations";

export function PossibleSituationPage() {
  const { slug } = useParams();
  const situation = slug ? getSituation(slug) : undefined;
  const [showRubric, setShowRubric] = useState(false);

  if (!situation) {
    return (
      <article>
        <h1>Situation not found</h1>
        <p>
          <Link to="/possible">Back to possible or impossible</Link>
        </p>
      </article>
    );
  }

  const idx = situations.findIndex((s) => s.slug === situation.slug);
  const prev = idx > 0 ? situations[idx - 1] : undefined;
  const next = idx < situations.length - 1 ? situations[idx + 1] : undefined;

  return (
    <article className="major-page">
      <p className="crumbs">
        <Link to="/possible">Possible or impossible</Link>
        <span aria-hidden> / </span>
        <span>{situation.title}</span>
      </p>
      <h1>{situation.title}</h1>
      <p className="lede">{situation.caption}</p>
      <figure className="figure-photo">
        <img
          src={`${import.meta.env.BASE_URL}${situation.image}`}
          alt={situation.caption}
        />
      </figure>
      <section>
        <h2>Your answer</h2>
        <p>Use this form:</p>
        <ul>
          <li>
            <strong>Classification:</strong> Possible / Impossible
          </li>
          <li>
            <strong>Reasoning:</strong> physics, with evidence from the image
          </li>
          <li>
            <strong>Physics Principle(s):</strong> the relevant law or constraint
          </li>
        </ul>
        <p className="muted">
          Unusual is not the same as impossible. State assumptions that are not given in the
          figure.
        </p>
      </section>
      <p className="sit-nav">
        {prev ? (
          <Link to={`/possible/${prev.slug}`}>← {prev.title}</Link>
        ) : (
          <span />
        )}
        {next ? <Link to={`/possible/${next.slug}`}>{next.title} →</Link> : <span />}
      </p>
      <section className="rubric-wrap">
        <button type="button" className="button" onClick={() => setShowRubric((v) => !v)}>
          {showRubric ? "Hide rubric" : "Show rubric / self-check"}
        </button>
        {showRubric ? (
          <div className="rubric">
            <h2>Instructor / self-check</h2>
            <p>
              <strong>Classification:</strong> {situation.rubric.classification}
            </p>
            <h3>Reasoning</h3>
            <p>{situation.rubric.reasoning}</p>
            <h3>Physics principle(s)</h3>
            <ul>
              {situation.rubric.principles.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            {situation.rubric.assumptions.length > 0 ? (
              <>
                <h3>Assumptions in this key</h3>
                <ul>
                  {situation.rubric.assumptions.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>
        ) : null}
      </section>
    </article>
  );
}
