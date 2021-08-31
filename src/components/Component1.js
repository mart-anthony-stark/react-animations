import React from 'react';
import { Spring } from 'react-spring';

export default function One() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div style={c1}>
            <h1>Component1</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut
              possimus, aliquam, perspiciatis laborum nulla porro veniam commodi
              autem aspernatur magni, ullam quod ad? Magni maiores saepe itaque
              eligendi animi.
            </p>
          </div>
        </div>
      )}
    </Spring>
  );
}
const c1 = {
  background: 'red',
  color: 'white',
  padding: '1.5rem'
};
