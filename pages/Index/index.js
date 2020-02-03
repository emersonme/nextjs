import React, { useEffect, useState } from "react"
import Layout from "../../components/_layout/default"

import { Container } from "./styles"

const Home = () => {
  return (
    <Layout title="Home">
      <Container>
        <div id="box1">
          <h1>Seja bem-vindo,</h1>
          <form>
            <input />
            <button>
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
        <div id="box2"></div>
        <div id="box3"></div>
        <div id="box4"></div>
      </Container>
    </Layout>
  )
}

export default Home
