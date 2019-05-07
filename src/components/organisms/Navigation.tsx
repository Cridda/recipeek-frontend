import { Icon, Menu } from 'antd';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navigation: React.FC = () => {
    return (
        <>
            <Header>
                <Menu mode="horizontal">
                    <Menu.Item>
                        <Link to="/">
                            <Icon type="home" />
                            Home
                        </Link>
                    </Menu.Item>

                    <Menu.Item>
                        <NavLink to="/recipe">
                            <Icon type="shop" />
                            Recepten
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/recipe">
                            <Icon type="search" />
                            Zoeken
                        </Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <ShadowMenu />
        </>
    );
};

const ShadowMenu = styled.div`
    width: 100vw;
    height: 3.2rem;
`;

export default Navigation;

const Header = styled.header`
    position: fixed;
    z-index: 1;
    width: 100%;
`;
