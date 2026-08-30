import type { Problem } from "../types";

export const categoryC: Problem[] = [
  {
    id: "c-fbd-01",
    category: "C",
    topic: "incline",
    title: "Salvage or reject a free-body diagram",
    estimatedMinutes: 20,
    stimulus: {
      text: "You walk up to a whiteboard. A crate is sliding down a rough ramp. The drawing is already there. Nobody labeled θ or μ. A phone thermometer in the corner of the board says 22 °C.\n\nYour job is not to invent the missing numbers. Decide what the diagram can still support, what it poisons, and whether an AI that “solved the whiteboard” should be trusted.",
      assets: [
        {
          type: "svg",
          id: "c-bad-fbd",
          caption: "Found on the board: N vertical, friction with the motion, acceleration drawn as a force.",
        },
      ],
    },
    tasks: [
      {
        id: "c1",
        kind: "identify",
        prompt:
          "Which ink marks are physically meaningful contact or long-range forces, which are kinematic labels, and which are decoration?",
      },
      {
        id: "c2",
        kind: "model",
        prompt:
          "Write a correct Newton-II setup for a block sliding down a rough incline (symbols only). Note every way the whiteboard drawing would make that setup wrong if taken literally.",
      },
      {
        id: "c3",
        kind: "critique",
        prompt:
          "Read the planted AI attempt. Decide whether its reasoning is justified. Quote the first unjustified step.",
      },
    ],
    rubric: {
      summary:
        "A usable model is N ⊥ plane, mg vertically, f_k up the plane if velocity is down the plane. The board drawing is not a valid FBD. No numerical a is determined.",
      mustInclude: [
        "Acceleration is not a force",
        "Normal force is perpendicular to the contact surface",
        "Temperature is irrelevant to the mechanics model here",
        "Refuse a numerical acceleration without θ, μ, and a decision about static vs kinetic",
      ],
      commonAIFailures: ["Copies arrows into ΣF = ma", "Invented θ = 30°"],
    },
    plantedAI: {
      label: "AI solution pasted under the drawing",
      transcript:
        "I read the free-body diagram as the complete list of forces. There is weight, a vertical normal force, friction down the ramp, and a force a. Taking down-ramp as positive, ma = mg sin θ + f + a. The extra a on both sides cancels if a means acceleration, so m = m g sin θ + f, which is inconsistent unless f is negative. Therefore friction is up the plane and has magnitude mg. With no angle given I assume 45°. Then a = g(sin 45° − 1) which is negative, so the block accelerates up the plane. The 22 °C confirms the lab is standard so g = 9.8.",
      verdict: "unjustified",
      errorTags: ["a-as-force", "invented-angle", "algebra-from-bad-FBD"],
    },
  },
  {
    id: "c-sensor-01",
    category: "C",
    topic: "projectile",
    title: "Motion sensor that was never zeroed",
    estimatedMinutes: 22,
    stimulus: {
      text: "A cart on a straight track is released from rest. A student claims the motion is constant acceleration. Their motion-sensor table is below. In the margin: “x might be cm?? we started the cart in front of the sensor. One point looks cursed.”\n\nYou may ask an AI to fit a parabola — but only after you decide which numbers are physical.",
      assets: [
        {
          type: "table",
          caption: "Position vs time as exported. Header in the file is just ‘x’.",
          columns: [
            { key: "t", label: "t", unit: "s" },
            { key: "x", label: "x", unit: "?" },
          ],
          rows: [
            { t: 0.0, x: 4.2 },
            { t: 0.2, x: 7.1 },
            { t: 0.4, x: 16.3 },
            { t: 0.6, x: 31.0 },
            { t: 0.8, x: 88.4 },
            { t: 1.0, x: 79.0 },
            { t: 1.2, x: 112.2 },
          ],
          plot: {
            x: "t",
            y: "x",
            title: "Raw export (units unresolved)",
            xLabel: "t (s)",
            yLabel: "x (file units)",
          },
        },
      ],
    },
    tasks: [
      {
        id: "c1",
        kind: "identify",
        prompt:
          "Identify the likely zero offset, the likely units, and the outlier. Justify each claim with a pattern in the table, not with a vibe.",
      },
      {
        id: "c2",
        kind: "model",
        prompt:
          "After cleaning the data, is constant a from rest a reasonable model? Estimate a. State the remaining uncertainty (offset, units, dropped point).",
      },
      {
        id: "c3",
        kind: "critique",
        prompt: "The planted AI fit every raw point as meters. What did it actually measure?",
      },
    ],
    rubric: {
      summary:
        "Offset ≈ 4.2 (sensor not zeroed). Units behave like centimeters: after subtracting 4.2, x ≈ 0.5(150 cm/s²)t² except t = 0.8 s (88.4), which is an outlier vs ~52. a ≈ 1.5 m/s² if x is in cm. Fitting raw meters including the outlier is unjustified.",
      mustInclude: [
        "Do not fit the raw column blindly",
        "t = 0.8 s is inconsistent with neighbors",
        "Unit choice changes a by 100×",
        "Released from rest is supported only after offset removal",
      ],
      numericAnswers: ["a ≈ 1.5 m/s² if x is in cm with offset 4.2 cm"],
      commonAIFailures: ["Linear or quadratic fit on raw values including 88.4 as meters"],
    },
    plantedAI: {
      label: "AI curve fit",
      transcript:
        "I performed a quadratic regression on all seven points, taking x as meters. The fit is x = 4.06 + 12.1 t + 68.4 t², so a = 137 m/s². That is about 14 g, which is large but possible if they shoved the cart. R² is only okay because of scatter. I did not drop points because dropping data is p-hacking.",
      verdict: "unjustified",
      errorTags: ["wrong-units", "kept-outlier", "offset-as-physics", "absurd-a"],
    },
  },
  {
    id: "c-energy-bars-01",
    category: "C",
    topic: "energy",
    title: "Energy bars that cannot match the track",
    estimatedMinutes: 18,
    stimulus: {
      text: "A group turned in two figures for the same cart run: equal-height energy bars that switch from all U to all K, and a track sketch with a rough patch and the cart stopped on the hill. They want a value of μ.",
      assets: [{ type: "svg", id: "c-energy-conflict" }],
    },
    tasks: [
      {
        id: "c1",
        kind: "identify",
        prompt:
          "Name the contradiction. Which representation, if either, is compatible with a cart that stops on the hill?",
      },
      {
        id: "c2",
        kind: "model",
        prompt:
          "If the track sketch is right, write the energy accounting (symbols) and say why μ cannot be read from the bars. If the bars are right, say what must be wrong with the sketch.",
      },
      {
        id: "c3",
        kind: "critique",
        prompt: "Evaluate the planted AI’s μ = 0 conclusion.",
      },
    ],
    rubric: {
      summary:
        "Equal U→K bars imply mechanical energy conserved and a finite speed at the ‘finish.’ A cart at rest higher up with roughness requires W_nc < 0. They cannot both describe one run. μ is not 0 unless the stop is abandoned.",
      mustInclude: [
        "Bars vs ‘stops at top’ contradiction",
        "No unique μ from this packet",
        "Need either KE at a known point or a measured stop height plus path length of roughness",
      ],
    },
    plantedAI: {
      label: "AI lab conclusion",
      transcript:
        "The energy bars are the quantitative figure, so mechanical energy is conserved. Therefore μ = 0 even though the artist drew hash marks. Hash marks are stylistic. The cart cannot actually be at rest at the top; that would make K = 0 and U large, which is the reverse of the bars. I trust the bars and report μ = 0. v at the bottom is sqrt(2gh) once they measure h.",
      verdict: "unjustified",
      errorTags: ["picked-one-figure-silently", "μ-from-bars-only", "ignored-stop"],
    },
  },
  {
    id: "c-lab-photo-01",
    category: "C",
    topic: "incline",
    title: "What in this table photo is a measurement?",
    estimatedMinutes: 20,
    stimulus: {
      text: "This is a reconstruction of a phone photo of a dynamics lab. Your group will later compute an acceleration, but not yet. First decide what is physically meaningful in the scene.",
      assets: [
        {
          type: "svg",
          id: "c-lab-photo",
          caption: "Cart on a book-ramp, meter stick, mug, phone, sticky note, long shadow.",
        },
      ],
    },
    tasks: [
      {
        id: "c1",
        kind: "identify",
        prompt:
          "List objects and marks that could be data (with how you would use them) versus clutter, decoration, or false cues (including the shadow).",
      },
      {
        id: "c2",
        kind: "measure",
        prompt:
          "The sticky note says “m = 250 g?” and “books ≈ 12°.” How should those question marks change a later calculation? What would you still measure with the meter stick?",
      },
      {
        id: "c3",
        kind: "plan-experiment",
        prompt:
          "Outline the next three measurements you would take before asking an AI to compute anything. Where would AI help, and where would it only launder a bad number?",
      },
    ],
    rubric: {
      summary:
        "Meaningful: cart as system, meter stick as scale, ramp angle if measured, mass if confirmed. Not forces: shadow, mug, phone. 250 g and 12° are hypotheses. Do not treat the shadow as a fourth force.",
      mustInclude: [
        "Shadow is not a force",
        "Sticky-note mass and angle are uncertain",
        "Meter stick can calibrate length, not μ by itself",
        "AI should not compute a from guessed 12° as if it were θ",
      ],
    },
    plantedAI: {
      label: "AI ‘reading’ of the photo",
      transcript:
        "I extracted θ = 12° from the sticky note and m = 0.250 kg. The dark smear under the cart is a friction force vector, so the surface is rough. The mug’s mass is unknown so I ignore it. Using a = g sin 12° (frictionless, because I already used the smear as the friction drawing, not as μ) I get a = 2.03 m/s². The phone is the origin of coordinates.",
      verdict: "unjustified",
      errorTags: ["sticky-note-as-data", "shadow-as-force", "inconsistent-friction"],
    },
  },
  {
    id: "c-collision-under-01",
    category: "C",
    topic: "collisions",
    title: "Collision aftermath you cannot classify",
    estimatedMinutes: 18,
    stimulus: {
      text: "Low-friction track. Left cart 0.50 kg, right cart 0.75 kg. Before: left cart ~0.80 m/s rightward, right cart approximately at rest. After: a single blurry frame where the carts overlap. Nobody recorded a second outgoing speed. They want to know if it was elastic.",
      assets: [{ type: "svg", id: "c-collision-scene" }],
    },
    tasks: [
      {
        id: "c1",
        kind: "model",
        prompt:
          "List the models still in play (elastic 1D, inelastic 1D but not stuck, perfectly inelastic, 2D glance). What quantity is missing for each?",
      },
      {
        id: "c2",
        kind: "plan-experiment",
        prompt:
          "Name one extra measurement that would decide whether the carts stuck together, and one that would test elasticity if they did not stick.",
      },
      {
        id: "c3",
        kind: "critique",
        prompt: "The planted AI reports a perfectly inelastic speed. Is that forced by the photo?",
      },
    ],
    rubric: {
      summary:
        "Overlap in one frame does not prove a stick. Perfectly inelastic v = m1 v1 / (m1+m2) = 0.32 m/s is a model, not an observation. Elasticity is underdetermined.",
      mustInclude: [
        "Photo is underdetermined",
        "Stuck vs bounce needs relative velocity after or a video, not a single overlap",
        "Cannot conclude elastic vs inelastic from the given numbers alone",
      ],
      numericAnswers: ["If — and only if — they stuck: v′ = 0.32 m/s"],
    },
    plantedAI: {
      label: "AI collision report",
      transcript:
        "In the after photo the carts occupy the same place, so this is perfectly inelastic. Momentum conservation: (0.50)(0.80) = (1.25) v so v = 0.32 m/s. Kinetic energy is lost, confirming inelastic. Elastic is ruled out because they overlap.",
      verdict: "unjustified",
      errorTags: ["overlap-equals-stuck", "KE-loss-assumed-not-measured"],
    },
  },
  {
    id: "c-incline-overdet-01",
    category: "C",
    topic: "incline",
    title: "Three numbers that cannot describe one slide",
    estimatedMinutes: 18,
    stimulus: {
      text: "A student lab sheet for a block sliding down a rough incline lists all of the following as facts about the same run:\n\n• θ = 30°\n• m = 2.0 kg\n• μ_k = 0.40\n• a_measured = 4.0 m/s² down the plane\n• “from rest, it traveled 1.0 m in 0.50 s”\n\nTake g = 9.80 m/s². Do not average the contradictions away.",
    },
    tasks: [
      {
        id: "c1",
        kind: "identify",
        prompt:
          "Compute the acceleration implied by (θ, μ_k) and the acceleration implied by the 1.0 m in 0.50 s from rest. Compare both to 4.0 m/s².",
      },
      {
        id: "c2",
        kind: "model",
        prompt:
          "Which measurement is the most likely to be a kinematics slip (s = ½ a t²) versus a friction-model slip? You still must say the data set is inconsistent.",
      },
      {
        id: "c3",
        kind: "critique",
        prompt: "The planted AI averaged the three accelerations. Why is that not a measurement of a?",
      },
    ],
    rubric: {
      summary:
        "a_model = g(sin 30° − 0.40 cos 30°) ≈ 1.51 m/s². From rest, 1.0 m in 0.50 s ⇒ a = 2s/t² = 8.0 m/s². Neither is 4.0. The sheet is overdetermined and false as a set. Averaging is unjustified.",
      mustInclude: [
        "Three mutually inconsistent a values",
        "m cancels in a_model and does not fix the contradiction",
        "No single reported a",
      ],
      numericAnswers: ["a_friction-model ≈ 1.51 m/s²", "a_timing = 8.0 m/s²", "a_claimed = 4.0 m/s²"],
    },
    plantedAI: {
      label: "AI ‘best estimate’",
      transcript:
        "We have three estimates of a: 1.51, 4.0, and 8.0 m/s². The mean is 4.5 m/s², which is close to their measured 4.0, so I report a = 4.2 m/s² after rounding. Mass 2.0 kg was unused, as expected. The model is internally consistent on average.",
      verdict: "unjustified",
      errorTags: ["averaged-inconsistent-data", "called-mean-a-measurement"],
    },
  },
  {
    id: "c-friction-qual-01",
    category: "C",
    topic: "incline",
    title: "“It almost doesn’t start”",
    estimatedMinutes: 16,
    stimulus: {
      text: "Wooden block on a wooden board. You tilt the board slowly. A partner says: “It starts moving at a little more than 30°.” After it is moving, you can lower the board to about 20° and it keeps sliding; a bit below 20° it stops.\n\nThere is no force sensor and no mass measurement. They still want μ_s and μ_k.",
    },
    tasks: [
      {
        id: "c1",
        kind: "model",
        prompt:
          "Translate the qualitative observations into statements about static and kinetic friction at the limiting angles. Why is mass unnecessary?",
      },
      {
        id: "c2",
        kind: "calculate",
        prompt:
          "Give numerical estimates of μ_s and μ_k, with a honest uncertainty from “a little more than 30°” and “about 20°.”",
      },
      {
        id: "c3",
        kind: "critique",
        prompt: "The planted AI used 30° for both coefficients. What physics did that erase?",
      },
    ],
    rubric: {
      summary:
        "μ_s ≈ tan θ_start with θ_start ≳ 30°, e.g. tan 32° ≈ 0.62. μ_k ≈ tan θ_keep ≈ tan 20° ≈ 0.36. Mass cancels. Static and kinetic are different; using one angle for both is wrong.",
      mustInclude: [
        "Different angles → μ_s > μ_k",
        "tan θ, not sin θ, at the limits with a = 0",
        "Uncertainty from the words ‘a little more’ and ‘about’",
      ],
      numericAnswers: ["μ_s ≈ 0.6 (roughly 0.58–0.70)", "μ_k ≈ 0.36 (roughly 0.32–0.40)"],
    },
    plantedAI: {
      label: "AI friction report",
      transcript:
        "They said 30°, which is a standard textbook angle. μ_s = μ_k = tan 30° = 0.577. The 20° is probably the same triangle seen from the side of the table, so I discard it. Mass was not given so I assume 1 kg; it cancels anyway.",
      verdict: "unjustified",
      errorTags: ["one-μ-for-both", "discarded-20deg", "false-precision"],
    },
  },
  {
    id: "c-projectile-assumptions-01",
    category: "C",
    topic: "projectile",
    title: "Range, ‘45°,’ and a hang time that do not match",
    estimatedMinutes: 20,
    stimulus: {
      text: "From a phone video of a soccer ball on level ground, a student extracted:\n\n• range about 18 m\n• “it looked like 45°”\n• hang time about 1.5 s\n\nThey want the launch speed. Air may or may not matter. Treat g = 9.80 m/s².",
    },
    tasks: [
      {
        id: "c1",
        kind: "identify",
        prompt:
          "Show that vacuum projectile motion at 45° cannot reproduce both 18 m and 1.5 s. Compute the hang time implied by the range, and the range implied by the hang time, under that model.",
      },
      {
        id: "c2",
        kind: "model",
        prompt:
          "List at least three modeling or measurement explanations (angle not 45°, hang time mis-read, range mis-scaled, air resistance, bounce counted as hang time). For each, say what extra evidence would support it.",
      },
      {
        id: "c3",
        kind: "critique",
        prompt: "The planted AI ignored hang time. Is that conservative, or is it hiding the inconsistency?",
      },
    ],
    rubric: {
      summary:
        "If θ=45° and R=18 m, v₀=√(Rg)≈13.3 m/s, T=2v₀sinθ/g≈1.92 s ≠ 1.5 s. If T=1.5 s and 45°, v₀≈7.35 m/s, R≈5.5 m ≠ 18 m. A single vacuum-45° speed is not justified. Dropping T is not conservative.",
      mustInclude: [
        "Numerical inconsistency under the 45° vacuum model",
        "More than one possible resolution",
        "Do not report one v₀ as if all three numbers were used",
      ],
    },
    plantedAI: {
      label: "AI launch-speed calculation",
      transcript:
        "Range formula at 45°: R = v₀²/g so v₀ = sqrt(18 × 9.80) = 13.3 m/s. I did not use the hang time because time measurements from video are less reliable than a tape of the range. Air resistance is neglected as usual in Physics I.",
      verdict: "unjustified",
      errorTags: ["dropped-inconsistent-datum", "false-uncertainty-hierarchy"],
    },
  },
  {
    id: "c-vt-graph-01",
    category: "C",
    topic: "circular",
    title: "A v–t graph with no vertical scale",
    estimatedMinutes: 16,
    stimulus: {
      text: "A car’s speed vs time was sketched after a lab. The v axis has no ticks. Time 0, 1.0 s, and 2.0 s are marked. A caption: “the speedometer read 12 m/s at the end.” Someone wants the displacement during these 2.0 s, then wants to use that displacement as the arc length of a circle.",
      assets: [
        {
          type: "svg",
          id: "c-vt-unlabeled",
          caption: "v rises, then looks constant. Only the time axis is numbered.",
        },
      ],
    },
    tasks: [
      {
        id: "c1",
        kind: "identify",
        prompt:
          "What can you conclude from the shape alone? What can you not conclude without a v scale or a second calibrated point?",
      },
      {
        id: "c2",
        kind: "calculate",
        prompt:
          "Under the extra assumption that v(0)=0 and v increases linearly to 12 m/s by 1.0 s then stays 12 m/s, what displacement would you get? Label that number as assumption-dependent, not as a measurement.",
      },
      {
        id: "c3",
        kind: "critique",
        prompt: "Did the planted AI admit the assumption v(0)=0, or smuggle it?",
      },
    ],
    rubric: {
      summary:
        "Shape: increase then roughly constant. Displacement is the area, which is unknown without a v scale. The extra assumption gives Δx = ½(12)(1)+12(1)=18 m, not a lab measurement. Using it as a circular arc length piles on another model.",
      mustInclude: [
        "Area under v–t needs a vertical scale",
        "12 m/s is only an endpoint",
        "Assumed Δx = 18 m if v(0)=0 and the knee is at 1.0 s",
      ],
      numericAnswers: ["Δx = 18 m only under the stated extra assumptions"],
    },
    plantedAI: {
      label: "AI displacement",
      transcript:
        "The graph goes up and then flattens. Final speed 12 m/s. Displacement is the area of a triangle plus a rectangle: (1/2)(2.0)(12) wait, looking again the knee is at 1 s, so 6 + 12 = 18 m. This is the distance traveled, so if they were turning, s = rθ = 18 m.",
      verdict: "unjustified",
      errorTags: ["assumed-v0", "assumed-linear-rise", "s-as-arc-without-evidence"],
    },
  },
  {
    id: "c-twoblock-01",
    category: "C",
    topic: "torque",
    title: "Which object is the system?",
    estimatedMinutes: 18,
    stimulus: {
      text: "Block A (1.2 kg) on a smooth table is connected by a string over a light pulley to hanging block B (0.40 kg). The string is inextensible. A student asked an AI for the acceleration of A toward the pulley. You have the AI’s paragraph and a clean sketch. The sketch is not the problem; the system choice is.",
      assets: [{ type: "svg", id: "c-two-block" }],
    },
    tasks: [
      {
        id: "c1",
        kind: "model",
        prompt:
          "Write Newton II for A, for B, and (if you like) for the two-block system. What is wrong with putting m_B g on A’s FBD as a contact force?",
      },
      {
        id: "c2",
        kind: "calculate",
        prompt: "Find the magnitude of the acceleration and the tension.",
      },
      {
        id: "c3",
        kind: "critique",
        prompt: "Identify the unjustified system in the planted AI, even if a number looks ‘sort of small.’",
      },
    ],
    rubric: {
      summary:
        "a = m_B g / (m_A + m_B) = 2.45 m/s². T = m_A a = 2.94 N. The AI’s a = m_B g / m_A treats B as a hung weight that does not accelerate and dumps m_B g onto A.",
      mustInclude: [
        "B accelerates; T ≠ m_B g",
        "m_B g is a force on B, not on A",
        "a = 2.45 m/s², T = 2.94 N",
      ],
      numericAnswers: ["a = 2.45 m/s²", "T = 2.94 N"],
    },
    plantedAI: {
      label: "AI Atwood-style shortcut",
      transcript:
        "The hanging mass provides the force. Table is smooth, so the only force on A is the hanging weight, m_B g = 3.92 N. Then a = F/m_A = 3.92/1.2 = 3.27 m/s². Tension is 3.92 N because the string transmits the weight. I did not include m_A in the hanging object because A is not hanging.",
      verdict: "unjustified",
      errorTags: ["wrong-system", "T-equals-weight", "B-not-accelerating"],
    },
  },
  {
    id: "c-torque-statics-01",
    category: "C",
    topic: "torque",
    title: "A motionless rod is not rotating",
    estimatedMinutes: 16,
    stimulus: {
      text: "A uniform rod, 2.4 m, 6.0 kg, is hinged to a wall and held horizontal by a cable. The rod is at rest. A student still wants angular acceleration because “the hinge looks like it could spin.”",
      assets: [{ type: "svg", id: "c-torque-statics" }],
    },
    tasks: [
      {
        id: "c1",
        kind: "model",
        prompt:
          "Is this statics or rotation with α ≠ 0? Write the correct conditions (ΣF = 0, Στ = 0) and name an axis that is convenient.",
      },
      {
        id: "c2",
        kind: "identify",
        prompt:
          "The cable direction is only partly specified in the sketch. What cannot be computed until the cable angle (or an equivalent) is given? What can still be said?",
      },
      {
        id: "c3",
        kind: "critique",
        prompt: "The planted AI used τ_net = Iα with a made-up α. Quote the step where rest was ignored.",
      },
    ],
    rubric: {
      summary:
        "The rod is at rest ⇒ α = 0 and a_cm = 0. Στ = 0 about the hinge is the right tool. Iα with α invented from the ‘look’ of the hinge is unjustified. Cable angle is needed for a unique tension.",
      mustInclude: [
        "α = 0 because motionless",
        "Do not invent α",
        "Incomplete cable angle → incomplete T",
      ],
    },
    plantedAI: {
      label: "AI rotational solution",
      transcript:
        "The hinge can rotate, so this is rotational dynamics. I = (1/3)ML² about the hinge. There is a torque from gravity, Mg (L/2) = 70.6 N·m. Then α = τ/I = 70.6 / (11.5) = 6.1 rad/s². The cable’s torque is smaller because the cable looks short, so I neglected it. The rod will swing down.",
      verdict: "unjustified",
      errorTags: ["ignored-rest", "dropped-cable", "invented-alpha"],
    },
  },
  {
    id: "c-com-photo-01",
    category: "C",
    topic: "com",
    title: "Two guessed dots on irregular parts",
    estimatedMinutes: 15,
    stimulus: {
      text: "A photo of two shop parts on a bench. Someone marked “CM?” on each. Masses were never measured. They want the center of mass of the two-part system so they can lift it without rotating.",
      assets: [{ type: "svg", id: "c-com-photo" }],
    },
    tasks: [
      {
        id: "c1",
        kind: "identify",
        prompt:
          "Which claims in the figure are data, which are hypotheses, and which are impossible without more information?",
      },
      {
        id: "c2",
        kind: "plan-experiment",
        prompt:
          "Describe a procedure (hanging, balance, or mass-plus-geometry) that would actually locate the two-body CM. Where is an AI useful (arithmetic, not inventing masses)?",
      },
      {
        id: "c3",
        kind: "critique",
        prompt: "The planted AI averaged the two pixel positions. Why is that not x_cm?",
      },
    ],
    rubric: {
      summary:
        "The red dots are guesses, not measurements. Two-body CM needs masses (or equivalent). Equal-weight average of guessed points is unjustified. Lifting without rotation needs the true CM of the combined object, including how they are joined.",
      mustInclude: [
        "Dots are not data",
        "Masses unknown ⇒ two-body CM unknown",
        "Pixel midpoint ≠ mass-weighted CM",
      ],
    },
    plantedAI: {
      label: "AI image analysis",
      transcript:
        "I took the marked CM of each part as ground truth. The system CM is the midpoint between the two marks because there are two objects. That point is the safe lifting location. Density looks uniform in the drawing so mass is proportional to area; the blob and the oval look similar in area, confirming equal masses.",
      verdict: "unjustified",
      errorTags: ["guess-as-data", "equal-mass-from-sketch", "area-eyeball"],
    },
  },
  {
    id: "c-damped-01",
    category: "C",
    topic: "oscillations",
    title: "A ‘period lab’ whose amplitude is dying",
    estimatedMinutes: 18,
    stimulus: {
      text: "A cart-spring oscillator was meant to be SHM. A student recorded peak positions (one side) as 8.0 cm, 6.2 cm, 4.9 cm on successive cycles, and a stopwatch period of 0.85 s that ‘seemed steady.’ Mass of the cart is 0.60 kg. They want k from T = 2π sqrt(m/k) using A = 8.0 cm.",
      assets: [
        {
          type: "table",
          caption: "Successive amplitudes, same side of the track.",
          columns: [
            { key: "n", label: "cycle" },
            { key: "A", label: "amplitude", unit: "cm" },
          ],
          rows: [
            { n: 1, A: 8.0 },
            { n: 2, A: 6.2 },
            { n: 3, A: 4.9 },
          ],
          plot: {
            x: "n",
            y: "A",
            title: "Amplitude vs cycle number",
            xLabel: "cycle",
            yLabel: "A (cm)",
          },
        },
      ],
    },
    tasks: [
      {
        id: "c1",
        kind: "identify",
        prompt:
          "Is undamped SHM a justified model? What does a nearly constant period plus shrinking A suggest?",
      },
      {
        id: "c2",
        kind: "calculate",
        prompt:
          "If you still extract k from the measured period using the undamped formula, compute k and state the modeling error you are accepting. Do not use A = 8.0 cm in that formula.",
      },
      {
        id: "c3",
        kind: "critique",
        prompt: "The planted AI used A to get k. Where did the formula go wrong?",
      },
    ],
    rubric: {
      summary:
        "Shrinking A ⇒ damping (or energy loss). Light damping: period still ≈ 2π sqrt(m/k). k ≈ 4π² m / T² ≈ 32.8 N/m from T=0.85 s. Amplitude is not an input to that k. Using A=8 cm as if x_max entered k is unjustified.",
      mustInclude: [
        "Damping is visible",
        "k from T and m, not from A",
        "A = 8 cm is not ‘the amplitude’ of a conservative oscillator for the whole run",
      ],
      numericAnswers: ["k ≈ 33 N/m from the undamped-period approximation"],
    },
    plantedAI: {
      label: "AI spring constant",
      transcript:
        "They gave A = 8.0 cm = 0.080 m and m = 0.60 kg. For SHM, ω² = k/m and energy is ½ k A². I do not have v, so I use k = m g / A as if it were a hanging stretch. k = 0.60 × 9.8 / 0.080 = 73.5 N/m. The later amplitudes are measurement noise. Period 0.85 s was not needed.",
      verdict: "unjustified",
      errorTags: ["wrong-formula-for-k", "ignored-damping", "ignored-period"],
    },
  },
  {
    id: "c-banked-01",
    category: "C",
    topic: "circular",
    title: "Banked sketch, level caption",
    estimatedMinutes: 16,
    stimulus: {
      text: "A 900 kg car, r = 18 m, μ_s unknown. The sketch looks banked. The caption says “level deck of the parking garage.” They want the maximum speed.",
      assets: [{ type: "svg", id: "c-banked" }],
    },
    tasks: [
      {
        id: "c1",
        kind: "identify",
        prompt: "Why can you not compute v_max from this packet? Which conflict has to be resolved first?",
      },
      {
        id: "c2",
        kind: "model",
        prompt:
          "Write v_max for a level curve (in terms of μ_s) and the qualitative change if the deck is actually banked inward. Do not pick a μ_s from thin air.",
      },
      {
        id: "c3",
        kind: "critique",
        prompt: "The planted AI used a banked-frictionless formula with θ read off the cartoon. Respond.",
      },
    ],
    rubric: {
      summary:
        "Level vs banked is unresolved; μ_s is missing. Frictionless banked v=sqrt(r g tan θ) with cartoon θ is unjustified. Level model is v=sqrt(μ_s g r) only after μ_s is measured and the surface is confirmed level.",
      mustInclude: [
        "Caption vs sketch conflict",
        "No μ_s, no θ measurement",
        "Refuse a numerical v_max",
      ],
    },
    plantedAI: {
      label: "AI max-speed",
      transcript:
        "The drawing is clearly banked. I estimated θ ≈ 20° from the slope of the trapezoid. For a frictionless bank, v = sqrt(r g tan θ) = sqrt(18 × 9.8 × 0.364) = 8.0 m/s. The word ‘level’ in the caption is probably a copy-paste error. Mass cancels.",
      verdict: "unjustified",
      errorTags: ["cartoon-angle", "ignored-caption", "assumed-frictionless"],
    },
  },
  {
    id: "c-rolling-01",
    category: "C",
    topic: "rotation",
    title: "v and ω that do not agree with rolling",
    estimatedMinutes: 20,
    stimulus: {
      text: "A round object (the notebook says both “hoop” and “disk”) of radius 0.080 m comes off a short ramp. A photogate gives v = 1.10 m/s for the axle. A slow-motion video gives ω ≈ 9 rad/s just after the photogate. They want translational plus rotational KE, assuming rolling without slipping.",
      assets: [{ type: "svg", id: "c-rolling" }],
    },
    tasks: [
      {
        id: "c1",
        kind: "identify",
        prompt:
          "Check v ≟ ω R. Is rolling without slipping justified at the photogate? What else is still unknown for KE?",
      },
      {
        id: "c2",
        kind: "model",
        prompt:
          "Write KE_trans + KE_rot without assuming v = ωR. What extra symbol (I or the object type, and mass) is required? When would slipping vs rolling change the energy bookkeeping on the ramp?",
      },
      {
        id: "c3",
        kind: "critique",
        prompt: "The planted AI used a hoop with v = ωR anyway. List the stacked assumptions.",
      },
    ],
    rubric: {
      summary:
        "ωR ≈ 0.72 m/s ≠ 1.10 m/s, so the no-slip condition fails at the measurement. Object type (I) and mass are unknown. Using ½ mv² + ½ I (v/R)² with hoop I = mR² is unjustified.",
      mustInclude: [
        "v ≠ ωR numerically",
        "Hoop vs disk unresolved",
        "Mass missing for a numerical KE",
        "Do not replace ω with v/R",
      ],
      numericAnswers: ["ωR ≈ 0.72 m/s versus v = 1.10 m/s"],
    },
    plantedAI: {
      label: "AI kinetic energy",
      transcript:
        "Rolling without slipping so ω = v/R = 13.8 rad/s. I discarded the video’s 9 rad/s as frame-rate error. A hoop has I = mR². They forgot to write m; I take m = 1 kg. Then K = ½ mv² + ½ m v² = v² = 1.21 J.",
      verdict: "unjustified",
      errorTags: ["forced-no-slip", "invented-mass", "ignored-ω", "hoop-guess"],
    },
  },
];
