import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../store/counterSlice'

const Home = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', color: '#333' }}>👋 Ласкаво просимо!</h1>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>
        Це демонстраційний React-застосунок з маршрутизацією та Redux.
      </p>

      <section style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2 style={{ color: '#444' }}>🔢 Лічильник</h2>
        <p>Значення: <strong>{count}</strong></p>
        <button
          onClick={() => dispatch(increment())}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Збільшити
        </button>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ color: '#444' }}>📚 Інформація</h2>
        <ul style={{ lineHeight: '1.8' }}>
          <li>✔️ Реалізовано з використанням <strong>Vite</strong> та <strong>React</strong></li>
          <li>✔️ Стейт керується через <strong>Redux Toolkit</strong></li>
          <li>✔️ Навігація через <strong>React Router</strong></li>
          <li>✔️ Компоненти завантажуються "ліниво" (Lazy Loading)</li>
        </ul>
      </section>
    </div>
  )
}

export default Home
