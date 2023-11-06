import React from 'react'
import Navbar from './Navbar'
import Link from 'next/link'

interface HeaderProps {
  children: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <>
      <header className="fixed w-full top-0 left-0 z-20">
        <div className="max-w-7xl flex justify-between items-center mx-auto h-20 px-4 sm:px-6 lg:px-8 text-xl">
          <Navbar />
          <div>Search</div>
          <div>Login</div>
        </div>
      </header>
      {children}
    </>
  )
}

export default Header
