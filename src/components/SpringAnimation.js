import React, { useEffect, useState } from 'react';
import '../style.css';
import useMeasure from '../useMeasure';
import { useSpring, animated } from 'react-spring';

export default function App() {
  const [open, toggle] = useState(false);
  const [bind, { width }] = useMeasure();
  const props = useSpring({
    width: open ? width : 0,
    backgroundColor: open ? 'hotpink' : 'turquoise',
    config: { duration: 1000 }
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
