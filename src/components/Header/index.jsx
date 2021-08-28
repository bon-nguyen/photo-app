import React from 'react';

import { Col, Container, Row } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import './Header.scss';


function Header(props) {
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                    <Link
                        className="header__link header__title"
                        to='/'
                        >
                        Learn Redux
                    </Link>
                    </Col>

                    <Col xs="auto">
             
                        <NavLink
                            exact
                            className="header__link"
                            to="/photos"
                            activeClassName="header__link--active"
                        >
                            Redux Project
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;