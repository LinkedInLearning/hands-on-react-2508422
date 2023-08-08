import React, { useState, useEffect } from 'react';
import ListCast from './components/ListCast';
import Modals from './components/Modals';
import Nav from './components/Nav';
import "./App.scss";

function NextMember(cast, member) {
  var index = member.id + 1;
  if (index === cast.length) {
    index = 0;
  }
  return cast[index];
}

function PreviousMember(cast, member) {
  var index = member.id - 1;
  if (index < 0) {
    index = cast.length - 1;
  }
  return cast[index];
}

function GetMemberIndex(cast, index) {
  if (index < 0) return cast.length - 1;
  if (index >= cast.length) return 0;
  return index;
}

function App() {
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
      <Nav cast={cast} onChoice={(info) => { setMemberInfo(info) }} />
      <div className="container">
        <hgroup>
          <img src="images/group.svg" alt="StarGazers Group" />
          <h1>Meet the Stargazers</h1>
          <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <ListCast cast={cast} onChoice={(info) => { setMemberInfo(info) }} />
          {memberInfo && <Modals member={memberInfo}
            upperId={cast.length - 1}
            handleClose={() => setMemberInfo(null)}
            handleChange={(info) => setMemberInfo(cast[GetMemberIndex(cast, info)])}
            previousCast={() => setMemberInfo(PreviousMember(cast, memberInfo))}
            nextCast={() => setMemberInfo(NextMember(cast, memberInfo))} />}
        </hgroup>
      </div>
    </>
  )
}
export default App
