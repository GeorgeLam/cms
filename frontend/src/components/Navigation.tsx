import React from 'react';
import styled from 'styled-components';

import Divider from './Divider';

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 0 auto;
  width: 30%;
  justify-content: space-evenly;
  padding: 3em 0 2em 0;
`

const NavItem = styled.div`
  cursor: pointer;
`

function Navigation() {
  return (
      <>
        <Navbar>
            <NavItem>Portfolio</NavItem>
            <NavItem>Blog</NavItem>
        </Navbar>
        <Divider/>
      </>
  );
}

export default Navigation;
