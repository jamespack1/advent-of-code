import { slidingWindows } from "@std/collections";
import { readFile } from "../utils.ts";

const isSafePair = (a: number, b: number, direction: boolean) => {
  const change = b - a;

  return (
    change !== 0 &&
    !(direction && change < 0) &&
    !(!direction && change > 0) &&
    Math.abs(change) <= 3
  );
};

const isSafeSet = (report: number[]): boolean => {
  const startToEndChange = report[report.length - 1] - report[0];
  const direction = startToEndChange > 0;

  if (startToEndChange === 0) {
    return false;
  }

  return slidingWindows(report, 2).every((value) =>
    isSafePair(value[0], value[1], direction)
  );
};

const isReportSafe = (report: number[]): boolean => {
  const safe = isSafeSet(report);

  if (!safe) {
    return report.some((_, idx) => isSafeSet(report.toSpliced(idx, 1)));
  }

  return safe;
};

export const day2 = () => {
  console.log("Day 2");
  const input: string[] = readFile("./day-2/input.txt");
  const reports = input.map((report) => report.split(" ").map(Number));

  const safeReports = reports.filter(isSafeSet);
  console.log("Part 1:", safeReports.length);

  const safeReportsWithTolerance = reports.filter(isReportSafe);
  console.log("Part 2:", safeReportsWithTolerance.length);
};
