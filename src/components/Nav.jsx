import './Nav.css';

export default ({ cast, onChoice }) => {
  return (
    <div className='navContainer'>
      <nav className="container">
        <ul>
          <li><a href="#"><img style={{ height: '80px' }} src="images/logo_bug_stargazers.svg" alt="Stargazers logo" /></a></li>
        </ul>
        <ul>
          <li>
            <details role="list">
              <summary aria-haspopup="listbox" role="link">cast</summary>
              <ul role="listbox">
                {cast.map(member => (
                  <li key={member.id}><a onClick={() => {
                    onChoice(member);
                  }} data-tooltip={member.name}>
                    {member.name}</a></li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </nav>
    </div >
  )
}