import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from './types'

type Props = {
   children: React.ReactNode
   setSelectedPage: (value: SelectedPage) => void;
}

const DarkBlueButton = ({ children, setSelectedPage }: Props) => {
   return (
      <AnchorLink className='items-start text-center bg-[#111849] font-semibold px-10 py-2 text-white  rounded cursor-pointer hover:bg-blue-700 active:bg-blue-800 '
         onClick={() => setSelectedPage(SelectedPage.More)}
         href={`#${SelectedPage.More}`}>
         {children}</AnchorLink>
   )
}

export default DarkBlueButton