import { useState } from "react";
import { Header } from "./components/Header";
import { Nav } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import Rout from "./components/pages/PagesIn";
function App() {
  let [open, setOpen] = useState(false);
  function clickOpen() {
    setOpen(!open);
  }

  return (
    <>
      <Nav clickOpen={clickOpen} />
      <div className="container">
        <div className="middle">
          <Rout />
        </div>
        <Header />
        <Sidebar open={open} />
      </div>
    </>
  );
}

export default App;
