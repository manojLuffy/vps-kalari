import React, { useCallback, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import { motion, AnimatePresence, useAnimation, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Image1 from "../pics/image1.webp";
import Image2 from "../pics/image2.webp";
import Image3 from "../pics/image3.webp";
import image4 from "../pics/image4.webp";
import image6 from "../pics/image6.webp";
import image7 from "../pics/image7.webp";
import residence from "../pics/residence.webp";
import fire from "../pics/fire.webp";
import Moksha from "../pics/Moksha.webp";
import Moksha_2 from "../pics/Moksha_2.webp";
import Moksha_3 from "../pics/Moksha_3.webp";
import Madhom_1 from "../pics/Madhom/Madhom_1.webp";
import Madhom_2 from "../pics/Madhom/Madhom_2.webp";
import Madhom_3 from "../pics/Madhom/Madhom_3.webp";
import Madhom_4 from "../pics/Madhom/Madhom_4.webp";
import Madhom_5 from "../pics/Madhom/Madhom_5.webp";
import Madhom_6 from "../pics/Madhom/Madhom_6.webp";
import Carousel from "./Carousel";
import useDevice from "./hooks/useDevice";

// Stats Data
const stats = [
	{ label: "Trained till now", value: "1000+", suffix: "students", icon: "👥" },
	{ label: "Years of Excellence", value: "25", suffix: "years", icon: "🏆" },
	{ label: "Course offerings", value: "10+", suffix: "courses", icon: "📚" },
];

// Course Offerings Data
const values = [
	{
		name: "One Month",
		description:
			"This is an introductory course designed to provide a basic understanding of Kalaripayattu techniques. It focuses on foundational movements, flexibility, and core strength, allowing beginners to grasp the essentials of this ancient martial art.",
		icon: "🌱",
	},
	{
		name: "3 Months",
		description:
			"A more in-depth program, this course builds upon the basics, introducing students to intermediate techniques. It includes body conditioning, weapons training, and improved agility, aiming to develop a strong physical and mental connection with the art form.",
		icon: "⚡",
	},
	{
		name: "6 Months",
		description:
			"This course takes students through advanced Kalaripayattu techniques, including combat strategies, advanced weapons training, and rigorous physical conditioning. It is suited for individuals looking to master the intricacies of the art.",
		icon: "🔥",
	},
	{
		name: "Meythari course",
		description:
			"Focuses on agility and body control, emphasizing fluid movements and stances. Meythari teaches balance, speed, and grace, honing the practitioner's ability to use their body as a weapon.",
		icon: "🌊",
	},
	{
		name: "Kolthari course",
		description:
			"This course specializes in the use of wooden weapons such as sticks and staffs. It combines strength, precision, and coordination, teaching defensive and offensive techniques with wooden arms.",
		icon: "🎋",
	},
	{
		name: "Shatrunjaya course",
		description:
			"A specialized program for advanced practitioners, focusing on a combination of unarmed combat and weapons training. This course integrates multiple Kalaripayattu disciplines to cultivate a well-rounded mastery of the martial art.",
		icon: "⚔️",
	},
];

// Floating Particles Component
// Fire ember colors for particles
const emberColors = [
	"rgba(251, 191, 36, 0.9)",  // Yellow
	"rgba(245, 158, 11, 0.9)",  // Amber
	"rgba(234, 88, 12, 0.9)",   // Orange
	"rgba(220, 38, 38, 0.8)",   // Red
	"rgba(249, 115, 22, 0.9)",  // Orange-500
];

const FloatingParticles = () => {
	return (
		<div className="particles-container">
			{[...Array(25)].map((_, i) => {
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
							boxShadow: `0 0 ${size * 2}px ${emberColors[colorIndex]}, 0 0 ${size * 4}px rgba(234, 88, 12, 0.3)`,
						}}
						animate={{
							y: [0, -150 - Math.random() * 100],
							x: [0, Math.random() * 60 - 30, Math.random() * 40 - 20],
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

// Animated Text Component with Martial Arts Feel
const AnimatedText = ({ text, className, delay = 0 }) => {
	const words = text.split(" ");
	return (
		<motion.span className={className}>
			{words.map((word, i) => (
				<motion.span
					key={i}
					className="inline-block mr-2"
					initial={{ opacity: 0, y: 50, rotateX: -90 }}
					animate={{ opacity: 1, y: 0, rotateX: 0 }}
					transition={{
						duration: 0.8,
						delay: delay + i * 0.1,
						type: "spring",
						stiffness: 100,
					}}>
					{word}
				</motion.span>
			))}
		</motion.span>
	);
};

// Slash Effect Component
const SlashEffect = ({ trigger }) => {
	return (
		<AnimatePresence>
			{trigger && (
				<motion.div
					className="absolute inset-0 pointer-events-none z-50"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}>
					<motion.div
						className="absolute h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"
						style={{ top: "50%", left: 0, right: 0 }}
						initial={{ scaleX: 0, rotate: -15 }}
						animate={{ scaleX: 1 }}
						transition={{ duration: 0.3 }}
					/>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

// Hero Section - Completely Redesigned
const Hero = () => {
	const navigate = useNavigate();
	const images = [Image1, Image2, Image3, image4, image6, residence, Moksha_3, Moksha, Moksha_2];
	const [currentImage, setCurrentImage] = useState(0);
	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [0, 500], [0, 150]);
	const opacity = useTransform(scrollY, [0, 300], [1, 0]);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage((prev) => (prev + 1) % images.length);
		}, 5000);
		return () => clearInterval(interval);
	}, [images.length]);

	return (
		<div className="relative h-screen overflow-hidden bg-black">
			{/* Animated Background Images */}
			<AnimatePresence mode="wait">
				<motion.div
					key={currentImage}
					className="absolute inset-0"
					initial={{ scale: 1.1, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					exit={{ scale: 0.95, opacity: 0 }}
					transition={{ duration: 1.5, ease: "easeInOut" }}>
					<motion.img
						src={images[currentImage]}
						alt="Hero"
						className="object-cover w-full h-full"
						style={{ y }}
						animate={{ scale: [1, 1.05, 1] }}
						transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
					/>
				</motion.div>
			</AnimatePresence>

			{/* Cinematic Overlays */}
			<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
			<div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

			{/* Animated Vignette */}
			<motion.div
				className="absolute inset-0"
				style={{
					background: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.8) 100%)",
				}}
				animate={{ opacity: [0.5, 0.7, 0.5] }}
				transition={{ duration: 4, repeat: Infinity }}
			/>

			{/* Floating Particles */}
			<FloatingParticles />

			{/* Martial Arts Decorative Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{/* Animated Lines - Top */}
				<motion.div
					className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent"
					animate={{ scaleX: [0, 1, 0], x: ["-100%", "0%", "100%"] }}
					transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
				/>
				{/* Animated Lines - Bottom */}
				<motion.div
					className="absolute bottom-32 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent"
					animate={{ scaleX: [0, 1, 0], x: ["100%", "0%", "-100%"] }}
					transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
				/>

				{/* Corner Decorations */}
				<motion.div
					className="absolute top-24 left-8 w-32 h-32 border-l-2 border-t-2 border-red-600/30"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 1, duration: 1 }}
				/>
				<motion.div
					className="absolute top-24 right-8 w-32 h-32 border-r-2 border-t-2 border-red-600/30"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 1.2, duration: 1 }}
				/>
				<motion.div
					className="absolute bottom-32 left-8 w-32 h-32 border-l-2 border-b-2 border-red-600/30"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 1.4, duration: 1 }}
				/>
				<motion.div
					className="absolute bottom-32 right-8 w-32 h-32 border-r-2 border-b-2 border-red-600/30"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 1.6, duration: 1 }}
				/>
			</div>

			{/* Main Content */}
			<motion.div
				className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6"
				style={{ opacity }}>
				<div className="text-center max-w-5xl">
					{/* Subtitle */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.8 }}
						className="mb-4">
						<span className="inline-block px-4 py-2 text-sm tracking-[0.3em] uppercase text-red-400 border border-red-600/30 rounded-full backdrop-blur-sm bg-black/20">
							Since 1999 • Kerala, India
						</span>
					</motion.div>

					{/* Main Title */}
					<motion.h1
						className="text-5xl font-bold text-white sm:text-7xl md:text-8xl lg:text-9xl"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5, duration: 1, type: "spring" }}>
						<span className="block text-gray-100">The Ancient Art of</span>
						<motion.span
							className="block mt-2 sm:mt-4 gradient-text"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 1, duration: 0.8, type: "spring", stiffness: 100 }}>
							Kalaripayattu
						</motion.span>
					</motion.h1>

					{/* Animated Divider */}
					<motion.div
						className="flex items-center justify-center gap-4 my-8"
						initial={{ opacity: 0, scaleX: 0 }}
						animate={{ opacity: 1, scaleX: 1 }}
						transition={{ delay: 1.3, duration: 0.8 }}>
						<div className="h-px w-16 sm:w-32 bg-gradient-to-r from-transparent to-red-600" />
						<motion.div
							className="w-3 h-3 rotate-45 bg-red-600"
							animate={{ rotate: [45, 225, 45] }}
							transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
						/>
						<div className="h-px w-16 sm:w-32 bg-gradient-to-l from-transparent to-red-600" />
					</motion.div>

					{/* Tagline */}
					<motion.p
						className="text-xl text-gray-300 sm:text-2xl md:text-3xl tracking-wide"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.5, duration: 0.8 }}>
						<span className="font-light">Heritage</span>
						<span className="mx-3 text-red-500">•</span>
						<span className="font-light">Healing</span>
						<span className="mx-3 text-red-500">•</span>
						<span className="font-light">Strength</span>
					</motion.p>

					{/* CTA Buttons */}
					<motion.div
						className="flex flex-col gap-4 mt-10 sm:flex-row sm:justify-center sm:gap-6"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.8, duration: 0.8 }}>
						<motion.button
							whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(220, 38, 38, 0.5)" }}
							whileTap={{ scale: 0.95 }}
							onClick={() => navigate("/courses")}
							className="relative px-8 py-4 overflow-hidden text-lg font-semibold text-white bg-red-600 rounded-lg sm:px-10 group">
							<span className="relative z-10">Explore Courses</span>
							<motion.div
								className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500"
								initial={{ x: "-100%" }}
								whileHover={{ x: 0 }}
								transition={{ duration: 0.3 }}
							/>
						</motion.button>
						<motion.button
							whileHover={{ scale: 1.05, borderColor: "#dc2626" }}
							whileTap={{ scale: 0.95 }}
							onClick={() => navigate("/ShyjuGurukkal")}
							className="px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-white/30 rounded-lg sm:px-10 backdrop-blur-sm hover:bg-white/10">
							Meet Our Gurukkal
						</motion.button>
					</motion.div>
				</div>
			</motion.div>

			{/* Scroll Indicator - Hidden on mobile */}
			<motion.div
				className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 2.5, duration: 1 }}>
				<span className="text-xs text-gray-400 tracking-widest uppercase">Scroll</span>
				<motion.div
					className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
					animate={{ borderColor: ["rgba(156, 163, 175, 0.5)", "rgba(220, 38, 38, 0.8)", "rgba(156, 163, 175, 0.5)"] }}
					transition={{ duration: 2, repeat: Infinity }}>
					<motion.div
						className="w-1.5 h-3 bg-red-500 rounded-full mt-2"
						animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
						transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
					/>
				</motion.div>
			</motion.div>

			{/* Image Indicators */}
			<div className="absolute bottom-8 right-8 flex gap-2">
				{images.slice(0, 5).map((_, idx) => (
					<motion.div
						key={idx}
						className={`h-1 rounded-full transition-all duration-300 ${
							idx === currentImage % 5 ? "bg-red-500 w-8" : "bg-white/30 w-2"
						}`}
						whileHover={{ scale: 1.2 }}
					/>
				))}
			</div>
		</div>
	);
};

