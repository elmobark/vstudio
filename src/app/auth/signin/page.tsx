'use client'
import { Label } from "~/components/ui/label"
import { Input } from "~/components/ui/input"
import { signIn } from 'next-auth/react';
import Link from "next/link"
import { Button } from "~/components/ui/button"
import { IconBrandGithub, IconBrandGoogle, IconBrandLinkedin } from "@tabler/icons-react"
import ShootingStars from "~/components/ui/shooting-stars";
import { StarsBackground } from "~/components/ui/stars-background";


export default function Page() {
	

	return (
		<>
		
		<div className="grid w-full max-w-[1300px] grid-cols-1 lg:grid-cols-2">
		  <div className="flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
			<div className="mx-auto w-full max-w-md space-y-6">
			  <div className="space-y-2 text-center">
				<h1 className="text-3xl font-bold">مرحباً بك!</h1>
				<p className="text-muted-foreground">تسجيل الدخول لحسابك للمتابعة</p>
			  </div>
			  <div className="space-y-4">
				<div className="space-y-2">
				  <Label htmlFor="email">البريد الإلكتروني</Label>
				  <Input id="email" type="email" placeholder="m@example.com" required />
				</div>
				<div className="space-y-2">
				  <div className="flex items-center justify-between">
					<Label htmlFor="password">كلمة المرور</Label>
					<Link
					  href="#"
					  className="text-sm font-medium underline underline-offset-4 hover:text-primary"
					  prefetch={false}
					>
					  نسيت كلمة المرور؟
					</Link>
				  </div>
				  <Input id="password" type="password" required />
				</div>
				<Button type="submit" className="w-full">
				  تسجيل الدخول
				</Button>
				{/* google and github and linkedin buttons "small in in row" */}
				<div className="space-x-2 flex items-center justify-center">
				  <Button
				variant="secondary"
				onClick={() => signIn('google', { callbackUrl: '/' })}
				>
					<IconBrandGoogle />
				</Button>
				&nbsp;
				  <Button
				variant="secondary">
					<IconBrandGithub />
				</Button>
				{/* &nbsp; */}
				  <Button
				variant="secondary">
				<IconBrandLinkedin />
				</Button>

				</div>
			  </div>
			</div>
		  </div>
		  <div className="hidden lg:block">
		  <div className="h-screen rounded-md bg-background flex flex-col items-center justify-center relative w-">
      <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 dark:via-white dark:to-white via-black to-black flex items-center gap-2 md:gap-8">
        <span>حلق نحو النجوم معنا</span>
        {/* <span className="text-white text-lg font-thin">x</span>
        <span>Star Background</span> */}
      </h2>
     
    </div>
		  </div>
		</div>
		<div className="top-0 left-0 w-full h-full">
		{/* <ShootingStars /> */}
		{/* <StarsBackground /> */}
		</div>
		</>
	  );
}
