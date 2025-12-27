import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
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
	const [scrolled, setScrolled] = useState(false);
	const [hidden, setHidden] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0);
	const location = useLocation();

	// Handle scroll behavior
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			// Show/hide based on scroll direction
			if (currentScrollY > lastScrollY && currentScrollY > 100) {
				setHidden(true);
			} else {
				setHidden(false);
			}

			// Background opacity based on scroll
			setScrolled(currentScrollY > 50);
			setLastScrollY(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY]);

	// Close mobile menu on route change
	useEffect(() => {
		setMobileMenuOpen(false);
	}, [location]);

	const handleScrollToFooter = () => {
		const footer = document.getElementById("footer");
		if (footer) {
			const headerHeight = document.querySelector("header")?.offsetHeight || 0;
			const offset = footer.getBoundingClientRect().top + window.scrollY - headerHeight;

			window.scrollTo({
				top: offset,
				behavior: "smooth",
			});

			setMobileMenuOpen(false);
		}
	};

	return (
		<>
			<motion.header
				initial={{ y: -100 }}
				animate={{ y: hidden ? -100 : 0 }}
				transition={{ duration: 0.3, ease: "easeInOut" }}
				className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
					scrolled
						? "bg-black/90 backdrop-blur-xl shadow-lg shadow-black/20"
						: "bg-gradient-to-b from-black/80 to-transparent"
				}`}>
				{/* Animated fire border line */}
				<motion.div
					className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent"
					initial={{ scaleX: 0, opacity: 0 }}
					animate={{ scaleX: scrolled ? 1 : 0, opacity: scrolled ? 1 : 0 }}
					transition={{ duration: 0.5 }}
					style={{ width: "100%" }}
				/>

				<nav aria-label="Global" className="flex items-center justify-between p-4 mx-auto max-w-7xl lg:px-8">
					{/* Logo */}
					<motion.div
						className="flex lg:flex-initial"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}>
						<NavLink to="/" className="-m-1.5 p-1.5 relative group">
							<span className="sr-only">VPS Kalari</span>
							<motion.img
								alt="VPS Kalari Logo"
								src={Logo}
								className="w-auto h-16 transition-all duration-300 lg:h-20"
								whileHover={{ filter: "drop-shadow(0 0 12px rgba(234, 88, 12, 0.6)) drop-shadow(0 0 20px rgba(245, 158, 11, 0.3))" }}
							/>
							{/* Logo fire glow effect on hover */}
							<div className="absolute inset-0 transition-all duration-300 rounded-full bg-orange-500/0 group-hover:bg-orange-500/10 blur-xl" />
						</NavLink>
					</motion.div>

					{/* Hamburger Icon (Mobile) */}
					<div className="flex lg:hidden">
						<motion.button
							type="button"
							onClick={() => setMobileMenuOpen(true)}
							className="relative -m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-white"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}>
							<span className="sr-only">Open main menu</span>
							<motion.div
								animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
								transition={{ duration: 0.2 }}>
								<Bars3Icon className="w-7 h-7" aria-hidden="true" />
							</motion.div>
							{/* Button glow */}
							<div className="absolute inset-0 transition-colors duration-300 rounded-lg bg-red-600/0 hover:bg-red-600/20" />
						</motion.button>
					</div>

					{/* Navigation Links (Desktop) */}
					<div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-2">
						{navigation.map((item, index) => (
							<motion.div
								key={item.name}
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1, duration: 0.5 }}>
								<NavLink
									to={item.to}
									className={({ isActive }) =>
										`relative px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300 rounded-lg group ${
											isActive
												? "text-orange-400"
												: "text-gray-300 hover:text-white"
										}`
									}>
									{({ isActive }) => (
										<>
											<span className="relative z-10">{item.name}</span>
											{/* Hover background */}
											<div className="absolute inset-0 transition-colors duration-200 rounded-lg bg-white/0 group-hover:bg-orange-500/5" />
											{/* Active indicator - fire ember dot */}
											{isActive && (
												<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-t from-red-500 via-orange-400 to-amber-300 rounded-full shadow-[0_0_6px_rgba(234,88,12,0.6)]" />
											)}
											{/* Underline effect - fire gradient */}
											<motion.div
												className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-600 via-orange-500 to-amber-400 rounded-full"
												initial={{ width: 0 }}
												whileHover={{ width: "100%" }}
												transition={{ duration: 0.3 }}
											/>
										</>
									)}
								</NavLink>
							</motion.div>
						))}
					</div>

					{/* Contact Us Button (Desktop) */}
					<motion.div
						className="hidden lg:flex lg:items-center lg:justify-end"
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.5, duration: 0.5 }}>
						<motion.button
							onClick={handleScrollToFooter}
							className="relative flex items-center gap-2 px-4 py-2 overflow-hidden text-sm font-medium text-white border rounded-full border-gray-700/50 bg-white/5 backdrop-blur-sm group"
							whileHover={{ scale: 1.05, borderColor: "rgba(234, 88, 12, 0.5)" }}
							whileTap={{ scale: 0.95 }}>
							<PhoneIcon className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12 group-hover:text-orange-400" />
							<span>Contact</span>
							{/* Fire hover gradient */}
							<motion.div
								className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-amber-500/10 to-transparent"
								initial={{ x: "-100%" }}
								whileHover={{ x: 0 }}
								transition={{ duration: 0.3 }}
							/>
						</motion.button>
					</motion.div>
				</nav>
			</motion.header>

			{/* Mobile Menu (Dialog) */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
						{/* Backdrop */}
						<motion.div
							className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
						/>

						<Dialog.Panel
							as={motion.div}
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{ type: "spring", damping: 30, stiffness: 300 }}
							className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto border-l bg-black/95 backdrop-blur-xl sm:max-w-sm border-gray-800/50">
							{/* Header */}
							<div className="flex items-center justify-between">
								<NavLink to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
									<span className="sr-only">VPS Kalari</span>
									<img alt="VPS Kalari Logo" src={Logo} className="w-auto h-14" />
								</NavLink>
								<motion.button
									type="button"
									className="p-2.5 text-gray-400 rounded-lg hover:bg-white/10 transition-colors"
									onClick={() => setMobileMenuOpen(false)}
									whileHover={{ scale: 1.1, rotate: 90 }}
									whileTap={{ scale: 0.9 }}>
									<span className="sr-only">Close menu</span>
									<XMarkIcon className="w-6 h-6" aria-hidden="true" />
								</motion.button>
							</div>

							{/* Navigation Links */}
							<div className="flow-root mt-8">
								<div className="-my-6 divide-y divide-gray-800/50">
									<div className="py-6 space-y-1">
										{navigation.map((item, index) => (
											<motion.div
												key={item.name}
												initial={{ opacity: 0, x: 50 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: index * 0.1, duration: 0.3 }}>
												<NavLink
													to={item.to}
													className={({ isActive }) =>
														`flex items-center px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
															isActive
																? "text-orange-400 bg-orange-500/10 border-l-2 border-orange-500"
																: "text-gray-300 hover:text-white hover:bg-white/5"
														}`
													}
													onClick={() => setMobileMenuOpen(false)}>
													{({ isActive }) => (
														<>
															<motion.span
																className="flex-1"
																whileHover={{ x: 5 }}
																transition={{ duration: 0.2 }}>
																{item.name}
															</motion.span>
															{isActive && (
																<motion.div
																	initial={{ scale: 0 }}
																	animate={{ scale: 1 }}
																	className="w-2 h-2 bg-gradient-to-t from-red-500 to-amber-400 rounded-full shadow-[0_0_6px_rgba(234,88,12,0.6)]"
																/>
															)}
														</>
													)}
												</NavLink>
											</motion.div>
										))}
									</div>

									{/* Contact Button */}
									<motion.div
										className="py-6"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.5, duration: 0.3 }}>
										<motion.button
											onClick={handleScrollToFooter}
											className="flex items-center justify-center w-full gap-2 px-6 py-4 text-base font-semibold text-white bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 rounded-xl"
											whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(234, 88, 12, 0.4)" }}
											whileTap={{ scale: 0.98 }}>
											<PhoneIcon className="w-5 h-5" />
											Contact Us
										</motion.button>
									</motion.div>

									{/* Social Links Placeholder */}
									<motion.div
										className="py-6"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.6, duration: 0.3 }}>
										<p className="text-xs text-center text-gray-500">
											Authentic Kalaripayattu Training
										</p>
										<p className="mt-1 text-xs text-center text-gray-600">
											Since 1999 • Kerala, India
										</p>
									</motion.div>
								</div>
							</div>

							{/* Fire Decorative Elements */}
							<div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none bg-gradient-to-t from-orange-500/10 via-red-600/5 to-transparent" />
							<div className="absolute w-40 h-40 rounded-full pointer-events-none top-1/4 -right-20 bg-orange-500/15 blur-3xl" />
						</Dialog.Panel>
					</Dialog>
				)}
			</AnimatePresence>
		</>
	);
};

export default Header;
