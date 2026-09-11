import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'

export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-1">
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}
