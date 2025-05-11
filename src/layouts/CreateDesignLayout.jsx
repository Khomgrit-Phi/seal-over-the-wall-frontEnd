import { Outlet } from 'react-router-dom'
import { Toaster } from "@/components/ui/sonner"
import CreateDesignNav from '../components/ui/CreateDesignNav'

const Layout = () => {
  return (
    <div>
      <CreateDesignNav />
      <Outlet />
      <Toaster />
    </div>
  )
}
export default Layout