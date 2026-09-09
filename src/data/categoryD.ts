import type { Problem } from "../types";

export const categoryD: Problem[] = [
  {
    id: "d-skier-moguls",
    category: "D",
    topic: "kinematics",
    title: "Skier traveling over repeated asymmetric moguls",
    estimatedMinutes: 90,
    detailPath: "/major/skier-moguls",
    jaggedFeature: "asymmetric terrain, constant path-speed vs constant v_x, GenAI collaboration",
    stimulus: {
      text: "A multi-part modeling assignment: qualitative v_x, v_y, a_x, and a_y graphs for a skier whose speed along asymmetric moguls is approximately constant, then forces, model limits, and a required GenAI collaboration record.",
      assets: [
        {
          type: "image",
          src: "skier-moguls.png",
          alt: "Side-view diagram of a skier traveling left to right over repeated asymmetric moguls, with points A through E labeled.",
          caption:
            "Skier traveling over repeated asymmetric moguls. Gentle uphill, steep downhill. Diagram generated with ChatGPT 5.6.",
        },
      ],
    },
    tasks: [
      {
        id: "p1",
        kind: "model",
        prompt:
          "Part I: Draw qualitative v_x(t), v_y(t), a_x(t), and a_y(t) for at least two identical mogul cycles, using the same time axis and labels A–E. Do not default to sine waves.",
      },
      {
        id: "p2",
        kind: "identify",
        prompt:
          "Part II: Explain extrema, zeros, and signs of each kinematic quantity, including why v_y = 0 does not force a_y = 0.",
      },
      {
        id: "p3",
        kind: "model",
        prompt:
          "Part III: FBDs at crest and trough, apparent weight, N compared with mg, and whether faster travel can lose contact at the crest.",
      },
      {
        id: "p4",
        kind: "critique",
        prompt:
          "Part IV: Unrealistic assumptions, which one most affects the graphs, and how constant v_x (instead of constant path speed) would change the four graphs.",
      },
      {
        id: "p5",
        kind: "critique",
        prompt:
          "Part V: Use GenAI as a collaborator. Record the system/model/date, initial prompt, AI reasoning, your independent critique, follow-up, final model, and what you contributed that the AI did not.",
      },
    ],
    rubric: {
      summary:
        "The path speed is approximately constant, so v_x and v_y share that speed through the local slope. The terrain is asymmetric: more time on the gentle uphill than on the steep downhill. Crests and troughs have v_y = 0 but nonzero a_y (curvature). Apparent weight is largest in the trough and smallest at the crest. The GenAI section must show independent evaluation, not a pasted final answer.",
      mustInclude: [
        "Same labeled time axis (A–E, two cycles) on all four graphs",
        "Asymmetry in the graphs (steep downhill is shorter in time than gentle uphill)",
        "v_x is not constant; largest near A/C/E (slope ≈ 0), smaller on slopes, smallest on the steep downhill",
        "v_y > 0 on the uphill, v_y < 0 on the downhill, v_y = 0 at crests and troughs",
        "|v_y| larger on the steep downhill than on the gentle uphill at comparable mid-slope points",
        "a_x and a_y consistent with the slopes of the v graphs (derivative relation)",
        "At a crest, v_y = 0 while a_y is downward (negative if up is positive); at a trough a_y is upward",
        "N < mg at the crest, N > mg at the trough; heaviest in the trough, lightest at the crest",
        "Losing contact means N → 0 at the crest if speed is large enough",
        "constant total speed ≠ constant horizontal velocity",
        "GenAI record with model name and date, critique before revision, and a stated human contribution",
      ],
      commonAIFailures: [
        "Drawing four sine waves because the moguls repeat",
        "Taking constant speed along the snow as constant v_x",
        "Putting equal time on uphill and downhill despite the asymmetric shape",
        "Claiming a_y = 0 wherever v_y = 0",
        "Reversing apparent weight (crest heavier than trough)",
        "Treating the GenAI transcript as the submitted model without evaluation",
      ],
    },
  },
];
