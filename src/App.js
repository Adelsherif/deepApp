import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShapPage from "./ShapPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/shap/:id" element={<ShapPage />} />
      </Routes>
      adel
    </Router>
  );
}

export default App;
