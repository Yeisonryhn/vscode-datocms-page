import React from 'react';
import {Link as GatsbyLink } from 'gatsby';

const Link = ({to, children}) => {
  return <GatsbyLink style={{margin: `0 10px 0 0`}} to={to === 'index' ? '/' : `/${to}`}>{children}</GatsbyLink>
}

export default Link;