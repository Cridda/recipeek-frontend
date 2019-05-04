import React from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';

export default () => (
    <Container>
        <Spin size="large" />
    </Container>
);

const Container = styled.div`
    position: fixed;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;
