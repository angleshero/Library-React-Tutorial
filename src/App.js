import Nav from "./components/nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BooksInfo from "./pages/BooksInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route path="/books/1" element={<BooksInfo books={books} />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;