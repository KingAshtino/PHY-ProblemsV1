import type { Problem } from "../types";

export const categoryA: Problem[] = [
  {
    id: "a-incline-01",
    category: "A",
    topic: "incline",
    title: "Block sliding on a rough incline",
    estimatedMinutes: 8,
    stimulus: {
      text: "A 4.0 kg block starts from rest and slides down a 25° incline. The coefficient of kinetic friction between the block and the surface is 0.20. Take g = 9.80 m/s². The block remains in contact with the incline.",
      assets: [{ type: "svg", id: "a-incline", caption: "Side view; motion is down the plane." }],
    },
    tasks: [
      {
        id: "a1",
        kind: "calculate",
        prompt:
          "Find the magnitude of the block’s acceleration down the incline. State the direction relative to the plane.",
      },
    ],
    rubric: {
      summary:
        "Standard Newton-II along the plane with kinetic friction opposing the velocity (down the plane).",
      mustInclude: [
        "N = mg cos 25°, not mg",
        "f_k = μ_k N down the plane? No: friction is up the plane while sliding down",
        "a = g (sin θ − μ_k cos θ)",
      ],
      numericAnswers: ["a = 2.36 m/s² down the plane (about 2.4 m/s²)"],
    },
  },
  {
    id: "a-projectile-01",
    category: "A",
    topic: "projectile",
    title: "Range of a ground-launched ball",
    estimatedMinutes: 8,
    stimulus: {
      text: "A ball is launched from ground level with speed 18 m/s at 40° above the horizontal. Air resistance is negligible. The landing surface is level with the launch point. Take g = 9.80 m/s².",
      assets: [{ type: "svg", id: "a-projectile", caption: "Ideal parabola; axes not to scale." }],
    },
    tasks: [
      {
        id: "a1",
        kind: "calculate",
        prompt: "Find the horizontal range of the ball.",
      },
    ],
    rubric: {
      summary: "Standard range formula on level ground, or equivalent kinematic decomposition.",
      mustInclude: [
        "Split v₀ into components",
        "Time of flight from vertical motion with Δy = 0",
        "R = v₀² sin(2θ)/g is acceptable",
      ],
      numericAnswers: ["R = 32.5 m (about 33 m)"],
    },
  },
  {
    id: "a-collision-01",
    category: "A",
    topic: "collisions",
    title: "Elastic collision in one dimension",
    estimatedMinutes: 10,
    stimulus: {
      text: "A 0.50 kg cart moving at 4.0 m/s on a level air track collides elastically with a 0.80 kg cart that is at rest. Ignore friction. Treat the collision as one-dimensional.",
      assets: [{ type: "svg", id: "a-collision" }],
    },
    tasks: [
      {
        id: "a1",
        kind: "calculate",
        prompt: "Find the velocity of each cart after the collision. State directions (take the initial motion as positive).",
      },
    ],
    rubric: {
      summary: "1D elastic formulas, or momentum plus KE, with the lighter cart reversing.",
      mustInclude: [
        "Momentum conservation",
        "Elastic: relative speed reversed, or KE conservation",
        "Signs: 0.50 kg cart rebounds",
      ],
      numericAnswers: [
        "v₁′ = −1.23 m/s",
        "v₂′ = +3.08 m/s",
      ],
    },
  },
  {
    id: "a-energy-01",
    category: "A",
    topic: "energy",
    title: "Ramp then a rough patch",
    estimatedMinutes: 10,
    stimulus: {
      text: "A 2.5 kg block starts from rest at the top of a frictionless ramp of height 1.2 m. It then slides onto a level rough patch of length 0.80 m with μ_k = 0.30. Take g = 9.80 m/s². The block does not leave the surface.",
      assets: [{ type: "svg", id: "a-energy" }],
    },
    tasks: [
      {
        id: "a1",
        kind: "calculate",
        prompt: "Find the speed of the block just after it leaves the rough patch.",
      },
    ],
    rubric: {
      summary: "Mechanical energy with a nonconservative work term on the rough patch only.",
      mustInclude: [
        "U = mgh at the top, K = 0",
        "W_nc = −μ_k mg d on the patch (level, so N = mg)",
        "K_after = mgh − μ_k mg d",
      ],
      numericAnswers: ["v = 4.34 m/s (about 4.3 m/s)"],
    },
  },
  {
    id: "a-circular-01",
    category: "A",
    topic: "circular",
    title: "Maximum speed on a level curve",
    estimatedMinutes: 8,
    stimulus: {
      text: "A 1200 kg car rounds a level circular curve of radius 50 m. The coefficient of static friction between tires and pavement is 0.40. Take g = 9.80 m/s². The car does not bank.",
      assets: [{ type: "svg", id: "a-circular" }],
    },
    tasks: [
      {
        id: "a1",
        kind: "calculate",
        prompt: "Find the maximum constant speed at which the car can make the turn without sliding.",
      },
    ],
    rubric: {
      summary: "Friction supplies centripetal force: μ_s mg = m v²/r at the limit.",
      mustInclude: [
        "N = mg on a level road",
        "f_s,max = μ_s N toward the center",
        "v = sqrt(μ_s g r)",
      ],
      numericAnswers: ["v = 14.0 m/s"],
    },
  },
  {
    id: "a-com-01",
    category: "A",
    topic: "com",
    title: "Center of mass of three point masses",
    estimatedMinutes: 6,
    stimulus: {
      text: "Three point masses lie on the x-axis: 2.0 kg at x = 0, 3.0 kg at x = 1.4 m, and 1.0 kg at x = 2.0 m.",
      assets: [{ type: "svg", id: "a-com" }],
    },
    tasks: [
      {
        id: "a1",
        kind: "calculate",
        prompt: "Find the x-coordinate of the center of mass.",
      },
    ],
    rubric: {
      summary: "x_cm = Σ m_i x_i / Σ m_i with a single origin.",
      mustInclude: ["Same origin for all x_i", "Total mass 6.0 kg"],
      numericAnswers: ["x_cm = 1.03 m"],
    },
  },
  {
    id: "a-rotation-01",
    category: "A",
    topic: "rotation",
    title: "Constant torque on a solid cylinder",
    estimatedMinutes: 10,
    stimulus: {
      text: "A uniform solid cylinder (I = ½ M R² about its central axis) has mass 4.0 kg and radius 0.12 m. It is free to rotate about that axis. A constant torque of 0.80 N·m is applied from rest for 3.0 s. Friction in the bearings is negligible.",
      assets: [{ type: "svg", id: "a-rotation" }],
    },
    tasks: [
      {
        id: "a1",
        kind: "calculate",
        prompt: "Find the angular speed of the cylinder after 3.0 s.",
      },
    ],
    rubric: {
      summary: "τ = Iα, then ω = α t from rest.",
      mustInclude: [
        "I = ½ (4.0)(0.12)² = 0.0288 kg·m²",
        "α = τ/I = 27.8 rad/s²",
        "ω = αt (ω₀ = 0)",
      ],
      numericAnswers: ["ω = 83.3 rad/s"],
    },
  },
  {
    id: "a-shm-01",
    category: "A",
    topic: "oscillations",
    title: "Period and maximum speed of SHM",
    estimatedMinutes: 8,
    stimulus: {
      text: "A 0.50 kg block on a frictionless horizontal track is attached to a spring with k = 180 N/m. It oscillates with amplitude 0.080 m. Take the motion as simple harmonic.",
      assets: [{ type: "svg", id: "a-shm" }],
    },
    tasks: [
      {
        id: "a1",
        kind: "calculate",
        prompt: "Find the period of oscillation and the maximum speed of the block.",
      },
    ],
    rubric: {
      summary: "T = 2π sqrt(m/k) and v_max = A ω with ω = sqrt(k/m).",
      mustInclude: ["Do not use a pendulum period", "v_max occurs at x = 0"],
      numericAnswers: ["T = 0.331 s", "v_max = 1.52 m/s"],
    },
  },
];
