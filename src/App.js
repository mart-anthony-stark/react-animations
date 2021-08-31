import React, { useEffect, useState } from 'react';
import './style.css';
import AOS from 'aos';
import Component1 from './components/Component1';
import useMeasure from './useMeasure';
import { useSpring, animated } from 'react-spring';

export default function App() {
  const [active, setActive] = useState(false);
  const [bind, { width }] = useMeasure();
  const props = useSpring({
    from: { width: 0 },
    width
  });

  return (
    <div {...bind} class="main" onClick={() => toggle(!open)}>
      <animated.div class="fill" style={props} />
      <animated.div class="content">
        {props.width.interpolate(x => Math.floor((x.toFixed(0) * 100) / width))}
      </animated.div>
    </div>
  );
}
