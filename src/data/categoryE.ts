import type { Problem } from "../types";

const mogulImage = {
  type: "image" as const,
  src: "skier-moguls.png",
  alt: "Side-view diagram of a skier traveling left to right over repeated asymmetric moguls, with points A through E labeled.",
  caption:
    "Skier traveling over repeated asymmetric moguls. Gentle uphill, steep downhill. Diagram generated with ChatGPT 5.6.",
};

const setup =
  "Skiers traveling over moguls experience repeated changes in both horizontal and vertical motion as they move across the uneven terrain. To model this motion, consider a skier traveling from left to right over a repeating series of asymmetric moguls, where each mogul has a long, gradual uphill section followed by a shorter, steeper downhill section.\n\nAssume that the skier remains in contact with the snow and moves at approximately constant speed along the surface. The skier’s center of mass follows a smooth path approximately parallel to the terrain. Use the labeled locations on the diagram: A trough, B uphill, C crest, D downhill, E next trough.";

export const categoryE: Problem[] = [
  {
    id: "skier-graphs",
    category: "E",
    topic: "kinematics",
    title: "Proposed Task: Skier traveling over moguls",
    estimatedMinutes: 20,
    detailPath: "/proposal/skier-graphs",
    jaggedFeature: "asymmetric terrain; constant path-speed is not constant v_x",
    stimulus: {
      text: `${setup}\n\nUsing the provided diagram, draw the best qualitative velocity-time and acceleration-time graphs you can for the skier’s motion.`,
      assets: [mogulImage],
    },
    tasks: [
      {
        id: "t1",
        kind: "model",
        prompt:
          "Plot the horizontal and vertical components separately, creating four graphs: v_x vs t, v_y vs t, a_x vs t, and a_y vs t.",
      },
      {
        id: "t2",
        kind: "model",
        prompt: "Each graph should capture at least two complete mogul cycles.",
      },
      {
        id: "t3",
        kind: "model",
        prompt:
          "The graphs should reflect the asymmetric shape of the terrain. Do not assume the motion is sinusoidal simply because it repeats.",
      },
      {
        id: "t4",
        kind: "identify",
        prompt:
          "Use the labeled locations—trough, uphill, crest, downhill, and next trough—to justify important features of your graphs.",
      },
    ],
    rubric: {
      summary:
        "Constant path speed plus a changing slope means v_x and v_y both vary. The gentle uphill lasts longer than the steep downhill. Graphs that look like four sine waves miss the terrain.",
      mustInclude: [
        "Four graphs on a shared time axis with A–E marked, two cycles",
        "Longer time from A→C than from C→E",
        "v_x largest near A, C, E; smallest on the steep downhill",
        "v_y > 0 uphill, < 0 downhill, 0 at A, C, E",
        "a graphs consistent with the slopes of the v graphs",
      ],
      commonAIFailures: [
        "Four sine waves",
        "Constant v_x from ‘constant speed’",
        "Equal time uphill and downhill",
      ],
    },
  },
  {
    id: "skier-vx",
    category: "E",
    topic: "kinematics",
    title: "Is horizontal velocity constant?",
    estimatedMinutes: 12,
    detailPath: "/proposal/skier-vx",
    jaggedFeature: "constant total speed ≠ constant v_x",
    stimulus: {
      text: `${setup}\n\nThis task is only about the horizontal component of velocity.`,
      assets: [mogulImage],
    },
    tasks: [
      {
        id: "t1",
        kind: "identify",
        prompt:
          "Is the skier’s horizontal velocity v_x constant? Explain why or why not, given that the speed along the snow is approximately constant.",
      },
      {
        id: "t2",
        kind: "identify",
        prompt: "Where do you expect v_x to be largest, and where smallest? Tie each claim to a labeled location.",
      },
    ],
    rubric: {
      summary:
        "v_x = v cos θ along the local slope. With v roughly constant, v_x is largest where the slope is nearly level (A, C, E) and smallest where |θ| is largest (steep downhill D).",
      mustInclude: [
        "v_x is not constant",
        "constant path speed ≠ constant v_x",
        "Largest near troughs and crests; smallest on the steep downhill",
      ],
      commonAIFailures: ["Treating constant speed as constant v_x"],
    },
  },
  {
    id: "skier-vy",
    category: "E",
    topic: "kinematics",
    title: "Vertical velocity on the moguls",
    estimatedMinutes: 12,
    detailPath: "/proposal/skier-vy",
    jaggedFeature: "asymmetric slope controls |v_y|",
    stimulus: {
      text: `${setup}\n\nTake upward as the positive y direction.`,
      assets: [mogulImage],
    },
    tasks: [
      {
        id: "t1",
        kind: "identify",
        prompt:
          "Identify where v_y is positive, negative, and equal to zero. Map each case to A–E.",
      },
      {
        id: "t2",
        kind: "identify",
        prompt:
          "Where does v_y reach its greatest positive value and its greatest negative value? Why is the downhill extreme larger in magnitude than the uphill extreme?",
      },
    ],
    rubric: {
      summary:
        "v_y > 0 on B, v_y < 0 on D, v_y = 0 at A, C, E. Because the downhill is steeper, |v_y| is larger near D than near B.",
      mustInclude: [
        "Sign and zeros tied to labeled locations",
        "Steep downhill produces the largest |v_y|",
        "Zero at crests and troughs does not mean the motion has stopped",
      ],
    },
  },
  {
    id: "skier-ax",
    category: "E",
    topic: "kinematics",
    title: "Horizontal acceleration from v_x(t)",
    estimatedMinutes: 12,
    detailPath: "/proposal/skier-ax",
    jaggedFeature: "a_x as the slope of v_x, not a new independent sketch",
    stimulus: {
      text: `${setup}\n\nYour a_x graph must be consistent with how v_x is changing.`,
      assets: [mogulImage],
    },
    tasks: [
      {
        id: "t1",
        kind: "model",
        prompt: "Using a qualitative v_x(t) graph first, mark where v_x is increasing, decreasing, or locally extreme.",
      },
      {
        id: "t2",
        kind: "identify",
        prompt: "Where is a_x positive, negative, and zero? Explain the derivative relationship.",
      },
    ],
    rubric: {
      summary:
        "a_x is the slope of v_x. Expect a_x = 0 at local max/min of v_x (near A, C, E if v_x peaks there). a_x is negative while v_x falls on the way up the steepening slope toward the crest’s approach, and so on—the exact intervals must match the v_x sketch.",
      mustInclude: [
        "a_x graph derived from v_x, not drawn independently",
        "Zeros of a_x at extrema of v_x",
        "Signs of a_x match rising vs falling v_x",
      ],
      commonAIFailures: ["Sketching a_x as another sine wave unrelated to v_x"],
    },
  },
  {
    id: "skier-ay",
    category: "E",
    topic: "kinematics",
    title: "Why v_y = 0 does not mean a_y = 0",
    estimatedMinutes: 15,
    detailPath: "/proposal/skier-ay",
    jaggedFeature: "zero velocity with nonzero acceleration at crests and troughs",
    stimulus: {
      text: `${setup}\n\nPay particular attention to the crest (C) and the troughs (A, E).`,
      assets: [mogulImage],
    },
    tasks: [
      {
        id: "t1",
        kind: "identify",
        prompt: "Using a qualitative v_y(t) graph, where is a_y positive, negative, and zero?",
      },
      {
        id: "t2",
        kind: "identify",
        prompt:
          "Explain why v_y = 0 at a crest or trough does not necessarily mean a_y = 0. What about the path requires a_y ≠ 0 there?",
      },
    ],
    rubric: {
      summary:
        "At C the path is concave down, so a_y is downward while v_y = 0. At A and E the path is concave up, so a_y is upward while v_y = 0. Turning around in y requires a_y.",
      mustInclude: [
        "v_y = 0 at A, C, E",
        "a_y downward at the crest, upward at the trough",
        "Curvature / changing v_y through zero, not ‘stopped so a = 0’",
      ],
      commonAIFailures: ["Setting a_y = 0 wherever v_y = 0"],
    },
  },
  {
    id: "skier-weight",
    category: "E",
    topic: "circular",
    title: "Apparent weight at crest and trough",
    estimatedMinutes: 15,
    detailPath: "/proposal/skier-weight",
    jaggedFeature: "same two forces, different curvature, different N",
    stimulus: {
      text: `${setup}\n\nNow consider the forces on the skier, treated as a point particle. Gravity and the normal force from the snow are the contacts of interest.`,
      assets: [mogulImage],
    },
    tasks: [
      {
        id: "t1",
        kind: "model",
        prompt: "Draw approximate free-body diagrams at the top of a mogul (C) and at the bottom of a trough (A or E). Explain any differences.",
      },
      {
        id: "t2",
        kind: "identify",
        prompt: "Where should the skier feel heaviest, and where lightest? Use acceleration and Newton’s second law.",
      },
      {
        id: "t3",
        kind: "identify",
        prompt: "Compare N to mg at the crest and at the trough: N > mg, N = mg, or N < mg at each location.",
      },
    ],
    rubric: {
      summary:
        "Both diagrams have mg down and N perpendicular to the local snow (vertical at C and at A/E if those points are locally level). At the trough, net force is upward so N > mg (heaviest). At the crest, net force is downward so N < mg (lightest).",
      mustInclude: [
        "N and mg on both FBDs",
        "Heaviest in the trough, lightest at the crest",
        "N > mg in the trough, N < mg at the crest",
      ],
      commonAIFailures: ["Crest heavier than trough", "Omitting N or treating N = mg everywhere"],
    },
  },
  {
    id: "skier-contact",
    category: "E",
    topic: "circular",
    title: "Losing contact at the crest",
    estimatedMinutes: 10,
    detailPath: "/proposal/skier-contact",
    jaggedFeature: "N → 0 is the contact condition, not a speed formula",
    stimulus: {
      text: `${setup}\n\nSuppose the skier travels substantially faster while crossing the same terrain. You do not need a numerical speed.`,
      assets: [mogulImage],
    },
    tasks: [
      {
        id: "t1",
        kind: "identify",
        prompt: "Could the skier lose contact with the snow near the top of a mogul?",
      },
      {
        id: "t2",
        kind: "identify",
        prompt: "What would have to happen to the normal force for that to occur?",
      },
    ],
    rubric: {
      summary:
        "Yes. At the crest the required downward acceleration grows with v²/ρ. N = mg − m v²/ρ (locally level crest). Contact is lost when N reaches 0.",
      mustInclude: [
        "Loss of contact is possible at the crest, not the trough",
        "N → 0 is the condition",
      ],
    },
  },
  {
    id: "skier-assumptions",
    category: "E",
    topic: "kinematics",
    title: "Which assumption most distorts the graphs?",
    estimatedMinutes: 12,
    detailPath: "/proposal/skier-assumptions",
    jaggedFeature: "naming the model, not just listing caveats",
    stimulus: {
      text: `${setup}\n\nA model always simplifies reality.`,
      assets: [mogulImage],
    },
    tasks: [
      {
        id: "t1",
        kind: "critique",
        prompt: "Name at least two assumptions in this setup that are unrealistic for an actual skier on moguls.",
      },
      {
        id: "t2",
        kind: "critique",
        prompt: "Which assumption do you think has the greatest effect on the four kinematic graphs? Explain why.",
      },
    ],
    rubric: {
      summary:
        "Unrealistic: strictly constant path speed, remaining in contact, identical moguls, point particle, no air resistance, no ski-snow deformation. The constant-speed assumption most directly sets the shape of v_x and v_y (and therefore a_x and a_y).",
      mustInclude: [
        "At least two distinct assumptions",
        "A defended choice for which one most changes the graphs",
      ],
    },
  },
  {
    id: "skier-constant-vx",
    category: "E",
    topic: "kinematics",
    title: "Constant path speed vs constant v_x",
    estimatedMinutes: 12,
    detailPath: "/proposal/skier-constant-vx",
    jaggedFeature: "constant total speed ≠ constant horizontal velocity",
    stimulus: {
      text: `${setup}\n\nThis distinction is the point of the task: constant total speed is not the same as constant horizontal velocity.`,
      assets: [mogulImage],
    },
    tasks: [
      {
        id: "t1",
        kind: "identify",
        prompt:
          "Suppose instead the skier maintained constant horizontal velocity rather than constant speed along the snow. Which of the four graphs (v_x, v_y, a_x, a_y) would change?",
      },
      {
        id: "t2",
        kind: "model",
        prompt: "Describe how those graphs would change, including what happens to a_x.",
      },
    ],
    rubric: {
      summary:
        "v_x becomes a positive constant and a_x becomes zero. v_y and a_y still vary with the terrain, but their shapes change because the time spent on each segment is no longer set by constant path speed (horizontal progress is uniform, so steep sections are traversed in less vertical-path time differently).",
      mustInclude: [
        "v_x constant and a_x = 0 under the new assumption",
        "v_y and a_y still not flat",
        "Explicit contrast with the original constant-path-speed model",
      ],
      commonAIFailures: ["Saying only v_x changes and leaving timing of v_y untouched without comment"],
    },
  },
];
