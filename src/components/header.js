import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { MenuItem, StyledHeader } from "../styles/components";

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Link to="/">
      <img
        src="https://raw.githubusercontent.com/maoacr/platzishop-gatsby/master/src/images/Logo.png"
        alt="Logo de Platzi"
      />
    </Link>
    <nav>
      <ul>
        <MenuItem margin>
          <Link to="/">Productos</Link>
        </MenuItem>
        <MenuItem margin>
          <a href="https://www.platzi.com">Platzi</a>
        </MenuItem>
        <MenuItem>
          <Link to="/car">
            <span>
              <img
                src="https://raw.githubusercontent.com/maoacr/platzishop-gatsby/master/src/images/cart.png"
                alt="cartlogo de compras"
              />
            </span>
          </Link>
        </MenuItem>
      </ul>
    </nav>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
