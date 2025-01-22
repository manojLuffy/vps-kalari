import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import { motion } from "framer-motion";
import Image1 from "../pics/image1.jpg";
import Image2 from "../pics/image2.jpg";
import Image3 from "../pics/image3.jpg";
import image4 from "../pics/image4.jpg";
import image5 from "../pics/image5.jpg";
import image6 from "../pics/image6.jpg";
import image7 from "../pics/image7.jpg";
import residence from "../pics/residence.jpg";
import fire from "../pics/fire.JPG";
import Moksha from "../pics/Moksha.jpg";
import Moksha_2 from "../pics/Moksha_2.JPG";
import Moksha_3 from "../pics/Moksha_3.JPG";
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
		<div className="relative z-10 min-h-screen overflow-hidden bg-gray-900 isolate">
			<Carousel images={images} autoSlideInterval={5000} />
			{/* Enhanced gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-[2]" />

			<div className="relative z-[6] flex items-center min-h-screen px-6 mx-auto max-w-7xl lg:px-8">
				<div className="max-w-2xl">
					<h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
						The Ancient Art of
						<span className="block mt-2 text-red-600">Kalaripayattu</span>
					</h1>
					<p className="mt-6 text-xl leading-8 text-gray-300">Heritage, Healing & Strength</p>
					<div className="flex gap-4 mt-10">
						<button
							onClick={() => navigate("/courses")}
							className="px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-red-800 rounded-lg hover:bg-red-900 hover:scale-105">
							Explore Courses
						</button>
						<button
							onClick={() => navigate("/ShyjuGurukkal")}
							className="px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-red-800 rounded-lg hover:bg-red-800/20 hover:scale-105">
							Meet Our Gurukkal
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

// Image Gallery Component for About Us section
const ImageGallery = ({ images }) => {
	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
			{images.map((img, index) => (
				<div key={index} className={`relative overflow-hidden rounded-lg ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
					<img src={img} alt={`Gallery ${index + 1}`} className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" />
				</div>
			))}
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
			<p className="text-3xl font-bold text-red-800 transition-transform duration-300 group-hover:-translate-y-1 sm:text-4xl">{value}</p>
			<p className="mt-1 text-gray-700 transition-transform duration-300 group-hover:translate-y-1 sm:mt-2">{label}</p>
		</motion.div>
	);
};

// Modified Legacy Section with mobile-first content
const LegacySection = () => {
	return (
		<section className="py-20 bg-gradient-to-b from-gray-50 to-white">
			<div className="container px-4 mx-auto">
				<div className="grid items-center gap-12 lg:grid-cols-2">
					<div className="order-1 lg:order-1">
						<div className="p-8 bg-white rounded-lg shadow-xl">
							<h2 className="mb-6 text-4xl font-bold text-red-800">The Legacy</h2>
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
								<img src={image7} alt="Kalari pose" className="object-cover w-full rounded-lg shadow-lg aspect-square" />
								<img src={fire} alt="fire" className="object-cover w-full rounded-lg shadow-lg aspect-video" />
							</div>
							<div className="mt-8">
								<img src={image4} alt="Manja Thalla" className="object-cover w-full rounded-lg shadow-lg aspect-[3/4]" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const StatsSection = () => {
	return (
		<section className="py-12 bg-gray-50 sm:py-16">
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-1 gap-6 mb-16 sm:grid-cols-3 sm:gap-8">
					{stats.map((stat) => (
						<StatCard key={stat.label} label={stat.label} value={stat.value} />
					))}
				</div>

				{/* Dynamic image layout */}
				<div className="relative">
					{/* Main large image */}
					<div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
						<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
						<img className="object-cover w-full h-96" src={Moksha} alt="Main Performance" />
					</div>

					{/* Overlapping smaller images */}
					<div className="absolute top-0 right-0 z-20 w-1/3 -mt-6 -mr-6">
						<img className="object-cover w-full h-48 rounded-lg shadow-xl" src={Moksha_2} alt="Performance Detail" />
					</div>
					<div className="absolute bottom-0 left-0 z-20 w-1/4 -mb-6 -ml-6">
						<img className="object-cover w-full h-40 rounded-lg shadow-xl" src={Moksha_3} alt="Performance Detail" />
					</div>
				</div>
			</div>
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

