import React from 'react';
import { Navbar, Nav, NavItem} from 'reactstrap';
import {NavLink} from "react-router-dom";
import '../css/NavigationComponent.css';

const NavigationComponent = (props) => {
    return (
        <React.Fragment>
            <Navbar dark expand='md'>
                <div className="container centered">
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link"  to='/imagesCollection'> Images collection</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/formValidation'> Form validation</NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </Navbar>
        </React.Fragment>
    );
}

export default NavigationComponent;

