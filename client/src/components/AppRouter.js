import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { routes } from "../routes/routes";

const AppRouter = () => {
	return (
		<Routes>
			{routes.map((route) => (
				<Route
					key={route.path}
					path={route.path}
					element={route.element}
				/>
			))}
			<Route path="/*" element={<Navigate replace to="/movies"/>}/>
		</Routes>
	);
};

export default AppRouter;