import React from 'react';
import './App.css';

import { Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component'

const Hatspage = () => (
<div>
  <h1>Hats Page</h1>
</div>
);

function App() {
  return (
    <div>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop/hats' component={Hatspage} />
    </div>
  );
}

export default App;