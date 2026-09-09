import { useState } from "react";
import { Link } from "react-router-dom";

const imgSrc = `${import.meta.env.BASE_URL}skier-moguls.png`;

export function SkierMogulsPage() {
  const [showRubric, setShowRubric] = useState(false);

  return (
    <article className="major-page">
      <p className="crumbs">
        <Link to="/major">Major Collaborative Problems</Link>
        <span aria-hidden> / </span>
        <span>Skier over moguls</span>
      </p>
      <div className="card-meta">
        <span className="badge badge-D">Major</span>
        <span className="topic">Kinematics · forces · modeling</span>
        <span className="mins">~90 min</span>
      </div>
      <h1>Physics Modeling with GenAI: Skier Traveling Over Moguls</h1>
      <p className="lede">
        Construct a motion model from an asymmetric terrain diagram, connect it to forces, name
        the limits of the model, and use generative AI as a collaborator you are responsible for
        evaluating.
      </p>

      <figure className="figure-photo">
        <img
          src={imgSrc}
          alt="Side view of a skier moving left to right over repeated asymmetric moguls. The uphill is long and gentle; the downhill is short and steep. Points A through E mark a trough, uphill, crest, downhill, and the next trough. A dashed line shows the center-of-mass path."
        />
        <figcaption>
          Skier traveling over repeated asymmetric moguls. Motion to the right. Gentle uphill,
          steep downhill. Center-of-mass path dashed. Diagram generated with ChatGPT 5.6.
        </figcaption>
      </figure>

      <section>
        <h2>The physical situation</h2>
        <p>
          Competitive skiers often travel across terrain containing <strong>moguls</strong>,
          repeated bumps in the snow that cause the skier’s center of mass to move both
          horizontally and vertically. Even if a skier maintains approximately the same overall
          speed, their horizontal and vertical components of motion can change continuously as
          they move up and down the terrain.
        </p>
        <p>
          Create a model for a skier traveling from left to right across a repeated series of
          moguls. The moguls are repeated and similar in overall size, but they are{" "}
          <strong>not perfectly symmetric</strong>. In each cycle, one side of a mogul is longer
          and more gradual, while the other side is shorter and steeper. Your graphs should
          reflect this terrain shape and should <strong>not</strong> assume that the motion is
          perfectly sinusoidal.
        </p>
        <p>Assume that:</p>
        <ul>
          <li>The skier remains in contact with the snow throughout the motion.</li>
          <li>
            The skier’s <strong>speed along the surface of the snow is approximately constant</strong>.
          </li>
          <li>The moguls repeat in an identical pattern.</li>
          <li>
            The skier’s center of mass follows a smooth path approximately parallel to the snow
            surface.
          </li>
          <li>Air resistance may be neglected.</li>
          <li>
            The skier can be treated as a point particle for the purposes of analyzing
            translational motion.
          </li>
        </ul>
        <p>Use the side-view diagram above as the terrain you are modeling.</p>
      </section>

      <section>
        <h2>Part I — Constructing the motion model</h2>
        <p>
          Using the diagram, draw the best qualitative graphs you can for the skier’s motion.
          Create <strong>four graphs in total</strong>:
        </p>
        <ol>
          <li>
            Horizontal velocity <em>v</em>
            <sub>x</sub> vs. time
          </li>
          <li>
            Vertical velocity <em>v</em>
            <sub>y</sub> vs. time
          </li>
          <li>
            Horizontal acceleration <em>a</em>
            <sub>x</sub> vs. time
          </li>
          <li>
            Vertical acceleration <em>a</em>
            <sub>y</sub> vs. time
          </li>
        </ol>
        <h3>1. Model at least two complete mogul cycles</h3>
        <p>
          Each graph should show at least <strong>two complete repetitions</strong> of the skier
          moving from one corresponding point on a mogul to the same point two cycles later.
          Assume the two cycles are identical.
        </p>
        <h3>2. Use the same time scale for all four graphs</h3>
        <p>Mark these locations on the time axis of every graph:</p>
        <ul>
          <li>
            <strong>A:</strong> bottom of a trough
          </li>
          <li>
            <strong>B:</strong> skier traveling uphill
          </li>
          <li>
            <strong>C:</strong> top of a mogul
          </li>
          <li>
            <strong>D:</strong> skier traveling downhill
          </li>
          <li>
            <strong>E:</strong> bottom of the next trough
          </li>
        </ul>
        <p>The four representations must be comparable directly.</p>
        <h3>3. Show more than just the sign of each quantity</h3>
        <p>Indicate, as accurately as you can:</p>
        <ul>
          <li>where each quantity is positive, negative, or zero</li>
          <li>where local maxima or minima occur</li>
          <li>whether the quantity is increasing or decreasing between important locations</li>
        </ul>
        <p>
          Do <strong>not</strong> simply draw arbitrary sine waves because the motion repeats. The
          shape of each graph should follow from your interpretation of the skier’s motion and the
          shape of the terrain.
        </p>
      </section>

      <section>
        <h2>Part II — Explain your model</h2>
        <h3>1. Horizontal velocity</h3>
        <p>
          Is the skier’s horizontal velocity <em>v</em>
          <sub>x</sub> constant? Explain why or why not, keeping in mind that the skier’s{" "}
          <strong>total speed along the snow is approximately constant</strong>. Identify where
          you expect <em>v</em>
          <sub>x</sub> to be largest and smallest, and explain your reasoning.
        </p>
        <h3>2. Vertical velocity</h3>
        <p>
          Identify where <em>v</em>
          <sub>y</sub> is positive, negative, equal to zero, reaches its greatest positive value,
          and reaches its greatest negative value. Explain how each feature corresponds to the
          skier’s location on the moguls.
        </p>
        <h3>3. Horizontal acceleration</h3>
        <p>
          Using your <em>v</em>
          <sub>x</sub>(<em>t</em>) graph, explain where <em>a</em>
          <sub>x</sub> is positive, negative, and equal to zero. Your <em>a</em>
          <sub>x</sub>(<em>t</em>) graph must be consistent with the changes shown on your{" "}
          <em>v</em>
          <sub>x</sub>(<em>t</em>) graph.
        </p>
        <h3>4. Vertical acceleration</h3>
        <p>
          Using your <em>v</em>
          <sub>y</sub>(<em>t</em>) graph, determine where <em>a</em>
          <sub>y</sub> is positive, negative, and equal to zero. Pay particular attention to what
          happens near the <strong>crest and trough</strong> of each mogul. Explain why having{" "}
          <em>v</em>
          <sub>y</sub> = 0 does <strong>not necessarily mean</strong> that <em>a</em>
          <sub>y</sub> = 0.
        </p>
      </section>

      <section>
        <h2>Part III — Connecting kinematics to forces</h2>
        <h3>1. Draw a free-body diagram</h3>
        <p>
          Draw an approximate free-body diagram for the skier at the top of a mogul and at the
          bottom of a trough. Include at minimum gravitational force and the normal force from the
          snow. Explain any differences between the two diagrams.
        </p>
        <h3>2. Apparent weight</h3>
        <p>
          At which location would you expect the skier to feel <strong>heaviest</strong>? At which
          location would you expect the skier to feel <strong>lightest</strong>? Explain using
          acceleration and Newton’s second law.
        </p>
        <h3>3. Normal force</h3>
        <p>
          Compare the normal force <em>N</em> to <em>mg</em> at the crest of a mogul and at the
          trough between two moguls. State whether you expect
        </p>
        <p className="equation">
          <em>N</em> &gt; <em>mg</em>,&ensp;<em>N</em> = <em>mg</em>,&ensp;or&ensp;<em>N</em> &lt;{" "}
          <em>mg</em>
        </p>
        <p>at each location, and justify your answer.</p>
        <h3>4. Losing contact</h3>
        <p>
          Suppose the skier travels substantially faster while crossing the same terrain. Could
          the skier lose contact with the snow near the top of a mogul? Explain what would have to
          happen to the normal force for this to occur. You do <strong>not</strong> need to
          calculate a numerical speed.
        </p>
      </section>

      <section>
        <h2>Part IV — Evaluate the model</h2>
        <p>A model always simplifies reality.</p>
        <h3>1.</h3>
        <p>
          What assumptions in this problem are unrealistic for an actual skier traveling over
          moguls? Identify at least <strong>two</strong>.
        </p>
        <h3>2.</h3>
        <p>
          Which assumption do you think has the greatest effect on your graphs? Explain why.
        </p>
        <h3>3.</h3>
        <p>
          Suppose instead that the skier maintained <strong>constant horizontal velocity</strong>{" "}
          rather than constant speed along the snow. Which of your four graphs would change?
          Describe how they would change.
        </p>
        <p className="equation boxed">
          constant total speed ≠ constant horizontal velocity
        </p>
      </section>

      <section>
        <h2>Part V — Collaboration with generative AI</h2>
        <p>
          You should use a generative AI system while working on this problem. The purpose is{" "}
          <strong>not simply to obtain the final answer</strong>, but to use AI as part of your
          modeling and reasoning process.
        </p>
        <p>In your submitted PDF, include the following.</p>
        <h3>1. AI system</h3>
        <p>
          State which GenAI service and model you used and the date on which you used it. For
          example: <em>ChatGPT GPT-5.6, 09/09/2026</em>. Because GenAI systems can change over
          time, both the model and date are important.
        </p>
        <h3>2. Your initial interaction</h3>
        <p>Summarize or provide the initial prompt you gave the AI. Explain:</p>
        <ul>
          <li>what information you gave it</li>
          <li>what you asked it to do</li>
          <li>whether you provided the diagram</li>
          <li>what assumptions you told it to use</li>
        </ul>
        <h3>3. Initial AI reasoning</h3>
        <p>
          Show the AI’s initial proposed solution or the important parts of its reasoning. Do{" "}
          <strong>not</strong> assume that this response is correct.
        </p>
        <h3>4. Evaluate the AI</h3>
        <p>
          Before asking the AI to revise its answer, independently identify anything that you
          believe is incorrect, physically questionable, insufficiently justified, inconsistent
          between graphs, based on an unstated assumption, or missing. If you believe the AI
          response is completely correct, explain <strong>why you think it is correct</strong>{" "}
          rather than simply stating that it is.
        </p>
        <h3>5. Collaborate with the AI</h3>
        <p>
          Use your evaluation to continue the conversation. You might point out a possible
          mistake, ask the AI to reconsider one graph, provide information from the image that it
          overlooked, challenge one of its assumptions, or ask it to compare two possible models.
          Record the most important follow-up interaction.
        </p>
        <h3>6. Final model</h3>
        <p>
          Submit your final four graphs and your answers to the physics questions. These do{" "}
          <strong>not</strong> have to be identical to the AI’s final answer. You are responsible
          for deciding what you believe is the best physical model.
        </p>
        <h3>7. Human contribution</h3>
        <p>
          Finally answer: <strong>What did you contribute to the solution that the AI did not
          provide correctly or adequately on its own?</strong> Be specific.
        </p>
      </section>

      <section className="rubric-wrap">
        <button type="button" className="button" onClick={() => setShowRubric((v) => !v)}>
          {showRubric ? "Hide rubric" : "Show rubric / self-check"}
        </button>
        {showRubric ? (
          <div className="rubric">
            <h2>Instructor / self-check</h2>
            <p>
              Path speed is approximately constant, so the components follow the local slope:{" "}
              <em>v</em>
              <sub>x</sub> is largest where the slope is nearly level (A, C, E) and smallest on
              the steep downhill. Time on the gentle uphill is longer than time on the steep
              downhill. Crests and troughs have <em>v</em>
              <sub>y</sub> = 0 but nonzero <em>a</em>
              <sub>y</sub> because the path is curved. Apparent weight is largest in the trough
              and smallest at the crest. Losing contact is <em>N</em> → 0 at the crest.
            </p>
            <h3>A good response must include</h3>
            <ul>
              <li>Same A–E labels and two cycles on all four graphs</li>
              <li>Visible asymmetry (not four sine waves)</li>
              <li>
                <em>v</em>
                <sub>x</sub> not constant; constant path speed ≠ constant <em>v</em>
                <sub>x</sub>
              </li>
              <li>
                <em>v</em>
                <sub>y</sub> &gt; 0 uphill, &lt; 0 downhill, 0 at A, C, E; larger |<em>v</em>
                <sub>y</sub>| on the steep side
              </li>
              <li>
                <em>a</em> graphs as consistent derivatives of the <em>v</em> graphs
              </li>
              <li>
                <em>v</em>
                <sub>y</sub> = 0 does not imply <em>a</em>
                <sub>y</sub> = 0
              </li>
              <li>
                <em>N</em> &lt; <em>mg</em> at the crest, <em>N</em> &gt; <em>mg</em> at the trough
              </li>
              <li>Heaviest in the trough, lightest at the crest</li>
              <li>GenAI model + date, independent critique, and a stated human contribution</li>
            </ul>
            <h3>Common AI failures</h3>
            <ul>
              <li>Sinusoidal graphs because the pattern repeats</li>
              <li>Constant <em>v</em><sub>x</sub> from “constant speed”</li>
              <li>Equal time up and down the mogul</li>
              <li>
                <em>a</em>
                <sub>y</sub> = 0 at every crest and trough
              </li>
              <li>Crest heavier than trough</li>
              <li>Pasting an AI solution as the submitted model</li>
            </ul>
          </div>
        ) : null}
      </section>
    </article>
  );
}
