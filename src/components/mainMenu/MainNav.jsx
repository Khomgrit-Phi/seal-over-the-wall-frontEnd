import { useEffect, useState } from 'react';
import logo from '../../assets/images/custommike-navbar-logo.svg';
import { BiHeart, BiUser, BiCartAlt, BiGlobe } from 'react-icons/bi';
import ExpandingSearch from './ExpandingSearch';
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';
import ProfileMenu from './ProfileMenu';

const MainNav = () => {
  const [scrolled, setScrolled] = useState(false);

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
                <Link to="/cart">
                  <BiCartAlt className="w-6 h-6 hover:text-primary-blue-500" />
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
