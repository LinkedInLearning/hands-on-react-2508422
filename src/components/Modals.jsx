export default ({ member, handleClose, handleChange }) => {
  return (
    <dialog open>
      <article>
        <button
          style={{ marginTop: "1px" }}
          aria-label="Close"
          rel="prev"
          onClick={handleClose}
        ></button>
        <div style={{ display: "flex", gap: "1rem" }}>
          <img
            style={{ width: "200px" }}
            src={`images/${member.slug}.svg`}
            alt={member.name}
          />
          <hgroup>
            <h1>{member.name}</h1>
            <p>{member.bio}</p>
            <hgroup>
              <button
                className="outline"
                onClick={() => {
                  handleChange(member.id - 1);
                }}
              >
                Prev Char
              </button>
              <button
                style={{ color: "white", marginLeft: "1rem" }}
                onClick={() => {
                  handleChange(member.id + 1);
                }}
              >
                Next Char
              </button>
            </hgroup>
          </hgroup>
        </div>
      </article>
    </dialog>
  );
};
