import './App.css';
import React from 'react'
import { BrowserRouter } from 'react-router';
import RoutingPage from './apps/pages/RoutingPage';

function App() {

    return (
        <BrowserRouter>
            <RoutingPage />
        </BrowserRouter>
    )
}

export default App;
