import React, { Suspense, lazy } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Головна</Link>
      </nav>
      <Suspense fallback={<div>Завантаження...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App