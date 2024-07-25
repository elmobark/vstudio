"use client";
import {  IconBolt, IconBooks, IconGraph,  IconLanguage,  IconMessage2,  IconSeeding, IconSettings, IconShoppingBag, IconStethoscope, IconUserDollar } from "@tabler/icons-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import Logo from "~/components/ui/logo";
import { Sidebar, SidebarBody, SidebarLink } from "~/components/ui/sidebar";
import { cn } from "~/lib/utils";
import { ThemeToggle } from "./_components/theme-button";
import { Button } from "~/components/ui/button";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "~/components/ui/breadcrumb";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const links = [
    {
      label: "الرئيسية",
      href: "/dashboard",

      icon: (
        <IconGraph className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "المشاريع الناشئة",
      href: "/dashboard/projects",
      icon: (
        <IconSeeding className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "خدمات فاليو",
      href: "/dashboard/services",
      icon: (
        <IconBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "فحص المشاريع المتعثرة",
      href: "/dashboard/inspections",
      icon: (
        <IconStethoscope className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "المستثمرين",
      href: "/dashboard/investors",
      icon: (
        <IconUserDollar className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },

    {
      label: "الدراسات الجاهزة",
      href: "/dashboard/studies",
      icon: (
        <IconBooks className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },


  ];

  const bottomLinks = [
    // cart , user profile, settings, logout
    {
      label: "السلة",
      href: "/dashboard/cart",
      icon: (
        <IconShoppingBag className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      )
    },
    {
      label: "الإعدادات",
      href: "/dashboard/settings",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "انت",
      href: "/dashboard/profile",
      icon: (
        <Avatar className="h-5 w-5 rounded-full">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
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

          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} isSelect={true} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {bottomLinks.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
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
    <div className="flex flex-col flex-1">
      <Topbar>
        <Button variant="outline" size="icon">
          <IconMessage2 />
        </Button>
        &nbsp;
        <ThemeToggle />
        &nbsp;
        <Button variant="outline" size="icon">
          <IconLanguage />
        </Button>
        &nbsp;
        {/* subscribtion button , Breadcrumb */}
        <SubscriptionButton/>
        &nbsp;
        <DashboardBreadcrumb/>
      </Topbar> 
      <div className="p-2 md:p-10 ltr:rounded-tl-2xl rtl:rounded-tr-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        {children}
      </div>
    </div>
  );
};

const SubscriptionButton = () => {
  return (
    <h1>
      اشتراك
    </h1>
  );
};

const DashboardBreadcrumb = () => {
  // get the current url and split it to get the last part of the url
  const url = window.location.href;
  const urlArray = url.split("/");
  const lastUrl = urlArray[urlArray.length - 1];
  // get the name of the last part of the url and capitalize it
  return (
    <Breadcrumb>
      <BreadcrumbList>
      {urlArray.map((url, idx) => (
        <BreadcrumbItem key={idx}>
          <BreadcrumbLink href={`/${url}`}>{lastUrl}</BreadcrumbLink>
        </BreadcrumbItem>
      
      ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

const Topbar = (
  { children }: { children: React.ReactNode; className?: string },
) => {
  return (
    <div className="px-4 py-4 flex flex-row items-center justify-between bg-neutral-100 dark:bg-neutral-800 w-full">
      {children}

      <div className="flex justify-end z-20 w-full">
        <Logo
        />
      </div>

    </div>
  );
};