import { BrowserRouter, Route, Routes } from "react-router-dom"
import ContentLayout from "../layouts/ContentLayout"
import Home from "../templates/Home"
import Login from "../templates/Login"

const DefaultRoutes = () => {


	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ContentLayout />}>
					<Route path="login" element={<Login />} />
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default DefaultRoutes
