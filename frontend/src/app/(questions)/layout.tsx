import { ModeToggle } from "./navbar"

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className="container mx-auto">
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>
        <ModeToggle />
      </nav>

      <div className="flex justify-center">{children}</div>
    </section>
  )
}
