import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

const lightText = {
  primary: 'rgb(17, 24, 39)',
  secondary: 'rgb(107, 114, 128)',
  disabled: 'rgb(149, 156, 169)',
}

// const darkText = {
//   primary: 'rgb(255,255,255)',
//   secondary: 'rgb(229, 231, 235)',
//   disabled: 'rgb(156, 163, 175)',
// }

const theme = createTheme({
  palette: {
    mode: 'light',
    text: lightText,
    primary: {
      light: '#EF5350',
      main: '#D32F2F',
      dark: '#B71C1C',
    },
    secondary: {
      light: '#ffecc0',
      main: '#FFBE2C',
      dark: '#ff9910',
      contrastText: '#272727',
    },
    tertiary: {
      main: '#22292F',
      contrastText: '#fff',
    },
    background: {
      paper: '#FFFFFF',
      default: '#F0F7F7',
    },
    error: red,
  },
  status: {
    danger: 'orange',
  },
})

export default theme
