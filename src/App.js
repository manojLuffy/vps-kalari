import Main from "./component/Main";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Courses from "./component/Courses";
import ShyjuGurukkal from "./component/ShyjuGurukkal";
import Community from "./component/Community";
import Theatre from "./component/Theatre";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/courses" element={<Courses />} />
			<Route path="/ShyjuGurukkal" element={<ShyjuGurukkal />} />
			<Route path="/Community" element={<Community />} />
			<Route path="/Theatre" element={<Theatre />} />
		</Routes>
	);
}

export default App;
