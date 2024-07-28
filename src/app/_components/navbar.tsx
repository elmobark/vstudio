"use client";
import Link from "next/link";
import { MenuIcon, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "~/components/ui/button";
import { useTheme } from "next-themes";
import { cn } from "~/lib/utils";
import Logo from "~/components/ui/logo";

export default  function Header(
  {children}: {children: React.ReactNode}
) {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };
  const pathname = usePathname();
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/#about",
    },
    {
      title: "Contributors",
      path: "/contributors",
    },
    {
      title: "Contact",
      path: "/#contact",
    },
    {
      title: "Review Us",
      path: "/#review",
    },{
      title: "What's New",
      path:"/version"
    }
  ];
  return (
    <>
      <header className="border-b sticky top-0 z-[99] bg-background/40 backdrop-blur-md">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
              <div className="flex gap-4">
                <ThemeTogglebutton />
                {/* if user is not logged in */}
                {children}

              </div>

              <div className="block md:hidden">
                <Button
                  onClick={handleMenuOpen}
                  variant="secondary"
                  className="p-2"
                >
                  <MenuIcon size={24} />
                </Button>
              </div>
            </div>
            <div className="hidden md:block sm:pl-10 md:pl-40">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li className=" space-x-6">
                    {links.map((link, index) => (
                      <Link
                        key={index}
                        className={`transition ${
                          pathname === link.path ? 'text-primary font-bold' : 'text-foreground hover:text-foreground/75'
                        }`}
                        href={link.path}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </li>
                </ul>
              </nav>
            </div>
            <div className="md:flex md:items-center md:gap-12">
              <Link className="block text-primary" href="/">
                <span className="sr-only">Home</span>
                <Logo />
              </Link>
            </div>
           
          </div>
        </div>
      </header>
      {menuOpen && (
        <div
          className="md:hidden sm:block fixed bg-background z-50 w-full h-fit flex flex-col items-center justify-start text-center gap-7 pt-5 pb-5 border-b-2 border-gray-500 top-[4rem]"
          style={{ boxShadow: "inset 0 -10px 10px -10px #7b7575b3" }}
        >
          {links.map((link, index) => (
            <NavLink item={link} key={index} handleMenuOpen={handleMenuOpen} />
          ))}
        </div>
      )}
    </>
  );
};
// handleMenuOpen is a function 
const NavLink = ({ item, handleMenuOpen }: { item: { title: string; path: string; }; handleMenuOpen: () => void }) => {
    const pathName = usePathname();
    const handleClick = () => {
        handleMenuOpen(); 
      };
  return (
    <Link
    onClick={handleClick}
    href={item.path}
    className={` min-w-[100px] p-2 hover:bg-secondary md:hover:bg-none rounded-md font-medium items-center  ${
      pathName === item.path && " text-white  bg-orange-500"
    }`}
  >
    {item.title}
  </Link>
  )
}
 const ThemeTogglebutton = ({ className = "" }) =>{
    const { theme, setTheme } = useTheme();
    return (
      <Button
        size="icon"
        className={cn("rounded-full", className)}
        variant="outline"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <Sun
          className="w-6 h-6 scale-100 transition-all dark:scale-0"
          color="#F9802D"
        />
        <Moon className="absolute w-6 h-6 scale-0 transition-all dark:scale-100" />
        <span className="sr-only">Toggle Theme</span>
      </Button>
    );
  }

