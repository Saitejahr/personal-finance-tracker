import Header from '../components/Header'
import '../App.css'
import SignupSigninComponent from '../components/SignupSignin'
const Signup = () => {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <SignupSigninComponent />
      </div>
    </div>
  )
}
export default Signup
