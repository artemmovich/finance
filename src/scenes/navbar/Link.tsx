import { SelectedPage } from '../../shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
   page: string,
   selectedPage: SelectedPage,
   setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
   const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
   
   return (
      <AnchorLink
         className={`relative transition duration-500 hover:text-white ${
            selectedPage === lowerCasePage ? " after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[2px] after:bg-white" : ""
         }`}
         href={`#${lowerCasePage}`}
         onClick={() => setSelectedPage(lowerCasePage)}
      >
         {page}
      </AnchorLink>
   )
}

export default Link;
