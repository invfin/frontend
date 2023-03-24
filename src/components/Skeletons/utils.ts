export function getCSSStyle(component: string, animate: boolean): string {
  return animate ? `animated-${component}-skeleton` : `${component}-skeleton`;
}
