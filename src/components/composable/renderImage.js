export function renderImage(path) {
  return new URL(path, import.meta.url).href;
}