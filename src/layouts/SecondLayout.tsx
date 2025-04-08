import { ReactNode } from "react";
interface SecondLayoutProps {
   children: ReactNode;
}

const SecondLayout = ({ children }: SecondLayoutProps) => {
   return (

      <div className="  z-1000 max-w-[1196px]  mx-auto px-2.5">{children}</div>

   );
};

export default SecondLayout;