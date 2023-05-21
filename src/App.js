import './App.css';
import Dashboard from './Components/Dashboard';
import DetailsForm from './Components/DetailsForm'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
         
            <Route path="/" element={<DetailsForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
        
        </Routes>
      </Router>
    </>
  );
}

export default App;
