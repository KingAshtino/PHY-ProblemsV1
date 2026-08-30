import type { ReactElement, ReactNode } from "react";

type DiagramProps = { title?: string };

const ink = "#243040";
const mute = "#7a8490";
const paper = "#f7f4ee";
const accent = "#3d5a80";
const warn = "#9b3d3d";

function Frame({
  children,
  w = 420,
  h = 240,
}: {
  children: ReactNode;
  w?: number;
  h?: number;
}) {
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      role="img"
      className="diagram-svg"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={w} height={h} fill={paper} />
      {children}
    </svg>
  );
}

export function DiagramInclineClean({ title = "Block on a rough incline" }: DiagramProps) {
  return (
    <Frame>
      <title>{title}</title>
      <polygon points="40,200 360,200 360,80" fill="#e6e1d6" stroke={ink} />
      <rect
        x="210"
        y="108"
        width="56"
        height="36"
        fill="#c9d4e0"
        stroke={ink}
        transform="rotate(-20 238 126)"
      />
      <text x="300" y="168" fill={ink} fontSize="14">
        θ = 25°
      </text>
      <text x="48" y="228" fill={mute} fontSize="12">
        μ_k = 0.20 · m = 4.0 kg
      </text>
    </Frame>
  );
}

export function DiagramProjectileClean() {
  return (
    <Frame>
      <title>Projectile from ground</title>
      <line x1="30" y1="200" x2="390" y2="200" stroke={ink} />
      <path
        d="M50,200 C 120,40 260,40 340,200"
        fill="none"
        stroke={accent}
        strokeWidth="2"
        strokeDasharray="5 4"
      />
      <path d="M50,200 L 95,145" stroke={ink} markerEnd="url(#ar)" />
      <defs>
        <marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill={ink} />
        </marker>
      </defs>
      <text x="88" y="128" fill={ink} fontSize="13">
        v₀ = 18 m/s
      </text>
      <text x="70" y="188" fill={ink} fontSize="13">
        40°
      </text>
    </Frame>
  );
}

export function DiagramCollisionClean() {
  return (
    <Frame h={180}>
      <title>One-dimensional elastic collision</title>
      <rect x="60" y="80" width="50" height="36" fill="#c9d4e0" stroke={ink} />
      <rect x="220" y="80" width="70" height="36" fill="#d9cfc0" stroke={ink} />
      <line x1="40" y1="116" x2="380" y2="116" stroke={ink} />
      <path d="M40,70 L95,70" stroke={ink} markerEnd="url(#ar2)" />
      <defs>
        <marker id="ar2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill={ink} />
        </marker>
      </defs>
      <text x="52" y="64" fill={ink} fontSize="12">
        4.0 m/s
      </text>
      <text x="68" y="104" fill={ink} fontSize="12">
        0.50 kg
      </text>
      <text x="232" y="104" fill={ink} fontSize="12">
        0.80 kg
      </text>
      <text x="230" y="64" fill={mute} fontSize="12">
        at rest
      </text>
    </Frame>
  );
}

export function DiagramEnergyClean() {
  return (
    <Frame>
      <title>Ramp then rough patch</title>
      <path d="M40,60 L160,180 L390,180" fill="none" stroke={ink} strokeWidth="2" />
      <line x1="160" y1="180" x2="280" y2="180" stroke={warn} strokeWidth="6" />
      <rect x="92" y="88" width="36" height="24" fill="#c9d4e0" stroke={ink} />
      <text x="48" y="50" fill={ink} fontSize="13">
        h = 1.2 m
      </text>
      <text x="176" y="168" fill={warn} fontSize="12">
        rough, 0.80 m, μ_k = 0.30
      </text>
    </Frame>
  );
}

export function DiagramCircularClean() {
  return (
    <Frame h={220}>
      <title>Level circular path</title>
      <ellipse cx="210" cy="120" rx="120" ry="70" fill="none" stroke={ink} strokeDasharray="6 4" />
      <circle cx="330" cy="120" r="12" fill="#c9d4e0" stroke={ink} />
      <text x="150" y="124" fill={ink} fontSize="13">
        r = 50 m
      </text>
      <text x="40" y="210" fill={mute} fontSize="12">
        level road · μ_s = 0.40 · m = 1200 kg
      </text>
    </Frame>
  );
}

