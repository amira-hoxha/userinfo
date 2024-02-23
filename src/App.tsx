import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="bg-slate-900">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Users />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
