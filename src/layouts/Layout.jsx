import { Outlet } from 'react-router-dom'
import MainNav from '../components/mainMenu/MainNav' 
import Footer from '../components/mainMenu/Footer'
import { Toaster } from "@/components/ui/sonner"

const Layout = () => {
  return (
    <div>
      <MainNav />
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  )
}
export default Layout