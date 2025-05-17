import { Link } from "react-router-dom";
import './WorkersApp.css'
import { UserSearch, UserPlus } from 'lucide-react';

const WorkersApp = () => {
  return (
    <div className="workers-app" >
      <h2 className="worker-header">
        Are you a worker? <br /> Find a worker.
      </h2>

      <b>Choose an option: </b>

      <div className="worker-wrapper">
        <div className="worker-option">
          <UserPlus size={30} />
          <a
            href="https://forms.gle/PFtPoFPWoeNKJi167"
            target="_blank"
            rel="noopener noreferrer"
          >
            I'm a Worker.
          </a>
        </div>
        <div className="worker-option">
          <UserSearch size={30} />
          <Link to="/workers-finder">I want Workers.</Link>
        </div>
      </div>
    </div>
  );
};

export default WorkersApp;