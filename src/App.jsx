import React, { useState, useEffect } from 'react';
import ListCast from './components/ListCast';
import Modals from './components/Modals';
import Nav from './components/Nav';
import './PicoOverride.css';
import './App.css';

function onCastChoice(event) {
  setCurrentCast(event.target.value)
}

function App() {
  const name = 'StarGazers'
  const [cast, setCast] = useState([]);
  let [memberInfo, setMemberInfo] = useState(null);

  async function fetchCast() {
    const response = await fetch('cast.json');
    setCast(await response.json());
  }

  useEffect(() => {
    fetchCast();
  });

  return (
    <>
      <Nav cast={cast} onChoice={
        (info) => {
          setMemberInfo(info);
        }} />
      <div className="container">
        <img src="images/group.svg" alt="StarGazers Group" />
        <hgroup>
          <h1>Meet the StarGazers</h1>
          <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
        </hgroup>

        <ListCast cast={cast} onChoice={
          (info) => {
            setMemberInfo(info);
          }} />
        {memberInfo && <Modals memberName={memberInfo.name} bio={memberInfo.bio} slug={memberInfo.slug} handleClose={() => { setMemberInfo(null) }} />}
      </div>
    </>
  )
}
export default App
