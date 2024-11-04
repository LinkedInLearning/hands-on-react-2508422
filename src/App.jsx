import React, { useEffect, useState } from 'react';
import ListCast from './components/ListCast';
import Modals from './components/Modals';
import Nav from './components/Nav';
import "./App.scss";

function App() {
  const name = 'ReDos'
  return (
    <div className='container'>
      <hgroup>
        <img src="images/group.svg" alt="Group" />
        <h1>Meet the <i style={{color:"orange"}}>{ name }</i></h1>
        <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
        <button className="outline" onClick={()=> alert('Hello Humans')}>Click Me</button>
      </hgroup>
    </div>
  )
}
export default App
