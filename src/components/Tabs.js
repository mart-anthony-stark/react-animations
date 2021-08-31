import React, { useState } from 'react';
import '../styles/tab.css';

export default function Tabs() {
  const [tab, setTab] = useState(1);

  const toggleTab = tab => {
    console.log(tab);
    setTab(tab);
  };

  return (
    <div className="tabs">
      <nav>
        <button onClick={() => toggleTab(1)}>Tab1</button>
        <button onClick={() => toggleTab(2)}>Tab2</button>
        <button onClick={() => toggleTab(3)}>Tab3</button>
      </nav>

      <div className="content1" className={tab == 1 ? 'active' : 'hide'}>
        <div className="tab">Tab1</div>
      </div>
      <div className="content2" className={tab == 2 ? 'active' : 'hide'}>
        <div className="tab">Tab2</div>
      </div>
      <div className="content3" className={tab == 3 ? 'active' : 'hide'}>
        <div className="tab">Tab3</div>
      </div>
    </div>
  );
}
