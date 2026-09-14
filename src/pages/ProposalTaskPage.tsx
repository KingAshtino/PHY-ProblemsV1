import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MogulFigure } from "../components/MogulFigure";
import { getProblem } from "../data/problems";
import { TASK_KIND_LABEL } from "../types";

export function ProposalTaskPage() {
  const { id } = useParams();
  const problem = id ? getProblem(id) : undefined;
  const [showRubric, setShowRubric] = useState(false);

  if (!problem || problem.category !== "E") {
    return (
      <article>
        <h1>Proposal task not found</h1>
        <p>
          <Link to="/proposal">Back to proposal problems</Link>
        </p>
      </article>
    );
  }

  return (
    <article className="major-page">
      <p className="crumbs">
        <Link to="/proposal">Proposal problems</Link>
        <span aria-hidden> / </span>
        <span>{problem.title}</span>
      </p>
      <div className="card-meta">
        <span className="badge badge-E">Proposal</span>
        <span className="mins">{problem.estimatedMinutes} min</span>
      </div>
      <h1>{problem.title}</h1>
      {problem.stimulus.text.split("\n\n").map((para, i) => (
        <p key={i} className="stem">
          {para}
        </p>
      ))}
      <MogulFigure />
      <section>
        <h2>The task</h2>
        <ol className="tasks">
          {problem.tasks.map((task) => (
            <li key={task.id}>
              <span className="kind">{TASK_KIND_LABEL[task.kind]}</span>
              {task.prompt}
            </li>
          ))}
        </ol>
      </section>
      <section className="rubric-wrap">
        <button type="button" className="button" onClick={() => setShowRubric((v) => !v)}>
          {showRubric ? "Hide rubric" : "Show rubric / self-check"}
        </button>
        {showRubric ? (
          <div className="rubric">
            <h2>Instructor / self-check</h2>
            <p>{problem.rubric.summary}</p>
            <h3>A good response must include</h3>
            <ul>
              {problem.rubric.mustInclude.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {problem.rubric.commonAIFailures ? (
              <>
                <h3>Common AI failures</h3>
                <ul>
                  {problem.rubric.commonAIFailures.map((item) => (
                    <li key={item}>{item}</li>
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
