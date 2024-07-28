"use client";
import Link from "next/link"
import { signOut } from 'next-auth/react';

export default function Logout() {

    return (
        <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <div className="mb-6">
              <Link href="#" prefetch={false}>
                <CodeIcon className="h-8 w-auto" />
              </Link>
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">تم تسجيل الخروج</h1>
            <p className="mt-4 text-muted-foreground">
                تم تسجيل الخروج من حسابك بنجاح
            </p>
            <div className="mt-6">
              <button
             onClick={() => signOut({ callbackUrl: "/" } )}
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            
              >
                <span className="ml-2">العودة للصفحة الرئيسية</span>

              </button>
            </div>
          </div>
        </div>
      )
    }
    
    function CodeIcon(props : React.SVGProps<SVGSVGElement>) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    }
    
    
    function XIcon(props: React.SVGProps<SVGSVGElement>) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      )
    }