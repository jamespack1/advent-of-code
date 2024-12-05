import { readFile, sum } from "../utils.ts";

const findWordOnRow = (word: string) => {
  const regex = new RegExp(word, "g");
  return (row: string) => {
    return [...row.matchAll(regex)].length;
  };
};

const rowsToColumns = (input: string[]) => {
  const output: string[][] = [];
  for (let i = 0; i < input[0].length; i++) {
    for (let j = 0; j < input.length; j++) {
      output[j] = output[j] ?? [];
      output[j].push(input[i][j] || "");
    }
  }

  return output.map((row) => row.join(""));
};

const rowsToDiagonals = (input: string[]) => {
  const output: string[][] = [];

  for (let i = 0; i < (input.length + input[0].length); i++) {
    for (let j = i; j >= 0; j--) {

      if (i >= 0 && j >= 0) {
        output[i] = output[i] ?? [];
        output[i].push(input[j]?.[i-j] || "");
      }
    }
  }

  return output.map((row) => row.join(""));
};

const reverse = (str: string) =>
  [...str].toReversed().join('');

export const day4 = () => {
  console.log("Day 3");
  const input = readFile("./day-4/input.txt");

  const asColumns = rowsToColumns(input);
  const diagonals = rowsToDiagonals(input);
  const diagonalRev = rowsToDiagonals(input.map(reverse));

  const part1 = [
    input.map(findWordOnRow("XMAS")),
    input.map(findWordOnRow("SAMX")),
    asColumns.map(findWordOnRow("XMAS")),
    asColumns.map(findWordOnRow("SAMX")),
    diagonals.map(findWordOnRow("XMAS")),
    diagonals.map(findWordOnRow("SAMX")),
    diagonalRev.map(findWordOnRow("XMAS")),
    diagonalRev.map(findWordOnRow("SAMX")),
  ].map(r => r.reduce(sum, 0))


  console.log("Part 1:", part1.reduce(sum, 0));

  const part2 = 0;
  console.log("Part 2:", part2);
};
