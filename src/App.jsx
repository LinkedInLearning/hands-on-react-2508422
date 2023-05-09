import React, { useEffect, useState } from 'react';
import ListCast from './components/ListCast';
import Modals from './components/Modals';
import Nav from './components/Nav';
import "./App.scss";

function App() {
  const username="suraj"
  // can use the variable and then use in code inside h1 using the syntax {username}

  return (
    <div className="container">
    <hgroup>
      <h1>Meet the StarGazers <i>{username}</i> </h1>
      <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
    </hgroup>
      <button className='outline' onClick={()=>alert("hello")} >Click me</button>
    </div>
  )
}
export default App

// Notes

/* 
==> jsx stands for javascript  syntax extension
==> in jsx img tage must have closing otherwise it will give error
==> return must use () 
==> All attributes in jsx is camel case
==> you cant use the keywords in jsx and for class is used as keyword instead of that
    we use className

==> you can write css inside the jsx also using object way
==> you can also write the javascript function inside jsx
    



*/