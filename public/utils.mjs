export const random = (min = 0, max) => {
  return Math.random() * (max - min) - min
}
