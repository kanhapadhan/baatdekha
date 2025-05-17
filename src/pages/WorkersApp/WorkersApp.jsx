import { Link } from "react-router-dom";
import './WorkersApp.css'
import { UserSearch, UserPlus } from 'lucide-react';

const WorkersApp = () => {
  return (
    <div className="workers-app">
      <h2 className="worker-header">
        Are you a worker? <br /> Find a worker.
      </h2>

      <b>Choose an option: </b>

      <div className="worker-wrapper">
        <a
          className="worker-option"
          href="https://forms.gle/PFtPoFPWoeNKJi167"
          target="_blank"
          rel="noopener noreferrer"
        >
          <UserPlus size={30} />
          <span>I'm a Worker.</span>
        </a>

        <Link className="worker-option" to="/workers-finder">
          <UserSearch size={30} />
          <span>I want Workers.</span>
        </Link>
      </div>
    </div>
  );
};

export default WorkersApp;