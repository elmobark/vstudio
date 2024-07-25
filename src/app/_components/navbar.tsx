import { SignedIn, SignedOut, SignIn, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
import { FloatingNav } from "~/components/ui/floating-navbar";
import PortalButton from "./portal-button";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between flex-wrap">
            <div className="flex items-center flex-shrink-0  mr-6">
                <span className="font-semibold text-xl tracking-tight">Value Studio</span>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <FloatingNav
                navItems={[
                    {
                        name: "Home",
                        link: "/",

                    },
                    {
                        name: "About",
                        link: "/about",
                    },
                    {
                        name: "Contact",
                        link: "/contact",
                    },
                ]}
                />
                
            </div>
            {/* sign in */}
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
         <SignedIn>
            <UserButton/>
            <PortalButton/>
         </SignedIn>
         <SignedOut>
            <SignInButton/>
         </SignedOut>

            </div>
            </nav>
    );
}