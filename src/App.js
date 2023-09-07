import { Header } from "./components/Header";
import { Nav } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import Rout from "./components/pages/PagesIn";
function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <Rout />
        <Header />
        <Sidebar />
      </div>
    </>
  );
}

export default App;
