import React, { useEffect } from "react";
import image5 from "../pics/image5.webp";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Fire ember colors
const emberColors = [
	"rgba(251, 191, 36, 0.9)",
	"rgba(245, 158, 11, 0.9)",
	"rgba(234, 88, 12, 0.9)",
	"rgba(220, 38, 38, 0.8)",
	"rgba(249, 115, 22, 0.9)",
];

// Floating Ember Particles
const FloatingParticles = () => (
	<div className="absolute inset-0 overflow-hidden pointer-events-none">
		{[...Array(18)].map((_, i) => {
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

// Achievement Badge Component
const AchievementBadge = ({ text, index }) => (
	<motion.div
		initial={{ opacity: 0, scale: 0.8 }}
		whileInView={{ opacity: 1, scale: 1 }}
		transition={{ delay: index * 0.1, duration: 0.5 }}
		whileHover={{ scale: 1.05, borderColor: "rgba(220, 38, 38, 0.5)" }}
		className="px-4 py-2 text-center text-xs font-medium text-red-400 border border-red-600/30 rounded-full bg-red-600/5">
		{text}
	</motion.div>
);

// Timeline Item Component
const TimelineItem = ({ year, title, description, index }) => {
	const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
			animate={inView ? { opacity: 1, x: 0 } : {}}
			transition={{ duration: 0.6, delay: index * 0.1 }}
			className="relative pl-8 pb-8 border-l-2 border-red-600/30 last:border-l-0">
			{/* Dot */}
			<div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-red-600 border-4 border-black" />
			<span className="text-red-400 text-sm font-semibold">{year}</span>
			<h4 className="text-white font-bold mt-1">{title}</h4>
			<p className="text-gray-400 text-sm mt-2">{description}</p>
		</motion.div>
	);
};

const ShyjuGurukkal = () => {
	const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
	const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.1 });

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const gurus = [
		"Sri Damodaran Gurukkal",
		"Sri Mustafa Gurukkal",
		"Sri Chandran Gurukkal",
		"Sri Hassan Gurukkal",
		"Sri Kumaran Nayar Ashan",
		"Sri Kuttiammakkutty Ustad",
		"Sri Vinod Gurukkal",
		"Sri Veerashoor Perumal",
		"Sri Krishnan Nayar Gurukkal",
	];

	const timeline = [
		{ year: "Age 5", title: "First Steps", description: "Began learning Kalaripayattu at home under his father's guidance" },
		{ year: "Age 6½", title: "First Competition", description: "Entered the competitive arena, participating in his first Championship" },
		{ year: "Age 17", title: "Leadership", description: "Entrusted with managing VPS Kalari by his father" },
		{ year: "2006", title: "Certification", description: "Acquired certified expertise in Massage and Therapeutic techniques" },
		{ year: "2010", title: "A-Grade Guru", description: "Recognized as an A-grade Guru by Kerala Kalari Payattu Association" },
		{ year: "2014", title: "Puranjay", description: "Introduced theatrical Kalaripayattu with groundbreaking performance" },
		{ year: "2020", title: "Moksha", description: "Created the award-winning theatrical masterpiece" },
	];

	return (
		<div className="bg-black min-h-screen overflow-x-hidden">
			<Helmet>
				<title>Shyju Gurukkal | Master of Kalaripayattu and Ayurveda Marma Kalari Chikitsa</title>
				<meta property="og:title" content="Shyju Gurukkal | Master of Kalaripayattu and Ayurveda Marma Kalari Chikitsa" />
				<meta
					property="og:description"
					content="Meet Shyju Gurukkal, a 4th-generation expert in Kalaripayattu and Ayurveda Marma Kalari Chikitsa."
				/>
				<meta property="og:image" content="https://www.vpskalari.com/pics/image5.jpg" />
				<meta property="og:url" content="https://www.vpskalari.com/ShyjuGurukkal" />
			</Helmet>
			<Header />

			<main className="relative">
				{/* Hero Section */}
				<section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
					{/* Background */}
					<div className="absolute inset-0">
						<div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
						<motion.div
							className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl"
							animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
							transition={{ duration: 8, repeat: Infinity }}
						/>
						<div
							className="absolute inset-0 opacity-5"
							style={{
								backgroundImage: "radial-gradient(circle at 2px 2px, rgba(220,38,38,0.3) 1px, transparent 0)",
								backgroundSize: "40px 40px",
							}}
						/>
					</div>

					<FloatingParticles />

					<div className="container relative px-4 mx-auto max-w-7xl">
						{/* Page Header */}
						<motion.div
							className="text-center mb-16"
							initial={{ opacity: 0, y: 30 }}
							animate={heroInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.8 }}>
							<motion.span
								className="inline-block px-4 py-1 mb-6 text-sm tracking-wider text-red-400 uppercase border border-red-600/30 rounded-full"
								initial={{ opacity: 0, scale: 0.9 }}
								animate={heroInView ? { opacity: 1, scale: 1 } : {}}
								transition={{ delay: 0.2 }}>
								4th Generation Master
							</motion.span>
							<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
								Meet Our <span className="gradient-text">Gurukkal</span>
							</h1>
							<motion.div
								className="flex items-center justify-center gap-4 mt-6"
								initial={{ opacity: 0, scaleX: 0 }}
								animate={heroInView ? { opacity: 1, scaleX: 1 } : {}}
								transition={{ delay: 0.4, duration: 0.8 }}>
								<div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-red-600" />
								<motion.div
									className="w-2 h-2 rotate-45 bg-red-600"
									animate={{ rotate: [45, 225, 45] }}
									transition={{ duration: 4, repeat: Infinity }}
								/>
								<div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-red-600" />
							</motion.div>
						</motion.div>

						{/* Main Content Grid */}
						<div className="grid gap-12 lg:grid-cols-2 items-start">
							{/* Image */}
							<motion.div
								initial={{ opacity: 0, x: -50 }}
								animate={heroInView ? { opacity: 1, x: 0 } : {}}
								transition={{ duration: 0.8, delay: 0.3 }}
								className="relative">
								<motion.div
									className="relative overflow-hidden rounded-2xl"
									whileHover={{ scale: 1.02 }}
									transition={{ duration: 0.3 }}>
									<img
										src={image5}
										alt="Shyju Gurukkal"
										className="w-full h-auto rounded-2xl shadow-2xl"
									/>
									{/* Overlay gradient */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
									{/* Corner decorations */}
									<div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-red-600/50 rounded-tl-xl" />
									<div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-red-600/50 rounded-br-xl" />
								</motion.div>

								{/* Quick Stats */}
								<motion.div
									className="grid grid-cols-3 gap-4 mt-6"
									initial={{ opacity: 0, y: 20 }}
									animate={heroInView ? { opacity: 1, y: 0 } : {}}
									transition={{ delay: 0.6 }}>
									{[
										{ value: "4th", label: "Generation" },
										{ value: "30+", label: "Years Experience" },
										{ value: "A", label: "Grade Guru" },
									].map((stat, idx) => (
										<motion.div
											key={stat.label}
											className="text-center p-4 rounded-xl bg-gray-900/50 border border-gray-800/50"
											whileHover={{ scale: 1.05, borderColor: "rgba(220, 38, 38, 0.3)" }}>
											<p className="text-2xl font-bold text-red-500">{stat.value}</p>
											<p className="text-xs text-gray-500">{stat.label}</p>
										</motion.div>
									))}
								</motion.div>
							</motion.div>

							{/* Content */}
							<motion.div
								ref={contentRef}
								initial={{ opacity: 0, x: 50 }}
								animate={heroInView ? { opacity: 1, x: 0 } : {}}
								transition={{ duration: 0.8, delay: 0.4 }}
								className="space-y-6">
								<div className="p-6 rounded-2xl bg-gray-900/30 border border-gray-800/50 backdrop-blur-sm">
									<h3 className="text-xl font-bold text-red-400 mb-4">About Shyju Gurukkal</h3>
									<p className="text-gray-300 leading-relaxed">
										Shyju Gurukkal is a 4th generation practitioner of the traditional martial art form of Kalaripayattu
										and the ancient healing art of Ayurveda Marma Kalari Chikitsa. Hailing from a lineage deeply rooted
										in the art of Kalaripayattu, Guru Shyju proudly follows in the footsteps of his father,
										Sri Shanmukan Gurukkal, a renowned Guru and mentor.
									</p>
								</div>

								{/* Learned From */}
								<div className="p-6 rounded-2xl bg-gray-900/30 border border-gray-800/50 backdrop-blur-sm">
									<h3 className="text-xl font-bold text-red-400 mb-4">Trained Under</h3>
									<div className="flex flex-wrap gap-2">
										{gurus.map((guru, idx) => (
											<AchievementBadge key={guru} text={guru} index={idx} />
										))}
									</div>
								</div>

								{/* Achievements */}
								<div className="p-6 rounded-2xl bg-gray-900/30 border border-gray-800/50 backdrop-blur-sm">
									<h3 className="text-xl font-bold text-red-400 mb-4">Key Achievements</h3>
									<div className="flex flex-wrap gap-2">
										{["Commonwealth Games", "National Games", "A-Grade Guru 2010", "Global Ambassador", "Theatre Pioneer"].map((item, idx) => (
											<AchievementBadge key={item} text={item} index={idx} />
										))}
									</div>
								</div>
							</motion.div>
						</div>
					</div>
				</section>

				{/* Timeline Section */}
				<section className="relative py-20 overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
					<div className="container relative px-4 mx-auto max-w-4xl">
						<motion.h2
							className="text-3xl sm:text-4xl font-bold text-white text-center mb-12"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}>
							Journey <span className="gradient-text">Timeline</span>
						</motion.h2>
						<div className="ml-4">
							{timeline.map((item, idx) => (
								<TimelineItem key={item.year} {...item} index={idx} />
							))}
						</div>
					</div>
				</section>

				{/* Detailed Sections */}
				<section className="relative py-20 overflow-hidden">
					<div className="absolute inset-0 kalari-pattern" />
					<div className="container relative px-4 mx-auto max-w-7xl">
						<div className="grid gap-8 md:grid-cols-2">
							{/* Visionary Performer */}
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
								className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/30 backdrop-blur-sm group hover:border-red-600/30 transition-all duration-300">
								<div className="text-4xl mb-4">🎭</div>
								<h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
									A Visionary Performer
								</h3>
								<p className="text-gray-400 leading-relaxed">
									Shyju Gurukkal's artistic vision extends beyond conventional boundaries. Presenting Kalaripayattu
									theatrically is a novel concept he introduced with "Puranjay" in 2014. His subsequent productions
									including "Sadgamaya" (2016), "Chadulam" (2018), and "Moksha" (2020) have captivated audiences worldwide.
								</p>
							</motion.div>

							{/* Teaching Legacy */}
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.1 }}
								className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/30 backdrop-blur-sm group hover:border-red-600/30 transition-all duration-300">
								<div className="text-4xl mb-4">📚</div>
								<h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
									Teaching Legacy
								</h3>
								<p className="text-gray-400 leading-relaxed">
									An ardent teacher dedicated to imparting knowledge, his teaching style is deeply rooted in the
									traditional Gurukul system. Students from all walks of life, ranging from 3 to 60 years of age,
									find a transformative journey building stamina, flexibility and confidence.
								</p>
							</motion.div>

							{/* Nurturing Warriors */}
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/30 backdrop-blur-sm group hover:border-red-600/30 transition-all duration-300">
								<div className="text-4xl mb-4">⚔️</div>
								<h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
									Nurturing Warriors
								</h3>
								<p className="text-gray-400 leading-relaxed">
									With unwavering dedication, Shyju Gurukkal expanded VPS Kalari's reach by establishing branches
									across Kerala and Karnataka. These branches have become centres of excellence, offering aspiring
									learners the opportunity to experience the true heritage of Kalaripayattu.
								</p>
							</motion.div>

							{/* Global Ambassador */}
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.3 }}
								className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/30 backdrop-blur-sm group hover:border-red-600/30 transition-all duration-300">
								<div className="text-4xl mb-4">🌍</div>
								<h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
									A Global Ambassador
								</h3>
								<p className="text-gray-400 leading-relaxed">
									His dedication to spreading Kalaripayattu has taken him to various corners of the world.
									Performances in Dubai, Sharjah, and across India have received appreciation and applause,
									presenting this ancient art to international audiences.
								</p>
							</motion.div>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default ShyjuGurukkal;
