import React from 'react'
import { Outlet } from 'react-router-dom';
import { Header, Footer, useWindowSize, MobileHeader, MobileFooter } from '../components/index'
export const Layout = () => {
  const size = useWindowSize();
  return (
    <>
      {size.width > 600 ?
        <Header /> : <MobileHeader />
      }
      <Outlet />
      {size.width > 600 ?
        <Footer /> : <MobileFooter />
      }

    </>
  )
}
