import React, { useEffect, useState } from 'react';
import './style.css';
import AOS from 'aos';
import Component1 from './components/Component1';
import Tabs from './components/Tabs';
import Router from './components/router';
import useMeasure from './useMeasure';
import { useSpring, animated } from 'react-spring';

export default function App() {
  return (
    <div>
      <Router />
    </div>
  );
}
