export default ({ memberName, bio, slug, handleClose }) => {
  return (
    <dialog id="modal-member" open>
      <article>
        <header>
          <a href="#close"
            aria-label="Close"
            className="close"
            data-target="modal-member"
            onClick={handleClose}
          ></a>
          <span style={{
            fontWeight: "700",
            fontSize: "2rem",
            color: "var(--primary)"

          }}>{memberName}</span>
        </header>
        <div style={{
          display: "flex",
          gap: "1rem"
        }}>
          <img style={{
            width: "200px"
          }} src={`images/${slug}.svg`} alt={memberName} />
          <p>{bio}</p>
        </div>
        <hgroup style={{
          display: "flex",
          gap: "1rem",
          marginTop: "1rem",
          justifyContent: "space-between"
        }}>
          <a className="outline" href="#" role="button"><span className="material-symbols-outlined">arrow_back</span></a>
          <a className="outline" href="#" role="button"><span className="material-symbols-outlined">arrow_forward</span></a>
        </hgroup>
      </article>
    </dialog>
  )
}