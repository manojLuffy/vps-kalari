import React, { useEffect } from "react";
import Moksha_3 from "../pics/Moksha_3.webp";
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

// Story Section Component
const StorySection = ({ title, content, index }) => {
	const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 30 }}
			animate={inView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.6, delay: index * 0.15 }}
			className="relative">
			<motion.div
				className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/30 backdrop-blur-sm group hover:border-red-600/30 transition-all duration-300"
				whileHover={{ y: -4 }}>
				{/* Glow Effect */}
				<motion.div
					className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
					style={{
						background: "radial-gradient(circle at 50% 0%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)",
					}}
				/>

				{/* Top Accent */}
				<motion.div
					className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-t-2xl"
					initial={{ scaleX: 0 }}
					animate={inView ? { scaleX: 1 } : {}}
					transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
				/>

				{title && (
					<h3 className="text-xl font-bold text-red-400 mb-4">{title}</h3>
				)}
				<p className="text-gray-300 leading-relaxed">{content}</p>
			</motion.div>
		</motion.div>
	);
};

const Theatre = () => {
	const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
	const [videoRef, videoInView] = useInView({ triggerOnce: true, threshold: 0.1 });
	const [imageRef, imageInView] = useInView({ triggerOnce: true, threshold: 0.1 });

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const storyContent = [
		{
			title: "The Ancient Art",
			content:
				"Immerse yourself in the captivating world of 'Moksha,' a theatrical production seamlessly blending the essence of Kalaripayattu with an indomitable spirit. Originating from the rich heritage of Kerala, Kalaripayattu emerged as a form of bodily practice, a competitive sport, and a mesmerizing performing art. Through intense training in weaponry and combat, warriors honed their skills to defend their land, traditions, and people.",
		},
		{
			title: "The Colonial Challenge",
			content:
				"During the colonial era, Kalaripayattu faced formidable challenges as Western influence and modern weaponry were introduced. Witnessing a decline from the sixteenth to the eighteenth century, the British imposed a ban, fearing a potential uprising and revolution. Despite these adversities, the Gurukkals, Grandmasters of Kalaripayattu, persevered with clandestine training, nurturing the ancient tradition in secrecy.",
		},
		{
			title: "The Warriors' Spirit",
			content:
				"Enter the stage of 'Moksha,' where courageous warriors take centre stage, portraying the resilience and determination that defined their spirits. Commissioned by Sir William Benedict of the British government, a relentless investigation sought to suppress any resurgence of Kalaripayattu. However, our brave warriors faced the challenge fearlessly, safeguarding their art and preserving its legacy.",
		},
		{
			title: "The Legacy Lives On",
			content:
				"Through artistic brilliance and evocative storytelling, 'Moksha' pays homage to the unwavering dedication of these valiant warriors, highlighting their unyielding spirit and undying love for their land. Witness the clash of cultures and ideologies, as the stage comes alive with the fervour of Kalaripayattu and the pursuit of 'Moksha' - a liberation that transcends mere physicality, embodying the very essence of their existence.",
		},
	];

	return (
		<div className="bg-black min-h-screen">
			<Helmet>
				<title>Moksha | Kalaripayattu Theatre Performance at VPS Kalari</title>
				<meta property="og:title" content="Moksha | Kalaripayattu Theatre at VPS Kalari" />
				<meta
					property="og:description"
					content="Experience 'Moksha,' a breathtaking theatrical performance blending Kalaripayattu and the spirit of Kerala. A tribute to the warriors who preserved the art against all odds."
				/>
				<meta property="og:image" content="https://www.vpskalari.com/pics/theatre1.jpg" />
				<meta property="og:url" content="https://www.vpskalari.com/Theatre" />
			</Helmet>
			<Header />

			<main className="relative">
				{/* Hero Section */}
				<section ref={heroRef} className="relative pt-32 pb-16 overflow-hidden">
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
							className="text-center mb-12"
							initial={{ opacity: 0, y: 30 }}
							animate={heroInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.8 }}>
							<motion.span
								className="inline-block px-4 py-1 mb-6 text-sm tracking-wider text-red-400 uppercase border border-red-600/30 rounded-full"
								initial={{ opacity: 0, scale: 0.9 }}
								animate={heroInView ? { opacity: 1, scale: 1 } : {}}
								transition={{ delay: 0.2 }}>
								Theatre Performance
							</motion.span>

							<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
								<span className="gradient-text">Moksha</span>
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
								A breathtaking theatrical journey through time, celebrating the time-honoured legacy of
								Kalaripayattu and the warriors who kept its flame alive against all odds.
							</motion.p>
						</motion.div>

						{/* Video Section */}
						<motion.div
							ref={videoRef}
							className="relative mb-16"
							initial={{ opacity: 0, y: 40 }}
							animate={videoInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.8 }}>
							<div className="relative rounded-2xl overflow-hidden border border-gray-700/30 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm">
								{/* Corner Decorations */}
								<div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-red-600/40 rounded-tl-xl z-10" />
								<div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-red-600/40 rounded-tr-xl z-10" />
								<div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-red-600/40 rounded-bl-xl z-10" />
								<div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-red-600/40 rounded-br-xl z-10" />

								<div className="p-2 sm:p-4">
									<div className="w-full aspect-video rounded-xl overflow-hidden">
										<iframe
											src="https://www.youtube.com/embed/rpkOYMl7tmE"
											title="Moksha - Kalaripayattu Theatre Performance"
											frameBorder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
											allowFullScreen
											className="w-full h-full"
										/>
									</div>
								</div>
							</div>

							{/* Video Title Badge */}
							<motion.div
								className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-red-700 to-red-600 rounded-full shadow-lg shadow-red-600/20"
								initial={{ opacity: 0, y: 20 }}
								animate={videoInView ? { opacity: 1, y: 0 } : {}}
								transition={{ delay: 0.4 }}>
								<span className="text-white font-semibold text-sm">Watch the Performance</span>
							</motion.div>
						</motion.div>

						{/* Story Sections */}
						<div className="grid gap-6 md:grid-cols-2 mb-16">
							{storyContent.map((section, index) => (
								<StorySection key={section.title} {...section} index={index} />
							))}
						</div>

						{/* Featured Image */}
						<motion.div
							ref={imageRef}
							className="relative"
							initial={{ opacity: 0, y: 40 }}
							animate={imageInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.8 }}>
							<div className="relative rounded-2xl overflow-hidden border border-gray-700/30 group">
								{/* Image Glow */}
								<motion.div
									className="absolute inset-0 bg-gradient-to-t from-red-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
								/>

								{/* Corner Decorations */}
								<div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-red-600/40 rounded-tl-xl z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								<div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-red-600/40 rounded-tr-xl z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								<div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-red-600/40 rounded-bl-xl z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								<div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-red-600/40 rounded-br-xl z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

								<motion.img
									src={Moksha_3}
									alt="Moksha theatrical performance"
									className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
								/>

								{/* Image Caption */}
								<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
									<motion.p
										className="text-white text-lg font-semibold"
										initial={{ opacity: 0, y: 20 }}
										animate={imageInView ? { opacity: 1, y: 0 } : {}}
										transition={{ delay: 0.4 }}>
										A Scene from Moksha
									</motion.p>
									<motion.p
										className="text-gray-400 text-sm"
										initial={{ opacity: 0, y: 20 }}
										animate={imageInView ? { opacity: 1, y: 0 } : {}}
										transition={{ delay: 0.5 }}>
										Warriors preserving the ancient art against colonial oppression
									</motion.p>
								</div>
							</div>
						</motion.div>

						{/* CTA Section */}
						<motion.div
							className="mt-16 text-center"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}>
							<div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800/50 backdrop-blur-sm">
								<h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
									Experience Moksha Live
								</h3>
								<p className="text-gray-400 mb-8 max-w-2xl mx-auto">
									Step into a world where tradition, history, and bravery intertwine. Contact us to learn
									about upcoming performances and private showings.
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
									Contact Us
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

export default Theatre;
