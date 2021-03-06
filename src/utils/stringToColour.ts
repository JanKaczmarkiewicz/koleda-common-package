function hashCode(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

export const stringToColour = (str: string) =>
  `hsla(${hashCode(str) % 360}, 100%, 40%, 0.2)`;
