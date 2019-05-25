import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Location } from "@reach/router"

const Header = ({ avatar }) => (
  <header className="logo">
    <Location>
      {({ location }) => {
        return location.pathname == "/" ? (
          <div>
            <Link to="/about/">
              <img src={avatar} className="logo-avatar" />
            </Link>
            <span className="logo-prompt code">About the Author</span>
          </div>
        ) : (
          <div>
            <Link to="/">
              <img src={avatar} className="logo-avatar" />
            </Link>
            <span className="logo-prompt code">Back Home</span>
          </div>
        )
      }}
    </Location>
  </header>
)

Header.propTypes = {
  avatar: PropTypes.string,
}

Header.defaultProps = {
  avatar: ``,
}

export default Header
