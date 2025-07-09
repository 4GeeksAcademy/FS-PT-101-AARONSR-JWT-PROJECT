import { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"
import userServices from "../services/userServices"
import { useNavigate } from "react-router-dom"

export const Privado = () => {
    const navigate = useNavigate()
    const { store, dispatch } = useGlobalReducer()


    useEffect(() => {
        if (!localStorage.getItem('token')) {
            return navigate('/login')
        }

        userServices.getUserInfo().then(data => {
            if (!data.success) {
                return navigate('/login')
            }
            dispatch({ type: 'getUserInfo', payload: data.user })
        })
    }, [])

    const handleLogout = () => {
        dispatch({ type: 'logout' })
        navigate('/')
    }

    return (
        <>
            <h3>Esto es privado!!!!</h3>
            {store.user?.email &&
                <h4>Solo para los ojos de {store.user.email}</h4>
            }
            <button onClick={handleLogout}>logout</button>
        </>
    )
}