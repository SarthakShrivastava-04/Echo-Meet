import StreamClientProvider from "@/providers/StreamClientProvider";
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

  return (
    <main>
      <StreamClientProvider>
        {children}
      </StreamClientProvider>
    </main>
  );
};

export default rootLayout;
