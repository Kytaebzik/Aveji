import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './jsx/Header'
import Hero from './jsx/Hero'
import Info from './jsx/Info'
import Work from './jsx/Work'
import Project from './jsx/Project'
import Review from './jsx/Review'
import Order from './jsx/Order'
import Footer from './jsx/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero />
    <Info />
    <Work />
    <Project />
    <Review />
    <Order />
    <Footer />
  </StrictMode>,
)
