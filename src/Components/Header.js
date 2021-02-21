import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from "styled-components";

const Head = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  z-index: 10;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);

`
const List = styled.ul`
  display: flex;
`
const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  border-bottom:  5px solid
  ${(props) => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`

const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`


export default withRouter(({ location: { pathname } }) => (
    <Head>
        <List>
            <Item current={pathname === "/"}>
                <SLink to="/">Movie</SLink>
            </Item>
            <Item current={pathname === "/tv"}>
                <SLink to="/">Tv</SLink>
            </Item>
            <Item current={pathname === "/search"}>
                <SLink to="/">Search</SLink>
            </Item>
        </List>
    </Head>
));
