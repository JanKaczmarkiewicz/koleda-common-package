export type Splited<T> = { [key: string]: T[] };

export function splitByLabel<T>(
  items: T[],
  condition: (item: T) => string | undefined,
) {
  const splited: Splited<T> = {};
  for (const item of items) {
    const key = condition(item);
    if (!key) continue;

    if (!splited[key]) {
      splited[key] = [];
    }

    splited[key].push(item);
  }
  return splited;
}
