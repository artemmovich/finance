import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "../../assets/Logo.svg"
import Link from "./Link"
import { SelectedPage } from "../../shared/types"
import useMediaQuery from "../../hooks/UseMediaQuery"
import AnchorLink from "react-anchor-link-smooth-scroll"


type Props = {
   selectedPage: SelectedPage,
   setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
   const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
   const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
   return <nav className="pt-11" >
      <div className="flex items-center justify-between" >
         <img src={Logo} alt="Logo" />
         {isAboveMediumScreens ? (
            <div className="flex items-center justify-between basis-2/3">
               <div className="flex items-center justify-between gap-9 text-sm text-gray-300">
                  <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="About Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="How it Works" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="Our Services" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="More" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
               </div>

               <AnchorLink onClick={() => setSelectedPage(SelectedPage.More)} href={`#${SelectedPage.More}`} className="font-semibold w-28 h-10 text-white border-b-white border-2 rounded cursor-pointer hover:bg-blue-700 active:bg-blue-800">Contact Us</AnchorLink>

            </div>) : (
            <button className="rounded-full" onClick={() => setIsMenuToggled(!isMenuToggled)}>
               <Bars3Icon className="w-7 h-7 text-white" />
            </button>
         )}

      </div>
   </nav>
}

export default Navbar