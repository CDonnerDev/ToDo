import React from 'react'
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Todo from './components/Todos/Todo';
import Navigation from './components/Navigation';
import AuthProvider from './contexts/AuthContext';
import Login from './components/Auth/Login';

import ProtectedRoute from './components/ProtectedRoute';
import Categories from './components/Categories/Categories';
import Footer from './components/Footer';
import Bootstrap from './components/Bootstrap/Bootstrap';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      
      <AuthProvider>
        <Router>
          <Navigation />
          <Routes>
            
             <Route path='/' element={<Bootstrap />} /> 
            
            <Route path='/todos' element={<Todo/>} />
            <Route path='/categories' element={<ProtectedRoute><Categories/></ProtectedRoute>} />
            <Route path='/login' element={<Login/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        <Footer />
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
