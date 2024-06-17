import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from './componenets/footer'
import PageWrapper from './componenets/wrapper'
import NotFound from './pages/NotFound'
import data from './data/data.json'

import 'bootstrap/dist/js/bootstrap.min.js';
import './index.scss'

const root = createRoot(document.getElementById('root'))
  
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          {Object.entries(data.pages).map(
            ([pageName, { slug }]) => (
              <React.Fragment key={pageName}>
                <Route element={<PageWrapper id={pageName} />} path={slug} />
                <Route element={<PageWrapper id={pageName} />} path={`${slug === '/' ? 'index' : slug}.html`} />
              </React.Fragment>
            )
          )}
          <Route element={<NotFound />} path='*' />
        </Routes>
      </BrowserRouter>
    <Footer />
  </React.StrictMode>
);