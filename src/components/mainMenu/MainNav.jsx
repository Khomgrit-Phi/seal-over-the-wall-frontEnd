import { useEffect, useState } from 'react';
import { BiCartAlt, BiGlobe, BiHeart } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import logo from '/assets/images/custommike-navbar-logo.svg';
import { useAuth } from '../../context/AuthContext';
import DropdownMenu from './DropdownMenu';
import ExpandingSearch from './ExpandingSearch';
import ProfileMenu from './ProfileMenu';

const MainNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { cart } = useAuth();
  const cartItemCount = cart?.items?.length || 0;
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'}
      `}
      >
        <div className="flex flex-row items-center justify-between px-10 py-5">
          <div className="left-nav flex items-center gap-5">
            <Link to="/">
              <img src={logo} alt="Logo" className="logo w-52" />
            </Link>
            <DropdownMenu />
          </div>

          <div className="right-nav flex">
            <ul className="flex flex-row gap-10 items-center">
              <li>
                <div className="bg-black rounded-full p-1">
                  <ExpandingSearch />
                </div>
              </li>
              <li>
                <Link to="#">
                  <BiHeart className="w-6 h-6 hover:text-primary-blue-500" />
                </Link>
              </li>
              <li>
                <ProfileMenu />
              </li>
              <li>
                <Link to="/cart" className='relative'>
                  <BiCartAlt className="w-6 h-6 hover:text-primary-blue-500" />
                  {cartItemCount > 0 && (
                    <span
                      className="absolute -top-2 -right-2 bg-primary-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                      aria-label="Cart items count"
                    >
                      {cartItemCount}
                    </span>
                  )}
                </Link>
              </li>
              <li>
                <Link to="/">
                  <BiGlobe className="w-6 h-6 hover:text-primary-blue-500" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default MainNav;
