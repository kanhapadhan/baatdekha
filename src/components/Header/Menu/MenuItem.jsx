import { Link, useLocation } from 'react-router-dom';

function MenuItem({ label, icon: Icon, link, onClick }) {
  const location = useLocation();
  const selected = location.pathname === link;

  return (
    <Link to={link} className={`menu-item ${selected ? 'selected' : ''}`} onClick={onClick}>
      <Icon className="icon" />
      <span>{label}</span>
    </Link>
  );
}

export default MenuItem;