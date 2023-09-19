import React from 'react'
import HeaderLink from './HeaderLink'

const MenuOverlay = ({ links }) => {
  return (
    <ul className='flex flex-col py-4 items-center lg:hidden md:hidden navlinks'>{links.map((link, index) => 
        (<li key={index}><HeaderLink href={link.path} title={link.title}/></li>)
        )}
    </ul>
  )
}

export default MenuOverlay