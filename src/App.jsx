import Analytics from "./components/Analytics";
import Shortner from "./components/Shortner";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <div className="bg-[#212121] text-white h-screen ">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/shortner" element={<Shortner />} />
          <Route path="/analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
