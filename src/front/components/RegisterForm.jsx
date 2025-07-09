import { useState } from "react"
import userServices from "../services/userServices.js"
import { useNavigate } from "react-router-dom"

export const RegisterForm = () => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        userServices.register(formData).then(data=> data.success && navigate('/login'))
    }

    return (
        <form onSubmit={handleSubmit}>

            <input type="email" placeholder="email" value={FormData.email} name="email" onChange={handleChange} />
            <input type="password" placeholder="password" value={FormData.password} name="password" onChange={handleChange} />
            <input type="submit" />

        </form>
    )

}