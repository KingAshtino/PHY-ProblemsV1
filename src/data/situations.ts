export type Situation = {
  id: number;
  slug: string;
  title: string;
  image: string;
  caption: string;
  possible: boolean;
  rubric: {
    classification: "Possible" | "Impossible";
    reasoning: string;
    principles: string[];
    assumptions: string[];
  };
};

export const situations: Situation[] = [
  {
    id: 1,
    slug: "situation-1",
    title: "Situation 1",
    image: "situations/situation-1.jpg",
    caption: "A skier has just left the crest of a mogul. The velocity and acceleration vectors are shown.",
    possible: true,
    rubric: {
      classification: "Possible",
      reasoning:
        "The caption says the skier has just left the crest, and there is a gap between the skis and the snow. Once contact is lost, the net force is gravity (idealized, no air resistance), so acceleration is vertically downward while velocity can still point along the launch direction down the face of the mogul. An object can move one way and accelerate another. The unusual-looking a (straight down, not along v) is exactly what projectile motion requires.",
      principles: [
        "Newton’s second law with gravity as the net force when airborne",
        "Velocity and acceleration need not be parallel",
      ],
      assumptions: [
        "Air resistance neglected",
        "“Just left the crest” means the skier is no longer in contact with the snow",
      ],
    },
  },
  {
    id: 2,
    slug: "situation-2",
    title: "Situation 2",
    image: "situations/situation-2.jpg",
    caption: "A skier is airborne above a mogul. The velocity and acceleration vectors are shown.",
    possible: false,
    rubric: {
      classification: "Impossible",
      reasoning:
        "The caption states the skier is airborne. Under ordinary Earth conditions with air resistance neglected, the only force is weight, so a must be vertically downward. The diagram draws a along the same diagonal as v. That would require a net force along v, which an airborne skier does not have.",
      principles: [
        "Free-fall / projectile motion: a = g downward when airborne",
        "Newton’s second law",
      ],
      assumptions: ["Air resistance neglected", "No other contact forces while airborne"],
    },
  },
  {
    id: 3,
    slug: "situation-3",
    title: "Situation 3",
    image: "situations/situation-3.jpg",
    caption:
      "A car is moving to the right on a straight, level road while braking. The velocity and acceleration vectors are shown.",
    possible: true,
    rubric: {
      classification: "Possible",
      reasoning:
        "The car still has velocity to the right while braking, so the acceleration (change of velocity) is opposite the velocity. That is ordinary deceleration. Looking unusual is not a violation: motion to the right with a to the left is allowed and common.",
      principles: ["Definition of acceleration", "Newton’s second law (net force opposite v when slowing)"],
      assumptions: ["Straight-line motion; braking produces a net force opposite the velocity"],
    },
  },
  {
    id: 4,
    slug: "situation-4",
    title: "Situation 4",
    image: "situations/situation-4.jpg",
    caption:
      "A car is moving around a flat circular curve. The velocity and acceleration vectors are shown.",
    possible: false,
    rubric: {
      classification: "Impossible",
      reasoning:
        "For circular motion at the instant shown, v should be tangent to the path (that part of the diagram is fine). The acceleration that changes the direction of v must have a component toward the center of the circle (centripetal). The dashed radius is drawn to a center on the inside of the curve, but a is drawn roughly opposite that radius—outward. An outward a would increase speed away from the center, not keep the car on the circle. On a flat curve there is also no banked normal force that could produce an outward horizontal a of that kind as the required centripetal acceleration.",
      principles: [
        "Uniform (or instantaneous) circular motion: a_perp toward the center",
        "Friction toward the center on a flat curve, not away from it",
      ],
      assumptions: [
        "The black dot and dashed line mark the geometric center of the circular path",
        "The a arrow is meant to be the actual acceleration, not a labeled centrifugal fiction",
      ],
    },
  },
  {
    id: 5,
    slug: "situation-5",
    title: "Situation 5",
    image: "situations/situation-5.jpg",
    caption:
      "A basketball is at the highest point of its flight. The velocity and acceleration vectors are shown.",
    possible: true,
    rubric: {
      classification: "Possible",
      reasoning:
        "At the apex of a projectile, v_y = 0 so the remaining velocity is horizontal, while gravity still acts, so a is downward. Horizontal v with downward a at the top of the arc is the standard result, not a contradiction.",
      principles: ["Projectile motion", "Gravity is not zero at the top of the trajectory"],
      assumptions: ["Air resistance neglected", "Near-Earth g downward"],
    },
  },
  {
    id: 6,
    slug: "situation-6",
    title: "Situation 6",
    image: "situations/situation-6.jpg",
    caption:
      "A basketball is at the highest point of its flight. The velocity and acceleration information is shown.",
    possible: false,
    rubric: {
      classification: "Impossible",
      reasoning:
        "The ball is still in flight, so gravity still acts. Acceleration cannot be zero at the highest point. v may be horizontal there, but a = g downward. Labeling a = 0 confuses zero vertical velocity with zero acceleration.",
      principles: ["Newton’s second law", "Projectile motion: a = g throughout the flight (no air)"],
      assumptions: ["Air resistance neglected"],
    },
  },
  {
    id: 7,
    slug: "situation-7",
    title: "Situation 7",
    image: "situations/situation-7.jpg",
    caption:
      "A uniform block overhangs the edge of a table and is shown at rest. The center of mass is marked.",
    possible: false,
    rubric: {
      classification: "Impossible",
      reasoning:
        "The dashed line from the marked CM falls beyond the table edge, so the center of mass is not above the supporting surface. For a rigid object at rest on a table, the CM must lie over the support or the net torque about the edge tips the block. A uniform block can overhang, but not with its CM past the edge while remaining at rest.",
      principles: ["Static equilibrium: net torque zero", "Stability requires the CM over the base of support"],
      assumptions: [
        "The marked CM is accurate",
        "The table edge is the rightmost support",
        "No glue, clamp, or other extra constraint",
      ],
    },
  },
  {
    id: 9,
    slug: "situation-9",
    title: "Situation 9",
    image: "situations/situation-9.jpg",
    caption:
      "Two blocks are connected by a light inextensible rope over an ideal pulley. The instantaneous velocities are shown.",
    possible: true,
    rubric: {
      classification: "Possible",
      reasoning:
        "A light inextensible rope over an ideal pulley forces the speeds of the two ends to be equal: if one mass goes down at 2 m/s, the other must go up at 2 m/s. The diagram shows exactly that. The situation can look symmetric in speed even if the masses differ; acceleration would differ in sign but speeds match at each instant.",
      principles: ["Inextensible string constraint", "Ideal pulley: string length is constant"],
      assumptions: ["Rope does not stretch", "Rope does not slip off or go slack"],
    },
  },
  {
    id: 10,
    slug: "situation-10",
    title: "Situation 10",
    image: "situations/situation-10.jpg",
    caption:
      "Two blocks are connected by a light inextensible rope over an ideal pulley. The instantaneous velocities are shown.",
    possible: false,
    rubric: {
      classification: "Impossible",
      reasoning:
        "The same inextensible-rope constraint requires equal speeds. The diagram shows 5 m/s up on one side and 2 m/s down on the other. Those magnitudes cannot occur simultaneously: the string length cannot stay constant if the ends move at different speeds.",
      principles: ["Inextensible string: |v_1| = |v_2| for a single ideal pulley"],
      assumptions: ["One continuous inextensible rope", "Ideal pulley (string does not slip independently on each side)"],
    },
  },
];

export function getSituation(slug: string): Situation | undefined {
  return situations.find((s) => s.slug === slug);
}
