import React, { Component, useState } from 'react';
import Welcome from './components/Welcome';
import Support from './components/Support';
import ListCast from './components/ListCast';
import Modals from './components/Modals';


function onCastChoice(event) {
  setCurrentCast(event.target.value)
}

function App() {
  const name = 'StarGazers'
  let [memberInfo, setMemberInfo] = useState(null);

  return (
    <div className="container">
      <article>
        <hgroup>
          <img src="images/group.svg" alt="StarGazers Group" />
          <Welcome name="StarGazers" />
          <p>Members of an <b>intergalactic alliance</b><br />
            paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <ListCast onChoice={
            (info) => {
              setMemberInfo(info);
            }} />
          {memberInfo && <Modals memberName={memberInfo.name} bio={memberInfo.bio} slug={memberInfo.slug} handleClose={() => { setMemberInfo(null) }} />}

           {/* {memberInfo && (
            <article>
              <hgroup>
                <div style={{
                  display: "flex",
                  gap: "1rem"
                }}>
                  <img style={{
                    width: "200px"
                  }} src={`images/${memberInfo.slug}.svg`} alt={memberInfo.name} />
                  <hgroup>
                    <h1>{memberInfo.name}</h1>
                    <p>{memberInfo.bio}</p>
                  </hgroup>
                </div>
              </hgroup>
            </article>
          )} */}

          <Support />
        </hgroup>
      </article>
    </div>
  )
}
export default App
