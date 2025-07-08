import React from 'react'
import './App.css';
import './custom.scss';
import MainHeader from './mainHeader';

const App = () => {
  return (
    <>
      <div className='app'>
        <div className='navbar'> <MainHeader></MainHeader>   </div>
        <main>main Component</main>
      </div>
    </>
  )
}

export default App

