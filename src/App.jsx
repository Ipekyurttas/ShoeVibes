import React from 'react';
import TopNav from './components/TopNav';
import CategoryNav from './components/CategoryNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

function App(){
  return (
    <div style={{ width: '100%', height: '100%', overflowX: 'hidden' }}>
      <TopNav/>
      <CategoryNav/>
    </div>
  );
};
export default App;
