import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink as RouterNavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth"

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
  
} from "reactstrap";

class TopNavBar extends Component{
    state = {
        isOpen: false
    };
 toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

 render(){
     const { isAuthenticated, logout } = this.props;
     return(
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand tag={RouterNavLink} to="/">Pulickanmoi</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {!isAuthenticated && 
                            [<NavItem>
                                 <NavLink tag={RouterNavLink} to="/signup">SignUp</NavLink>
                            </NavItem>,
                            <NavItem>
                                 <NavLink tag={RouterNavLink} to="/login">Login</NavLink>
                            </NavItem> ]   
                        }
                        {isAuthenticated &&  
                        <NavItem> 
                            <NavLink href="#" onClick={()=> logout()}>Logout</NavLink>
                        </NavItem>
                        }
                        <NavItem>
                            <NavLink href="https://github.com/Arockiam-kaspar" target="_blank">
                                Github
                            </NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
     );
 }
}


TopNavBar.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.token
    };
  }
  
  export default connect(mapStateToProps, { logout })(TopNavBar);