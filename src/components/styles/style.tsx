import { StyleSheet } from 'react-native'


/**
 * :root[data-theme="light"] {
  text: #05150a,
  background: #f7fdf9,
  primary: #1a6b33,
  secondary: #c1f0cf,
  accent: #2db957,
}
:root[data-theme="dark"] {
  text: #eafaef,
  background: #020804,
  primary: #94e5ae,
  secondary: #0f3e1d,
  accent: #46d270,
}

 */
export enum lightTheme {
    text= '#05150a',
    background= '#f7fdf9',
    primary= '#1a6b33',
    secondary= '#c1f0cf',
    accent= '#2db957',
}

export enum darkTheme {
    text= '#eafaef',
    background= '#020804',
    primary= '#94e5ae',
    secondary= '#0f3e1d',
    accent= '#46d270',
}

export const styles = StyleSheet.create({
    
})