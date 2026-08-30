import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CategoryBadge } from "../components/ProblemCard";
import { StimulusAssets } from "../components/StimulusAssets";
import { getProblem } from "../data/problems";
import { TASK_KIND_LABEL, TOPICS } from "../types";

export function ProblemPage() {
  const { id } = useParams();
  const problem = id ? getProblem(id) : undefined;
  const [showRubric, setShowRubric] = useState(false);

  if (!problem) {
    return (
      <article>
        <h1>Problem not found</h1>
        <p>
          <Link to="/browse">Back to browse</Link>
        </p>
      </article>
    );
  }

  const topic = TOPICS.find((t) => t.id === problem.topic)?.label ?? problem.topic;
  const twin = problem.twinOf ? getProblem(problem.twinOf) : undefined;

  return (
    <article className="problem-page">
      <p className="crumbs">
        <Link to="/browse">Browse</Link>
        <span aria-hidden> / </span>
        <span>Category {problem.category}</span>
      </p>
      <div className="card-meta">
        <CategoryBadge category={problem.category} />
        <span className="topic">{topic}</span>
        <span className="mins">{problem.estimatedMinutes} min</span>
      </div>
      <h1>{problem.title}</h1>
      {problem.jaggedFeature ? (
        <p className="jagged">Jagged feature: {problem.jaggedFeature}</p>
      ) : null}
      {twin ? (
        <p className="twin">
          Twin of baseline{" "}
          <Link to={`/problem/${twin.id}`}>{twin.title}</Link>
        </p>
      ) : null}

      <section>
        <h2>Stimulus</h2>
        {problem.stimulus.text.split("\n\n").map((para, i) => (
          <p key={i} className="stem">
            {para}
          </p>
        ))}
        {problem.stimulus.assets ? (
          <StimulusAssets assets={problem.stimulus.assets} />
        ) : null}
      </section>

      <section>
        <h2>Your tasks</h2>
        <ol className="tasks">
          {problem.tasks.map((task) => (
            <li key={task.id}>
              <span className="kind">{TASK_KIND_LABEL[task.kind]}</span>
              {task.prompt}
            </li>
          ))}
        </ol>
      </section>

      {problem.plantedAI ? (
        <section className="ai-block">
          <h2>Planted AI attempt</h2>
          <p className="caption">{problem.plantedAI.label}</p>
          <blockquote>
            {problem.plantedAI.transcript.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </blockquote>
          <p className="muted">
            Treat this as a student-facing artifact to evaluate. Do not assume it is correct.
          </p>
        </section>
      ) : null}

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
            {problem.rubric.numericAnswers ? (
              <>
                <h3>Numeric anchors</h3>
                <ul>
                  {problem.rubric.numericAnswers.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            ) : null}
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
            {problem.plantedAI ? (
              <>
                <h3>Planted AI verdict</h3>
                <p>
                  <strong>{problem.plantedAI.verdict.replace("-", " ")}</strong>
                  {" · "}
                  {problem.plantedAI.errorTags.join(", ")}
                </p>
              </>
            ) : null}
          </div>
        ) : null}
      </section>
    </article>
  );
}
