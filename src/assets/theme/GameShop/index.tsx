import { DefaultTheme } from "styled-components"

export const BreakPoints = {
  sm: '35em',  // 560px
  md: '46em',  // 736px
  lg: '55em',  // 880px
}

export const FontSizes = {
  xs: '1.125rem',  // 18px
  sm: '1.375rem',  // 22px
  md: '1.5rem',    // 24px
  lg: '1.625rem',  // 26px
  xl: '2.5rem',    // 46px
  '2x1': '3.125rem', // 46px
  '3x1': '3.125rem', // 50px
  '4x1': '3.75rem',  // 60px
}

export const Colors = {
  teal: {
    50: '#6abebb',
    100: '#18b0ab',
  },
  blue: {
    50: '#61bdff',
    100: '#0790F3',
    150: '#1E80C7',
  },
  black: {
    50: '#404040',
    100: '#2d2d2d',
    150: '#262626',
    200: '#202020',
    250: '#0f1011',
  },
  red: {
    50: '#f36060',
    100: '#ff8800c3',
  },
  green: {
    50: '#c0ffc5',
    100: '#1eff0099',
  },
  white: {
    50: '#999999',
    100: '#bcbcbc',
    150: '#cccccc',
    200: '#dadada',
    250: '#e5e5e5',
  },
  purple: {
    50: '#9966cc',
  }
}

const gameTheme: DefaultTheme = {
  breakpoints: BreakPoints,
  fontSizes: FontSizes,
  colors: Colors
}

export default gameTheme;