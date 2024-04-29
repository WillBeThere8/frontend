"use client";

import { cn } from "@/lib/utils";
// import DonutSmallIcon from '@mui/icons-material/DonutSmall';
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Home } from "lucide-react";
import { IoMdPeople } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const routes = [
    {
      icon: Home,
      href: "/overview",
      label: "Event Overview",
      pro: false,
    },
    {
      icon: IoMdPeople,
      href: "/guest",
      label: "Guest List",
      pro: true,
    },
  ];

  const onNavigate = (url: string, pro: boolean) => {
    // TODO: Check if pro

    return router.push(url);
  };

  return (
    <div className="space-y-4 flex flex-col h-full text-primary border border-t-transparent border-r-muted-foreground/10  w-full bg-[#292929]">
      <div className="p-3">
        <div className="space-y-2">
          {routes.map((route) => (
            <div
              onClick={() => onNavigate(route.href, route.pro)}
              className={cn(
                "text-primary/60 text-sm group p-3 w-full cursor-pointer hover:text-primary hover:bg-blue-800/5 rounded-lg transition font-medium",
                pathname == route.href && "bg-blue-800/5 text-primary"
              )}
              key={route.href}
            >
              <div className="flex flex-row gap-y-2 justify-start items-center flex-1 w-full gap-2">
                <route.icon className="h-5 w-5" />
                {route.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
