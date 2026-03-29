import React, { useState } from 'react'
import { Rocket, Zap, Shield, Sparkles } from 'lucide-react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="hero">
      <div className="glow" style={{ top: '-10%', left: '-10%' }}></div>
      <div className="glow" style={{ bottom: '-10%', right: '-10%', background: 'radial-gradient(circle, hsla(280, 85%, 60%, 0.15) 0%, transparent 70%)' }}></div>
      
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div 
          className="glass" 
          style={{ 
            padding: '0.5rem 1.25rem', 
            borderRadius: '99px', 
            fontSize: '0.875rem', 
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '2rem'
          }}
        >
          <Sparkles size={16} />
          <span>Experiență React Premium</span>
        </div>

        <h1 className="hero-title">
          Construiește viitorul <br />
          într-un mod simplu.
        </h1>
        
        <p className="hero-subtitle">
          Un frontend React modern, rapid și elegant, creat special pentru proiectul tău. Simplu, dar puternic.
        </p>

        <div className="hello-world" style={{ marginBottom: '1.5rem', fontSize: '1.25rem', fontWeight: 'bold' }}>
          Hello World!
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn" onClick={() => setCount((count) => count + 1)}>
            <Zap size={18} />
            <span>Contor: {count}</span>
          </button>
          
          <a href="#" className="glass btn" style={{ color: 'white' }}>
            Documentație
          </a>
        </div>

        <div className="card-grid">
          <div className="glass card">
            <div className="icon-wrapper">
              <Rocket size={24} />
            </div>
            <h3>Performanță</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Optimizat la maximum pentru viteză și reacție instantanee.
            </p>
          </div>

          <div className="glass card">
            <div className="icon-wrapper">
              <Shield size={24} />
            </div>
            <h3>Securitate</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Standarde moderne de securitate pentru aplicația ta.
            </p>
          </div>

          <div className="glass card">
            <div className="icon-wrapper">
              <Zap size={24} />
            </div>
            <h3>Rapiditate</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Dezvoltare accelerată cu un set de instrumente de ultimă oră.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App