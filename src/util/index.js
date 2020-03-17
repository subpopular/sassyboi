export const resolveResponsiveClassnames = (element, value, label) => {
  if (value != null) {
    if (Array.isArray(value)) {
      return value.map((v, i) => {
        return `${label}-${v}-${i}`
      })
    }
    return `${label}-${value}-0`
  }
}
