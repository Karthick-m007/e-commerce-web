import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Productprovider from './Components/Productprovider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Productprovider>


    <App />
  </Productprovider>
  </BrowserRouter>
 
  
  
);

