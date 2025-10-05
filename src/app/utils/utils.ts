export function interpolate(start: number, end: number, progress: number) {
  return start + progress * (end - start);
}
export function interpolateRange(range: number[], progress: number) {
  return interpolate(range[0], range[1], progress);
}