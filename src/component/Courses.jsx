import React, { useEffect, useState } from "react";
import { courseData } from "./CourseData/courseData";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Fire ember colors
const emberColors = [
	"rgba(251, 191, 36, 0.9)",
	"rgba(245, 158, 11, 0.9)",
	"rgba(234, 88, 12, 0.9)",
	"rgba(220, 38, 38, 0.8)",
	"rgba(249, 115, 22, 0.9)",
];

// Floating Ember Particles Component
const FloatingParticles = () => {
	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			{[...Array(20)].map((_, i) => {
				const size = Math.random() * 4 + 2;
				const colorIndex = Math.floor(Math.random() * emberColors.length);
				return (
					<motion.div
						key={i}
						className="absolute rounded-full"
						style={{
							width: size,
							height: size,
							left: `${Math.random() * 100}%`,
							top: `${100 + Math.random() * 20}%`,
							background: `radial-gradient(circle, ${emberColors[colorIndex]} 0%, rgba(220, 38, 38, 0.3) 100%)`,
							boxShadow: `0 0 ${size * 2}px ${emberColors[colorIndex]}`,
						}}
						animate={{
							y: [0, -120 - Math.random() * 80],
							x: [0, Math.random() * 50 - 25, Math.random() * 30 - 15],
							opacity: [0, 1, 1, 0.5, 0],
							scale: [0.5, 1, 0.8, 0.5, 0],
						}}
						transition={{
							duration: Math.random() * 6 + 6,
							repeat: Infinity,
							delay: Math.random() * 8,
							ease: "easeOut",
						}}
					/>
				);
			})}
		</div>
	);
};

// Course Card Component
const CourseCard = ({ course, index }) => {
	const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
	const [expanded, setExpanded] = useState(false);

	// Icons for different course types
	const getIcon = (title) => {
		if (title.toLowerCase().includes("online")) return "💻";
		if (title.toLowerCase().includes("residential")) return "🏠";
		if (title.toLowerCase().includes("guru")) return "🎓";
		if (title.toLowerCase().includes("shatrunjaya")) return "⚔️";
		if (title.toLowerCase().includes("workshop")) return "🎯";
		if (title.toLowerCase().includes("dancer") || title.toLowerCase().includes("anutthama")) return "💃";
		if (title.toLowerCase().includes("travel") || title.toLowerCase().includes("viswamohana")) return "✈️";
		if (title.toLowerCase().includes("puranjaya")) return "🧘";
		return "🥋";
	};

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 50 }}
			animate={inView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.6, delay: index * 0.1 }}
			className="relative h-full">
			<motion.div
				className="relative h-full overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/30 backdrop-blur-sm group"
				whileHover={{ y: -8, scale: 1.02 }}
				transition={{ duration: 0.3 }}>
				{/* Glow Effect */}
				<motion.div
					className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
					style={{
						background: "radial-gradient(circle at 50% 0%, rgba(220, 38, 38, 0.15) 0%, transparent 50%)",
					}}
				/>

				{/* Top Accent Line */}
				<motion.div
					className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-400"
					initial={{ scaleX: 0 }}
					animate={inView ? { scaleX: 1 } : {}}
					transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
				/>

				<div className="p-6 sm:p-8">
					{/* Icon & Title */}
					<div className="flex items-start gap-4 mb-4">
						<motion.div
							className="text-4xl flex-shrink-0"
							whileHover={{ scale: 1.2, rotate: 10 }}
							transition={{ type: "spring", stiffness: 300 }}>
							{getIcon(course.title)}
						</motion.div>
						<div>
							<h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
								{course.title}
							</h2>
							{course.duration && (
								<motion.p
									className="mt-1 text-sm text-red-400/80 flex items-center gap-2"
									initial={{ opacity: 0 }}
									animate={inView ? { opacity: 1 } : {}}
									transition={{ delay: index * 0.1 + 0.4 }}>
									<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									{course.duration}
								</motion.p>
							)}
						</div>
					</div>

					{/* Description */}
					<div className={`text-gray-300 text-sm leading-relaxed ${expanded ? "" : "line-clamp-4"}`}>
						{course.description.split("\n").map((paragraph, idx) => (
							<p key={idx} className="mb-2">
								{paragraph.startsWith("Course Highlights:") ||
								paragraph.startsWith("Course Overview:") ||
								paragraph.startsWith("Duration:") ? (
									<span
										dangerouslySetInnerHTML={{
											__html: paragraph.replace(
												/(Course Highlights:|Course Overview:|Duration:)/g,
												"<strong class='text-red-400'>$&</strong>"
											),
										}}
									/>
								) : (
									<span dangerouslySetInnerHTML={{ __html: paragraph }} />
								)}
							</p>
						))}
					</div>

					{/* Expand/Collapse Button */}
					{course.description.length > 200 && (
						<motion.button
							type="button"
							onClick={(e) => {
								e.stopPropagation();
								setExpanded(!expanded);
							}}
							className="mt-4 text-sm text-red-400 hover:text-red-300 transition-colors flex items-center gap-1 cursor-pointer z-10 relative"
							whileHover={{ x: 5 }}
							whileTap={{ scale: 0.95 }}>
							{expanded ? "Show Less" : "Read More"}
							<motion.svg
								className="w-4 h-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								animate={{ rotate: expanded ? 180 : 0 }}
								transition={{ duration: 0.3 }}>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
							</motion.svg>
						</motion.button>
					)}

					{/* Link Button */}
					{course.link && (
						<motion.a
							href={course.link}
							className="inline-flex items-center gap-2 mt-6 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-red-700 to-red-600 rounded-full hover:from-red-600 hover:to-red-500 transition-all duration-300"
							whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(220, 38, 38, 0.3)" }}
							whileTap={{ scale: 0.95 }}>
							Learn More
							<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</motion.a>
					)}
				</div>

				{/* Corner Decoration */}
				<div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-red-600/20 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
				<div className="absolute bottom-4 left-4 w-12 h-12 border-b border-l border-red-600/20 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
			</motion.div>
		</motion.div>
	);
};

