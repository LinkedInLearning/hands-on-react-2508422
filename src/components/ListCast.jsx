import {useState, useEffect} from "react";

export default () =>
{
  const [cast, setCast] = useState([])

  async function fetchCast()
  {
    const response = await fetch('cast.json');
    setCast(await response.json());
  }

  useEffect(() =>
    {
      fetchCast();
    });

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: `repeat(auto-fit, minmax(200px,1fr))`,
      gap: `1rem`,
      marginBottom: '2rem'
    }}>

    {
      cast.map(member => (
        <a key={member.id} data-tooltip={member.name}>
        <img src={`images/${member.slug}_tn.svg`} alt={member.name} />
        </a>
      ))
    }
    </div>
  )
}