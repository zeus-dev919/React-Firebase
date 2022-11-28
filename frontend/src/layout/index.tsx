import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from '@mui/material'

function Layout() {
	return (
		<>
			<Header />
			<Box marginBottom='50px'>
				<Outlet />
			</Box>
			<Footer />
		</>
	);
}
export default Layout;