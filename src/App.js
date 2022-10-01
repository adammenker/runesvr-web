import './styles/App.css';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import Wiki from './pages/Wiki'
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage'
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wiki" element={<Wiki />} />
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </Router>
  );
}


export default App;
