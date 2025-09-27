import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hipotesis1" element={
          <>
            <Home />
            <Footer />
          </>
        } />
        <Route path="/" element={<Navigate to="/hipotesis1" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;