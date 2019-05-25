import React from "react"
import PropTypes from "prop-types"

const Footer = ({ siteTitle }) => (
  <div className="footer">
    <span class="block">
      &copy; {new Date().getFullYear()} {siteTitle}
    </span>
    <span className="block">
      <small>
        Built with {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> and{` `}
        <a href="https://github.com/wangonya/the-plain-gatsby">
          The Plain Gatsby starter
        </a>
      </small>
    </span>
  </div>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
