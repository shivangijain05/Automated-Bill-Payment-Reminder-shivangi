import { Bell, CreditCard, HelpCircle, Home, MessageSquare, Settings, User, Zap, Smartphone, Key, Car, Briefcase, ShieldCheck, Tv } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function BillReminder() {
  const billTypes = [
    { name: "Credit Cards", icon: CreditCard },
    { name: "Memberships", icon: Tv },
    { name: "Home Utilities", icon: Zap },
    { name: "Mobile Recharge", icon: Smartphone },
    { name: "Rentals", icon: Key },
    { name: "EMI", icon: Car },
    { name: "Insurance", icon: ShieldCheck },
    { name: "Subscriptions", icon: Bell },
    { name: "Internet", icon: Briefcase },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <CreditCard className="h-6 w-6" />
          <span className="sr-only">Bill Reminders</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            <User className="h-4 w-4 inline-block mr-1" />
            Profile
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            <MessageSquare className="h-4 w-4 inline-block mr-1" />
            Inbox
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            <Settings className="h-4 w-4 inline-block mr-1" />
            Settings
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            <HelpCircle className="h-4 w-4 inline-block mr-1" />
            Help
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            <Bell className="h-4 w-4 inline-block mr-1" />
            My Expenditure Analysis
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Bill Payment Reminders
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Keep track of your bills and never miss a payment.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl mb-8">
              Upcoming Bills
            </h2>
            <div className="w-full overflow-x-auto">
              <div className="flex space-x-8 pb-4">
                {billTypes.map((category) => (
                  <div key={category.name} className="flex flex-col items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-16 h-16 rounded-full mb-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <category.icon className="h-8 w-8" />
                      <span className="sr-only">{category.name}</span>
                    </Button>
                    <span className="text-sm font-medium text-center">{category.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2023 Bill Reminders Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}