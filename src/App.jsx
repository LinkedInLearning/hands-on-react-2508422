import React, { Component } from 'react';
import { render } from 'react-dom';
import Welcome from './components/Welcome'
import Support from './components/Support';
//this is a component
// class Welcome extends React.Component{
//   constructor(props) {
//     super(props);
//   }
//   render(){
//     return <h1>Meet the {this.props.name}</h1>;
//   }
// }

//this is a hook
// const Hello = (props) => {
//   return <h1>Meet the <i>{props.name}</i></h1>
// }

function App() {
  const name = 'StarGazers'
  return (
    <div className="container">
      <article>
        <hgroup>
          <img src="images/group.svg" alt="StarGazers Group" />
          <Welcome name="Stars" />
          <Welcome name="StarGazers" />
          <Welcome name="StarAliens" />
          <p>Members of an <b>intergalactic alliance</b><br />
            paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <Support />
        </hgroup>
      </article>
    </div>
  )
}
export default App
