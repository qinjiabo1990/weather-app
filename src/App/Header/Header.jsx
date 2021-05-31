import React, { Component } from "react";
import styled from 'styled-components';
import Logo from './Logo';
import Time from './Time';
import FlexRow from '../../components/FlexRow'

const Nav = styled(FlexRow)`
    align-items: center;
    min-width: 300px;
`

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Nav>
                    <Logo />
                    <Time />
                </Nav>
            </>
        )
    }
}

export default Header;