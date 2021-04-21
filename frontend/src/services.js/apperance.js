import { createMuiTheme } from "@material-ui/core/styles";

import { cyan } from "@material-ui/core/colors";

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
    MuiListItemText: {
      root: {
        color: "black",
      },
    },
    MuiContainer: {
      root: {
        paddingTop: "5.5rem",
        marginLeft: "280px",
      },
      maxWidthLg: {
        maxWidth: "1500px !important",
      },
    },
    MuiFormLabel: {
      root: {
        color: cyan[500],
      },
    },
  },
});

export default theme;
