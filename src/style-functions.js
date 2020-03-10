import contrast from 'get-contrast'

export const isLight = (color, c1, c2) => {
  if (contrast.isAccessible(color, c1, {ignoreAlpha: true})) {
    return c1
  }

  if (contrast.isAccessible(color, c2, {ignoreAlpha: true})) {
    return c2
  }

  console.warn(
    `Inaccessible colors for ${c1} and ${c2} against ${color}. Using ${c1}.`
  )

  return c1
  // console.log(color)
  // // Variables for red, green, blue values
  // var r, g, b, hsp

  // // Check the format of the color, HEX or RGB?
  // if (color.match(/^rgb/)) {
  //   // If HEX --> store the red, green, blue values in separate variables
  //   color = color.match(
  //     /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
  //   )

  //   r = color[1]
  //   g = color[2]
  //   b = color[3]
  // } else {
  //   // If RGB --> Convert it to HEX: http://gist.github.com/983661
  //   color = +('0x' + color.slice(1).replace(color.length < 5 && /./g, '$&$&'))

  //   r = color >> 16
  //   g = (color >> 8) & 255
  //   b = color & 255
  // }

  // // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  // hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b))

  // // Using the HSP value, determine whether the color is light or dark
  // if (hsp > 127.5) {
  //   return c1
  // } else {
  //   return c2
  // }
}

export const mod = (a, b) => {
  return a % b
}

export const baseliner = (vars) => (size, rows, scaleKey, rule) => {
  const scale = vars['font-scale'][scaleKey]
  const descenderHeightScale = scale.descenderHeightScale
  const capHeight = scale.capHeight
  const grid = vars.grid

  const lineHeight = grid * rows
  const lineHeightScale = lineHeight / size
  const typeOffset = (lineHeightScale - 1.0) / 2.0 + descenderHeightScale
  const topSpace = lineHeight - capHeight * size
  const halfGrid = grid / 2
  const gridMod = topSpace % halfGrid
  const heightCorrectionRaw = topSpace - gridMod
  const heightCorrection = heightCorrectionRaw + 1.0

  if (rule === 'transform') {
    return `translateY(${typeOffset}em)`
  }

  if (rule === 'marginTop') {
    return `-${heightCorrection}px`
  }

  if (rule === 'negativeTransform') {
    return `translateY(-${typeOffset}em)`
  }
}
