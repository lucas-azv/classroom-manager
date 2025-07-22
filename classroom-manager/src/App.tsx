import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { CreateClassroom } from "./pages/CreateClassroom";
import { Home } from "./pages/Home";

function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-800 text-white">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/new">Nova Turma</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<CreateClassroom />} />
      </Routes>
    </Router>
  );
}

export default App;
