
import Link from "next/link";
import { FloatingNav } from "~/components/ui/floating-navbar";

import { getServerAuthSession } from "~/server/auth";

export default async function Navbar() {
  const session = await getServerAuthSession();

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
            <p className="text-center text-2xl text-white">
                {session && <span>Logged in as {session.user?.name}</span>}
              </p>
            <Link
                href={session ? "/api/auth/signout" : "/api/auth/signin"}
                className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
              >
                {session ? "Sign out" : "Sign in"}
              </Link>

            </div>
            </nav>
    );
}