import { RegisterForm } from "../components/RegisterForm"
import { Link } from "react-router-dom"
export const Register = () => {

    return (
        <>
            <h3>Register</h3>
            <RegisterForm/>
            <p className="small">Already have an account? <Link to={'/login'}>Login</Link></p>
        </>
    )
}