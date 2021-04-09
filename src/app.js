import {hot} from 'react-hot-loader/root';
import React from 'react';
import LazyLoader from './LazyLoader';

const images = [
  {
    fallback: 'https://images.unsplash.com/photo-1514924356010-4be7d201d78b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=1',
    real: 'https://images.unsplash.com/photo-1514924356010-4be7d201d78b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=100',
  },
  {
    fallback: 'https://images.unsplash.com/photo-1556741568-055d848f8bfd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=1',
    real: 'https://images.unsplash.com/photo-1556741568-055d848f8bfd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
  },
  {
    fallback: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=1',
    real: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
  },
  {
    fallback: 'https://images.unsplash.com/photo-1514924356010-4be7d201d78b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=1',
    real: 'https://images.unsplash.com/photo-1514924356010-4be7d201d78b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=100',
  },
  {
    fallback: 'https://images.unsplash.com/photo-1556741568-055d848f8bfd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=1',
    real: 'https://images.unsplash.com/photo-1556741568-055d848f8bfd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
  },
  {
    fallback: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=1',
    real: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
  },
  {
    fallback: 'https://images.unsplash.com/photo-1514924356010-4be7d201d78b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=1',
    real: 'https://images.unsplash.com/photo-1514924356010-4be7d201d78b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=100',
  },
  {
    fallback: 'https://images.unsplash.com/photo-1556741568-055d848f8bfd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=1',
    real: 'https://images.unsplash.com/photo-1556741568-055d848f8bfd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
  },
  {
    fallback: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=1',
    real: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
  },
  {
    fallback: 'https://images.unsplash.com/photo-1514924356010-4be7d201d78b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=1',
    real: 'https://images.unsplash.com/photo-1514924356010-4be7d201d78b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=100',
  },
  {
    fallback: 'https://images.unsplash.com/photo-1556741568-055d848f8bfd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=1',
    real: 'https://images.unsplash.com/photo-1556741568-055d848f8bfd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
  },
  {
    fallback: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=1',
    real: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
  },
  {
    fallback: 'https://images.unsplash.com/photo-1514924356010-4be7d201d78b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=1',
    real: 'https://images.unsplash.com/photo-1514924356010-4be7d201d78b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=100',
  },
  {
    fallback: 'https://images.unsplash.com/photo-1556741568-055d848f8bfd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=1',
    real: 'https://images.unsplash.com/photo-1556741568-055d848f8bfd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
  },
  {
    fallback: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=1',
    real: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
  },
  {
    fallback: 'https://images.unsplash.com/photo-1514924356010-4be7d201d78b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=1',
    real: 'https://images.unsplash.com/photo-1514924356010-4be7d201d78b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=100',
  },
  {
    fallback: 'https://images.unsplash.com/photo-1556741568-055d848f8bfd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=1',
    real: 'https://images.unsplash.com/photo-1556741568-055d848f8bfd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
  },
  {
    fallback: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=1',
    real: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
  },
  {
    fallback: 'https://images.unsplash.com/photo-1514924356010-4be7d201d78b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=1',
    real: 'https://images.unsplash.com/photo-1514924356010-4be7d201d78b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=100',
  },
  {
    fallback: 'https://images.unsplash.com/photo-1556741568-055d848f8bfd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=1',
    real: 'https://images.unsplash.com/photo-1556741568-055d848f8bfd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
  },
  {
    fallback: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=1',
    real: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
  },
  {
    fallback: 'https://images.unsplash.com/photo-1514924356010-4be7d201d78b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=1',
    real: 'https://images.unsplash.com/photo-1514924356010-4be7d201d78b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=100',
  },
  {
    fallback: 'https://images.unsplash.com/photo-1556741568-055d848f8bfd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=1',
    real: 'https://images.unsplash.com/photo-1556741568-055d848f8bfd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
  },
  {
    fallback: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=1',
    real: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
  },
  {
    fallback: 'https://images.unsplash.com/photo-1514924356010-4be7d201d78b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=1',
    real: 'https://images.unsplash.com/photo-1514924356010-4be7d201d78b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=100',
  },
  {
    fallback: 'https://images.unsplash.com/photo-1556741568-055d848f8bfd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=1',
    real: 'https://images.unsplash.com/photo-1556741568-055d848f8bfd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
  },
  {
    fallback: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=1',
    real: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
  },
  {
    fallback: 'https://images.unsplash.com/photo-1514924356010-4be7d201d78b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=1',
    real: 'https://images.unsplash.com/photo-1514924356010-4be7d201d78b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=100',
  },
  {
    fallback: 'https://images.unsplash.com/photo-1556741568-055d848f8bfd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=1',
    real: 'https://images.unsplash.com/photo-1556741568-055d848f8bfd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
  },
  {
    fallback: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=1',
    real: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
  },
  {
    fallback: 'https://images.unsplash.com/photo-1514924356010-4be7d201d78b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=1',
    real: 'https://images.unsplash.com/photo-1514924356010-4be7d201d78b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=100',
  },
  {
    fallback: 'https://images.unsplash.com/photo-1556741568-055d848f8bfd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=1',
    real: 'https://images.unsplash.com/photo-1556741568-055d848f8bfd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
  },
  {
    fallback: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=1',
    real: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
  },
]

function App() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {images && images.map((image, i) => (
        <div style={{width: '551px', height: '366px', overflow: 'hidden', padding: 15}} key={image.fallback + i}>
          <LazyLoader
            fallback={<img
              src={image.fallback}
              style={{width: '100%', filter: 'blur(10px)'}} alt=""
            />}
            debounce={200}
            once
          >
            <img
              src={image.real}
              style={{width: '100%'}} alt=""
            />
          </LazyLoader>
        </div>
      ))}
    </div>
  )
}

export default hot(App);
