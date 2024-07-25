"use client";
import { IconArrowLeft, IconBrandTabler, IconGraph, IconSettings, IconUserBolt } from "@tabler/icons-react";
import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "~/components/ui/sidebar";
import { cn } from "~/lib/utils";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    const links = [
        {
          label: "Dashboard",
          href: "#",
          icon: (
            <IconGraph className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
          ),
        },
        {
          label: "Services",
          href: "#",
          icon: (
            <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
          ),
        },
        {
          label: "Settings",
          href: "#",
          icon: (
            <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
          ),
        },
        {
          label: "Logout",
          href: "#",
          icon: (
            <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
          ),
        },
      ];
return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
    <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
        <div className="mt-8 flex flex-col gap-2">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
            </div>
        </div>
        </SidebarBody>
    </Sidebar>
    <Dashboard>

            {children}
    </Dashboard>
    </div>
    
);
}

const Dashboard = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="flex flex-1">
        <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
            {children}
         
        </div>
      </div>
    );
  };