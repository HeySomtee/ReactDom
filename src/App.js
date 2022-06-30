import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.js'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'; 

function App() {
  return (
      <BrowserRouter>
        <ProtectedRoute exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
      </BrowserRouter>

  );
}

export default App;
