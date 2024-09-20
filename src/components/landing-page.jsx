'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function LandingPageComponent() {
  return (
    (<div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">Your Company</span>
          <svg
            className=" h-6 w-6"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 5.74C7.91 1.65 1 4.69 1 10.52c0 4.4 3.59 8 8 8 2.23 0 4.27-.91 5.74-2.39" />
            <path d="M22.53 14.11A6.995 6.995 0 0 0 15 8.89a7.07 7.07 0 0 0-3.5.93" />
          </svg>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href={"/login"}>
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link href = {"/signup"}>
            <Button>Sign Up</Button>
          </Link>
          
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to AppName
                </h1>
                <p
                  className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Revolutionizing the way you interact with technology. Simplify your life, amplify your productivity.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 AppName Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>)
  );
}