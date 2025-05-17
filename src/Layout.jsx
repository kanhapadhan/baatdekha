import { useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Menu from './components/Header/Menu/Menu';
import Footer from './components/Footer/Footer';
import './overlay.css'

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  return (
    <>
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <div className={`overlay ${isMenuOpen ? 'show' : ''}`} 
           onClick={() => setIsMenuOpen(false)}>
      </div>
      <Menu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
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