// Enhanced Offerings Section with attractive CTA
const OfferingsSection = () => {
	const navigate = useNavigate();
	return (
		<section className="py-16 bg-gradient-to-b from-gray-50 to-white">
			<div className="container px-4 mx-auto">
				<div className="max-w-3xl mx-auto text-center mb-14">
					<h2 className="mb-4 text-4xl font-bold text-red-800">Our Offerings</h2>
					<p className="text-xl text-gray-600">Experience the joy of learning Kalaripayattu with a curriculum designed exclusively for you!</p>
				</div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{values.map((value) => (
						<>
							<motion.div
								whileHover={{ scale: 1.05 }}
								className="relative p-6 overflow-hidden transition-all duration-300 rounded-lg shadow-lg group">
								<div
									key={value.name}
									className="inset-0 p-6 transition-opacity duration-300 bg-gradient-to-br from-red-800/20 to-transparent group-hover:opacity-100 rounded-xl hover:-translate-y-2 hover:shadow-xl">
									<h3 className="mb-4 text-2xl font-bold text-red-800">{value.name}</h3>
									<p className="text-gray-600">{value.description}</p>
								</div>
							</motion.div>
						</>
					))}
				</div>
				<motion.div className="mt-8 text-center" whileHover={{ scale: 1.05 }}>
					<button
						onClick={() => navigate("/courses")}
						className="relative px-12 py-4 text-lg font-semibold text-white transition-all duration-300 bg-red-800 rounded-full group hover:bg-red-900">
						<span className="relative z-10">Check them out Now</span>
						<div className="absolute inset-0 transition-transform duration-300 bg-red-700 rounded-full opacity-0 group-hover:opacity-100" />
						<div className="absolute inset-0 transition-transform duration-300 bg-red-600 rounded-full opacity-0 group-hover:opacity-50 animate-pulse" />
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
			{/* Existing content */}
			<div className="container relative px-4 mx-auto">
				<div className="max-w-3xl mx-auto text-center mb-14">
					<h2 className="mb-4 text-4xl font-bold text-red-600">VPS Kalari - Bringing Ancient Wisdom to the Modern World</h2>
					<div className="w-24 h-1 mx-auto mb-6 bg-red-600"></div>
				</div>
			</div>
			<div className="space-y-6 text-gray-300">
				<p className="text-lg leading-relaxed">
					Located in Ponnani, Malappuram, Kerala, VPS Kalari is an eminent institution that offers a distinguished platform for mastering the
					ancient Indian martial art form of Kalaripayattu. In a country abundant with options for Kalari training, VPS Kalari stands out for its
					exceptional attributes and unwavering commitment to both the art and its practitioners. Led by a Gurukkal who represents the 4th
					generation of dedicated practitioners, VPS Kalari transcends traditional Kalari practice by seamlessly integrating Kalari treatments.
					Our Gurukkal possesses a profound understanding of both Kalaripayattu and the intricacies of healing. Injuries sustained during
					training are addressed with precision and care, underscoring our holistic approach to this ancient art.
				</p>
				<p className="text-lg leading-relaxed">
					{" "}
					For a quarter of a century, VPS Kalari has been a beacon of excellence, bringing recognition not only to itself but also to the town of
					Ponnani on both national and international stages. Our journey is defined by participation and triumph in prestigious events such as
					the National Games, Commonwealth Games, G20, and Khelo India, further solidifying our reputation as a trailblazer in the world of
					Kalaripayattu. At VPS Kalari, we take pride in our distinctive philosophy. We fervently believe in the power of sharing wisdom. Our
					Gurukkal actively imparts comprehensive knowledge, nurturing an environment where students can amass profound insights into this
					ancient art form. A pioneering initiative introduced by Shyju Gurukkal, the driving force behind VPS Kalari, is the theatrical
					presentation of Kalaripayattu. This innovative departure from traditional showcases has garnered critical acclaim. VPS Kalari's
					exceptional presentation of "Moksha" achieved a URF Asian Record, with 20 dedicated practitioners seamlessly blending Kalaripayattu
					into a mesmerizing theatrical experience. This achievement also set a new World Record in the domain of performing arts.
				</p>
			</div>
			<div className="container relative px-4 mx-auto mt-12">
				<ImageGallery images={additionalImages} />
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
				<AboutUsSection additionalImages={[Image1, Image2, Image3, image4, image6, residence]} />
				<StatsSection />
				<VisionSection />
				<OfferingsSection />
			</main>
			<Footer />
		</div>
	);
}
