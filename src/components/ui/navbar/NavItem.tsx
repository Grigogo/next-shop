'use client'

import { FC } from 'react'
import { IMenuItem } from './menu.iterface'
import Link from 'next/link'
import cn from 'clsx'
import { usePathname } from 'next/navigation'

interface INavItem {
  item: IMenuItem
}

const NavItem: FC<INavItem> = ({ item }) => {
  const pathname = usePathname()
  return <div>
    <Link
      href={item.link}
      className={cn(
        'text-base font-meduim transition duration-300 hover:text-violet-600',
        pathname === item.link ? 'text-violet-600' : 'text-gray-600'
      )}>
        {item.name}
      </Link>
  </div>
}

export default NavItem
