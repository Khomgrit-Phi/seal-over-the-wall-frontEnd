import logo from '../assets/images/custommike-navbar-logo.svg';
import heartIcon from '../assets/images/icon_heart.svg';
import userIcon from '../assets/images/icon_user.svg';
import cartIcon from '../assets/images/icon_shopping_cart.svg';
import globeIcon from '../assets/images/icon_globe_alt.png';

const MainNav = () => {
  return (
    <div>
      <nav
        id="navbar"
        className="flex flex-row items-center justify-between p-10 bg-transparent transition-all duration-300 z-10 fixed top-0 right-0 left-0"
      >
        <img
          src={logo}
          alt="Logo"
          className="logo w-80"
        />

        <div className="relative w-80">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border rounded-full bg-gray-100 opacity-50 text-black focus:outline-none focus:ring focus:ring-blue-300"
          />
          <i className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900 fa fa-search" />
        </div>

        <div className="right-nav">
          <ul className="flex flex-row gap-10">
            <li>
              <img
                src={heartIcon}
                alt="Heart"
                className="logo"
              />
            </li>
            <li
              className="dropdown dropdown-end hover:cursor-pointer"
              tabIndex={0}
              role="button"
            >
              <img
                src={userIcon}
                alt="User"
                className="user"
              />
            </li>
            <li
              className="dropdown dropdown-end hover:cursor-pointer"
              tabIndex={0}
              role="button"
            >
              <img
                src={cartIcon}
                alt="Cart"
                className="cart"
              />
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
              >
                {/* ตรงนี้ใส่ Cart Component หรือ รายการในตะกร้าได้ */}
              </div>
            </li>
            <li>
              <img
                src={globeIcon}
                alt="Language"
                className="globe"
              />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default MainNav;
