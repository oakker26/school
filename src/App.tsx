import "./App.css";
import { Footer, Navbar } from "./components/layout";

import { HomePage } from "./components/pages";

function App() {
  return (
    <div className="">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
