import React, { useEffect, useState } from 'react';
import './style.css';
import AOS from 'aos';
import Component1 from './components/Component1';
import { useSpring, animated } from 'react-spring';

export default function App() {
  const [active, setActive] = useState(false);
  const props = useSpring({
    from: { width: 0 },
    to: { width: '100%' }
  });

  // useEffect(() => {
  //   AOS.init();
  // }, []);

  return (
    <div className="main">
      <animated.div class="fill" style={{ width: props }} />
    </div>
  );
}
