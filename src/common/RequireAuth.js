import { useLocation, Navigate } from "react-router-dom"

const RequireAuth = () => {
	
	let location = useLocation();

	return (
		<Navigate to="/login" state={{ from: location }} />
	)
}

export default RequireAuth
