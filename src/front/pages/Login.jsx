import { Link } from "react-router-dom"
import { LoginForm } from "../components/LoginForm"

export const Login = () => {

    return (
        <>
            <h3>Login</h3>
            <LoginForm/>
            <p className="small">Need an account? <Link to={'/register'}>Register</Link></p>

        </>
    )
}