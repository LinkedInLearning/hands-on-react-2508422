import React, { Component } from "react";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Star Geezers' };
  }
  render() {
    return <h1>Meet the <i>{this.props.name}</i></h1>
  }
}

const Hello = (props) => {
  const localName = 'Star Team'
  return (
    <h1>Meet the <i>{props.name}</i></h1>
  )
}

function App() {
  return (
    <div className="container">
      <article>
        <img src="images/group.svg" alt="StarGazer Group" />
        <hgroup>
          <Welcome name="Star Pozers" />
          <Hello name="StarGazers" />

          <p>Members of an <b>intergalactic alliance</b><br />
            paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <button className="outline" onClick={() => alert('Hi There')}>Click me</button>
        </hgroup>
      </article>
    </div>
  )
}
export default App
