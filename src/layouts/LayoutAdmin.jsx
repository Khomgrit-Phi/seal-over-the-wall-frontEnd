import { Outlet } from 'react-router-dom'
const LayoutAdmin = () => {
  return (
    <div>

      <h1>Admin Side Bar</h1>
      <h1>Header</h1>
      <h1>Content</h1>
      <hr />
      <Outlet />
    </div>
  )
}
export default LayoutAdmin