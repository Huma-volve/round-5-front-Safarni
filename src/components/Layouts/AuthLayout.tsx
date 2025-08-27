import AppNavBar from '../NavBar/AppNavBar'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className="layout">
      <AppNavBar />
      <main className="flex-1 flex flex-col justify-center container mb-20">
        <Outlet />
      </main>
    </div>
  )
}
