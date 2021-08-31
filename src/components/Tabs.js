import React, { useState } from 'react';
import '../styles/tab.css';

export default function Tabs() {
  const [tab, setTab] = useState(1);

  const togleTab = tab => {
    setTab(Tab);
  };

  return (
    <div className="tabs">
      <div className="content1" className={tab == 1 ? 'active' : 'hide'}>
        <div className="content">
          Tab1 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eligendi, obcaecati!
        </div>
      </div>
      <div className="content2" className={tab == 1 ? 'active' : 'hide'}>
        <div className="content">
          Tab2 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eligendi, obcaecati!
        </div>
      </div>
      <div className="content3" className={tab == 1 ? 'active' : 'hide'}>
        <div className="content">
          Tab3 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eligendi, obcaecati!
        </div>
      </div>
    </div>
  );
}
