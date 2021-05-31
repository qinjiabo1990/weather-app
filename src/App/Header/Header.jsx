import React, { Component } from "react";
import styled from 'styled-components';
import Logo from './Logo';
import Time from './Time';
import Flex from '../../components/Flex'

const Nav = styled.div`
    
`

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Flex>
                    <Logo />
                    <Time />
                </Flex>

            </>
        )
    }
}

export default Header;