const Courses = () => {
	const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="bg-black min-h-screen overflow-x-hidden">
			<Helmet>
				<title>Courses | VPS Kalari</title>
				<meta property="og:title" content="VPS Kalari | Authentic Kalaripayattu School in Kerala" />
				<meta
					property="og:description"
					content="Learn Kalaripayattu, the ancient martial art, at VPS Kalari. Join our courses taught by Shyju Gurukkal, a 4th-generation expert."
				/>
				<meta property="og:image" content="https://www.vpskalari.com/pics/logo.png" />
				<meta property="og:url" content="https://www.vpskalari.com/Courses" />
			</Helmet>
			<Header />

			<main className="relative">
				{/* Hero Section */}
				<section className="relative pt-32 pb-20 overflow-hidden">
					{/* Background Effects */}
					<div className="absolute inset-0">
						<div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
						<motion.div
							className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl"
							animate={{
								scale: [1, 1.2, 1],
								opacity: [0.3, 0.5, 0.3],
							}}
							transition={{ duration: 8, repeat: Infinity }}
						/>
						<motion.div
							className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl"
							animate={{
								scale: [1.2, 1, 1.2],
								opacity: [0.5, 0.3, 0.5],
							}}
							transition={{ duration: 8, repeat: Infinity, delay: 2 }}
						/>
						{/* Pattern */}
						<div
							className="absolute inset-0 opacity-5"
							style={{
								backgroundImage: "radial-gradient(circle at 2px 2px, rgba(220,38,38,0.3) 1px, transparent 0)",
								backgroundSize: "40px 40px",
							}}
						/>
					</div>

					<FloatingParticles />

					<div className="container relative px-4 mx-auto max-w-7xl" ref={ref}>
						{/* Page Title */}
						<motion.div
							className="text-center mb-16"
							initial={{ opacity: 0, y: 30 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.8 }}>
							<motion.span
								className="inline-block px-4 py-1 mb-6 text-sm tracking-wider text-red-400 uppercase border border-red-600/30 rounded-full"
								initial={{ opacity: 0, scale: 0.9 }}
								animate={inView ? { opacity: 1, scale: 1 } : {}}
								transition={{ delay: 0.2 }}>
								Training Programs
							</motion.span>

							<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
								Our{" "}
								<span className="gradient-text">Kalari Courses</span>
							</h1>

							{/* Animated Divider */}
							<motion.div
								className="flex items-center justify-center gap-4 mb-8"
								initial={{ opacity: 0, scaleX: 0 }}
								animate={inView ? { opacity: 1, scaleX: 1 } : {}}
								transition={{ delay: 0.4, duration: 0.8 }}>
								<div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-red-600" />
								<motion.div
									className="w-2 h-2 rotate-45 bg-red-600"
									animate={{ rotate: [45, 225, 45] }}
									transition={{ duration: 4, repeat: Infinity }}
								/>
								<div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-red-600" />
							</motion.div>

							<motion.p
								className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed"
								initial={{ opacity: 0, y: 20 }}
								animate={inView ? { opacity: 1, y: 0 } : {}}
								transition={{ delay: 0.5, duration: 0.8 }}>
								Experience the joy of learning Kalaripayattu with a curriculum designed exclusively for you at VPS Kalari!
								We believe every learner is unique, and we strive to create a personalized and enriching experience
								to help you achieve your goals.
							</motion.p>
						</motion.div>

						{/* Stats Bar */}
						<motion.div
							className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-16"
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.6, duration: 0.8 }}>
							{[
								{ value: courseData.length + "+", label: "Courses" },
								{ value: "All", label: "Levels" },
								{ value: "4th", label: "Generation" },
							].map((stat, idx) => (
								<motion.div
									key={stat.label}
									className="text-center p-4 rounded-xl bg-gray-900/30 border border-gray-800/50"
									whileHover={{ scale: 1.05, borderColor: "rgba(220, 38, 38, 0.3)" }}>
									<p className="text-2xl sm:text-3xl font-bold text-red-500">{stat.value}</p>
									<p className="text-xs sm:text-sm text-gray-500">{stat.label}</p>
								</motion.div>
							))}
						</motion.div>

						{/* Course Grid */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
							{courseData.map((course, index) => (
								<CourseCard key={course.id} course={course} index={index} />
							))}
						</div>

						{/* CTA Section */}
						<motion.div
							className="mt-20 text-center"
							initial={{ opacity: 0, y: 30 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.8, duration: 0.8 }}>
							<div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800/50 backdrop-blur-sm">
								<h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
									Not sure which course is right for you?
								</h3>
								<p className="text-gray-400 mb-8 max-w-2xl mx-auto">
									Contact us and our experts will help you find the perfect program based on your goals,
									experience level, and schedule.
								</p>
								<motion.button
									onClick={() => {
										const footer = document.getElementById("footer");
										if (footer) {
											footer.scrollIntoView({ behavior: "smooth" });
										}
									}}
									className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-red-700 to-red-600 rounded-full"
									whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(220, 38, 38, 0.4)" }}
									whileTap={{ scale: 0.95 }}>
									Get in Touch
									<motion.svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										animate={{ x: [0, 5, 0] }}
										transition={{ duration: 1.5, repeat: Infinity }}>
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
									</motion.svg>
								</motion.button>
							</div>
						</motion.div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default Courses;
