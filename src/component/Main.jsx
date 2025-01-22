import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import { motion, AnimatePresence } from "framer-motion";
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

const stats = [
	{ label: "Trained till now", value: "More than 1000 students" },
	{ label: "Up and running", value: "25 years" },
	{ label: "Different course offerings", value: "More than 10" },
];

const values = [
	{
		name: "One Month",
		description:
			"This is an introductory course designed to provide a basic understanding of Kalaripayattu techniques. It focuses on foundational movements, flexibility, and core strength, allowing beginners to grasp the essentials of this ancient martial art.",
	},
	{
		name: "3 Months",
		description:
			" A more in-depth program, this course builds upon the basics, introducing students to intermediate techniques. It includes body conditioning, weapons training, and improved agility, aiming to develop a strong physical and mental connection with the art form.",
	},
	{
		name: "6 Months",
		description:
			"This course takes students through advanced Kalaripayattu techniques, including combat strategies, advanced weapons training, and rigorous physical conditioning. It is suited for individuals looking to master the intricacies of the art.",
	},
	{
		name: "Meythari course",
		description:
			"Focuses on agility and body control, emphasizing fluid movements and stances. Meythari teaches balance, speed, and grace, honing the practitioner's ability to use their body as a weapon.",
	},
	{
		name: "Kolthari course",
		description:
			"This course specializes in the use of wooden weapons such as sticks and staffs. It combines strength, precision, and coordination, teaching defensive and offensive techniques with wooden arms.",
	},
	{
		name: "Shatrunjaya course",
		description:
			"A specialized program for advanced practitioners, focusing on a combination of unarmed combat and weapons training. This course integrates multiple Kalaripayattu disciplines to cultivate a well-rounded mastery of the martial art.",
	},
];

const images = [Image1, Image2, Image3, image4, image6, residence, Moksha_3, Moksha, Moksha_2];

