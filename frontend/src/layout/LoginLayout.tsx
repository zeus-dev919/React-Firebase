import { Outlet } from "react-router-dom";
import Header from "./Header";

function LoginLayout() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}
export default LoginLayout;