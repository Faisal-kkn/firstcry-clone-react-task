import React from 'react'
import { Outlet } from 'react-router-dom';
export const RegisterLayout = () => {
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
