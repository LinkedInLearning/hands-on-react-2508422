import "./Nav.css";

export default ({ cast, onChoice }) => {
  return (
    <nav className="container">
      <ul>
        <li>
          <details className="dropdown">
            <summary aria-haspopup="listbox">Cast</summary>
            <ul role="listbox">
              {cast.map((member) => (
                <li key={member.id}>
                  <a
                    href="#"
                    onClick={() => {
                      onChoice(member);
                    }}
                  >
                    {member.name}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </li>
      </ul>
      <ul>
        <a href="#">
          <img
            style={{ height: "50px" }}
            src="images/logo_bug_stargazers.svg"
            alt="Stargazers Logo"
          />
        </a>
      </ul>
    </nav>
  );
};
