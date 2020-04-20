import React from 'react';

import './css/normalize.css';
import './css/skeleton.css';

import Main from './components/Main';


export default function App() {
  return (
    <div className='container'>
      <div className='content'>
        <Main />
      </div>
    </div>
  );
}


