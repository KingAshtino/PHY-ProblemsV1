import { Link } from "react-router-dom";
import { situations } from "../data/situations";

export function PossibleIndexPage() {
  return (
    <article className="major-page">
      <p className="kicker">New task</p>
      <h1>Possible or impossible?</h1>
      <p className="lede">
        You will be shown a series of physical situations. Some are physically possible. Others
        contain something that would not be possible under the stated conditions.
      </p>

      <section>
        <h2>For each situation</h2>
        <ul>
          <li>
            Decide whether the situation is <strong>physically possible</strong> or{" "}
            <strong>physically impossible</strong>.
          </li>
          <li>
            Explain your reasoning using physics. Do not base your answer only on whether the
            image “looks right” or “looks strange.”
          </li>
          <li>
            If you believe the situation is impossible, identify the specific physical law,
            principle, or constraint that is violated.
          </li>
          <li>
            If you believe the situation is possible, explain why the apparently unusual features
            do not violate any physical laws.
          </li>
        </ul>
        <p>Use information in the image, such as:</p>
        <ul>
          <li>velocity and acceleration directions</li>
          <li>forces</li>
          <li>trajectories</li>
          <li>positions and distances</li>
          <li>center of mass</li>
          <li>ropes or other physical constraints</li>
          <li>speeds or other labeled quantities</li>
        </ul>
        <p>
          Clearly state any assumptions you make that are not directly given. Unless otherwise
          stated, assume ordinary conditions on Earth and idealized introductory-physics models
          where appropriate.
        </p>
      </section>

      <section>
        <h2>Important</h2>
        <p>
          An unusual or unintuitive situation is not automatically impossible. Your goal is to
          determine whether the situation actually violates a physical principle.
        </p>
        <p>
          For example, an object can move in one direction while accelerating in the opposite
          direction. This may look unusual, but it can still be physically possible.
        </p>
      </section>

      <section>
        <h2>Answer form</h2>
        <p>For each image, give your answer in the following form:</p>
        <ul>
          <li>
            <strong>Classification:</strong> Possible / Impossible
          </li>
          <li>
            <strong>Reasoning:</strong> Explain what is happening physically and identify the
            evidence from the image that supports your conclusion.
          </li>
          <li>
            <strong>Physics Principle(s):</strong> Identify the relevant concept, law, or
            constraint.
          </li>
        </ul>
        <p>
          The quality of your explanation is more important than simply choosing the correct
          classification.
        </p>
      </section>

      <section>
        <h2>Situations</h2>
        <p className="muted">There is no Situation 8 in this set.</p>
        <div className="situation-grid">
          {situations.map((s) => (
            <Link key={s.slug} to={`/possible/${s.slug}`} className="problem-card">
              <img
                className="card-thumb"
                src={`${import.meta.env.BASE_URL}${s.image}`}
                alt={s.caption}
              />
              <h3>{s.title}</h3>
              <p className="card-blurb">{s.caption}</p>
              <p className="cat-go">Open situation</p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
