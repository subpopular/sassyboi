export const tokens = {
  spacing: [
    'none',
    'xxsmall',
    'xsmall',
    'smallish',
    'small',
    'gutter',
    'medium',
    'large',
    'largeish',
    'xlarge',
    'xxlarge',
  ],
  display: ['none', 'inline', 'block', 'flex', 'grid'],
  background: ['brand', 'critical', 'transparent', 'secondary', 'subtle'],
  alignItems: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
  justifyContent: [
    'flex-start',
    'flex-end',
    'center',
    'space-around',
    'space-between',
    'stretch',
  ],
}

export const validateResponsiveProps = (tokenValues) => (
  props,
  propName,
  componentName
) => {
  const propValue = props[propName]
  if (!propValue) {
    return
  }
  const error = new Error(
    `Invalid prop ${propName}: ${propValue} supplied to ${componentName}. Expected one or more spacing props ${tokenValues}`
  )
  if (
    Array.isArray(propValue) &&
    !propValue.every((val) => tokenValues.includes(val))
  ) {
    return error
  }

  if (!Array.isArray(propValue) && !tokenValues.includes(propValue)) {
    return error
  }
}

export const spacing = validateResponsiveProps(tokens.spacing)
export const display = validateResponsiveProps(tokens.display)
export const alignItems = validateResponsiveProps(tokens.alignItems)
export const justifyContent = validateResponsiveProps(tokens.justifyContent)
