import React, { useEffect } from "react";
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

// Initiative Card Component
const InitiativeCard = ({ icon, title, description, index }) => {
	const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 50 }}
			animate={inView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.6, delay: index * 0.1 }}
			className="relative h-full">
			<motion.div
				whileHover={{ y: -8 }}
				className="relative h-full p-8 overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/30 backdrop-blur-sm group hover:border-red-600/30 transition-all duration-300">
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

				{/* Icon */}
				<motion.div
					className="text-5xl mb-6"
					whileHover={{ scale: 1.2, rotate: 10 }}
					transition={{ type: "spring", stiffness: 300 }}>
					{icon}
				</motion.div>

				{/* Title */}
				<h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
					{title}
				</h3>

				{/* Description */}
				<p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
					{description}
				</p>

				{/* Corner Decorations */}
				<div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-red-600/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
				<div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-red-600/20 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
			</motion.div>
		</motion.div>
	);
};

const Community = () => {
	const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const initiatives = [
		{
			icon: "🏊",
			title: "Free Swimming Classes",
			description:
				"Every summer, we offer Free Swimming Classes at our local pond. Our dedicated Gurukkal personally conducts these classes, ensuring a safe and enjoyable learning experience for all participants. We aim to promote water safety and positively contribute to our community's well-being.",
		},
		{
			icon: "🎓",
			title: "Scholarships",
			description:
				"A select number of students receive the privilege of studying Kalari at our school without any cost. We firmly believe in breaking economic barriers, ensuring that financial constraints never hinder one's access to quality Kalari education. Equity in education is our commitment.",
		},
		{
			icon: "💪",
			title: "Free Self-Defense Classes",
			description:
				"Committed to the safety of our female students, we provide complimentary self-defence classes. These sessions include simple yet effective moves designed to empower them in street encounters or everyday situations. It's our way of promoting confidence and security.",
		},
		{
			icon: "🎬",
			title: "Film Nights",
			description:
				"Every week, VPS Kalari Madhom transforms into a celestial cinema as students gather under the starry nights for inspiring movie sessions. These screenings, carefully curated with motivational films, kindle aspirations and foster a sense of togetherness among our community.",
		},
		{
			icon: "🚫",
			title: "No Drug Policy",
			description:
				"We maintain a drug-free zone, reinforcing our commitment to a safe and supportive environment. Our Kalari conducts regular awareness sessions on substance abuse for students, parents, and the community, ensuring physical, mental, and emotional well-being for all practitioners.",
		},
		{
			icon: "🤝",
			title: "Community Outreach",
			description:
				"Beyond our walls, we actively engage with the local community through demonstrations, workshops, and cultural events. We believe in sharing the wisdom of Kalaripayattu with everyone, fostering appreciation for this ancient art form across all age groups.",
		},
	];

	return (
		<div className="bg-black min-h-screen">
			<Helmet>
				<title>Community Impact | VPS Kalari</title>
				<meta property="og:title" content="Community Impact | VPS Kalari" />
				<meta
					property="og:description"
					content="Explore the community impact initiatives of VPS Kalari, including free swimming classes, scholarships, self-defense classes, and more."
				/>
				<meta property="og:image" content="https://www.vpskalari.com/pics/logo.png" />
				<meta property="og:url" content="https://www.vpskalari.com/Community" />
			</Helmet>
			<Header />

			<main className="relative">
				{/* Hero Section */}
				<section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
					{/* Background */}
					<div className="absolute inset-0">
						<div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
						<motion.div
							className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl"
							animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
							transition={{ duration: 8, repeat: Infinity }}
						/>
						<motion.div
							className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl"
							animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
							transition={{ duration: 8, repeat: Infinity, delay: 2 }}
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
								Making a Difference
							</motion.span>

							<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
								Community <span className="gradient-text">Impact</span>
							</h1>

							{/* Animated Divider */}
							<motion.div
								className="flex items-center justify-center gap-4 mb-8"
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

							<motion.p
								className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed"
								initial={{ opacity: 0, y: 20 }}
								animate={heroInView ? { opacity: 1, y: 0 } : {}}
								transition={{ delay: 0.5, duration: 0.8 }}>
								At VPS Kalari, we believe in giving back to the community that has nurtured us.
								Our initiatives extend beyond martial arts training, fostering holistic development
								and creating positive impact in people's lives.
							</motion.p>
						</motion.div>

						{/* Stats */}
						<motion.div
							className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16"
							initial={{ opacity: 0, y: 20 }}
							animate={heroInView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.6, duration: 0.8 }}>
							{[
								{ value: "25+", label: "Years of Service" },
								{ value: "100+", label: "Free Scholarships" },
								{ value: "500+", label: "Self-Defense Trained" },
								{ value: "1000+", label: "Lives Impacted" },
							].map((stat, idx) => (
								<motion.div
									key={stat.label}
									className="text-center p-4 rounded-xl bg-gray-900/30 border border-gray-800/50"
									whileHover={{ scale: 1.05, borderColor: "rgba(220, 38, 38, 0.3)" }}>
									<p className="text-2xl sm:text-3xl font-bold text-red-500">{stat.value}</p>
									<p className="text-xs text-gray-500">{stat.label}</p>
								</motion.div>
							))}
						</motion.div>

						{/* Initiative Cards */}
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							{initiatives.map((initiative, index) => (
								<InitiativeCard key={initiative.title} {...initiative} index={index} />
							))}
						</div>

						{/* CTA Section */}
						<motion.div
							className="mt-20 text-center"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}>
							<div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800/50 backdrop-blur-sm">
								<h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
									Want to Support Our Initiatives?
								</h3>
								<p className="text-gray-400 mb-8 max-w-2xl mx-auto">
									Your support helps us continue these programs and reach more people in need.
									Together, we can preserve and share the ancient art of Kalaripayattu.
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
									Get Involved
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

export default Community;
