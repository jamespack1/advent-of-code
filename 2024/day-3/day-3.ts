import { readFile, sum } from "../utils.ts";

const multiplyRegex: RegExp = /mul\((\d+),(\d+)\)/g;

const sumMultiplications = (input: string): number =>
  [...input.matchAll(multiplyRegex)].map(([_, left, right]) =>
    parseInt(left) * parseInt(right)
  ).reduce(sum, 0);

const extractEnabledSections = (input: string) =>
  input.split("do()").map((enabledSection) =>
    enabledSection.split("don't()")[0]
  );

export const day3 = () => {
  console.log("Day 3");
  const input: string = readFile("./day-3/input.txt").join("");

  console.log("Part 1:", sumMultiplications(input));

  const inputWithDo = extractEnabledSections(input)
    .map(sumMultiplications)
    .reduce(sum, 0);
  console.log("Part 2:", inputWithDo);
};
