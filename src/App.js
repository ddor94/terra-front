import React from 'react';
import AuthLayout from './components/layouts/AuthLayout';
import PanelLayout from './components/layouts/PanelLayout';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/Dashboard';
import './assets/css/tailwind.css';
import { PrivateRoute, AuthenticatedRoute } from './utils/helpers/privateRoute';
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
                <PanelLayout />
              </PrivateRoute>
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route
            element={
              <AuthenticatedRoute>
                <AuthLayout />
              </AuthenticatedRoute>
            }
          >
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
