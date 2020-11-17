import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/" style={{color:"white", fontWeight: "1000"}}>IMAGE EDITING BOOTCAMP</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={RRNavLink}
                to="/Upload" style={{color:"white", fontWeight: "600"}}>Upload
               </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink}
                to="/Score" style={{color:"white", fontWeight: "600"}}>Assign Score</NavLink>
            </NavItem>  
            <NavItem>
              <NavLink tag={RRNavLink}
                to="/Result" style={{color:"white", fontWeight: "600"}}>Results</NavLink>
            </NavItem>                                  
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;