const Hero = () => {
	const navigate = useNavigate();
	return (
		<div className="relative">
			<div
				className="relative z-10 h-[85vh] overflow-hidden bg-gray-900 isolate"
				style={{
					boxShadow: "0px 10px 15px -5px rgba(0, 0, 0, 0.3)",
				}}>
				{/* Gradient overlay with lower z-index */}
				<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-[1]" />

				{/* Carousel with higher z-index */}
				<Carousel images={images} autoSlideInterval={5000} />

				{/* Content with appropriate z-index */}
				<div className="absolute inset-0 z-[5] mt-14 flex flex-col items-center justify-center px-6 mx-auto max-w-7xl lg:px-8">
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
							The Ancient Art of
							<span className="block mt-2 text-red-600 sm:mt-4">Kalaripayattu</span>
						</h1>
						<p className="mt-4 text-lg leading-7 text-gray-300 sm:mt-6 sm:text-xl sm:leading-8">Heritage, Healing & Strength</p>
						<div className="flex flex-col gap-4 mt-6 sm:flex-row sm:mt-10 sm:justify-center">
							<button
								onClick={() => navigate("/courses")}
								className="px-6 py-3 text-base font-semibold text-white transition-all duration-300 bg-red-600 rounded-lg sm:px-8 sm:py-4 sm:text-lg hover:bg-red-900 hover:scale-105">
								Explore Courses
							</button>
							<button
								onClick={() => navigate("/ShyjuGurukkal")}
								className="px-6 py-3 text-base font-semibold text-white transition-all duration-300 border-2 border-red-600 rounded-lg sm:px-8 sm:py-4 sm:text-lg hover:bg-red-800/20 hover:scale-105">
								Meet Our Gurukkal
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const AnimatedGallery = ({ images }) => {
	const [activeImage, setActiveImage] = useState(null);
	const [zoomedIndex, setZoomedIndex] = useState(0);
	const [prevZoomedIndex, setPrevZoomedIndex] = useState(null);

	useEffect(() => {
		const updateZoomedImage = () => {
			setPrevZoomedIndex(zoomedIndex);
			let newIndex;
			do {
				newIndex = Math.floor(Math.random() * 6);
			} while (newIndex === zoomedIndex);
			setZoomedIndex(newIndex);
		};

		const interval = setInterval(updateZoomedImage, 3000);
		return () => clearInterval(interval);
	}, [zoomedIndex]);

	const handleImageClick = (img) => {
		setActiveImage(img);
	};

	const handleCloseModal = () => {
		setActiveImage(null);
	};

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
		<div className="grid h-full grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3">
			{images.slice(0, 6).map((img, index) => (
				<motion.div
					key={img}
					className="relative overflow-hidden rounded-lg aspect-square group"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{
						opacity: 1,
						scale: index === zoomedIndex ? 1.1 : index === prevZoomedIndex ? 0.95 : 1,
						transition: {
							duration: 1.5,
							ease: "easeInOut",
						},
					}}
					whileHover={{ scale: 1.05 }} // Add a subtle zoom on hover
				>
					<motion.img
						src={img}
						alt={`Gallery ${index + 1}`}
						className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 cursor-pointer"
						animate={{
							scale: index === zoomedIndex ? 1.2 : 1,
							transition: { duration: 2, ease: "easeInOut" },
						}}
						onClick={() => handleImageClick(img)}
					/>
				</motion.div>
			))}

			<AnimatePresence>
				{activeImage && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
						onClick={handleCloseModal}>
						<motion.img
							src={activeImage}
							alt="Fullscreen view"
							className="max-w-[90vw] max-h-[90vh] object-contain"
							initial={{ scale: 0.9 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0.9 }}
						/>

						{/* Left Arrow */}
						<button
							className="absolute p-2 text-white -translate-y-1/2 left-4 top-1/2 hover:text-gray-300"
							onClick={(e) => {
								e.stopPropagation();
								handlePrevImage();
							}}>
							<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
							</svg>
						</button>

						{/* Right Arrow */}
						<button
							className="absolute p-2 text-white -translate-y-1/2 right-4 top-1/2 hover:text-gray-300"
							onClick={(e) => {
								e.stopPropagation();
								handleNextImage();
							}}>
							<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						</button>

						{/* Close Button */}
						<button className="absolute p-4 text-white top-4 right-4 hover:text-red-500" onClick={handleCloseModal}>
							<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

// Enhanced Stats Card Component
const StatCard = ({ label, value }) => {
	return (
		<motion.div
			whileHover={{ scale: 1.05 }}
			className="relative p-6 overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-lg group">
			<div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-red-800/20 to-transparent group-hover:opacity-100" />
			<p className="text-3xl font-bold text-red-600 transition-transform duration-300 group-hover:-translate-y-1 sm:text-4xl">{value}</p>
			<p className="mt-1 text-gray-700 transition-transform duration-300 group-hover:translate-y-1 sm:mt-2">{label}</p>
		</motion.div>
	);
};

// Modified Legacy Section with mobile-first content
const LegacySection = () => {
	const [activeImage, setActiveImage] = useState(null);

	const handleImageClick = (imgSrc) => {
		setActiveImage(imgSrc);
	};

	const handleCloseModal = () => {
		setActiveImage(null);
	};

	return (
		<section className="py-20 bg-gradient-to-b from-gray-50 to-white">
			<div className="container px-4 mx-auto">
				<div className="grid items-center gap-12 lg:grid-cols-2">
					<div className="order-1 lg:order-1">
						<div className="p-8 bg-white rounded-lg shadow-xl">
							<h2 className="mb-6 text-4xl font-bold text-red-600">The Legacy</h2>
							<div className="space-y-6 text-gray-700">
								<p className="leading-relaxed">
									In the heart of this martial arts heritage is Shanmugan Gurukkal, a masterful Kalari Guru, known for his healing prowess. Yashoda,
									his mother and an impressive 6-foot-tall figure practiced Marma treatment, filling the air with the essence of healing. Young Shyju
									Gurukkal's formative years were painted with these profound rituals. Adding a layer to this familial legacy, Shanmugan's
									grandmother, the dearly known Manja Thalla, was a seasoned Ayurvedic masseuse. Her healing touch reached homes, offering treatments
									and special care, especially for new mothers.
								</p>
								<p className="leading-relaxed">
									This legacy, deeply rooted in martial arts and healing traditions, became the guiding light for Shyju Gurukkal. It's not just a
									tale of combat skills; it's a narrative of Kalari prowess, Marma healing, and the rich tradition of Ayurveda. Shyju Gurukkal, in
									his journey, continues to interlace well-being with cultural abundance. The lineage unfolds with Manja, Yashoda, Shanmugan
									Gurukkal, and now, Shyju Gurukkal. Expanding the horizons, Shyju Gurukkal's sister Sheeba is a trained Kalari practitioner and a
									Marma treatment specialist. She plays a pivotal role in caring for female patients at VPS Kalari. As the sun sets on one
									generation, Shyju Gurukkal is diligently preparing the next. His son, nephews, and nieces stand on the cusp of taking forward the
									legacy of VPS Kalari into the promising dawn of the future.
								</p>
							</div>
						</div>
					</div>

					<div className="order-2 lg:order-2">
						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-4">
								<motion.div className="relative group" whileHover={{ scale: 1.05 }} onClick={() => handleImageClick(image7)}>
									<img src={image7} alt="Kalari pose" className="object-cover w-full rounded-lg shadow-lg cursor-pointer aspect-square" />
								</motion.div>
								<motion.div className="relative group" whileHover={{ scale: 1.05 }} onClick={() => handleImageClick(fire)}>
									<img src={fire} alt="fire" className="object-cover w-full rounded-lg shadow-lg cursor-pointer aspect-video" />
								</motion.div>
							</div>
							<div className="mt-8">
								<motion.div className="relative group" whileHover={{ scale: 1.05 }} onClick={() => handleImageClick(image4)}>
									<img src={image4} alt="Manja Thalla" className="object-cover w-full rounded-lg shadow-lg aspect-[3/4] cursor-pointer" />
								</motion.div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Modal for Enlarged Image */}
			<AnimatePresence>
				{activeImage && (
					<motion.div
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={handleCloseModal}>
						<motion.img
							src={activeImage}
							alt="Enlarged"
							className="max-w-[90vw] max-h-[90vh] object-contain"
							initial={{ scale: 0.8 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0.8 }}
						/>

						{/* Close Button */}
						<button className="absolute p-4 text-white top-4 right-4 hover:text-red-500" onClick={handleCloseModal}>
							<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

const StatsSection = () => {
	const [activeImage, setActiveImage] = useState(null);

	const handleImageClick = (imgSrc) => {
		setActiveImage(imgSrc);
	};

	const handleCloseModal = () => {
		setActiveImage(null);
	};

	return (
		<section className="py-12 bg-gray-50 sm:py-16">
			<div className="container flex flex-col px-4 mx-auto">
				<div className="grid grid-cols-1 gap-6 mb-16 sm:grid-cols-3 sm:gap-8">
					{stats.map((stat) => (
						<StatCard key={stat.label} label={stat.label} value={stat.value} />
					))}
				</div>

				{/* Image Section */}
				<div className="relative w-[90%] self-center">
					{/* Main large image */}
					<motion.div
						className="relative z-10 overflow-hidden rounded-lg shadow-xl cursor-pointer"
						whileHover={{ scale: 1.05 }}
						onClick={() => handleImageClick(Moksha)}>
						<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
						<img className="object-cover w-full cursor-pointer h-80" src={Moksha} alt="Main Performance" />
					</motion.div>

					{/* Overlapping smaller images */}
					<motion.div
						className="absolute top-0 right-0 z-20 w-1/3 -mt-6 -mr-6"
						whileHover={{ scale: 1.05 }}
						onClick={() => handleImageClick(Moksha_2)}>
						<img
							className="object-cover w-full h-48 transition-all duration-300 ease-in-out rounded-lg shadow-xl cursor-pointer"
							src={Moksha_2}
							alt="Performance Detail"
						/>
					</motion.div>
					<motion.div
						className="absolute bottom-0 left-0 z-20 w-1/4 -mb-6 -ml-6"
						whileHover={{ scale: 1.05 }}
						onClick={() => handleImageClick(Moksha_3)}>
						<img
							className="object-cover w-full h-40 transition-all duration-300 ease-in-out rounded-lg shadow-xl cursor-pointer"
							src={Moksha_3}
							alt="Performance Detail"
						/>
					</motion.div>
				</div>
			</div>

			{/* Modal for Enlarged Image */}
			<AnimatePresence>
				{activeImage && (
					<motion.div
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={handleCloseModal}>
						<motion.img
							src={activeImage}
							alt="Enlarged"
							className="max-w-[90vw] max-h-[90vh] object-contain"
							initial={{ scale: 0.8 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0.8 }}
						/>

						{/* Close Button */}
						<button className="absolute p-4 text-white top-4 right-4 hover:text-red-500" onClick={handleCloseModal}>
							<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

const VisionSection = () => {
	return (
		<section className="relative py-24 overflow-hidden bg-black">
			<div className="absolute inset-0 opacity-20">
				{/* Background pattern */}
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
						backgroundSize: "40px 40px",
					}}></div>
			</div>

			<div className="container relative px-4 mx-auto">
				<div className="max-w-3xl mx-auto text-center">
					<h2 className="mb-8 text-4xl font-bold text-red-600">Our Vision</h2>
					<div className="p-8 bg-gray-900/50 rounded-xl backdrop-blur-sm">
						<p className="text-xl leading-relaxed text-gray-300">
							We aspire to make the ancient martial art of Kalarippayattu accessible to as many people as possible. Through dedicated training,
							holistic learning, and a commitment to preserving the rich heritage of Kalari, we envision empowering individuals to harness their
							inner strength, achieve physical and mental well-being, and embrace the transformative journey. We hope to foster a community of
							learners and practitioners who carry the essence of Kalari into their lives, making our world a healthier and more harmonious place.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

// Enhanced Offering Card
const OfferingCard = ({ name, description }) => {
	return (
		<motion.div
			whileHover={{ scale: 1.03 }}
			className="relative p-6 overflow-hidden shadow-lg rounded-xl bg-gradient-to-br from-white to-gray-50 group">
			<div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-red-800/5 to-transparent group-hover:opacity-100" />
			<div className="absolute transition-opacity duration-300 opacity-0 -inset-1 bg-gradient-to-br from-red-800/20 to-transparent rounded-xl group-hover:opacity-100 blur-xl" />

			<div className="relative z-10">
				<h3 className="mb-4 text-2xl font-bold text-red-600">{name}</h3>
				<p className="text-gray-600">{description}</p>
			</div>

			<div className="absolute bottom-0 left-0 w-full h-1 transition-transform duration-300 transform scale-x-0 bg-gradient-to-r from-red-800/50 to-transparent group-hover:scale-x-100" />
		</motion.div>
	);
};

// Enhanced Offerings Section
const OfferingsSection = () => {
	const navigate = useNavigate();
	return (
		<section className="pt-16 bg-gradient-to-b from-gray-50 to-white">
			<div className="container px-4 mx-auto">
				<div className="max-w-3xl mx-auto text-center mb-14">
					<h2 className="mb-4 text-4xl font-bold text-red-600">Our Offerings</h2>
					<p className="text-xl text-gray-600">Experience the joy of learning Kalaripayattu with a curriculum designed exclusively for you!</p>
				</div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{values.map((value) => (
						<OfferingCard key={value.name} {...value} />
					))}
				</div>

				<motion.div className="mt-12 text-center" whileHover={{ scale: 1.05 }}>
					<button
						onClick={() => navigate("/courses")}
						className="relative px-12 py-4 overflow-hidden text-lg font-semibold text-white bg-red-800 rounded-full group">
						<span className="relative z-10">Check them out Now</span>
						<div className="absolute inset-0 w-full h-full transition-transform duration-500 origin-left transform scale-x-0 bg-gradient-to-r from-red-700 to-red-900 group-hover:scale-x-100" />
						<div className="absolute inset-0 w-full h-full transition-opacity duration-500 bg-red-600 opacity-0 group-hover:opacity-20 animate-pulse" />
					</button>
				</motion.div>
			</div>
		</section>
	);
};

// About Us Section with Grid Gallery
const AboutUsSection = ({ additionalImages }) => {
	return (
		<section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 to-black">
			<div className="absolute inset-0">
				<div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-800 via-transparent to-transparent" />
			</div>

			<div className="container relative px-4 mx-auto">
				<div className="max-w-3xl mx-auto text-center mb-14">
					<h2 className="mb-4 text-4xl font-bold text-red-600">VPS Kalari Madhom - Bringing Ancient Wisdom to the Modern World</h2>
					<div className="w-24 h-1 mx-auto mb-6 bg-red-600" />
				</div>

				<div className="grid gap-16 xl:grid-cols-2">
					<div className="space-y-6 text-gray-300">
						<p className="text-lg leading-relaxed">
							Located in Ponnani, Malappuram, Kerala, VPS Kalari is an eminent institution that offers a distinguished platform for mastering the
							ancient Indian martial art form of Kalaripayattu. In a country abundant with options for Kalari training, VPS Kalari stands out for
							its exceptional attributes and unwavering commitment to both the art and its practitioners. Led by a Gurukkal who represents the 4th
							generation of dedicated practitioners, VPS Kalari transcends traditional Kalari practice by seamlessly integrating Kalari treatments.
							Our Gurukkal possesses a profound understanding of both Kalaripayattu and the intricacies of healing. Injuries sustained during
							training are addressed with precision and care, underscoring our holistic approach to this ancient art.
						</p>
						<p className="text-lg leading-relaxed">
							For a quarter of a century, VPS Kalari has been a beacon of excellence, bringing recognition not only to itself but also to the town
							of Ponnani on both national and international stages. Our journey is defined by participation and triumph in prestigious events such
							as the National Games, Commonwealth Games, G20, and Khelo India, further solidifying our reputation as a trailblazer in the world of
							Kalaripayattu. At VPS Kalari, we take pride in our distinctive philosophy. We fervently believe in the power of sharing wisdom. Our
							Gurukkal actively imparts comprehensive knowledge, nurturing an environment where students can amass profound insights into this
							ancient art form. A pioneering initiative introduced by Shyju Gurukkal, the driving force behind VPS Kalari, is the theatrical
							presentation of Kalaripayattu. This innovative departure from traditional showcases has garnered critical acclaim. VPS Kalari's
							exceptional presentation of "Moksha" achieved a URF Asian Record, with 20 dedicated practitioners seamlessly blending Kalaripayattu
							into a mesmerizing theatrical experience. This achievement also set a new World Record in the domain of performing arts.
						</p>
					</div>

					<div className="relative">
						<AnimatedGallery images={additionalImages} />
						{/* <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-900 via-transparent to-transparent" /> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default function Main() {
	return (
		<div className="bg-white">
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
			<main className="space-y-0">
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
