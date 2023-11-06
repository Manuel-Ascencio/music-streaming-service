'use client'
import React, { useEffect, useState } from 'react'
import { GoHome } from 'react-icons/go'
import { PiPlaylist } from 'react-icons/pi'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface Route {
  icon: React.ReactElement
  label: string
  active: boolean
  href: string
}

const Navbar: React.FC = () => {
  const pathname = usePathname()
  const [routes, setRoutes] = useState<Route[]>([])
  console.log(pathname)
  useEffect(() => {
    const calculatedRoutes: Route[] = [
      {
        icon: <GoHome />,
        label: 'Home',
        active: pathname !== '/library',
        href: '/'
      },
      {
        icon: <PiPlaylist />,
        label: 'Library',
        active: pathname === '/library',
        href: '/library'
      }
    ]

    setRoutes(calculatedRoutes)
  }, [pathname])

  return (
    <nav className="hidden md:flex items-center">
      {routes.map((item) => (
        <Link key={item.href} href={item.href} className="mr-8">
          <div className={`flex items-center ${item.active && 'text-skyBlue'}`}>
            {item.icon}
            <span className="ml-px">{item.label}</span>
          </div>
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
