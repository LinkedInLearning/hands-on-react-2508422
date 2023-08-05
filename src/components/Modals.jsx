export default ({ member, upperId, handleClose, handleChange, previousCast, nextCast }) => {
  return (
    <dialog id="modal-member" open>
      <article>
        <a href="#close"
          aria-label="close"
          className="close"
          data-target="modal-member"
          onClick={handleClose}
        ></a>
        <hgroup>
          <div style={{
            display: "flex",
            gap: '1rem'
          }}>
            <img style={{ height: '250px' }}
              src={`images/${member.slug}.svg`}
              alt={member.name} />
            <hgroup>
              <h1>{member.name}</h1>
              <p>{member.bio}</p>
              <hgroup>
                <a className="outline " disabled={member.id === 0} href="#" role="button"
                  onClick={() => handleChange(Number(member.id) - 1)}>
                  previous
                </a>
                <a className="outline" href="#" role="button" disabled={member.id === upperId}
                  onClick={() => handleChange(Number(member.id) + 1)}>
                  next
                </a>
              </hgroup>
            </hgroup>
          </div>
        </hgroup>
        <footer>
          <div style={{
            display: "flex"
          }} >
            <a href="#prev"
              aria-label="previous"
              role="button"
              data-target="modal-member"
              onClick={() => handleChange(Number(member.id) - 1)}>
              previous
            </a>
            <a href="#next"
              aria-label="next"
              role="button"
              data-target="modal-member"
              onClick={() => handleChange(Number(member.id) + 1)}>
              next
            </a>
          </div>
        </footer>
      </article>
    </dialog>
  )
}