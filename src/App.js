import './App.css';
import {Header, Body, Footer} from "./compIndex";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <div className='Header'>
            <Link to="">Header</Link>
            <Link to="/Body">Body</Link>
            <Link to="/Contact">Contact Us</Link>
            <Link to="/Okon">Blog</Link>
        </div>
        <Routes >
          <Route path='/' element={<Header />}/>
          <Route path='/Body' element={<Body />}/>
          <Route path='*' element={<h1>404 Not Found!</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
