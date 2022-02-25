import React from 'react';
import Main from './components/Main';
import AuthLayout from './components/Layouts/AuthLayout';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import './assets/css/tailwind.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Main />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
