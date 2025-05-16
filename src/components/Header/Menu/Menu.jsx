import './menu.css'
import MenuItem from './MenuItem';
import { House, Users, Phone, BookOpenText, Headset } from 'lucide-react';

function Menu({ isMenuOpen, setIsMenuOpen, menuRef }) {
  const handleItemClick = () => {
      setIsMenuOpen(false);
    };
  
  return (
    <div ref={menuRef} className={`menu-content ${isMenuOpen ? 'opened' : ''}`}>
      <MenuItem label="Home" icon={House} link="/" onClick={handleItemClick} />
      <MenuItem label="Service Guide" icon={Headset} link="/service-guide" onClick={handleItemClick} />
      <MenuItem label="About Us" icon={Users} link="/about" onClick={handleItemClick} />
      <MenuItem label="Contact Us" icon={Phone} link="/contact" onClick={handleItemClick} />
      <MenuItem label="T&C" icon={BookOpenText} link="/terms" onClick={handleItemClick} />
    </div>
  );
}

export default Menu;