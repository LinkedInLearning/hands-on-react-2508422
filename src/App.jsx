import React, { Component, useState } from 'react';
import ListCast from './components/ListCast';

function App() {
  const name = 'StarGazers'
  let [memberInfo, setMemberInfo] = useState(null);
  return (
    <div className="container">
      <hgroup>
        <img src="images/group.svg" alt="StarGazers Group" />
        <h1>Meet the Stargazers</h1>
        <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
        <ListCast onChoice={(info) => { setMemberInfo(info) }} />
        {memberInfo &&
          <article>
            <hgroup>
              <div style={{
                display: "flex",
                gap: '1rem'
              }}>
                <img style={{ width: '200px' }} src={`images/${memberInfo.slug}.svg`} alt={memberInfo.name} />
                <hgroup>
                  <h1>{memberInfo.name}</h1>
                  <p>{memberInfo.bio}</p>
                </hgroup>
              </div>
            </hgroup>
          </article>
        }
      </hgroup>
    </div>
  )
}
export default App
