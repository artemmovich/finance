import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../assets/Logo.svg";
import Link from "./Link";
import { SelectedPage } from "../../shared/types";
import useMediaQuery from "../../hooks/UseMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ContactButton from "../../shared/ContactButton";

type Props = {
   isTopOfPage: boolean;
   selectedPage: SelectedPage;
   setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
   const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
   const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
   const navbarBackground = isTopOfPage ? "" : " bg-[rgba(89,117,255,20)] drop-shadow-xl"

   useEffect(() => {
      if (isMenuToggled) {
         document.body.classList.add("overflow-hidden");
      } else {
         document.body.classList.remove("overflow-hidden");
      }
   }, [isMenuToggled]);

   return (
      <nav className=" relative z-100 pt-8">
         <div className={`${navbarBackground} ${isTopOfPage ? "" : "top-0"} flex items-center justify-between fixed  left-0 w-full z-30`}>
            <div className="max-w-[1196px] mx-auto px-2.5 w-full flex items-center justify-between">
               <img className="py-2.5" src={Logo} alt="Logo" />
               {isAboveMediumScreens ? (
                  <div className="flex items-center justify-between basis-2/3 ">

                     <div className="flex items-center justify-between gap-9 text-sm text-gray-300">
                        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="About Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="How it Works" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Our Services" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="More" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                     </div>

                     <ContactButton setSelectedPage={setSelectedPage}>Contact Us</ContactButton>
                  </div>

               ) : (
                  !isMenuToggled && (
                     <button
                        onClick={() => setIsMenuToggled(true)}
                        aria-label="Open Menu"
                     >
                        <Bars3Icon className="w-7 h-7 text-white" />
                     </button>
                  )
               )}

            </div>
         </div>
         {/* MOBILE MENU MODAL */}
         {!isAboveMediumScreens && isMenuToggled && (
            <>
               <div
                  className=" fixed inset-0 bg-black/50 z-30"
                  onClick={() => setIsMenuToggled(false)}
               />
               <div className=" fixed right-0 bottom-0 z-40 h-full w-[300px] bg-[#1A1D5C]  drop-shadow-xl ">
                  <div className="flex justify-end py-12 pr-8">
                     <button
                        onClick={() => setIsMenuToggled(false)}
                        aria-label="Close Menu"
                     >
                        <XMarkIcon className="h-8 w-8 text-white" />
                     </button>
                  </div>
                  <ul className="ml-[33%] flex flex-col gap-10 text-2xl text-gray-300">
                     <li onClick={() => setIsMenuToggled(false)}>
                        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                     </li>
                     <li onClick={() => setIsMenuToggled(false)}>
                        <Link page="About Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                     </li>
                     <li onClick={() => setIsMenuToggled(false)}>
                        <Link page="How it Works" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                     </li>
                     <li onClick={() => setIsMenuToggled(false)}>
                        <Link page="Our Services" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                     </li>
                     <li onClick={() => setIsMenuToggled(false)}>
                        <Link page="More" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                     </li>
                  </ul>
               </div>
            </>
         )}
      </nav>
   );
};

export default Navbar;