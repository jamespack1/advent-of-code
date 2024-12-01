export const not = <T>(fn: (val: T) => boolean) => (value: T) => !fn(value);

export const sum = (acc: number, value: number): number => acc + value;

export const readFile = (path: string): string[] =>
  Deno.readTextFileSync(path).split("\n").filter(Boolean);
