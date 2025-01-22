import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Logo from "../../pics/logo.png";

const navigation = [
	{ name: "Home", to: "/" },
	{ name: "Courses", to: "/courses" },
	{ name: "ShyjuGurukkal", to: "/ShyjuGurukkal" },
	{ name: "Community", to: "/Community" },
	{ name: "Theatre", to: "/Theatre" },
];

const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	// In Header.js
	const handleScrollToFooter = () => {
		const footer = document.getElementById("footer");
		if (footer) {
			const headerHeight = document.querySelector("header").offsetHeight;
			const offset = footer.getBoundingClientRect().top + window.scrollY - headerHeight;

			const smoothScroll = () => {
				const currentScroll = window.scrollY;
				const distance = offset - currentScroll;

				if (Math.abs(distance) < 1) {
					// If we're close enough, just jump to the target
					window.scrollTo(0, offset);
					return;
				}

				const duration = 1000; // Adjust duration as needed (in milliseconds)
				const startTime = performance.now();

				const animateScroll = (currentTime) => {
					const elapsedTime = currentTime - startTime;
					const scrollProgress = Math.min(elapsedTime / duration, 1); // Ensure progress doesn't exceed 1

					// Use an easing function for smoother animation (e.g., easeInOutCubic)
					const ease = (t) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1);
					const newScrollY = currentScroll + distance * ease(scrollProgress);

					window.scrollTo(0, newScrollY);

					if (elapsedTime < duration) {
						requestAnimationFrame(animateScroll);
					}
				};

				requestAnimationFrame(animateScroll);
			};

			smoothScroll();
			setMobileMenuOpen(false);
		}
	};

	return (
		<header className="fixed top-0 left-0 z-50 w-full bg-black shadow-md">
			<nav aria-label="Global" className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8">
				{/* Logo (Takes up minimal space) */}
				<div className="flex lg:flex-initial">
					<a href="/" className="-m-1.5 p-1.5">
						<span className="sr-only">VPS Kalari</span>
						<img alt="VPS Kalari Logo" src={Logo} className="w-auto h-20" />
					</a>
				</div>

				{/* Hamburger Icon (Visible on Mobile) */}
				<div className="flex lg:hidden">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(true)}
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" // Changed text color to white
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="w-6 h-6" aria-hidden="true" />
					</button>
				</div>

				{/* Navigation Links (Takes up available space) */}
				<div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-12">
					{navigation.map((item) => (
						<NavLink
							key={item.name}
							to={item.to}
							className={({ isActive }) =>
								`text-md font-semibold leading-6 transition duration-300 ${isActive ? "text-red-600" : "text-white hover:text-red-600"}`
							}>
							{item.name}
						</NavLink>
					))}
				</div>

				{/* Contact Us Icon (Align to the right) */}
				<div className="hidden lg:flex lg:items-center lg:justify-end">
					<button onClick={handleScrollToFooter} className="p-2 text-white transition-colors duration-300 rounded-md hover:text-red-600">
						<PhoneIcon className="w-6 h-6" />
						<span className="sr-only">Contact Us</span>
					</button>
				</div>
			</nav>

			{/* Mobile Menu (Dialog) */}
			<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
				<div className="fixed inset-0 z-10" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a href="/" className="-m-1.5 p-1.5">
							<span className="sr-only">VPS Kalari</span>
							<img alt="VPS Kalari Logo" src={Logo} className="w-auto h-20" />
						</a>
						<button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="w-6 h-6" aria-hidden="true" />
						</button>
					</div>
					<div className="flow-root mt-6">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="py-6 mt-4 space-y-2">
								{navigation.map((item) => (
									<NavLink
										key={item.name}
										to={item.to}
										className={({ isActive }) =>
											`block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg ${
												isActive ? "text-red-600" : "text-gray-900 hover:bg-gray-50"
											}`
										}
										onClick={() => setMobileMenuOpen(false)}>
										{item.name}
									</NavLink>
								))}
							</div>
							{/* Contact Us Button (Mobile) */}
							<div className="py-6">
								<button onClick={handleScrollToFooter} className="text-base font-semibold leading-7 text-gray-900">
									Contact Us
								</button>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
};

export default Header;
