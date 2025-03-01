import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router';
import CommonFooter from './apps/pages/CommonFooter'
import CommonHeader from './apps/pages/CommonHeader'
import MainPage from './apps/pages/MainPage'
function App() {
  
      return (
          <BrowserRouter>
              <CommonHeader />
              <Routes>
                  <Route path="/" element={<MainPage />} />
                  {/* <Route path="/about" element={<About />} />
                  <Route path="/service" element={<Service />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog/details" element={<BlogDetails />} />
                  <Route path="/service/details" element={<ServiceDetails />} />
                  <Route path="*" element={<ErrPage />} /> */}
              </Routes>
              <CommonFooter />
          </BrowserRouter>
      )
}

export default App;
