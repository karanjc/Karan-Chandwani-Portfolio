import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', color: 'white', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ color: '#00f5ff', fontSize: '48px', textAlign: 'center' }}>🚀 Portfolio Test</h1>
      <p style={{ textAlign: 'center', fontSize: '24px' }}>If you see this, React is working!</p>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button style={{ backgroundColor: '#00f5ff', color: 'black', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
          Test Button
        </button>
      </div>
    </div>
  )
}

export default App