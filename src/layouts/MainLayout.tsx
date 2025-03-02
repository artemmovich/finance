import { ReactNode } from "react";
interface MainLayoutProps {
   children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
   return (
      <div className="overflow-hidden bg-[radial-gradient(circle_at_center,#5975FF_0%,#3029D9_100%)] min-h-screen">
         <div className="  z-1000 max-w-[1196px]  mx-auto px-2.5">{children}</div>
      </div>
   );
};

export default MainLayout;