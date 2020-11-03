import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownMenu,
} from "reactstrap";
import '../components/Header.css'

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="Sidebar">
      <Navbar className="MainSidebardropdown">
        <div className="myNavbarCollapse__wrapper">
          <NavbarToggler onClick={toggleNavbar} className="mr-2 NavbarTogglerMy">
            <img className = "NavbarImage" src = "https://cdn4.iconfinder.com/data/icons/interface-line-5/32/menu-style1-512.png"></img>
          </NavbarToggler>
          <Collapse className="myNavbarCollapse" isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="SidebarLinks" href="/sale">Sales</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="SidebarLinks" href="/blog">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="SidebarLinks" href="/about">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="SidebarLinks" href="/pay">Payment</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="SidebarLinks" href="/contact">Contacts</NavLink>
              </NavItem>
              <NavItem href="/catalog">
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle className="SidebarLinks" nav caret>
                    Catalog
                  </DropdownToggle>
                  <DropdownMenu className = "SidebarCatalogsDropdownMenu">
                    <NavItem>
                      <NavLink className="CatalogsLinks" href="/audi">Audi</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="CatalogsLinks" href="/bmw">BMW</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="CatalogsLinks" href="/lamborgini">Lamborgini</NavLink>
                    </NavItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Sidebar;
