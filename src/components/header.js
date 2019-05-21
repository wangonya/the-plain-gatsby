import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="logo">
    <div>
      {window.location.pathname == "/" ? (
        <Link to="/about/" />
      ) : (
        <Link to="/" />
      )}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
