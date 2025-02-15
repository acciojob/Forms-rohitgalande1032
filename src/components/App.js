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
            <li><Link id="form-link" to="/form">Section 1 - Basic Form</Link></li>
            <li><Link id="form-ref-link" to="/form-ref">Section 2 - useRef</Link></li>
            <li><Link id="form-state-link" to="/form-state">Section 3 - useState</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/form-ref" element={<FormRef />} />
          <Route path="/form-state" element={<FormState />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  )
}

export default App