import deepPurple from '@material-ui/core/colors/deepPurple';
import lightBlue from '@material-ui/core/colors/lightBlue';
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: deepPurple,
        secondary: lightBlue,
        textPrimary: deepPurple[50],
    },
    typography: {
        fontFamily: 'Source Code Pro, monospace'
    }
})
