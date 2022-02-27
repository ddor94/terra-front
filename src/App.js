import React from 'react';
import Main from './components/Main';
import AuthLayout from './components/layouts/AuthLayout';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import './assets/css/tailwind.css';
import { PrivateRoute } from './utils/helpers/privateRoute';
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
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Main />
              </PrivateRoute>
            }
          />
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
