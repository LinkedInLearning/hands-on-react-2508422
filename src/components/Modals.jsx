export default ({member, handleClose}) =>
{
  return (
    <dialog id="modal-member" open>
      <article>
        <a href="#close"
        aria-label="Close"
        className="close"
        data-target="modal-member"
        onclick={handleClose}
        ></a>
      <hgroup>
        <div style={{
          display: "flex",
          gap: '1rem'
        }}>
          <img style={{ width: '200px' }} 
          src={`images/${member.slug}.svg`} 
          alt={member.name} />
          <hgroup>
            <h1>{member.name}</h1>
            <p>{member.bio}</p>
          </hgroup>
        </div>
      </hgroup>
      </article>
    </dialog>
  )
}