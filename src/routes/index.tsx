import { Routes, Route, Navigate } from "react-router-dom";
import CreateInvestor from "../screen/admin/create-investor";
import UploadDocument from "../screen/admin/upload-document";
import CustomerDashboard from "../screen/customer/dashboard";
import Login from "../screen/login";

const AppRoutes = () => {
	return (
		<Routes>
			<Route index element={<Navigate to='/login' />} />
			<Route path='/login' element={<Login />} />
			<Route path='/customer/dashboard' element={<CustomerDashboard />} />
			<Route path='/admin/create-investor' element={<CreateInvestor />} />
			<Route path='/admin/upload-document' element={<UploadDocument />} />
		</Routes>
	);
};

export default AppRoutes;
