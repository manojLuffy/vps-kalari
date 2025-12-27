import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Main from "./component/Main";
import Courses from "./component/Courses";
import ShyjuGurukkal from "./component/ShyjuGurukkal";
import Community from "./component/Community";
import Theatre from "./component/Theatre";
import Loader from "./component/Common/Loader";
import WhatsAppButton from "./component/Common/WhatsAppButton";

function App() {
	const [isLoading, setIsLoading] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		// Show loader when location changes
		setIsLoading(true);

		// Hide loader after 1.5 seconds
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 750);

		// Clear timeout if location changes again before timeout completes
		return () => clearTimeout(timer);
	}, [location]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<div>
			<Loader isVisible={isLoading} />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/courses" element={<Courses />} />
				<Route path="/shyjuGurukkal" element={<ShyjuGurukkal />} />
				<Route path="/community" element={<Community />} />
				<Route path="/theatre" element={<Theatre />} />
			</Routes>
			<WhatsAppButton />
		</div>
	);
}

export default App;
