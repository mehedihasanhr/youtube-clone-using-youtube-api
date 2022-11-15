import * as React from "react";
import Scrollbars from "react-custom-scrollbars-2";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

const Layout = ({ children }: { children: React.ReactElement }) => {
  const { isOpen } = useSelector((state: any) => state.sidebar);

  return (
    <div className="h-screen bg-zinc-50">
      <Navbar />

      <div className="flex">
        {isOpen && (
          <div className="relative z-10">
            <Sidebar />
          </div>
        )}
        <Scrollbars style={{ height: "calc( 100vh - 56px) " }}>
          <main className="absolute w-full p-2 overflow-y-auto">
            {children}
          </main>
        </Scrollbars>
      </div>
    </div>
  );
};

export default Layout;
