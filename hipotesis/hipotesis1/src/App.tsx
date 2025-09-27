import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/hipotesis1" element={
          <>
            <div className="main-content">
              <Home />
            </div>
            <Footer />
          </>
        } />
        <Route path="/" element={<Navigate to="/hipotesis1" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;