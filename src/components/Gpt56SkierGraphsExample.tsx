export function Gpt56SkierGraphsExample() {
  return (
    <section className="ai-block example-ai">
      <h2>Example AI response</h2>
      <p className="caption">GPT-5.6 · 9/22/26. This is a model output to inspect, not an answer key.</p>
      <blockquote>
        <p>
          Yes — and this is a useful test of the problem, because I can get a physically reasonable
          answer, but I also hit some genuine ambiguity that forces me to make assumptions. That is
          probably valuable for the kind of AI-collaboration task you are trying to build.
        </p>

        <h3>How I approached it</h3>
        <p>
          The key phrase for me is that the skier moves at approximately{" "}
          <strong>constant speed along the surface</strong>. I interpreted that as the magnitude of
          the velocity being essentially constant while its <strong>direction</strong> changes.
        </p>
        <p>
          If <em>θ</em>(<em>t</em>) is the angle of the skier’s motion relative to horizontal, then
        </p>
        <p className="equation">
          <em>v</em>
          <sub>x</sub> = <em>v</em> cos <em>θ</em>,&emsp;
          <em>v</em>
          <sub>y</sub> = <em>v</em> sin <em>θ</em>.
        </p>
        <p>For an exactly constant speed <em>v</em>,</p>
        <p className="equation">
          <em>a</em>
          <sub>x</sub> = −<em>v</em> sin <em>θ</em> · <em>θ̇</em>,&emsp;
          <em>a</em>
          <sub>y</sub> = <em>v</em> cos <em>θ</em> · <em>θ̇</em>.
        </p>
        <p>
          So the entire problem becomes: <strong>what can I infer about the tangent angle{" "}
          <em>θ</em> from the picture?</strong>
        </p>
        <p>
          For the graphs above, I made one possible model in which A→C occupies much more time
          than C→E, because the uphill is long and gradual while the downhill is short and steep.
          I also treated B as roughly the steepest part of the uphill and D as roughly the steepest
          part of the downhill. Those latter assumptions are important because the prompt does not
          actually say that.
        </p>

        <h3>What I think the velocity graphs should look like</h3>
        <p>
          The <em>v</em>
          <sub>y</sub> graph is the easiest one for me to construct from the image.
        </p>
        <p>
          At A, the skier is at the bottom of the trough and moving approximately horizontally, so{" "}
          <em>v</em>
          <sub>y</sub> = 0.
        </p>
        <p>
          From A to C, the skier is traveling upward, so <em>v</em>
          <sub>y</sub> &gt; 0. Because this is the <strong>long, gentle uphill</strong>, I expect
          a relatively small positive value spread over a relatively long time.
        </p>
        <p>
          At C, the skier is horizontal again at the crest: <em>v</em>
          <sub>y</sub> = 0.
        </p>
        <p>
          From C to E, the skier moves downward, so <em>v</em>
          <sub>y</sub> &lt; 0. Since this descent is much steeper and shorter, I expect a{" "}
          <strong>larger negative magnitude for a shorter period of time</strong>.
        </p>
        <p>
          Then at E, <em>v</em>
          <sub>y</sub> = 0. And the pattern repeats.
        </p>
        <p>There is also a useful consistency requirement:</p>
        <p className="equation">
          ∫<sub>A</sub>
          <sup>E</sup> <em>v</em>
          <sub>y</sub> d<em>t</em> = 0
        </p>
        <p>
          because A and E are successive troughs at the same height. So the broad, small positive
          area has to cancel the narrow, large negative area. That is why I made the <em>v</em>
          <sub>y</sub> graph asymmetric rather than sinusoidal.
        </p>
        <p>
          The <em>v</em>
          <sub>x</sub> graph follows from constant total speed:
        </p>
        <p className="equation">
          <em>v</em>² = <em>v</em>
          <sub>x</sub>² + <em>v</em>
          <sub>y</sub>².
        </p>
        <p>
          Because the skier always travels to the right, <em>v</em>
          <sub>x</sub> &gt; 0.
        </p>
        <p>
          At A, C, and E, the motion is approximately horizontal, so <em>v</em>
          <sub>y</sub> = 0, meaning <em>v</em>
          <sub>x</sub> ≈ <em>v</em>.
        </p>
        <p>
          On the gentle uphill, some velocity is vertical, so <em>v</em>
          <sub>x</sub> decreases slightly. On the steep downhill, the vertical component is much
          larger, so <em>v</em>
          <sub>x</sub> decreases much more.
        </p>
        <p>This produces something like:</p>
        <ul>
          <li>
            <strong>A:</strong> maximum <em>v</em>
            <sub>x</sub>
          </li>
          <li>broad, shallow dip on uphill</li>
          <li>
            <strong>C:</strong> maximum again
          </li>
          <li>narrow, deep dip on steep downhill</li>
          <li>
            <strong>E:</strong> maximum again
          </li>
        </ul>
        <p>That part of the answer feels quite well constrained by the problem.</p>

        <h3>Acceleration is where I start struggling</h3>
        <p>
          This is where the task becomes substantially less determined by the diagram. Acceleration
          depends on <strong>how quickly the direction is changing</strong>, not simply on whether
          the skier is traveling uphill or downhill.
        </p>
        <p>
          For example, a skier could travel down a very steep but perfectly straight slope with
          constant speed and have <em>a⃗</em> = 0. So “<strong>steep downhill</strong>” by itself
          does <strong>not</strong> tell me that acceleration must be large. I need information
          about the <strong>curvature</strong> of the path.
        </p>
        <p>
          For my example graphs, I assumed that the skier’s direction changes relatively slowly
          over the gentle uphill and relatively rapidly through the short downhill region. That
          gives large acceleration features on the steep side. But I had to infer that rather than
          obtain it directly from the problem.
        </p>
        <p>
          If B and D are approximately the points of maximum uphill/downhill slope, then a natural
          interpretation is:
        </p>
        <div className="table-scroll">
          <table className="ai-table">
            <thead>
              <tr>
                <th>Position</th>
                <th>
                  <em>v</em>
                  <sub>x</sub>
                </th>
                <th>
                  <em>v</em>
                  <sub>y</sub>
                </th>
                <th>Important acceleration behavior</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>A trough</strong>
                </td>
                <td>maximum</td>
                <td>0</td>
                <td>
                  <em>a</em>
                  <sub>x</sub> = 0, <em>a</em>
                  <sub>y</sub> &gt; 0
                </td>
              </tr>
              <tr>
                <td>
                  <strong>B uphill</strong>
                </td>
                <td>slightly reduced</td>
                <td>positive</td>
                <td>
                  near max <em>v</em>
                  <sub>y</sub>, so potentially <em>a</em>
                  <sub>y</sub> ≈ 0
                </td>
              </tr>
              <tr>
                <td>
                  <strong>C crest</strong>
                </td>
                <td>maximum</td>
                <td>0</td>
                <td>
                  <em>a</em>
                  <sub>x</sub> = 0, <em>a</em>
                  <sub>y</sub> &lt; 0
                </td>
              </tr>
              <tr>
                <td>
                  <strong>D downhill</strong>
                </td>
                <td>substantially reduced</td>
                <td>strongly negative</td>
                <td>
                  near minimum <em>v</em>
                  <sub>y</sub>, so potentially <em>a</em>
                  <sub>y</sub> ≈ 0
                </td>
              </tr>
              <tr>
                <td>
                  <strong>E trough</strong>
                </td>
                <td>maximum</td>
                <td>0</td>
                <td>
                  <em>a</em>
                  <sub>x</sub> = 0, <em>a</em>
                  <sub>y</sub> &gt; 0
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          For <em>a</em>
          <sub>x</sub>, under that interpretation, I expect roughly A→B: <em>a</em>
          <sub>x</sub> &lt; 0 because <em>v</em>
          <sub>x</sub> is decreasing; B→C: <em>a</em>
          <sub>x</sub> &gt; 0 because <em>v</em>
          <sub>x</sub> recovers; C→D: <em>a</em>
          <sub>x</sub> &lt; 0 as the skier turns onto the steep descent; and D→E: <em>a</em>
          <sub>x</sub> &gt; 0 as <em>v</em>
          <sub>x</sub> returns toward its maximum.
        </p>
        <p>
          The short steep side therefore tends to give a much narrower and stronger-looking{" "}
          <em>a</em>
          <sub>x</sub> feature than the long uphill in the particular model I chose.
        </p>

        <h3>Where I had to guess</h3>
        <p>
          This is the most important result of the test run. I could solve the{" "}
          <strong>velocity portion</strong> with fairly high confidence, but I cannot produce a
          unique acceleration graph from the supplied information.
        </p>
        <p>I had to invent several things to generate the example above:</p>
        <ul>
          <li>I chose how much time A→C takes relative to C→E.</li>
          <li>
            I chose actual slope angles; my example used about +13° near B and −43° near D.
          </li>
          <li>
            I assumed B and D were approximately the points of greatest positive and negative
            slope.
          </li>
          <li>
            Most importantly, I invented the <strong>curvature between A, B, C, D, and E</strong>.
          </li>
        </ul>
        <p>That last one is the fundamental issue.</p>
        <p>
          For example, I know C is a crest, so it is reasonable to draw <em>a</em>
          <sub>y</sub> &lt; 0 there. I know A and E are troughs, so <em>a</em>
          <sub>y</sub> &gt; 0 there. Those conclusions come from the path curvature.
        </p>
        <p>
          But at D, all I really know from the prompt is “downhill.” I don’t know whether the path
          is getting steeper, has reached maximum steepness, or is already beginning to flatten.
          Those three possibilities give three different signs for <em>a</em>
          <sub>y</sub>. Likewise, B being labeled “uphill” does not tell me whether <em>v</em>
          <sub>y</sub> is increasing or decreasing there.
        </p>

        <h3>What this tells me about the problem as a research task</h3>
        <p>
          I think this is actually a promising result. The problem <strong>does not cause me to
          fail completely</strong>. I can recognize the physics, generate sensible <em>v</em>
          <sub>x</sub> and <em>v</em>
          <sub>y</sub> graphs, use the asymmetry correctly, and derive relationships among the
          four graphs.
        </p>
        <p>
          But when I reach acceleration, the image contains information that I have to interpret
          rather than simply calculate. The most interesting point is that an AI can very easily
          make the unjustified leap: “steeper slope → larger acceleration.” That is not generally
          true.
        </p>
        <p>
          A careful solver has to recognize: <strong>slope controls velocity direction;
          curvature controls the acceleration associated with changing that direction.</strong>
        </p>
        <p>
          So for your first major problem, I think you’ve created a real point of productive
          uncertainty. My strongest criticism is that it may currently be{" "}
          <strong>slightly too underdetermined around B and D</strong>. The velocity graphs have a
          fairly clear target answer, while there is a family of defensible acceleration graphs
          unless the student makes additional assumptions and explains them.
        </p>
        <p>
          And that may actually be exactly what you want: the student has something meaningful to
          challenge the AI about rather than simply asking it for four graphs.
        </p>
      </blockquote>
    </section>
  );
}
