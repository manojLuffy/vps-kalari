import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Logo from "../../pics/logo.png";

function Footer() {
	const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

	const footerNavigation = {
		social: [
			{
				name: "Facebook",
				href: "https://www.facebook.com/p/V-P-S-Kalari-ponnani-100064149576936/",
				icon: (props) => (
					<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
						<path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
						<path
							fill="#fff"
							d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
					</svg>
				),
			},
			{
				name: "Instagram",
				href: "https://www.instagram.com/vpskalari/",
				icon: (props) => (
					<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
						<radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse">
							<stop offset="0" stopColor="#fd5"></stop>
							<stop offset=".328" stopColor="#ff543f"></stop>
							<stop offset=".348" stopColor="#fc5245"></stop>
							<stop offset=".504" stopColor="#e64771"></stop>
							<stop offset=".643" stopColor="#d53e91"></stop>
							<stop offset=".761" stopColor="#cc39a4"></stop>
							<stop offset=".841" stopColor="#c837ab"></stop>
						</radialGradient>
						<path
							fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
							d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path>
						<radialGradient
							id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
							cx="11.786"
							cy="5.54"
							r="29.813"
							gradientTransform="matrix(1 0 0 .6663 0 1.849)"
							gradientUnits="userSpaceOnUse">
							<stop offset="0" stopColor="#4168c9"></stop>
							<stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop>
						</radialGradient>
						<path
							fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
							d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path>
						<path
							fill="#fff"
							d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path>
						<circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
						<path
							fill="#fff"
							d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
					</svg>
				),
			},
			{
				name: "YouTube",
				href: "https://www.youtube.com/@vpskalari",
				icon: (props) => (
					<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
						<path
							fill="#FF3D00"
							d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path>
						<path fill="#FFF" d="M20 31L20 17 32 24z"></path>
					</svg>
				),
			},
		],
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	return (
		<div className="relative text-white bg-black overflow-hidden" ref={ref}>
			{/* Background Effects */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
				<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
			</div>

			{/* Scroll target */}
			<div className="mt-2" id="footer"></div>

			{/* Animated Divider */}
			<motion.div
				className="mx-[6%] mt-16 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"
				initial={{ scaleX: 0 }}
				animate={inView ? { scaleX: 1 } : {}}
				transition={{ duration: 1, ease: "easeOut" }}
			/>

			<footer className="relative px-6 pb-20 mx-auto mt-10 overflow-hidden max-w-7xl sm:mt-12 sm:pb-24 lg:px-8">
				<motion.div
					className="container mx-auto"
					variants={containerVariants}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}>

					{/* Logo Section */}
					<motion.div
						className="flex justify-center mb-12"
						variants={itemVariants}>
						<motion.img
							src={Logo}
							alt="VPS Kalari Logo"
							className="h-24 w-auto"
							whileHover={{ scale: 1.05, filter: "drop-shadow(0 0 20px rgba(234, 88, 12, 0.4))" }}
						/>
					</motion.div>

					{/* Info Grid */}
					<div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-3">
						{/* Contact */}
						<motion.div
							variants={itemVariants}
							className="p-6 rounded-2xl bg-gray-900/30 border border-gray-800/50 backdrop-blur-sm group hover:border-orange-500/30 transition-all duration-300">
							<motion.h4
								className="mb-4 text-lg font-bold text-red-500 flex items-center gap-2"
								whileHover={{ x: 5 }}>
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
								</svg>
								Contact Us
							</motion.h4>
							<div className="space-y-3 text-gray-300">
								<motion.p whileHover={{ x: 3 }} className="transition-all duration-200">
									<span className="font-semibold text-gray-400">Phone:</span>{" "}
									<a
										href="tel:+919895297783"
										className="hover:text-red-400 transition-colors duration-300">
										+91 98952 97783
									</a>
								</motion.p>
								<motion.p whileHover={{ x: 3 }} className="transition-all duration-200">
									<span className="font-semibold text-gray-400">Email:</span>{" "}
									<a
										href="mailto:vpskalarikerala@gmail.com"
										className="hover:text-red-400 transition-colors duration-300">
										vpskalarikerala@gmail.com
									</a>
								</motion.p>
							</div>
						</motion.div>

						{/* Head Office */}
						<motion.div
							variants={itemVariants}
							className="p-6 rounded-2xl bg-gray-900/30 border border-gray-800/50 backdrop-blur-sm group hover:border-orange-500/30 transition-all duration-300">
							<motion.h4
								className="mb-4 text-lg font-bold text-red-500 flex items-center gap-2"
								whileHover={{ x: 5 }}>
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
								Head Office
							</motion.h4>
							<p className="text-gray-300 leading-relaxed">
								VPS Kalari Madhom, Kadavanadu,
								<br />
								Ponnani, Kerala - 679586
							</p>
						</motion.div>

						{/* Branches */}
						<motion.div
							variants={itemVariants}
							className="p-6 rounded-2xl bg-gray-900/30 border border-gray-800/50 backdrop-blur-sm group hover:border-orange-500/30 transition-all duration-300 md:col-span-2 lg:col-span-1">
							<motion.h4
								className="mb-4 text-lg font-bold text-red-500 flex items-center gap-2"
								whileHover={{ x: 5 }}>
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
								</svg>
								Our Branches
							</motion.h4>
							<div className="space-y-2 text-gray-300 text-sm">
								<p className="break-words">
									<span className="font-semibold text-red-400/80 block sm:inline">Kerala:</span>{" "}
									<span className="text-gray-400">Mezhathoor, Koottanad | Kavupra | Vattamkullam | Panjal, Shornur | Cheruthiruthi</span>
								</p>
								<p className="break-words">
									<span className="font-semibold text-red-400/80 block sm:inline">Outside Kerala:</span>{" "}
									<span className="text-gray-400">Bengaluru | Gwalior | Nashik | Kolkata</span>
								</p>
							</div>
						</motion.div>
					</div>

					{/* Map and Social Section */}
					<motion.div
						className="flex flex-col items-center justify-between gap-8 lg:flex-row"
						variants={itemVariants}>
						{/* Map */}
						<motion.div
							className="w-full lg:w-[60%] rounded-2xl overflow-hidden border border-gray-800/50 shadow-2xl"
							whileHover={{ scale: 1.01 }}
							transition={{ duration: 0.3 }}>
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.671028185234!2d75.9366599!3d10.759817000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7bb6edfd8bf21%3A0xc8fad5525326af8e!2sVPS%20Kalari!5e0!3m2!1sen!2sin!4v1737279900347"
								width="100%"
								height="300"
								style={{ border: 0 }}
								allowFullScreen=""
								loading="lazy"
								title="VPS Kalari Location"
								referrerPolicy="no-referrer-when-downgrade"
								className="transition-all duration-500"
							/>
						</motion.div>

						{/* Social Links */}
						<motion.div
							className="flex flex-col items-center gap-6"
							variants={itemVariants}>
							<p className="text-gray-500 text-sm uppercase tracking-wider">Follow Us</p>
							<div className="flex justify-center space-x-6">
								{footerNavigation.social.map((item, index) => (
									<motion.a
										key={item.name}
										target="_blank"
										rel="noopener noreferrer"
										href={item.href}
										className="relative p-3 rounded-full bg-gray-900/50 border border-gray-800/50 hover:border-orange-500/50 transition-all duration-300 group"
										whileHover={{ scale: 1.1, y: -5 }}
										whileTap={{ scale: 0.95 }}
										initial={{ opacity: 0, y: 20 }}
										animate={inView ? { opacity: 1, y: 0 } : {}}
										transition={{ delay: 0.5 + index * 0.1 }}>
										<span className="sr-only">{item.name}</span>
										<item.icon aria-hidden="true" className="w-6 h-6" />
										{/* Glow effect */}
										<div className="absolute inset-0 rounded-full bg-orange-500/0 group-hover:bg-orange-500/15 blur-xl transition-all duration-300" />
									</motion.a>
								))}
							</div>
						</motion.div>
					</motion.div>

					{/* Bottom Section */}
					<motion.div
						className="mt-16 pt-8 border-t border-gray-800/50"
						variants={itemVariants}>
						<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
							<p className="text-gray-500 text-sm text-center md:text-left">
								&copy; {new Date().getFullYear()} VPS Kalari. All rights reserved.
							</p>
							<p className="text-gray-600 text-xs text-center">
								Preserving the ancient art of Kalaripayattu since 1999
							</p>
						</div>
					</motion.div>
				</motion.div>
			</footer>

			{/* Bottom Gradient */}
			<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
		</div>
	);
}

export default Footer;
