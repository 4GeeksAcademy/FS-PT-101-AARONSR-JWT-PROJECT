import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
	const navigate = useNavigate()

	const handleClick = () => {
		localStorage.getItem('token') && navigate('/private')
	}

	return (
		<div className="text-center mt-5">
			<h2>Primero tienes que <Link to={'/register'}>registrate</Link>,
				despues <Link to={'/login'}>logearte</Link> y despues podras acceder al
				<span onClick={handleClick} className="nav nav-link">area privada</span></h2>
		</div>
	);
}; 