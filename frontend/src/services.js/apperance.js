import { createMuiTheme } from "@material-ui/core/styles";

import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  grey as gray,
  blueGrey as blueGray,
} from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: cyan[500],
    },
    text: {
      primary: cyan[500],
    },
  },
  overrides: {
    MuiButton: {
      text: {
        color: "white",
      },
    },
    MuiMenuItem: {
      fontSize: "14px",
      root: {
        color: "black",
      },
    },
  },
});

export default theme;
