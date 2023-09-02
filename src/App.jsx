import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <main className="">
      <NavBar />
      <Outlet />
    </main>
  );
}

export default App;
