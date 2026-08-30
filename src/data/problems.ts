import type { Category, Problem, Topic } from "../types";
import { categoryA } from "./categoryA";
import { categoryB } from "./categoryB";
import { categoryC } from "./categoryC";

export const problems: Problem[] = [...categoryC, ...categoryA, ...categoryB];

export function getProblem(id: string): Problem | undefined {
  return problems.find((p) => p.id === id);
}

export function filterProblems(opts: {
  category?: Category | "all";
  topic?: Topic | "all";
}): Problem[] {
  return problems.filter((p) => {
    if (opts.category && opts.category !== "all" && p.category !== opts.category) {
      return false;
    }
    if (opts.topic && opts.topic !== "all" && p.topic !== opts.topic) {
      return false;
    }
    return true;
  });
}

export function countByCategory(): Record<Category, number> {
  return {
    A: problems.filter((p) => p.category === "A").length,
    B: problems.filter((p) => p.category === "B").length,
    C: problems.filter((p) => p.category === "C").length,
  };
}
