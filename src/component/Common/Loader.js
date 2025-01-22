import React from "react";
import { FadeLoader } from "react-spinners"; // Import a spinner

const Loader = ({ isVisible }) => {
	if (!isVisible) {
		return null;
	}

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
			<FadeLoader color={"#dc2626"} loading={true} size={50} /> {/* Customize the spinner here */}
		</div>
	);
};

export default Loader;
