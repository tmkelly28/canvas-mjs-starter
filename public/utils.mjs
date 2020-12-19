import colors from './colors.mjs'

export const random = (min = 0, max) => {
  return Math.round(Math.random() * (max - min) - min)
}

export const randomColor = () => {
  return colors[random(0, colors.length)]
}
