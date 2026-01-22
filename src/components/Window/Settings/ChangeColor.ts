export function changeColor(name: string, value: string) {
  document.documentElement.style.setProperty(name, value);
}