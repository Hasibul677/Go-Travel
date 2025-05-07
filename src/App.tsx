import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation/Navigation";
import Page from "./components/Page";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main";
import Steps from "./components/Steps/Steps";

function App() {
  return (
    <Router>
      <Page>
        <Header>
          <Navigation />
          <Hero/>
        </Header>
        <Main>
          <Steps/>
        </Main>
      </Page>
    </Router>
  )
}

export default App;
