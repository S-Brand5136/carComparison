import "./App.css";
import Title from "./components/Title";
import CenterLayout from "./components/CenterLayout";

import { Container } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Title />
      <Container fluid>
        <CenterLayout />
      </Container>
    </div>
  );
}

export default App;
