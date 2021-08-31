import React, { useEffect } from 'react';
import './style.css';
import AOS from 'aos';

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="app">
      <div className="box" />
    </div>
  );
}