export function DiagramComClean() {
  return (
    <Frame h={160}>
      <title>Three masses on a line</title>
      <line x1="40" y1="90" x2="380" y2="90" stroke={ink} />
      <circle cx="50" cy="90" r="14" fill="#c9d4e0" stroke={ink} />
      <circle cx="220" cy="90" r="18" fill="#d9cfc0" stroke={ink} />
      <circle cx="300" cy="90" r="10" fill="#c5d5c5" stroke={ink} />
      <text x="36" y="130" fill={ink} fontSize="12">
        2.0 kg · x=0
      </text>
      <text x="180" y="130" fill={ink} fontSize="12">
        3.0 kg · 1.4 m
      </text>
      <text x="270" y="54" fill={ink} fontSize="12">
        1.0 kg · 2.0 m
      </text>
    </Frame>
  );
}

export function DiagramRotationClean() {
  return (
    <Frame h={200}>
      <title>Cylinder about its axis</title>
      <ellipse cx="200" cy="100" rx="70" ry="70" fill="#e6e1d6" stroke={ink} />
      <line x1="200" y1="30" x2="200" y2="170" stroke={ink} strokeDasharray="3 3" />
      <text x="280" y="90" fill={ink} fontSize="13">
        M = 4.0 kg
      </text>
      <text x="280" y="110" fill={ink} fontSize="13">
        R = 0.12 m
      </text>
      <text x="280" y="130" fill={ink} fontSize="13">
        τ = 0.80 N·m
      </text>
    </Frame>
  );
}

export function DiagramShmClean() {
  return (
    <Frame h={180}>
      <title>Horizontal spring-mass</title>
      <line x1="30" y1="90" x2="70" y2="90" stroke={ink} strokeWidth="4" />
      <path
        d="M70,90 l12,-14 l12,28 l12,-28 l12,28 l12,-28 l12,28 l12,-14"
        fill="none"
        stroke={ink}
        strokeWidth="2"
      />
      <rect x="164" y="72" width="44" height="36" fill="#c9d4e0" stroke={ink} />
      <line x1="30" y1="130" x2="300" y2="130" stroke={mute} />
      <text x="40" y="160" fill={ink} fontSize="12">
        k = 180 N/m · m = 0.50 kg · A = 0.080 m
      </text>
    </Frame>
  );
}

export function DiagramBadFbd() {
  return (
    <Frame h={260}>
      <title>Student free-body diagram</title>
      <polygon points="50,220 370,220 370,100" fill="#eeeae2" stroke={mute} />
      <rect
        x="200"
        y="128"
        width="50"
        height="32"
        fill="#c9d4e0"
        stroke={ink}
        transform="rotate(-18 225 144)"
      />
      <line x1="225" y1="144" x2="225" y2="210" stroke={ink} />
      <text x="232" y="200" fill={ink} fontSize="12">
        N (drawn vertical)
      </text>
      <line x1="225" y1="144" x2="225" y2="70" stroke={ink} />
      <text x="232" y="84" fill={ink} fontSize="12">
        mg
      </text>
      <line x1="225" y1="144" x2="310" y2="170" stroke={warn} />
      <text x="314" y="176" fill={warn} fontSize="12">
        f (same way as slide)
      </text>
      <line x1="225" y1="144" x2="300" y2="100" stroke={accent} />
      <text x="304" y="98" fill={accent} fontSize="12">
        a (labeled “force”)
      </text>
      <text x="40" y="248" fill={mute} fontSize="12">
        Student also wrote F_push = 0 and T = 22 °C
      </text>
    </Frame>
  );
}

export function DiagramProjectileIncomplete() {
  return (
    <Frame>
      <title>Incomplete launch sketch</title>
      <line x1="20" y1="80" x2="120" y2="80" stroke={ink} />
      <line x1="120" y1="80" x2="120" y2="200" stroke={ink} />
      <line x1="120" y1="200" x2="400" y2="200" stroke={ink} />
      <path d="M80,80 C 140,20 280,90 360,200" fill="none" stroke={accent} strokeDasharray="4 4" />
      <text x="24" y="72" fill={mute} fontSize="12">
        roof?? or ground??
      </text>
      <text x="130" y="50" fill={ink} fontSize="12">
        “angle looks like ~40°”
      </text>
      <text x="200" y="228" fill={mute} fontSize="12">
        no scale · no height marked
      </text>
    </Frame>
  );
}

