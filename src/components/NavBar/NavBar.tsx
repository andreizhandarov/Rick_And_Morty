import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { IconClose, IconOpen } from '../icons/icons';
import style from './NavBar.module.css'

export const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
  <div className={style.header}>
    <div className={style.container}>
      <NavLink to="/" className={style.navLink}> 
        <p className={style.textLogo}>Rick & Morty <span className={style.textLogoSpan}>WIKI</span></p>
      </NavLink>

      <nav className={`${style.headerNav} ${isMenuOpen ? style.open : style.closed}`}>
        <NavLink to='/' className={({isActive}) => isActive ? style.active : style.navLink}>Characters</NavLink>
        <NavLink to='/episode' className={({isActive}) => isActive ? style.active : style.navLink}>Location</NavLink>
        <NavLink to='/location' className={({isActive}) => isActive ? style.active : style.navLink}>Episode</NavLink>
      </nav>

    </div>

    <div className={style.mobileMenuIcon} onClick={toggleMenu}>
        {isMenuOpen ? <IconClose /> : <IconOpen />}  {/* Здесь можно заменить символы на иконки */}
    </div>

  </div>
  );
};
