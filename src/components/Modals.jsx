export default ({ memberName, bio, slug, handleClose }) => {
  return (
    <dialog id="modal-member" open>
      <article>
        <a href="#close"
          aria-label="Close"
          className="close"
          data-target="modal-member"
          onClick={handleClose}
        >
        </a>
        <hgroup>
          <div style={{
            display: "flex",
            gap: "1rem"
          }}>
            <img style={{
              width: "200px"
            }} src={`images/${slug}.svg`} alt={memberName} />
            <hgroup>
              <h1>{memberName}</h1>
              <p>{bio}</p>
            </hgroup>
          </div>
        </hgroup>
      </article>
    </dialog>
  )
}