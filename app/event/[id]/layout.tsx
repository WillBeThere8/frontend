
import Sidebar from "@/components/sidebar";
import Loader from "@/components/ui/loader";
import React, { Suspense } from "react";

const RootLayout = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className="h-auto bg-defaultBackground">
      {/* <Navbar /> */}
      <div className="">
        <div className="hidden md:flex h-full fixed w-60 z-50">
          <Sidebar />
        </div>
        <main className="overflow-y-auto md:pl-60 mt-20 relative">
          <Suspense fallback={<Loader />}>
            <div className="p-4">{children}</div>
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
