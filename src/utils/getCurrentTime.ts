export const getCurrentTime = () =>
  new Date()
    .toISOString()
    .split(":")
    .splice(0, 2)
    .join(":");
