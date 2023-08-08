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
              <hgroup style={{
                display: "flex",
                gap: '1rem',
                marginTop: '1rem',
                justifyContent: 'space-between'
              }}>
                <a className="outline " style={{ padding: "0" }} disabled={member.id === 0} href="#" role="button"
                  onClick={() => handleChange(Number(member.id) - 1)}>
                  <span style={{ padding: "12.5px" }} className="material-symbols-outlined">arrow_back</span>
                </a>
                <a className="outline" style={{ padding: "0" }} href="#" role="button" disabled={member.id === upperId}
                  onClick={() => handleChange(Number(member.id) + 1)}>
                  <span style={{ padding: "12.5px" }} className="material-symbols-outlined">arrow_forward</span>
                </a>
              </hgroup>
            </hgroup>
          </div>
        </hgroup>
        <footer>
          <div style={{
            display: "flex",
            gap: '1rem',
            marginTop: '1rem',
            justifyContent: 'space-between'
          }} >
            <a href="#prev"
              aria-label="previous"
              role="button"
              data-target="modal-member"
              style={{ padding: "0" }}
              onClick={() => handleChange(Number(member.id) - 1)}>
              <span style={{ padding: "12.5px" }} className="material-symbols-outlined">arrow_back</span>
            </a>
            <a href="#next"
              aria-label="next"
              role="button"
              data-target="modal-member"
              style={{ padding: "0" }}
              onClick={() => handleChange(Number(member.id) + 1)}>
              <span style={{ padding: "12.5px" }} className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </footer>
      </article>
    </dialog>
  )
}