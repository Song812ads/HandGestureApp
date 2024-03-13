import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { OpenCvProvider } from 'opencv-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ProSidebarProvider}  from 'react-pro-sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminInterface from './AdminInterface';
import Login from './Login1';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/"element={
                <OpenCvProvider>
                    <ProSidebarProvider>
                        <App />
                    </ProSidebarProvider>
                </OpenCvProvider>
            }>
            </Route>
            <Route path="/admin"element={
                <OpenCvProvider>
                    <ProSidebarProvider>
                        <AdminInterface />
                    </ProSidebarProvider>
                </OpenCvProvider>
            }>
            </Route>
            <Route path="/login" element={
                <OpenCvProvider>
                    <ProSidebarProvider>
                        <Login />
                    </ProSidebarProvider>
                </OpenCvProvider>
            }>
            </Route>
        </Routes>
    </BrowserRouter>

);
