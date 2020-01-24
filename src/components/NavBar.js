import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarToggler,
NavbarText,
Collapse} from "reactstrap"
import { withRouter, Link } from 'react-router-dom'


class NavBarEdited extends Component {
  state = {
    matches: window.matchMedia("(min-width: 768px").matches,
    collapsed: false,
    userData: []
  }

  componentDidMount() {
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia("(min-width: 768px").addListener(handler)

  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  handlerLogout = (event) => {
    event.preventDefault()
    try{
      localStorage.removeItem('dataAccount')
      this.props.history.push('/')
    }catch(err){
      console.log(err);
      

    }
  }

  render() {
    return(
      <div>
        {this.state.matches ? (
                <Navbar color="light" light expand="md">
                <NavbarBrand href="/">NStore</NavbarBrand>

                  <Nav className="mr-auto" navbar>
                      <NavItem>
                          <Link to='/order'>Pesan</Link>
                      </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Options
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          Option 1
                        </DropdownItem>
                        <DropdownItem>
                          Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          Reset
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                 <Nav>

                 <NavItem>
                      <NavLink href="#">Najih Mld</NavLink>
                  </NavItem>

                 {/* <NavItem>{this.state.userData.token}</NavItem> */}
                  <NavItem>
                    <NavLink onClick={(event) => {this.handlerLogout(event)}}>Logout</NavLink>
                  </NavItem>
                 </Nav>
                  </Navbar>
                  

        ) : (

          <Navbar color="light" light expand="md">
          <NavbarBrand href="/">NStore</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={this.state.collapsed} navbar>
            <Nav className="mr-auto" navbar>
            <NavItem>
                <Link to='/order'>Pesan</Link>
            </NavItem>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Hello</NavbarText>
          </Collapse>
        </Navbar>

        )}
      </div> 
     


    )
  }
}

export default withRouter(NavBarEdited);
