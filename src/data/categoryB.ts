import type { Problem } from "../types";

export const categoryB: Problem[] = [
  {
    id: "b-incline-01",
    category: "B",
    topic: "incline",
    title: "Same incline, unusable student FBD",
    estimatedMinutes: 12,
    jaggedFeature: "badly drawn free-body diagram",
    twinOf: "a-incline-01",
    stimulus: {
      text: "A 4.0 kg crate is sliding down a 25° ramp with μ_k = 0.20. A lab partner already “drew the FBD.” The crate is painted red. The room thermometer reads 22 °C. Someone labeled F_push = 0 because nobody is pushing with their hand.\n\nUse the physics, not the partner’s arrows, unless an arrow is actually a force drawn correctly.",
      assets: [
        {
          type: "svg",
          id: "b-incline-fbd",
          caption: "Student FBD: N vertical, friction with the motion, a drawn as a force.",
        },
      ],
    },
    tasks: [
      {
        id: "b1",
        kind: "identify",
        prompt:
          "List which marks on the diagram are forces, which are not, and which forces are drawn in the wrong direction or with the wrong line of action.",
      },
      {
        id: "b2",
        kind: "calculate",
        prompt:
          "Ignoring the bad arrows, find the acceleration down the plane (same numerical problem as the baseline twin).",
      },
    ],
    rubric: {
      summary:
        "Same a as A, but only after discarding a as a force, redrawing N perpendicular to the plane, and pointing kinetic friction up the plane.",
      mustInclude: [
        "Temperature and paint color are irrelevant",
        "Acceleration is not a force",
        "N is perpendicular to the contact surface",
        "a = 2.36 m/s² down the plane",
      ],
      numericAnswers: ["a = 2.36 m/s²"],
      commonAIFailures: [
        "Treats the drawn ‘a’ arrow as a force in ΣF",
        "Uses N = mg because it was drawn vertical",
      ],
    },
    plantedAI: {
      label: "A generated write-up your partner pasted",
      transcript:
        "From the diagram, forces are mg down, N down (wait, N is shown downward along the vertical), friction down the ramp, and a down the ramp. Taking down the ramp as positive, ΣF = mg sin 25° + μN + ma. That does not make sense, so instead ΣF = ma with F_net copied from the arrows: a is already labeled, so a = 9.8 m/s². The 22 °C might affect μ, so maybe μ is larger. Final answer: 9.8 m/s².",
      verdict: "unjustified",
      errorTags: ["a-as-force", "wrong-normal", "irrelevant-T", "no-Newton-II"],
    },
  },
  {
    id: "b-projectile-01",
    category: "B",
    topic: "projectile",
    title: "Launch sketch that fights the caption",
    estimatedMinutes: 14,
    jaggedFeature: "incomplete diagram",
    twinOf: "a-projectile-01",
    stimulus: {
      text: "Notebook caption: “Ball launched at 18 m/s from the ground, 40°, lands on the field.”\n\nA second sentence, squeezed in later: “actually we were on the lab roof, about 3 m up.”\n\nThe sketch has no height, no angle mark, and no scale. A sticky note says the angle “looks like ~40°.”",
      assets: [{ type: "svg", id: "b-projectile-incomplete" }],
    },
    tasks: [
      {
        id: "b1",
        kind: "identify",
        prompt:
          "Which pieces of information are usable as given data, which are estimates, and which two claims cannot both be true without changing the model?",
      },
      {
        id: "b2",
        kind: "model",
        prompt:
          "Pick one consistent launch height (ground or 3 m), state it, and compute the corresponding range. If you refuse to pick, say what extra measurement you need.",
      },
    ],
    rubric: {
      summary:
        "The problem is underdetermined until height is chosen. Ground-level range is 32.5 m; from 3 m the range is larger. The sketch does not measure 40°.",
      mustInclude: [
        "Do not read 40° off the unlabeled drawing",
        "Ground vs 3 m roof are conflicting given stories",
        "A numerical range requires an explicit height assumption",
      ],
      commonAIFailures: [
        "Uses the level-ground range formula while also inserting y₀ = 3 m",
        "Measures the cartoon angle with a protractor on the SVG",
      ],
    },
  },
  {
    id: "b-collision-01",
    category: "B",
    topic: "collisions",
    title: "Elastic? The photogate file is a mess",
    estimatedMinutes: 15,
    jaggedFeature: "noisy experimental data",
    twinOf: "a-collision-01",
    stimulus: {
      text: "Two carts on a level track. The 0.50 kg cart was supposed to hit the 0.80 kg cart at rest, elastically. A student exported speeds. One column is unlabeled. One value is in cm/s. They ask you to “just get the final velocities like the homework.”",
      assets: [
        {
          type: "table",
          caption: "Student export. They were not sure about units.",
          columns: [
            { key: "trial", label: "trial" },
            { key: "v1i", label: "cart 1 before", unit: "??" },
            { key: "v2i", label: "cart 2 before", unit: "m/s" },
            { key: "v1f", label: "cart 1 after", unit: "m/s" },
            { key: "v2f", label: "cart 2 after", unit: "m/s" },
          ],
          rows: [
            { trial: 1, v1i: 4.0, v2i: 0.02, v1f: -1.1, v2f: 3.0 },
            { trial: 2, v1i: "410 cm/s", v2i: 0.00, v1f: -1.4, v2f: 2.9 },
            { trial: 3, v1i: 3.8, v2i: 0.05, v1f: 0.9, v2f: 1.6 },
            { trial: 4, v1i: 4.1, v2i: 0.00, v1f: -1.2, v2f: 3.2 },
          ],
        },
      ],
    },
    tasks: [
      {
        id: "b1",
        kind: "identify",
        prompt:
          "Which trials look like the intended nearly elastic 1D collision, which trial is a different physical event, and what is going on with trial 2’s units?",
      },
      {
        id: "b2",
        kind: "calculate",
        prompt:
          "Using only the trials you trust, estimate the outgoing velocities and compare to the elastic prediction for v₁ᵢ = 4.0 m/s.",
      },
    ],
    rubric: {
      summary:
        "Trial 2 is 4.10 m/s if converted; trial 3 fails both momentum and KE (likely inelastic or a mis-click). Elastic prediction matches trials 1 and 4 roughly.",
      mustInclude: [
        "Convert 410 cm/s → 4.10 m/s",
        "Trial 3 is not the same collision type",
        "Do not average all four rows blindly",
        "Elastic prediction v₁′ ≈ −1.23 m/s, v₂′ ≈ 3.08 m/s",
      ],
      commonAIFailures: [
        "Averages including trial 3",
        "Treats 410 as 410 m/s",
      ],
    },
  },
  {
    id: "b-energy-01",
    category: "B",
    topic: "energy",
    title: "Energy problem padded with lab gossip",
    estimatedMinutes: 12,
    jaggedFeature: "physically irrelevant information",
    twinOf: "a-energy-01",
    stimulus: {
      text: "A 2.5 kg blue block starts from rest on a 1.2 m-high frictionless ramp at 9:40 a.m. After the ramp it crosses 0.80 m of rough wood (μ_k = 0.30). A student notes that the block “sounded loud” and that the lab TA prefers SI units. Another student measured the room length as 11 m. Find the speed after the rough patch, if that is even determined by the notes.",
      assets: [{ type: "svg", id: "a-energy" }],
    },
    tasks: [
      {
        id: "b1",
        kind: "identify",
        prompt: "Strike through every quantity that cannot enter a work–energy solution for the speed after the patch.",
      },
      {
        id: "b2",
        kind: "calculate",
        prompt: "Compute the speed using only the physically relevant given data.",
      },
    ],
    rubric: {
      summary: "Same 4.34 m/s as the twin. Color, clock time, loudness, room length, and TA preference drop out.",
      mustInclude: ["Irrelevant list is explicit", "v = 4.34 m/s"],
      numericAnswers: ["v = 4.34 m/s"],
    },
  },
  {
    id: "b-circular-01",
    category: "B",
    topic: "circular",
    title: "Turn taken from a half-erased v(t) graph",
    estimatedMinutes: 14,
    jaggedFeature: "graphical + numerical reasoning",
    twinOf: "a-circular-01",
    stimulus: {
      text: "A 1200 kg car is on a level curve of radius 50 m, μ_s = 0.40. A phone graph of speed vs time during “the turn” is half-erased. Someone wrote “we were going 14 m/s at the start” in the margin, then crossed it out and wrote “12?”",
      assets: [{ type: "svg", id: "b-circular-graph", caption: "v drops, then is roughly constant. No vertical scale." }],
    },
    tasks: [
      {
        id: "b1",
        kind: "model",
        prompt:
          "What would you need the graph to show in order to decide whether the car was below, at, or above the sliding limit? What can you already compute without the graph?",
      },
      {
        id: "b2",
        kind: "calculate",
        prompt:
          "Compute the limiting speed from the friction model. Then explain why the graph, as drawn, cannot confirm the 12 vs 14 m/s dispute.",
      },
    ],
    rubric: {
      summary:
        "Limiting speed is still 14.0 m/s. The graph has no v-scale, so it cannot settle 12 vs 14. Shape only suggests speed decreased then held.",
      mustInclude: [
        "v_max = 14.0 m/s from μ_s g r",
        "Unscaled v axis cannot be read as 12 or 14",
        "Constant-speed circular motion is the model for the limit calculation, not a claim that the graph shows it",
      ],
      numericAnswers: ["v_limit = 14.0 m/s"],
    },
  },
  {
    id: "b-com-01",
    category: "B",
    topic: "com",
    title: "Center of mass with two origins",
    estimatedMinutes: 12,
    jaggedFeature: "student-generated measurements",
    twinOf: "a-com-01",
    stimulus: {
      text: "Same three masses as the baseline problem, but two partners measured positions in different notebooks.",
      assets: [
        { type: "svg", id: "b-com-origins" },
        {
          type: "table",
          caption: "Raw notebook numbers. They never agreed where x = 0 is.",
          columns: [
            { key: "mass", label: "mass", unit: "kg" },
            { key: "alex", label: "Alex x", unit: "m" },
            { key: "jordan", label: "Jordan x", unit: "m" },
          ],
          rows: [
            { mass: 2.0, alex: 0.0, jordan: 0.35 },
            { mass: 3.0, alex: 1.4, jordan: 1.75 },
            { mass: 1.0, alex: 2.0, jordan: 2.40 },
          ],
        },
      ],
    },
    tasks: [
      {
        id: "b1",
        kind: "identify",
        prompt:
          "Are these two data sets inconsistent, or are they the same geometry with a shifted origin? How can you tell?",
      },
      {
        id: "b2",
        kind: "calculate",
        prompt: "Report x_cm in a clearly stated coordinate system (Alex’s, Jordan’s, or another).",
      },
    ],
    rubric: {
      summary:
        "Jordan’s values are Alex’s plus ~0.35 m (last row is +0.40: a 5 cm recording error). Geometry is the same; CM is 1.03 m in Alex’s frame, ~1.38 m in Jordan’s if the shift is 0.35 m.",
      mustInclude: [
        "Shifted origin, not a different experiment",
        "Flag the 2.40 vs 2.35 inconsistency",
        "Do not average Alex and Jordan positions for the same mass",
      ],
      numericAnswers: ["x_cm = 1.03 m in Alex’s origin"],
    },
  },
  {
    id: "b-rotation-01",
    category: "B",
    topic: "rotation",
    title: "Torque given, radius missing",
    estimatedMinutes: 10,
    jaggedFeature: "incomplete diagram",
    twinOf: "a-rotation-01",
    stimulus: {
      text: "A “solid disk” is spun from rest by a 0.80 N·m torque for 3.0 s. The sketch has no radius. Someone guessed “M ≈ 3 kg?” then wrote 4 kg in the margin. I = ½ M R² only if you believe it is a uniform cylinder about its axis.",
      assets: [{ type: "svg", id: "b-rotation-incomplete" }],
    },
    tasks: [
      {
        id: "b1",
        kind: "identify",
        prompt: "Which unknowns block a numerical ω? Which modeling choices are still open even if R and M were known?",
      },
      {
        id: "b2",
        kind: "plan-experiment",
        prompt: "Name the shortest set of measurements that would let you predict ω after 3.0 s.",
      },
    ],
    rubric: {
      summary:
        "ω = τ t / I, so you need I. For a solid cylinder about its axis you need M and R, or a direct I measurement. Mass 3 vs 4 kg is unresolved. You cannot copy 0.12 m from the twin unless this is declared the same object.",
      mustInclude: [
        "R is not on the diagram",
        "Do not invent R = 0.12 m from a different problem",
        "I is the quantity that is actually required",
      ],
    },
  },
  {
    id: "b-shm-01",
    category: "B",
    topic: "oscillations",
    title: "All kinetic at t = 0 — or a crest?",
    estimatedMinutes: 12,
    jaggedFeature: "conflicting representations",
    twinOf: "a-shm-01",
    stimulus: {
      text: "k = 180 N/m, m = 0.50 kg, amplitude 0.080 m. The notebook says “t = 0, all kinetic energy.” The x vs t sketch starts at a crest.",
      assets: [{ type: "svg", id: "b-shm-phase" }],
    },
    tasks: [
      {
        id: "b1",
        kind: "identify",
        prompt: "Show that the sentence and the sketch disagree about the phase. Which observable would you trust and why?",
      },
      {
        id: "b2",
        kind: "calculate",
        prompt:
          "Period and v_max do not depend on the phase. Compute them. Then write x(t) under each of the two inconsistent t = 0 conventions (take φ in x = A cos(ωt + φ)).",
      },
    ],
    rubric: {
      summary:
        "T and v_max match the twin. Energy statement ⇒ x(0)=0; sketch ⇒ x(0)=±A. Both cannot define the same clock.",
      mustInclude: [
        "T = 0.331 s, v_max = 1.52 m/s regardless of phase",
        "Explicit contradiction at t = 0",
        "Two candidate x(t) functions, not one blended equation",
      ],
      numericAnswers: ["T = 0.331 s", "v_max = 1.52 m/s"],
    },
  },
];
