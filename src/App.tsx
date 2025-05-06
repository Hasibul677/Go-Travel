import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation/Navigation";
import Page from "./components/Page";

function App() {
  return (
    <Router>
      <Page>
        <Header>
          <Navigation />
        </Header>
      </Page>
    </Router>
  )
}

export default App;
