import { useRef, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Menu from './components/Header/Menu/Menu';
import Footer from './components/Footer/Footer';

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      const clickedOutsideMenu = menuRef.current && !menuRef.current.contains(event.target);
      const clickedOutsideButton = buttonRef.current && !buttonRef.current.contains(event.target);

      if (clickedOutsideMenu && clickedOutsideButton) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  return (
    <>
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        buttonRef={buttonRef}
      />
      <Menu
        isMenuOpen={isMenuOpen}
        menuRef={menuRef}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;