export function DiagramComOrigins() {
  return (
    <Frame h={200}>
      <title>Two lab partners, two origins</title>
      <line x1="40" y1="80" x2="380" y2="80" stroke={ink} />
      <circle cx="80" cy="80" r="12" fill="#c9d4e0" stroke={ink} />
      <circle cx="200" cy="80" r="16" fill="#d9cfc0" stroke={ink} />
      <circle cx="320" cy="80" r="10" fill="#c5d5c5" stroke={ink} />
      <text x="40" y="130" fill={ink} fontSize="12">
        Alex: origin at left mass
      </text>
      <text x="40" y="150" fill={ink} fontSize="12">
        Jordan: origin at the table’s left edge (off the page)
      </text>
      <text x="40" y="178" fill={mute} fontSize="12">
        Positions in their notebooks do not share an origin
      </text>
    </Frame>
  );
}

export function DiagramRotationIncomplete() {
  return (
    <Frame h={200}>
      <title>Disk, radius not labeled</title>
      <ellipse cx="180" cy="100" rx="64" ry="64" fill="#e6e1d6" stroke={ink} />
      <text x="270" y="90" fill={ink} fontSize="13">
        “solid disk”
      </text>
      <text x="270" y="112" fill={ink} fontSize="13">
        M ≈ 3 kg?
      </text>
      <text x="270" y="134" fill={warn} fontSize="13">
        R not given
      </text>
    </Frame>
  );
}

export function DiagramShmPhaseConflict() {
  return (
    <Frame h={220}>
      <title>Energy statement vs x(t) sketch</title>
      <text x="24" y="32" fill={ink} fontSize="13">
        Notebook: “t = 0, all kinetic energy”
      </text>
      <path d="M40,120 C 80,40 140,40 180,120 S 280,200 320,120" fill="none" stroke={accent} />
      <line x1="40" y1="120" x2="380" y2="120" stroke={mute} />
      <text x="36" y="200" fill={ink} fontSize="12">
        Their x vs t sketch starts at a crest (x = +A)
      </text>
    </Frame>
  );
}

export function DiagramLabPhoto() {
  return (
    <Frame w={440} h={280}>
      <title>Phone photo of a lab table</title>
      <rect x="20" y="40" width="400" height="200" fill="#d8d0c4" stroke={ink} />
      <polygon points="80,200 280,200 240,120 100,120" fill="#c4b8a4" stroke={ink} />
      <rect x="150" y="96" width="70" height="28" fill="#8aa0b8" stroke={ink} />
      <rect x="300" y="150" width="18" height="70" fill="#c9a227" stroke={ink} />
      <text x="292" y="140" fill={ink} fontSize="10">
        meter stick
      </text>
      <rect x="40" y="168" width="36" height="48" fill="#3a3a3a" stroke={ink} rx="4" />
      <text x="36" y="232" fill={mute} fontSize="10">
        phone
      </text>
      <ellipse cx="340" cy="90" rx="22" ry="14" fill="#6b4" stroke={ink} />
      <text x="318" y="78" fill={mute} fontSize="10">
        mug
      </text>
      <path d="M150,124 Q 200,210 260,200" fill="none" stroke="#000" opacity="0.18" strokeWidth="10" />
      <rect x="310" y="48" width="90" height="36" fill="#fff8c8" stroke={ink} />
      <text x="318" y="64" fill={ink} fontSize="10">
        m = 250 g?
      </text>
      <text x="318" y="78" fill={ink} fontSize="10">
        books ≈ 12°
      </text>
      <text x="24" y="268" fill={mute} fontSize="11">
        Overhead lights; long shadow under the cart
      </text>
    </Frame>
  );
}

export function DiagramEnergyConflict() {
  return (
    <Frame w={440} h={260}>
      <title>Energy bars versus track sketch</title>
      <text x="20" y="28" fill={ink} fontSize="13">
        Energy bars “at the bottom” / “at the top”
      </text>
      <rect x="40" y="50" width="28" height="80" fill={accent} />
      <rect x="76" y="110" width="28" height="20" fill="#c9a227" />
      <text x="40" y="148" fill={mute} fontSize="11">
        U / K start
      </text>
      <rect x="140" y="50" width="28" height="20" fill={accent} />
      <rect x="176" y="50" width="28" height="80" fill="#c9a227" />
      <text x="140" y="148" fill={mute} fontSize="11">
        U / K finish
      </text>
      <path d="M250,200 L330,80 L400,80" fill="none" stroke={ink} strokeWidth="2" />
      <path d="M250,200 L400,200" stroke={warn} strokeWidth="5" />
      <text x="248" y="228" fill={warn} fontSize="11">
        hash marks: “rough wood”
      </text>
      <text x="250" y="50" fill={ink} fontSize="12">
        cart stops at top
      </text>
    </Frame>
  );
}

