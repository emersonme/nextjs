import styled from "styled-components"
import { darken } from "polished"

import React from "react"

// import { Container } from './styles';

export default function Index() {
  return <div />
}

export const Container = styled.main`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  grid-template-rows: 30vh 50vh;
  grid-template-areas:
    "b1 b2 b3"
    "b4 b4 .";
  grid-column-gap: 30px;
  grid-row-gap: 15px;
  padding: 40px;
  grid-area: m;
  background: #fafafa;

  #box1 {
    grid-area: b1;

    input {
      height: 35px;
      margin-top: 20px;
      border-radius: 4px;
      width: 80%;
      border: 1px solid #ccc;
    }

    button {
      margin-left: 10px;
      background-color: orange;
      border: none;
      color: white;
      padding: 10px 14px;
      font-size: 14px;
      cursor: pointer;
      border-radius: 4px;

      &:hover {
        background: ${darken(0.2, "#fdb92e")};
      }
    }
  }

  #box2 {
    grid-area: b2;
  }

  #box3 {
    grid-area: b3;
  }

  #box4 {
    grid-area: b4;
  }
`
