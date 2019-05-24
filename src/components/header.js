import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Location } from "@reach/router"

const Header = ({ siteTitle }) => (
  <header className="logo">
    <Location>
      {({ location }) => {
        return location.pathname == "/" ? (
          <div>
            <Link to="/about/">
              <img src=".././images/gatsby-icon.png" />
            </Link>
            <span className="logo-prompt code">About the Author</span>
          </div>
        ) : (
          <div>
            <Link to="/" />
            <span className="logo-prompt code">Back Home</span>
          </div>
        )
      }}
    </Location>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
