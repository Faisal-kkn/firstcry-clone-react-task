import { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../AppContext';

export const RegisterLayout = () => {
  const { userData } = useContext(UserContext);
  const Navigate = useNavigate()

  useEffect(() => {
    if (userData) Navigate('/')
  }, [userData])

  return (
    <>
      <div className="py-4 mt-5">
        <img src="https://cdn.fcglcdn.com/brainbees/images/n/fc-logo-s.jpg" alt="Logo" className="mx-auto" />
      </div>
      <div className="max-w-[350px] mx-auto p-4">
        <Outlet />
      </div>
    </>
  )
}
