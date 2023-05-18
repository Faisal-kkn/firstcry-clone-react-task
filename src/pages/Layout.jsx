import { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { Header, Footer, useWindowSize, MobileHeader, MobileFooter, MobileStickyMenu } from '../components/index'
import { UserContext } from '../AppContext';


export const Layout = () => {
  const size = useWindowSize();
  const { cart, userData } = useContext(UserContext);
  const Navigate = useNavigate()

  useEffect(() => {
    if (userData) Navigate('/')
    else Navigate("/login");
  }, [userData])

  return (
    <>
      {size.width > 600 ?
        <Header /> : <>
          <MobileHeader cart={cart} />
          <MobileStickyMenu />
        </>
      }
      <Outlet />
      {size.width > 600 ?
        <Footer /> : <MobileFooter />
      }

    </>
  )
}
