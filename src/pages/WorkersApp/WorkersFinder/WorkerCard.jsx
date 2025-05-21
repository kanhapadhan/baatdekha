import './workerCard.css'
import { MdCall } from "react-icons/md";

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
      <div className="worker-details">
        <span className="worker-name">{name}</span>
        <span className="worker-village">({village})</span>
        <span className="occupation">{occupation}</span>
      </div>
      <a href={`tel:${contact}`} className="call-button">
        <MdCall className="call-icon" size={26} />
        <span>Call Me</span>
      </a>
    </div>
  );
}

export default WorkerCard;