export function DiagramVtUnlabeled() {
  return (
    <Frame>
      <title>Speed vs time, incomplete axes</title>
      <line x1="50" y1="200" x2="380" y2="200" stroke={ink} />
      <line x1="50" y1="200" x2="50" y2="30" stroke={ink} />
      <path d="M50,180 L 200,70 L 340,70" fill="none" stroke={accent} strokeWidth="2" />
      <text x="44" y="218" fill={ink} fontSize="12">
        0
      </text>
      <text x="188" y="218" fill={ink} fontSize="12">
        1.0 s
      </text>
      <text x="320" y="218" fill={ink} fontSize="12">
        2.0 s
      </text>
      <text x="8" y="28" fill={mute} fontSize="12">
        v (?)
      </text>
      <text x="200" y="24" fill={ink} fontSize="12">
        no tick marks on v
      </text>
    </Frame>
  );
}

export function DiagramCollisionScene() {
  return (
    <Frame w={440} h={220}>
      <title>Blurry collision aftermath</title>
      <line x1="20" y1="160" x2="420" y2="160" stroke={ink} />
      <rect x="70" y="110" width="60" height="50" fill="#c9d4e0" stroke={ink} />
      <rect x="128" y="114" width="58" height="46" fill="#d9cfc0" stroke={ink} opacity="0.85" />
      <text x="70" y="100" fill={ink} fontSize="12">
        before: left cart moving
      </text>
      <text x="240" y="130" fill={mute} fontSize="12">
        after: overlapping in the photo
      </text>
      <text x="240" y="148" fill={mute} fontSize="12">
        stuck? bounced? can’t tell
      </text>
      <text x="24" y="200" fill={ink} fontSize="12">
        m_L = 0.50 kg · m_R = 0.75 kg · v_L ≈ 0.80 m/s · v_R ≈ 0
      </text>
    </Frame>
  );
}

export function DiagramTwoBlock() {
  return (
    <Frame>
      <title>Table block and hanging block</title>
      <line x1="40" y1="70" x2="280" y2="70" stroke={ink} strokeWidth="3" />
      <rect x="120" y="42" width="50" height="28" fill="#c9d4e0" stroke={ink} />
      <path d="M170,56 H 250 V 160" fill="none" stroke={ink} />
      <rect x="236" y="160" width="28" height="36" fill="#d9cfc0" stroke={ink} />
      <text x="118" y="36" fill={ink} fontSize="12">
        A, 1.2 kg
      </text>
      <text x="270" y="184" fill={ink} fontSize="12">
        B, 0.40 kg
      </text>
      <text x="40" y="220" fill={mute} fontSize="12">
        Table is smooth. Pulley light. String inextensible.
      </text>
    </Frame>
  );
}

export function DiagramTorqueStatics() {
  return (
    <Frame h={240}>
      <title>Hinged rod, at rest</title>
      <line x1="60" y1="40" x2="60" y2="200" stroke={ink} strokeWidth="4" />
      <line x1="60" y1="80" x2="320" y2="80" stroke={ink} strokeWidth="6" />
      <circle cx="60" cy="80" r="6" fill={paper} stroke={ink} />
      <path d="M200,80 L 200,40 L 60,40" fill="none" stroke={accent} />
      <text x="210" y="48" fill={ink} fontSize="12">
        cable
      </text>
      <text x="140" y="104" fill={ink} fontSize="12">
        uniform rod, 2.4 m, 6.0 kg
      </text>
      <text x="70" y="220" fill={ink} fontSize="12">
        Rod is motionless. Hinge at the wall.
      </text>
    </Frame>
  );
}

