import { Outlet } from "react-router-dom"
import Topbar from "../components/Topbar"

const ContentLayout = () => {
	return (
		<>
			<Topbar />
			<Outlet />
		</>
	)
}

export default ContentLayout