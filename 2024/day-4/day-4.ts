import { readFile } from "../utils.ts";

type SearchSet = { pos: [x: number, y: number]; char: string }[];

const XMAS: SearchSet[] = [[
  // SE
  { pos: [0, 0], char: "X" },
  { pos: [1, 1], char: "M" },
  { pos: [2, 2], char: "A" },
  { pos: [3, 3], char: "S" },
], [
  // S
  { pos: [0, 0], char: "X" },
  { pos: [0, 1], char: "M" },
  { pos: [0, 2], char: "A" },
  { pos: [0, 3], char: "S" },
], [
  // SW
  { pos: [0, 0], char: "X" },
  { pos: [-1, 1], char: "M" },
  { pos: [-2, 2], char: "A" },
  { pos: [-3, 3], char: "S" },
], [
  // W
  { pos: [0, 0], char: "X" },
  { pos: [-1, 0], char: "M" },
  { pos: [-2, 0], char: "A" },
  { pos: [-3, 0], char: "S" },
], [
  // NW
  { pos: [0, 0], char: "X" },
  { pos: [-1, -1], char: "M" },
  { pos: [-2, -2], char: "A" },
  { pos: [-3, -3], char: "S" },
], [
  // N
  { pos: [0, 0], char: "X" },
  { pos: [0, -1], char: "M" },
  { pos: [0, -2], char: "A" },
  { pos: [0, -3], char: "S" },
], [
  // NE
  { pos: [0, 0], char: "X" },
  { pos: [1, -1], char: "M" },
  { pos: [2, -2], char: "A" },
  { pos: [3, -3], char: "S" },
], [
  // E
  { pos: [0, 0], char: "X" },
  { pos: [1, 0], char: "M" },
  { pos: [2, 0], char: "A" },
  { pos: [3, 0], char: "S" },
]];

const CROSS_MAS: SearchSet[] = [
  [
    { pos: [0, 0], char: "A" },
    { pos: [-1, -1], char: "M" },
    { pos: [1, -1], char: "M" },
    { pos: [-1, 1], char: "S" },
    { pos: [1, 1], char: "S" },
  ],
  [
    { pos: [0, 0], char: "A" },
    { pos: [-1, -1], char: "M" },
    { pos: [-1, 1], char: "M" },
    { pos: [1, -1], char: "S" },
    { pos: [1, 1], char: "S" },
  ],
  [
    { pos: [0, 0], char: "A" },
    { pos: [-1, -1], char: "S" },
    { pos: [1, -1], char: "S" },
    { pos: [-1, 1], char: "M" },
    { pos: [1, 1], char: "M" },
  ],
  [
    { pos: [0, 0], char: "A" },
    { pos: [-1, -1], char: "S" },
    { pos: [-1, 1], char: "S" },
    { pos: [1, -1], char: "M" },
    { pos: [1, 1], char: "M" },
  ],
];

const searchFound = (
  input: string[],
  position: [x: number, y: number],
) =>
(searchSet: SearchSet) =>
  searchSet.every((s) =>
    input[position[0] - s.pos[0]]?.charAt(position[1] - s.pos[1]) === s.char
  );

const wordSearch = (
  input: string[],
  searchArray: { pos: [x: number, y: number]; char: string }[][],
) => {
  let found = 0;
  for (let i = 0; i < input[0].length; i++) {
    for (let j = 0; j < input.length; j++) {
      found += searchArray.filter(searchFound(input, [i, j])).length;
    }
  }
  return found;
};

export const day4 = () => {
  console.log("Day 3");
  const input = readFile("./day-4/input.txt");

  const part1 = wordSearch(input, XMAS);
  console.log("Part 1:", part1);

  const part2 = wordSearch(input, CROSS_MAS);
  console.log("Part 2:", part2);
};
