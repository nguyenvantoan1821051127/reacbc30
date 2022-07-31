import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, NavLink, Route,Routes } from 'react-router-dom';
import Home from './papes/Home/Home.jsx'
import Register from './papes/Register/Register.jsx'
import Contact from './papes/Contact/Contact.jsx'
import About from './papes/About/About.jsx'
import Login from './papes/Login/Login.jsx'
import ProductManagement from './ProductMAnagement/ProductManagement';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path=''element={<App />}>
          <Route path=''element={<Home />}></Route>
          <Route path='home'element={<Home />}></Route>
          <Route path='login'element={<Login />}></Route>
          <Route path='register'element={<Register />}></Route>
          <Route path='about'element={<About />}></Route>
          <Route path='contact'element={<Contact />}></Route>
          <Route path='ProductManagement'element={<ProductManagement />}></Route>
          {/*route path  */}
          <Route path='*'element={<NavLink to='' />}></Route>

        </Route>
      </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
