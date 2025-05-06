import { Link } from "react-router"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
const BreadcrumbTop = () => {
  return (
    <div>
      <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink className="text-lg hover:text-primary-blue-500">
            <Link to="/">Custommike</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-lg" />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-lg">Shop</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
    </div>
  )
}
export default BreadcrumbTop