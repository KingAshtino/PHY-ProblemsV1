export type Category = "A" | "B" | "C" | "D" | "E";

export type Topic =
  | "incline"
  | "projectile"
  | "collisions"
  | "energy"
  | "circular"
  | "com"
  | "rotation"
  | "torque"
  | "oscillations"
  | "kinematics";

export type TaskKind =
  | "identify"
  | "model"
  | "measure"
  | "calculate"
  | "critique"
  | "plan-experiment";

export type TableColumn = { key: string; label: string; unit?: string };
export type TableRow = Record<string, string | number>;

export type StimulusAsset =
  | { type: "svg"; id: string; caption?: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | {
      type: "table";
      caption?: string;
      columns: TableColumn[];
      rows: TableRow[];
      plot?: {
        x: string;
        y: string;
        title: string;
        xLabel: string;
        yLabel: string;
      };
    };

export type ProblemTask = {
  id: string;
  kind: TaskKind;
  prompt: string;
};

export type Problem = {
  id: string;
  category: Category;
  topic: Topic;
  title: string;
  estimatedMinutes: number;
  jaggedFeature?: string;
  twinOf?: string;
  stimulus: {
    text: string;
    assets?: StimulusAsset[];
  };
  tasks: ProblemTask[];
  rubric: {
    summary: string;
    mustInclude: string[];
    numericAnswers?: string[];
    commonAIFailures?: string[];
  };
  detailPath?: string;
  plantedAI?: {
    label: string;
    transcript: string;
    verdict: "unjustified" | "partially-justified" | "justified";
    errorTags: string[];
  };
};

export const TOPICS: { id: Topic; label: string }[] = [
  { id: "incline", label: "Incline" },
  { id: "projectile", label: "Projectile motion" },
  { id: "collisions", label: "Collisions" },
  { id: "energy", label: "Energy" },
  { id: "circular", label: "Circular motion" },
  { id: "com", label: "Center of mass" },
  { id: "rotation", label: "Rotation" },
  { id: "torque", label: "Torque" },
  { id: "oscillations", label: "Oscillations" },
  { id: "kinematics", label: "Kinematics" },
];

export const TASK_KIND_LABEL: Record<TaskKind, string> = {
  identify: "Identify",
  model: "Model",
  measure: "Measure",
  calculate: "Calculate",
  critique: "Critique",
  "plan-experiment": "Plan",
};

export const JAGGED_FEATURES = [
  "ambiguous visual information",
  "noisy experimental data",
  "incomplete diagram",
  "conflicting representations",
  "physically irrelevant information",
  "qualitative observations",
  "multiple modeling assumptions",
  "student-generated measurements",
  "badly drawn free-body diagram",
  "graphical + numerical reasoning",
] as const;
