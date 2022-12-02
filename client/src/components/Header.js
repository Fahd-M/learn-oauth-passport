import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <section className="header">
      <div className="header__banner"></div>
      <div className="header__bottom">
        <Link className="header__logo" to="/">BrainFeed</Link>
        <nav className="header__nav">
          <NavLink
            className={(navData) => navData.isActive ? "header__nav-link header__nav-link--active" : "header__nav-link"}
            to="/"
            exact="true"
          >
            Home
          </NavLink>
          <NavLink
            className={(navData) => navData.isActive ? "header__nav-link header__nav-link--active" : "header__nav-link"}
            to="/profile"
            exact
          >
            Profile
          </NavLink>
          <NavLink
            className="header__nav-link"
            activeClassName="header__nav-link--active"
            to="/posts"
            exact
          >
            Posts
          </NavLink>
        </nav>
      </div>
    </section>
  );
};

export default Header;