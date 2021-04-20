import "./App.css";
import Title from "./components/Title";
import CenterLayout from "./components/CenterLayout";
import theme from "./services.js/apperance";

import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <main className="App">
        <Title />
        <Container fluid>
          <CenterLayout />
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default App;
