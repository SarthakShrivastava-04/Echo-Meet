import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Metadata } from "next";

import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "EchoMeet",
  description: "A video conferencing app",
  icons: {
    icon: "/icons/icon-logo.svg",
  }
};

const rootLayout = ({ children }: { children: ReactNode }) => {
  return(
    <main className="relative">
        <Navbar/>

      <div className="flex">
        <Sidebar/>
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
            <div className="w-full">
              {children}
            </div>
        </section>
      </div>
    </main>
  );
};

export default rootLayout;