export function DiagramComPhoto() {
  return (
    <Frame w={440} h={240}>
      <title>Two shop parts on a bench</title>
      <rect x="30" y="50" width="380" height="150" fill="#cfc6b8" stroke={ink} />
      <path d="M70,140 L90,80 L150,90 L160,150 L100,170 Z" fill="#8a9e8a" stroke={ink} />
      <ellipse cx="280" cy="130" rx="70" ry="40" fill="#9aa7b5" stroke={ink} />
      <circle cx="108" cy="128" r="4" fill={warn} />
      <text x="114" y="124" fill={warn} fontSize="11">
        “CM?”
      </text>
      <circle cx="300" cy="120" r="4" fill={warn} />
      <text x="308" y="116" fill={warn} fontSize="11">
        “CM?”
      </text>
      <text x="36" y="220" fill={mute} fontSize="12">
        Masses unknown; only a photo and two guessed dots
      </text>
    </Frame>
  );
}

export function DiagramBankedConflict() {
  return (
    <Frame>
      <title>Road sketch versus caption</title>
      <polygon points="40,200 200,200 360,120 360,90 200,170 40,170" fill="#d0d0d0" stroke={ink} />
      <text x="200" y="80" fill={ink} fontSize="13">
        Sketch looks banked
      </text>
      <text x="40" y="228" fill={warn} fontSize="12">
        Caption: “level deck of the parking garage, r = 18 m”
      </text>
    </Frame>
  );
}

export function DiagramRolling() {
  return (
    <Frame>
      <title>Wheel down a short ramp</title>
      <polygon points="40,80 180,180 380,180" fill="#e6e1d6" stroke={ink} />
      <circle cx="230" cy="158" r="22" fill="#c9d4e0" stroke={ink} />
      <line x1="230" y1="158" x2="248" y2="146" stroke={ink} />
      <text x="40" y="50" fill={ink} fontSize="12">
        hoop? disk? student wrote both
      </text>
      <text x="200" y="228" fill={mute} fontSize="12">
        R = 0.080 m · photogate v and phone-video ω
      </text>
    </Frame>
  );
}

export function DiagramCircularGraph() {
  return (
    <Frame>
      <title>Speed during a turn, messy graph</title>
      <line x1="50" y1="200" x2="380" y2="200" stroke={ink} />
      <line x1="50" y1="200" x2="50" y2="30" stroke={ink} />
      <path d="M50,80 L 120,80 C 180,80 190,150 250,150 L 360,150" fill="none" stroke={accent} strokeWidth="2" />
      <text x="8" y="28" fill={mute} fontSize="11">
        v
      </text>
      <text x="200" y="228" fill={mute} fontSize="11">
        t (s) — scale half-erased
      </text>
    </Frame>
  );
}

const registry: Record<string, () => ReactElement> = {
  "a-incline": () => <DiagramInclineClean />,
  "a-projectile": () => <DiagramProjectileClean />,
  "a-collision": () => <DiagramCollisionClean />,
  "a-energy": () => <DiagramEnergyClean />,
  "a-circular": () => <DiagramCircularClean />,
  "a-com": () => <DiagramComClean />,
  "a-rotation": () => <DiagramRotationClean />,
  "a-shm": () => <DiagramShmClean />,
  "b-incline-fbd": () => <DiagramBadFbd />,
  "b-projectile-incomplete": () => <DiagramProjectileIncomplete />,
  "b-com-origins": () => <DiagramComOrigins />,
  "b-rotation-incomplete": () => <DiagramRotationIncomplete />,
  "b-shm-phase": () => <DiagramShmPhaseConflict />,
  "b-circular-graph": () => <DiagramCircularGraph />,
  "c-bad-fbd": () => <DiagramBadFbd />,
  "c-lab-photo": () => <DiagramLabPhoto />,
  "c-energy-conflict": () => <DiagramEnergyConflict />,
  "c-vt-unlabeled": () => <DiagramVtUnlabeled />,
  "c-collision-scene": () => <DiagramCollisionScene />,
  "c-two-block": () => <DiagramTwoBlock />,
  "c-torque-statics": () => <DiagramTorqueStatics />,
  "c-com-photo": () => <DiagramComPhoto />,
  "c-banked": () => <DiagramBankedConflict />,
  "c-rolling": () => <DiagramRolling />,
};

export function Diagram({ id }: { id: string }) {
  const Node = registry[id];
  if (!Node) {
    return <p className="muted">Missing diagram: {id}</p>;
  }
  return <Node />;
}
