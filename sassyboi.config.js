const grid = 4
const spacingKeys = [
  'none',
  'xxsmall',
  'xsmall',
  'small',
  'gutter',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
]
const spacingMap = {
  none: 0,
  xxsmall: grid * 1,
  xsmall: grid * 2,
  smallish: grid * 3,
  small: grid * 4,
  gutter: grid * 6,
  medium: grid * 8,
  large: grid * 9,
  largeish: grid * 10,
  xlarge: grid * 12,
  xxlarge: grid * 16,
}

const baseColors = {
  brand: 'black',
  brandAccent: '#af3534',
  formAccent: 'black',
  white: '#fff',
  focus: 'black',
  positive: '#138a08',
  critical: '#e60278',
  info: '#1e468c',
  promote: '#af3534',
  neutral: '#1c1c1c',
  neutralInverted: '#ffffff',
  black: '#1c1c1c',
  link: 'rebeccapurple',
  linkVisited: 'rebeccapurple',
  secondary: '#a0a0a0',
  secondaryInverted: 'hsla(0, 0%, 100%, 0.65)',
  subtle: '#eee',
}

const colors = {
  foreground: {
    link: baseColors.link,
    linkHover: baseColors.link,
    linkVisited: baseColors.linkVisited,
    neutral: baseColors.neutral,
    neutralInverted: baseColors.white,
    formAccent: baseColors.formAccent,
    critical: baseColors.critical,
    info: baseColors.info,
    promote: baseColors.promote,
    positive: baseColors.positive,
    secondary: baseColors.secondary,
    secondaryInverted: 'hsla(0, 0%, 100%, 0.65)',
    subtle: baseColors.subtle,
  },
  background: {
    body: '#eee',
    brand: baseColors.brand,
    input: baseColors.white,
    inputDisabled: '#eee',
    brandAccent: baseColors.brandAccent,
    formAccent: baseColors.formAccent,
    formAccentDisabled: '#ccc',
    selection: '#f1f7ff',
    card: baseColors.white,
    critical: baseColors.critical,
    info: baseColors.info,
    promote: baseColors.promote,
    positive: baseColors.positive,
    neutral: baseColors.neutral,
    subtle: baseColors.subtle,
  },
}

module.exports = {
  'font-family': "'Work Sans', sans-serif",
  'header-font-family': "'Frank Ruhl Libre', sans-serif",

  'thin-font-weight': 100,
  'extra-light-font-weight': 200,
  'light-font-weight': 300,
  'regular-font-weight': 400,
  'medium-font-weight': 500,
  'semi-bold-font-weight': 600,
  'bold-font-weight': 700,

  grid,

  breakpoints: {
    0: 320,
    1: 560,
    2: 1024,
  },

  contentWidth: {
    medium: 940,
    large: 1280,
    max: 1440,
  },

  'font-scale': {
    text: {
      descenderHeightScale: 0.1922,
      capHeight: 0.69231,
    },
    heading: {
      descenderHeightScale: 0.1764,
      capHeight: 0.70588,
    },
  },

  spacingKeys,
  spacingMap,

  'space-none': 0,
  'space-xxsmall': spacingMap.xxsmall,
  'space-xsmall': spacingMap.xsmall,
  'space-smallish': spacingMap.smallish,
  'space-small': spacingMap.small,
  'space-gutter': spacingMap.gutter,
  'space-medium': spacingMap.medium,
  'space-large': spacingMap.large,
  'space-largeish': spacingMap.largeish,
  'space-xlarge': spacingMap.xlarge,
  'space-xxlarge': spacingMap.xxlarge,

  'base-colors': baseColors,
  colors,
  foregroundColors: colors.foreground,
  backgroundColors: colors.background,

  textSizes: {
    xsmall: {
      mobile: {
        size: 12,
        rows: 4,
      },
      tablet: {
        size: 12,
        rows: 4,
      },
    },
    small: {
      mobile: {
        size: 13,
        rows: 5,
      },
      tablet: {
        size: 13,
        rows: 5,
      },
    },
    standard: {
      mobile: {
        size: 15,
        rows: 5,
      },
      tablet: {
        size: 15,
        rows: 5,
      },
    },
    large: {
      mobile: {
        size: 18,
        rows: 6,
      },
      tablet: {
        size: 18,
        rows: 6,
      },
    },
    xlarge: {
      mobile: {
        size: 22,
        rows: 8,
      },
      tablet: {
        size: 22,
        rows: 8,
      },
    },
  },

  headingSizes: {
    xsmall: {
      mobile: {
        size: 14,
        rows: 5,
      },
      tablet: {
        size: 14,
        rows: 5,
      },
    },
    small: {
      mobile: {
        size: 16,
        rows: 5,
      },
      tablet: {
        size: 16,
        rows: 5,
      },
    },
    standard: {
      mobile: {
        size: 18,
        rows: 6,
      },
      tablet: {
        size: 22,
        rows: 6,
      },
    },
    large: {
      mobile: {
        size: 22,
        rows: 7,
      },
      tablet: {
        size: 28,
        rows: 9,
      },
    },
    xlarge: {
      mobile: {
        size: 24,
        rows: 9,
      },
      tablet: {
        size: 34,
        rows: 9,
      },
    },
  },
}
