import { zip } from "@std/collections";
import { readFile, sum } from "../utils.ts";

const cleanUpFile = (input: string[]): [number[], number[]] =>
  input
    .map((str) => str.split("   "))
    .reduce<[number[], number[]]>(([left, right], [nextLeft, nextRight]) => {
      left.push(parseInt(nextLeft));
      right.push(parseInt(nextRight));
      return [left, right];
    }, [[], []]);

export const day1 = (): void => {
  console.log("Day 1");
  const input: string[] = readFile("./day-1/input.txt");
  const [left, right] = cleanUpFile(input);

  const part1 = zip(left.toSorted(), right.toSorted())
    .map(([val1, val2]) => Math.abs(val1 - val2))
    .reduce(sum, 0);

  console.log("Part 1", part1);

  const part2 = left.map((value) => {
    const occurrences = right.filter((instance) => instance === value);
    return value * occurrences.length;
  }).reduce(sum, 0);

  console.log("Part 2", part2);
};
