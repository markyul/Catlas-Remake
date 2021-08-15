import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Footer />
    </Router>
  );
}

export default App;
