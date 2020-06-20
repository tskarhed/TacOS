import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
      textAlign: `center`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `8rem 1.0875rem`,
      }}
    >
      <h1 style={{
        margin: 0,
        fontWeight: `lighter`,
        fontSize: `7rem`
      }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          <img style={{ marginBottom: 0, verticalAlign: `bottom`, height: `8rem`}} alt="Definitely not an Apple logo but with a nacho instead" title="Definitely not an Apple logo but with a nacho instead" src="tacos.svg" />
          {siteTitle}
        </Link>
      </h1>
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
