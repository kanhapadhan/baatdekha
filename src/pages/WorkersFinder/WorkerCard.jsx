import './workerCard.css'

function WorkerCard({ name, village, occupation, contact, imgSrc }) {
  return (
    <div className="worker-card">
      <div className="worker-image-cover">
        <img
          src={imgSrc}
          alt="Worker"
          className="worker-image"
          onError={(e) => { e.target.src = 'avatar.jpg'; }}
        />
      </div>
      <h3 className="worker-name">{name}<br />({village})</h3>
      <h4 className="occupation">{occupation}</h4>
      <a href={`tel:${contact}`}>
        <button className="call-button">Call Me</button>
      </a>
    </div>
  );
}

export default WorkerCard;