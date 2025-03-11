import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import CommonFooter from '../pages/CommonFooter'
import CommonHeader from '../pages/CommonHeader'
import MainPage from '../pages/MainPage'
import Pricing from '../pages/Pricing'
import Features from '../pages/Features'
import Contact from '../pages/Contact'
import Blog from '../pages/Blog';
import AuthMain from '../pages/AuthMain';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsOfService from '../pages/TermsOfService';
import AboutUs from '../pages/AboutUs';
import Login from '../auth/Login';
import Register from '../auth/Register';
import ForgotPassword from '../auth/ForgotPassword';
import ResetPassword from '../auth/ResetPassword';
function RoutingPage() {

    const location = useLocation();

    function authCheck() {
        const isAuthRoute = location.pathname.includes("/auth");
        return isAuthRoute
    }

    return (
        <>
            {
                authCheck() === false ?
                    <CommonHeader />
                    : null
            }
            <Routes>
                <Route path="/auth" element={<AuthMain />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="forgotPassword" element={<ForgotPassword />} />
                    <Route path="ResetPassword" element={<ResetPassword />} />
                </Route>

                <Route path="/" element={<MainPage />} />
                <Route path="/features" element={<Features />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-service" element={<TermsOfService />} />
                <Route path="*" element={<MainPage />} />
            </Routes>
            {
                authCheck() === false ?
                    <CommonFooter />
                    : null
            }
        </>
    )
}

export default RoutingPage