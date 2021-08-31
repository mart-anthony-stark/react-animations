import React, { useEffect } from 'react';
import './style.css';
import AOS from 'aos';
import Component1 from './components/Component1';

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="app">
      <Component1 />
    </div>
  );
}
