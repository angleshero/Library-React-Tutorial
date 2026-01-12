import Nav from "./components/nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BooksInfo from "./pages/BooksInfo";
import Price from "./components/ui/Price";
import Rating from "./components/ui/Rating";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={Books} />} />
          <Route path="/books/1" element={<BookInfo books={Books} />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;