import * as React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby";
import Link from "./link";

const Header = ({ siteTitle }) => {
  const result = useStaticQuery(graphql`
    query  {
      datoCmsMenu {
        menuItems {
          destination {
            slug
            title
          }
          originalId
          labelText
        }
      }
    }

  `);
  console.log(result);
  return (
    <header
      style={{
        margin: `0 auto`,
        padding: `var(--space-4) var(--size-gutter)`,
        display: `flex`,
        alignItems: `center`,
      }}
    >
      {result.datoCmsMenu.menuItems.map(menuItem =>
        <Link key={menuItem.originalId} to={menuItem.destination.slug}>{menuItem.labelText}</Link>
      )}
    </header>
  )

}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
