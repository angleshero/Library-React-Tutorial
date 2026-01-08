import Nav from './components/nav';

import Footer from './components/Footer';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';




function App() {
  return (
    <Router>
    <div className="App">
      <Route path="/" exact component={Home} />
      <Route path="/books" component={Books} />
      <Nav />
      <Footer />

    </div>
    </Router>
  );
}

export default App; 
