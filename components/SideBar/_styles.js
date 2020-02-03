import styled from "styled-components"

import React from "react"

// import { Container } from './styles';

export default function SideBar() {
  return <div />
}

export const Container = styled.nav`
  background: #333;
  position: fixed;
  top: 50px;
  height: 100%;
  width: 200px;
  grid-area: n;

  p {
    color: #eee;
    font-size: 13px;
    padding: 25px 0px 20px 25px;
  }

  ul {
    list-style-type: none;
  }

  li {
    padding: 10px 25px;
    color: #999;
    background: none;
    border: 0;
    cursor: pointer;
  }

  li:hover {
    background: rgba(0, 0, 0, 0.1);
    color: ${({ theme }) => theme.colors.primary};
  }
`
