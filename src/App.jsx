import React, { useState, useEffect } from "react";
import Welcome from "./components/Welcome";
import ListCast from "./components/ListCast";
import Modals from "./components/Modals";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  const [memberInfo, setMemberInfo] = useState(null);
  const [cast, setCast] = useState([]);

  async function fetchCast() {
    const response = await fetch("cast.json");
    setCast(await response.json());
  }

  useEffect(() => {
    fetchCast();
  }, []);

  return (
    <>
      <Nav
        cast={cast}
        onChoice={(info) => {
          setMemberInfo(info);
        }}
      />
      <div className="container">
        <hgroup>
          <img src="images/group.svg" alt="StarGazers Group" />
          <Welcome name="StarGazers" />
          <p>
            Members of an <b>intergalactic alliance</b>
            <br />
            paving the way for peace and benevolence among all species. They are
            known for their enthusiasm for science, for their love of fun, and
            their dedication to education.
          </p>
          <ListCast
            cast={cast}
            onChoice={(info) => {
              setMemberInfo(info);
            }}
          />
          {memberInfo && (
            <Modals
              member={memberInfo}
              //You cannot simple use setMemberInfo(null) here because it will not work
              //The reason is that the function is called in the child component and the state is in the parent component
              //So, you need to pass a function to the child component to change the state in the parent component
              handleClose={() => {
                setMemberInfo(null);
              }}
              handleChange={(memberID) => {
                setMemberInfo(cast.find((element) => element.id === memberID));
              }}
            />
          )}
        </hgroup>
      </div>
    </>
  );

}
export default App;