// Counter Animation Hook
const useCounter = (end, duration = 2, shouldStart = false) => {
	const [count, setCount] = useState(0);
	const hasStartedRef = useRef(false);

	useEffect(() => {
		if (shouldStart && !hasStartedRef.current) {
			hasStartedRef.current = true;
			const startTime = Date.now();
			const durationMs = duration * 1000;

			const animate = () => {
				const elapsed = Date.now() - startTime;
				const progress = Math.min(elapsed / durationMs, 1);
				// Ease out cubic for smoother animation
				const easedProgress = 1 - Math.pow(1 - progress, 3);
				const currentValue = Math.floor(easedProgress * end);

				setCount(currentValue);

				if (progress < 1) {
					requestAnimationFrame(animate);
				} else {
					setCount(end);
				}
			};

			requestAnimationFrame(animate);
		}
	}, [shouldStart, end, duration]);

	return count;
};

// Stats Section - Redesigned
const StatsSection = () => {
	const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

	return (
		<section ref={ref} className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
			{/* Animated Background Pattern */}
			<div className="absolute inset-0 opacity-10">
				<motion.div
					className="absolute inset-0"
					style={{
						backgroundImage: `
							linear-gradient(rgba(220, 38, 38, 0.1) 1px, transparent 1px),
							linear-gradient(90deg, rgba(220, 38, 38, 0.1) 1px, transparent 1px)
						`,
						backgroundSize: "50px 50px",
					}}
					animate={{
						backgroundPosition: ["0px 0px", "50px 50px"],
					}}
					transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
				/>
			</div>

			<FloatingParticles />

			<div className="container relative px-4 mx-auto">
				{/* Section Title */}
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}>
					<h2 className="text-4xl font-bold text-white sm:text-5xl mb-4">
						Our <span className="gradient-text">Legacy</span> in Numbers
					</h2>
					<div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-red-600 to-transparent" />
				</motion.div>

				<div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
					{stats.map((stat, index) => (
						<motion.div
							key={stat.label}
							initial={{ opacity: 0, y: 50, scale: 0.9 }}
							animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
							transition={{ duration: 0.6, delay: index * 0.2 }}>
							<StatCard {...stat} index={index} inView={inView} />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

// Stat Card Component - Enhanced
const StatCard = ({ label, value, suffix, icon, index, inView }) => {
	const numericValue = parseInt(value.replace(/\D/g, ""));
	const count = useCounter(numericValue, 2, inView);
	const hasPlus = value.includes("+");

	return (
		<motion.div
			whileHover={{ scale: 1.05, y: -10 }}
			className="relative p-8 overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm group">
			{/* Glow Effect on Hover */}
			<motion.div
				className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
				style={{
					background: "radial-gradient(circle at center, rgba(220, 38, 38, 0.15) 0%, transparent 70%)",
				}}
			/>

			{/* Icon */}
			<motion.div
				className="text-4xl mb-4"
				animate={{ rotate: [0, 10, -10, 0] }}
				transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>
				{icon}
			</motion.div>

			{/* Value */}
			<motion.p
				className="text-5xl sm:text-6xl font-bold text-white mb-2"
				style={{ textShadow: "0 0 30px rgba(220, 38, 38, 0.3)" }}>
				{count}{hasPlus && "+"}
			</motion.p>

			{/* Suffix */}
			<p className="text-red-400 text-lg font-medium mb-1">{suffix}</p>

			{/* Label */}
			<p className="text-gray-400">{label}</p>

			{/* Animated Border */}
			<motion.div
				className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-600 to-red-400"
				initial={{ width: 0 }}
				animate={inView ? { width: "100%" } : { width: 0 }}
				transition={{ duration: 1, delay: index * 0.2 }}
			/>
		</motion.div>
	);
};

// Legacy Section - Enhanced
const LegacySection = () => {
	const [activeImage, setActiveImage] = useState(null);
	const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

	const handleImageClick = (imgSrc) => {
		setActiveImage(imgSrc);
	};

	const handleCloseModal = () => {
		setActiveImage(null);
	};

	return (
		<section ref={ref} className="relative py-24 overflow-hidden bg-black">
			{/* Background Elements */}
			<div className="absolute inset-0">
				<div className="absolute top-0 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
				<div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
			</div>

			<div className="container relative px-4 mx-auto">
				<div className="grid items-center gap-16 lg:grid-cols-2">
					{/* Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={inView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.8 }}
						className="order-1">
						<motion.span
							className="inline-block px-4 py-1 mb-6 text-sm tracking-wider text-red-400 uppercase border border-red-600/30 rounded-full"
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.2 }}>
							Our Heritage
						</motion.span>

						<h2 className="mb-8 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
							The <span className="gradient-text">Legacy</span>
						</h2>

						<div className="space-y-6 text-gray-300 leading-relaxed">
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={inView ? { opacity: 1, y: 0 } : {}}
								transition={{ delay: 0.3 }}>
								In the heart of this martial arts heritage is Shanmugan Gurukkal, a masterful Kalari Guru, known for his healing prowess. Yashoda,
								his mother and an impressive 6-foot-tall figure practiced Marma treatment, filling the air with the essence of healing. Young Shyju
								Gurukkal's formative years were painted with these profound rituals.
							</motion.p>
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={inView ? { opacity: 1, y: 0 } : {}}
								transition={{ delay: 0.5 }}>
								This legacy, deeply rooted in martial arts and healing traditions, became the guiding light for Shyju Gurukkal. It's not just a
								tale of combat skills; it's a narrative of Kalari prowess, Marma healing, and the rich tradition of Ayurveda. The lineage unfolds with Manja, Yashoda, Shanmugan
								Gurukkal, and now, Shyju Gurukkal.
							</motion.p>
						</div>

						{/* Lineage Indicator */}
						<motion.div
							className="mt-10 flex items-center gap-4 text-sm text-gray-400"
							initial={{ opacity: 0 }}
							animate={inView ? { opacity: 1 } : {}}
							transition={{ delay: 0.7 }}>
							<span>Manja Thalla</span>
							<div className="h-px w-8 bg-red-600" />
							<span>Yashoda</span>
							<div className="h-px w-8 bg-red-600" />
							<span>Shanmugan Gurukkal</span>
							<div className="h-px w-8 bg-red-600" />
							<span className="text-red-400 font-semibold">Shyju Gurukkal</span>
						</motion.div>
					</motion.div>

					{/* Images */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={inView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="order-2">
						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-4">
								<motion.div
									className="relative overflow-hidden rounded-2xl group cursor-pointer"
									whileHover={{ scale: 1.02 }}
									onClick={() => handleImageClick(image7)}>
									<img src={image7} alt="Kalari pose" className="object-cover w-full aspect-square" />
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
									<motion.div
										className="absolute inset-0 border-2 border-red-600/0 group-hover:border-red-600/50 rounded-2xl transition-all duration-300"
									/>
								</motion.div>
								<motion.div
									className="relative overflow-hidden rounded-2xl group cursor-pointer"
									whileHover={{ scale: 1.02 }}
									onClick={() => handleImageClick(fire)}>
									<img src={fire} alt="fire" className="object-cover w-full aspect-video" />
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								</motion.div>
							</div>
							<div className="mt-8">
								<motion.div
									className="relative overflow-hidden rounded-2xl group cursor-pointer"
									whileHover={{ scale: 1.02 }}
									onClick={() => handleImageClick(image4)}>
									<img src={image4} alt="Legacy" className="object-cover w-full aspect-[3/4]" />
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
									{/* Decorative Corner */}
									<div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-red-600/50" />
									<div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-red-600/50" />
								</motion.div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Modal */}
			<AnimatePresence>
				{activeImage && (
					<motion.div
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={handleCloseModal}>
						<motion.img
							src={activeImage}
							alt="Enlarged"
							className="object-contain max-w-[90vw] max-h-[90vh] rounded-lg"
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
							transition={{ type: "spring", stiffness: 300, damping: 30 }}
						/>
						<motion.button
							className="absolute top-6 right-6 p-3 text-white bg-red-600/20 rounded-full hover:bg-red-600/40 transition-colors"
							onClick={handleCloseModal}
							whileHover={{ scale: 1.1, rotate: 90 }}
							whileTap={{ scale: 0.9 }}>
							<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</motion.button>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

// Vision Section - Enhanced
const VisionSection = () => {
	const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

	return (
		<section ref={ref} className="relative py-32 overflow-hidden bg-black">
			{/* Animated Background */}
			<div className="absolute inset-0">
				<motion.div
					className="absolute inset-0"
					style={{
						backgroundImage: "radial-gradient(circle at 2px 2px, rgba(220,38,38,0.15) 1px, transparent 0)",
						backgroundSize: "40px 40px",
					}}
					animate={{
						opacity: [0.3, 0.5, 0.3],
					}}
					transition={{ duration: 4, repeat: Infinity }}
				/>
				{/* Fire Gradient Orbs */}
				<motion.div
					className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.2, 1],
						x: [0, 50, 0],
						y: [0, -30, 0],
					}}
					transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
				/>
				<motion.div
					className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl"
					animate={{
						scale: [1.2, 1, 1.2],
						x: [0, -50, 0],
						y: [0, 30, 0],
					}}
					transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
				/>
				<motion.div
					className="absolute top-1/2 right-1/3 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.3, 1],
						opacity: [0.3, 0.6, 0.3],
					}}
					transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
				/>
			</div>

			<div className="container relative px-4 mx-auto">
				<div className="max-w-4xl mx-auto text-center">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8 }}>
						{/* Icon */}
						<motion.div
							className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-red-600/20 border border-red-600/30"
							animate={{
								boxShadow: ["0 0 0 0 rgba(220, 38, 38, 0)", "0 0 0 20px rgba(220, 38, 38, 0)", "0 0 0 0 rgba(220, 38, 38, 0)"],
							}}
							transition={{ duration: 2, repeat: Infinity }}>
							<span className="text-3xl">🎯</span>
						</motion.div>

						<h2 className="mb-8 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
							Our <span className="gradient-text">Vision</span>
						</h2>
					</motion.div>

					<motion.div
						className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800/50 backdrop-blur-sm"
						initial={{ opacity: 0, y: 50 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.3 }}>
						{/* Quote Mark */}
						<motion.span
							className="absolute -top-6 left-8 text-8xl text-red-600/20 font-serif"
							initial={{ opacity: 0, x: -20 }}
							animate={inView ? { opacity: 1, x: 0 } : {}}
							transition={{ delay: 0.5 }}>
							"
						</motion.span>

						<p className="text-xl sm:text-2xl leading-relaxed text-gray-300 font-light">
							We aspire to make the ancient martial art of Kalarippayattu accessible to as many people as possible. Through dedicated training,
							holistic learning, and a commitment to preserving the rich heritage of Kalari, we envision empowering individuals to harness their
							inner strength, achieve physical and mental well-being, and embrace the transformative journey.
						</p>

						{/* Decorative Elements */}
						<div className="absolute top-4 right-4 w-16 h-16 border-t border-r border-red-600/30 rounded-tr-3xl" />
						<div className="absolute bottom-4 left-4 w-16 h-16 border-b border-l border-red-600/30 rounded-bl-3xl" />
					</motion.div>

					{/* Values */}
					<motion.div
						className="grid grid-cols-3 gap-8 mt-16"
						initial={{ opacity: 0, y: 30 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.6, duration: 0.8 }}>
						{[
							{ icon: "🧘", label: "Inner Peace" },
							{ icon: "💪", label: "Physical Strength" },
							{ icon: "🌟", label: "Mental Clarity" },
						].map((item, idx) => (
							<motion.div
								key={item.label}
								className="text-center"
								whileHover={{ scale: 1.1, y: -5 }}>
								<motion.div
									className="text-4xl mb-3"
									animate={{ y: [0, -5, 0] }}
									transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}>
									{item.icon}
								</motion.div>
								<p className="text-gray-400 text-sm sm:text-base">{item.label}</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

// Offerings Section - Enhanced
const OfferingsSection = () => {
	const navigate = useNavigate();
	const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

	return (
		<section ref={ref} className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
			{/* Background */}
			<div className="absolute inset-0 kalari-pattern" />

			<div className="container relative px-4 mx-auto">
				<motion.div
					className="max-w-3xl mx-auto text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}>
					<motion.span
						className="inline-block px-4 py-1 mb-6 text-sm tracking-wider text-red-400 uppercase border border-red-600/30 rounded-full"
						initial={{ opacity: 0 }}
						animate={inView ? { opacity: 1 } : {}}
						transition={{ delay: 0.2 }}>
						Training Programs
					</motion.span>
					<h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
						Our <span className="gradient-text">Offerings</span>
					</h2>
					<p className="text-xl text-gray-400">
						Experience the joy of learning Kalaripayattu with a curriculum designed exclusively for you!
					</p>
				</motion.div>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{values.map((value, index) => (
						<motion.div
							key={value.name}
							initial={{ opacity: 0, y: 50 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: index * 0.1 }}>
							<OfferingCard {...value} index={index} />
						</motion.div>
					))}
				</div>

				<motion.div
					className="mt-16 text-center"
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.8 }}>
					<motion.button
						onClick={() => navigate("/courses")}
						className="relative px-12 py-4 overflow-hidden text-lg font-semibold text-white bg-gradient-to-r from-red-700 to-red-600 rounded-full group"
						whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(220, 38, 38, 0.4)" }}
						whileTap={{ scale: 0.95 }}>
						<span className="relative z-10 flex items-center gap-2">
							View All Courses
							<motion.svg
								className="w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								animate={{ x: [0, 5, 0] }}
								transition={{ duration: 1.5, repeat: Infinity }}>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</motion.svg>
						</span>
						<motion.div
							className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500"
							initial={{ x: "-100%" }}
							whileHover={{ x: 0 }}
							transition={{ duration: 0.4 }}
						/>
					</motion.button>
				</motion.div>
			</div>
		</section>
	);
};

// Offering Card Component - Enhanced
const OfferingCard = ({ name, description, icon, index }) => {
	return (
		<motion.div
			whileHover={{ y: -10 }}
			className="relative h-full p-6 overflow-hidden bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 backdrop-blur-sm group cursor-pointer">
			{/* Hover Glow */}
			<motion.div
				className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
				style={{
					background: "radial-gradient(circle at 50% 0%, rgba(220, 38, 38, 0.15) 0%, transparent 60%)",
				}}
			/>

			{/* Icon */}
			<motion.div
				className="text-4xl mb-4"
				whileHover={{ scale: 1.2, rotate: 10 }}
				transition={{ type: "spring", stiffness: 300 }}>
				{icon}
			</motion.div>

			{/* Title */}
			<h3 className="mb-4 text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
				{name}
			</h3>

			{/* Description */}
			<p className="text-gray-400 text-sm leading-relaxed line-clamp-4 group-hover:text-gray-300 transition-colors duration-300">
				{description}
			</p>

			{/* Bottom Line Animation */}
			<motion.div
				className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-600 to-red-400"
				initial={{ width: 0 }}
				whileHover={{ width: "100%" }}
				transition={{ duration: 0.3 }}
			/>

			{/* Corner Accent */}
			<div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
				<div className="absolute top-0 right-0 w-32 h-1 bg-gradient-to-l from-red-600/50 to-transparent transform rotate-45 translate-x-8 -translate-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
			</div>
		</motion.div>
	);
};

// About Us Section - Enhanced
const AboutUsSection = ({ additionalImages }) => {
	const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

	return (
		<section ref={ref} className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
			{/* Background Effects */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900 via-transparent to-transparent" />
				<motion.div
					className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.1, 1],
						opacity: [0.3, 0.5, 0.3],
					}}
					transition={{ duration: 8, repeat: Infinity }}
				/>
			</div>

			<div className="container relative px-4 mx-auto">
				<motion.div
					className="max-w-3xl mx-auto text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}>
					<motion.span
						className="inline-block px-4 py-1 mb-6 text-sm tracking-wider text-red-400 uppercase border border-red-600/30 rounded-full"
						initial={{ opacity: 0 }}
						animate={inView ? { opacity: 1 } : {}}
						transition={{ delay: 0.2 }}>
						About Us
					</motion.span>
					<h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
						VPS Kalari Madhom
						<span className="block text-xl sm:text-2xl text-gray-400 font-normal mt-2">
							Bringing Ancient Wisdom to the Modern World
						</span>
					</h2>
					<div className="w-32 h-1 mx-auto bg-gradient-to-r from-transparent via-red-600 to-transparent" />
				</motion.div>

				<div className="grid gap-16 xl:grid-cols-2 items-center">
					<motion.div
						className="space-y-6 text-gray-300"
						initial={{ opacity: 0, x: -50 }}
						animate={inView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.8 }}>
						<p className="text-lg leading-relaxed">
							Located in Ponnani, Malappuram, Kerala, VPS Kalari is an eminent institution that offers a distinguished platform for mastering the
							ancient Indian martial art form of Kalaripayattu. Led by a Gurukkal who represents the 4th
							generation of dedicated practitioners, VPS Kalari transcends traditional Kalari practice by seamlessly integrating Kalari treatments.
						</p>
						<p className="text-lg leading-relaxed">
							For a quarter of a century, VPS Kalari has been a beacon of excellence, bringing recognition not only to itself but also to the town
							of Ponnani on both national and international stages. Our journey is defined by participation and triumph in prestigious events such
							as the National Games, Commonwealth Games, G20, and Khelo India.
						</p>

						{/* Achievement Badges */}
						<motion.div
							className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6"
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.5 }}>
							{["National Games", "Commonwealth", "G20", "Khelo India"].map((badge, idx) => (
								<motion.div
									key={badge}
									className="px-4 py-2 text-center text-xs font-medium text-red-400 border border-red-600/30 rounded-full bg-red-600/5"
									whileHover={{ scale: 1.05, borderColor: "rgba(220, 38, 38, 0.6)" }}
									transition={{ delay: idx * 0.1 }}>
									{badge}
								</motion.div>
							))}
						</motion.div>
					</motion.div>

					<motion.div
						className="relative"
						initial={{ opacity: 0, x: 50 }}
						animate={inView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.3 }}>
						<AnimatedGallery images={additionalImages} />
					</motion.div>
				</div>
			</div>
		</section>
	);
};

