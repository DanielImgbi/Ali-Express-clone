import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <main className="flex flex-col space-y-24">
      <NavBar />
      <Outlet />
    </main>
  );
}

export default App;
