import React,{Component}  from "react";
import Welcome from "./components/Welcome";
import Support from './components/Support';
import ListCast from './components/ListCast';

// class Welcome extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render(){
//     return <h1>Meet the { this.props.name}</h1>;
//   }
// }

// //lets do this react hooks
// const Hello = (props) =>{
//   return <h1>Meet the <i>{ props.name }</i></h1>
// }

function App() {
  const name = 'StarGazers'
  return (
    <div className="container">
      <article>
        <hgroup>
          <img src="images/group.svg" alt="StarGazers Group" />
          {/* <h1>Meet the <i style={{ color: "SteelBlue" }}>{name}</i></h1> */}
          {/* <Welcome name="Stars" /> */}
          <Welcome name="StarGazers" />
          <p>Members of an <b>intergalactic alliance</b><br />
            paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <ListCast />
          <Support />
        </hgroup>
      </article>
    </div>
  )
}
export default App
