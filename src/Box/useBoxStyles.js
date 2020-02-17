const useBoxStyles = ({
  as,
  background,
  boxShadow,
  display,
  flexGrow,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingX,
  paddingY,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginX,
  marginY,
  size
}) => {
  const resolvedPaddingTop = paddingTop || paddingY || padding
  const resolvedPaddingBottom = paddingBottom || paddingY || padding
  const resolvedPaddingLeft = paddingLeft || paddingX || padding
  const resolvedPaddingRight = paddingRight || paddingX || padding

  const resolvedMarginTop = marginTop || marginY || margin
  const resolvedMarginBottom = marginBottom || marginY || margin
  const resolvedMarginLeft = marginLeft || marginX || margin
  const resolvedMarginRight = marginRight || marginX || margin

  const paddingClasses = getResponsiveClasses(padding, 'p')
  const paddingXClasses =
    !paddingClasses && getResponsiveClasses(paddingX, 'px')
  const paddingYClasses =
    !paddingClasses && getResponsiveClasses(paddingY, 'py')
  const paddingTopClasses =
    !paddingClasses &&
    !paddingYClasses &&
    getResponsiveClasses(resolvedPaddingTop, 'pt')
  const paddingRightClasses =
    !paddingClasses &&
    !paddingXClasses &&
    getResponsiveClasses(resolvedPaddingRight, 'pr')
  const paddingBottomClasses =
    !paddingClasses &&
    !paddingYClasses &&
    getResponsiveClasses(resolvedPaddingBottom, 'pb')
  const paddingLeftClasses =
    !paddingClasses &&
    !paddingXClasses &&
    getResponsiveClasses(resolvedPaddingLeft, 'pl')

  const marginClasses = getResponsiveClasses(margin, 'p')
  const marginXClasses = !marginClasses && getResponsiveClasses(marginX, 'mx')
  const marginYClasses = !marginClasses && getResponsiveClasses(marginY, 'my')
  const marginTopClasses =
    !marginClasses &&
    !marginYClasses &&
    getResponsiveClasses(resolvedMarginTop, 'mt')
  const marginRightClasses =
    !marginClasses &&
    !marginXClasses &&
    getResponsiveClasses(resolvedMarginRight, 'mr')
  const marginBottomClasses =
    !marginClasses &&
    !marginYClasses &&
    getResponsiveClasses(resolvedMarginBottom, 'mb')
  const marginLeftClasses =
    !marginClasses &&
    !marginXClasses &&
    getResponsiveClasses(resolvedMarginLeft, 'ml')

  return [
    'u-box',
    paddingClasses,
    paddingYClasses,
    paddingXClasses,
    paddingTopClasses,
    paddingRightClasses,
    paddingBottomClasses,
    paddingLeftClasses,
    marginClasses,
    marginXClasses,
    marginYClasses,
    marginTopClasses,
    marginRightClasses,
    marginBottomClasses,
    marginLeftClasses,
    getResponsiveClasses(display, 'display'),
    getResponsiveClasses(flexGrow, 'grow'),
    getResponsiveClasses(size, 'size'),
    {[`bg--${background}`]: background},
    {
      [`shadow--${boxShadow}`]:
        boxShadow && (!background || background === 'transparent'),
      [`shadow--${boxShadow}-on-${background}`]:
        boxShadow && background && background !== 'transparent'
    }
  ]
}

export default useBoxStyles

function getResponsiveClasses(value, label) {
  if (value != null) {
    if (Array.isArray(value)) {
      return value.map((v, i) => {
        return `u-box--${label}-${v}-${i}`
      })
    }
    return `u-box--${label}-${value}-0`
  }
}
