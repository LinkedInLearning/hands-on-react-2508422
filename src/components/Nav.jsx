export default ({ cast, onChoice }) => {
  return (
    <nav className="container">
      <ul>
        <li>
          <details role="list">
            <summary aria-haspopup="listbox" role="link">cast</summary>
            <ul role="listbox">
              {cast.map(member => (
                <li style={{ display: 'flex', gap: '1rem' }} key={member.id}>
                  <img style={{ height: '25px' }} src={`images/${member.slug}_tn.svg`} alt={member.name} />
                  <a onClick={() => { onChoice(member) }}
                    data-tooltip={member.name}>{member.name}</a>
                </li>
              ))}
            </ul>
          </details>
        </li>
      </ul>
      <ul>
        <li><a href="#"><img style={{ height: '50px' }} src="images/logo_bug_stargazers.svg"
          alt="Stargazers" /></a></li>
      </ul>
    </nav>
  )
}