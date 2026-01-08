import Nav from './components/nav';

import Footer from './components/Footer';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import { Routes } from 'react-router-dom';




function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/books" component={Books} />
      </Routes>
      <Nav />
      <Footer />

    </div>
    </Router>
  );
}

export default App; 
