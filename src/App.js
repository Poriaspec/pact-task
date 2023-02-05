import React, {useEffect} from 'react';
import "./index.css"
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollButton from "./components/ScrollButton/ScrollButton"


function App() {

  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return null;
  }
  
  
  return (

    <div>
        <ScrollToTopOnMount />
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>} />
        </Routes>
      </Router>
      <ScrollButton/>
    </div>

  
  );
}

export default App;
