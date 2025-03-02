import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from './types'

type Props = {
   children: React.ReactNode
   setSelectedPage: (value: SelectedPage) => void;
}

const ContactButton = ({ children, setSelectedPage }: Props) => {
   return (
      <AnchorLink className='items-start text-center font-semibold px-6 py-2 text-white border-b-white border-2 rounded cursor-pointer hover:bg-blue-700 active:bg-blue-800 '
         onClick={() => setSelectedPage(SelectedPage.More)}
         href={`#${SelectedPage.More}`}>
         {children}</AnchorLink>
   )
}

export default ContactButton