import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShapPage from "./ShapPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/shap/:id" element={<ShapPage />} />
      </Routes>
      <h1>hi</h1>
    </Router>
  );
}

export default App;
