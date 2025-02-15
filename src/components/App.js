import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Form from './Form';
import FormState from './FormState';
import FormRef from './FormRef';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <nav>
          <ul>
            <li><Link id="form-link" to="/">Section 1 - Basic Form</Link></li>
            <li><Link id="form-ref-link" to="/ref">Section 2 - useRef</Link></li>
            <li><Link id="form-state-link" to="/state">Section 3 - useState</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/ref" element={<FormRef />} />
          <Route path="/state" element={<FormState />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  )
}

export default App