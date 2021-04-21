import SideBar from "./components/SideBar";
import CenterLayout from "./components/CenterLayout";
import theme from "./services.js/apperance";

import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

function App() {
  return (
    <ThemeProvider className="App" theme={theme}>
      <SideBar />
      <Container>
        <CenterLayout />
      </Container>
    </ThemeProvider>
  );
}

export default App;
