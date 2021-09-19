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
            <Link to="/about/" title="Go to about page">
              <img src={avatar} className="logo-avatar" alt="Picture of me" />
            </Link>
            <span className="logo-prompt code">About the Author</span>
          </div>
        ) : (
          <div>
            <Link to="/" title="Go to homepage">
              <img src={avatar} className="logo-avatar" alt="Picture of me" />
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
