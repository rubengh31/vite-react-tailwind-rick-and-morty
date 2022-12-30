export default function DetailCard(props: any) {
  return (
    <main className="cards">
      <article className="card">
        {/* <Image src={props.data.image} alt={props.data.name} /> */}
        <div className="text">
          <h3>{props.data.name}</h3>
          <span>Created: {new Date(props.data.created).toLocaleDateString()}</span>
          <span>Specie: {props.data.species}</span>
          <span>Status: {props.data.status}</span>
          <span>Gender: {props.data.gender}</span>
          <span>Location: {props.data.location.name}</span>
          <span>Episodes: {props.data.episode.length}</span>
        </div>
      </article>
    </main>
  );
}
