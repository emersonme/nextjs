import React from "react"
import Header from "../Header"
import Head from "../head"
import SideBar from "../SideBar"

const Layout = ({ children, title }) => (
  <div>
    <Head title={title} />
    <Header />
    <SideBar />
    {children}
    <style jsx>{`
      @import url("https://fonts.googleapis.com/css?family=Noto+Sans&display=swap");
      :global(body, *) {
        margin: 0;
        padding: 0;
        font-family: "Noto Sans", sans-serif;
      }

      div {
        display: grid;
        grid-template-columns: 200px 3fr;
        grid-template-rows: 50px 90vh;
        grid-template-areas:
          "h h"
          "s m";
      }
    `}</style>
  </div>
)

export default Layout
