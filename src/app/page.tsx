import { SparklesCore } from "~/components/ui/sparkles";
import Navbar from "./_components/navbar";
import { getServerAuthSession } from "~/server/auth";



export default async function HomePage() {
  const session = await getServerAuthSession();

  return (
<>

    <Navbar>
    {session ? (
      <>
      <a href="/dashboard">Dashboard</a>
      <a href="/api/auth/signout">Logout</a>
      </>
    ) : (
      <a href="/api/auth/signin">Login</a>
    )}
    </Navbar>
    <main className="w-full flex flex-col items-center justify-center overflow-hidden">
     
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center relative z-20">
        فاليو ستوديو
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="red"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </main>
    </>
  );
}
