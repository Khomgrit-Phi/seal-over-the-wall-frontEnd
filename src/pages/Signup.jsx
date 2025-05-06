import SignupForm from "../components/signUpPage/SignupForm"
import BreadcrumbTop from "../components/mainMenu/BreadcrumbTop"

const Signup = () => {
  return (
    <div>
      <div className="mt-25 mb-4 pl-10">
    <BreadcrumbTop />
    </div>
      <SignupForm />
    </div>
  )
}
export default Signup