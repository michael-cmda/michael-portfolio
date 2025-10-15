export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-muted-foreground">
          <p className="text-sm">© {currentYear} Michael Jan Arieta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
