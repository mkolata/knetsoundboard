import blue from '@material-ui/core/colors/blue';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#26292C',
        light: 'rgb(81, 91, 95)',
        dark: 'rgb(26, 35, 39)',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#FFB74D',
        light: 'rgb(255, 197, 112)',
        dark: 'rgb(200, 147, 89)',
        contrastText: 'rgba(0, 0, 0, 0.87)',
      },
      titleBar: {
        main: '#555555',
        contrastText: '#ffffff',
      },
      error: {
        main: blue.A400,
      },
    },
  })

  export default theme