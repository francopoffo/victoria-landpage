import React from 'react'
import MainHeader from './MainHeader'
import Banner from './Banner'

function Layout(props) {
  return (
    <>
    <MainHeader />
    <Banner />
    <main>{props.children}</main>
    </>
  )
}

export default Layout