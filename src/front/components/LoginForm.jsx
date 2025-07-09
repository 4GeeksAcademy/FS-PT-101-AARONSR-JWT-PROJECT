import { useState } from "react"
import userServices from "../services/userServices"
import { useNavigate } from "react-router-dom"

export const LoginForm = () => {

    const navigate = useNavigate('/private')
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
        
        userServices.login(formData).then(data=> {
            if (data.success) {
                
                navigate('/private')
            }
        })
    }

    return (
        <form onSubmit={handleSubmit}>

            <input type="email" placeholder="email" value={formData.email} name="email" onChange={handleChange} />
            <input type="password" placeholder="password" value={formData.password} name="password" onChange={handleChange} />
            <input type="submit" />

        </form>
    )

}