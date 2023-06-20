function App() {
  const name = 'StarGazers';
  const nameStyle = {color:"orange"};
  return (
    <div className="container">
      <article>
        <hgroup>
          <img src="images/group.svg" alt="Stargazers group" />
          <h1>Meet the <i style={nameStyle}>{ name }</i></h1>
          <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species.<br />They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <button className="outline" onClick={()=> alert('Hi There')}>
            Click Me
          </button>
        </hgroup>
      </article>
    </div>
  );
}
export default App