// Animated Gallery Component - Enhanced
const AnimatedGallery = ({ images }) => {
	const [activeImage, setActiveImage] = useState(null);
	const [zoomedIndex, setZoomedIndex] = useState(0);

	useEffect(() => {
		const updateZoomedImage = () => {
			setZoomedIndex(prev => {
				let newIndex;
				do {
					newIndex = Math.floor(Math.random() * 6);
				} while (newIndex === prev);
				return newIndex;
			});
		};

		const interval = setInterval(updateZoomedImage, 3000);
		return () => clearInterval(interval);
	}, []);

	const handleImageClick = (img) => setActiveImage(img);
	const handleCloseModal = () => setActiveImage(null);

	const handleNextImage = () => {
		const currentIndex = images.indexOf(activeImage);
		const nextIndex = (currentIndex + 1) % images.length;
		setActiveImage(images[nextIndex]);
	};

	const handlePrevImage = () => {
		const currentIndex = images.indexOf(activeImage);
		const prevIndex = (currentIndex - 1 + images.length) % images.length;
		setActiveImage(images[prevIndex]);
	};

	return (
		<>
			<div className="grid h-full grid-cols-2 gap-3 sm:grid-cols-3">
				{images.slice(0, 6).map((img, index) => (
					<motion.div
						key={img}
						className="relative overflow-hidden rounded-xl aspect-square cursor-pointer group"
						animate={{
							scale: index === zoomedIndex ? 1.05 : 1,
							zIndex: index === zoomedIndex ? 10 : 1,
						}}
						transition={{ duration: 0.8, ease: "easeInOut" }}
						whileHover={{ scale: 1.08 }}
						onClick={() => handleImageClick(img)}>
						<motion.img
							src={img}
							alt={`Gallery ${index + 1}`}
							className="absolute inset-0 object-cover w-full h-full"
							animate={{
								scale: index === zoomedIndex ? 1.2 : 1,
							}}
							transition={{ duration: 2, ease: "easeInOut" }}
						/>
						{/* Overlay */}
						<div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
						{/* Border Effect */}
						<motion.div
							className="absolute inset-0 border-2 border-red-600/0 group-hover:border-red-600/50 rounded-xl transition-all duration-300"
						/>
						{/* Zoom Icon */}
						<motion.div
							className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
								<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
								</svg>
							</div>
						</motion.div>
					</motion.div>
				))}
			</div>

			{/* Lightbox Modal */}
			<AnimatePresence>
				{activeImage && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl"
						onClick={handleCloseModal}>
						<motion.img
							src={activeImage}
							alt="Fullscreen view"
							className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
							transition={{ type: "spring", stiffness: 300, damping: 30 }}
						/>

						{/* Navigation */}
						<motion.button
							className="absolute left-4 p-3 text-white bg-white/10 rounded-full hover:bg-white/20 transition-colors"
							onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}>
							<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
							</svg>
						</motion.button>

						<motion.button
							className="absolute right-4 p-3 text-white bg-white/10 rounded-full hover:bg-white/20 transition-colors"
							onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}>
							<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						</motion.button>

						<motion.button
							className="absolute top-4 right-4 p-3 text-white bg-red-600/20 rounded-full hover:bg-red-600/40 transition-colors"
							onClick={handleCloseModal}
							whileHover={{ scale: 1.1, rotate: 90 }}
							whileTap={{ scale: 0.9 }}>
							<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</motion.button>

						{/* Image Counter */}
						<div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 rounded-full text-white text-sm">
							{images.indexOf(activeImage) + 1} / {images.length}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

// Animated Section Wrapper
const AnimatedSection = ({ children }) => {
	const controls = useAnimation();
	const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

	useEffect(() => {
		if (inView) controls.start("visible");
	}, [controls, inView]);

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={controls}
			variants={{
				hidden: { opacity: 0 },
				visible: { opacity: 1 },
			}}
			transition={{ duration: 0.8 }}>
			{children}
		</motion.div>
	);
};

// Main Component
export default function Main() {
	return (
		<div className="bg-black min-h-screen">
			<Helmet>
				<title>VPS Kalari | Authentic Kalaripayattu School in Kerala</title>
				<meta property="og:title" content="VPS Kalari | Authentic Kalaripayattu School in Kerala" />
				<meta
					property="og:description"
					content="Learn Kalaripayattu, the ancient martial art, at VPS Kalari. Join our courses taught by Shyju Gurukkal, a 4th-generation expert."
				/>
				<meta property="og:image" content="https://www.vpskalari.com/pics/logo.png" />
				<meta property="og:url" content="https://www.vpskalari.com/" />
			</Helmet>
			<Header />
			<main>
				<Hero />
				<LegacySection />
				<AboutUsSection additionalImages={[Madhom_1, Madhom_2, Madhom_3, Madhom_4, Madhom_5, Madhom_6]} />
				<StatsSection />
				<VisionSection />
				<OfferingsSection />
			</main>
			<Footer />
		</div>
	);
}
