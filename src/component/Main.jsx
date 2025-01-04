import { useNavigate } from "react-router";
import Image1 from "../pics/image1.jpg";
import Image2 from "../pics/image2.jpg";
import Image3 from "../pics/image3.jpg";
import image4 from "../pics/image4.jpg";
import image5 from "../pics/image5.jpg";
import image6 from "../pics/image6.jpg";
import residence from "../pics/residence.jpg";
import Moksha from "../pics/Moksha.jpg";
import Moksha_2 from "../pics/Moksha_2.JPG";
import Footer from "./Common/Footer";
import Header from "./Common/Header";

const stats = [
	{ label: "Trained till now", value: "More than 100 students" },
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

export default function Main() {
	const navigate = useNavigate();

	return (
		<div className="bg-gray-200">
			{/* Header */}
			<Header />
			<main className="isolate">
				{/* Hero section */}
				<div className="relative isolate -z-10">
					<div className="overflow-hidden">
						<div className="px-6 pb-32 mx-auto mt-16 max-w-7xl pt-36 sm:pt-32 lg:px-8 lg:pt-32">
							<div className="max-w-2xl mx-auto gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
								<div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
									<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">The Legacy</h1>
									<p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-lg lg:max-w-none">
										In the heart of this martial arts heritage is Shanmugan Gurukkal, a masterful Kalari Guru, known for his healing prowess. Yashoda,
										his mother and an impressive 6-foot-tall figure practised Marma treatment, filling the air with the essence of healing. Young
										Shyju Gurukkal's formative years were painted with these profound rituals. Adding a layer to this familial legacy, Shanmugan's
										grandmother, the dearly known Manja Thalla, was a seasoned Ayurvedic masseuse. Her healing touch reached homes, offering
										treatments and special care, especially for new mothers.
										<br />
										<br />
										This legacy, deeply rooted in martial arts and healing traditions, became the guiding light for Shyju Gurukkal. It's not just a
										tale of combat skills; it's a narrative of Kalari prowess, Marma healing, and the rich tradition of Ayurveda. Shyju Gurukkal, in
										his journey, continues to interlace well-being with cultural abundance. The lineage unfolds with Manja, Yashoda, Shanmugan
										Gurukkal, and now, Shyju Gurukkal. Expanding the horizons, Shyju Gurukkal's sister Sheeba is a trained Kalari practitioner and a
										Marma treatment specialist. She plays a pivotal role in caring for female patients at VPS Kalari. As the sun sets on one
										generation, Shyju Gurukkal is diligently preparing the next. His son, nephews, and nieces stand on the cusp of taking forward the
										legacy of VPS Kalari into the promising dawn of the future.
									</p>
								</div>
								<div className="flex justify-end gap-8 mt-14 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
									<div className="flex-none pt-32 ml-auto space-y-8 w-44 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
										<div className="relative">
											<img alt="" src={image5} className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
											<div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
										</div>
									</div>
									<div className="flex-none pl-4 mr-auto space-y-8 w-44 sm:mr-0 sm:pt-52 lg:pt-36">
										<div className="relative">
											<img alt="" src={Image2} className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
											<div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
										</div>
										<div className="relative">
											<img alt="" src={Image3} className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
											<div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
										</div>
									</div>
									<div className="flex-none pt-32 space-y-8 w-44 sm:pt-0">
										<div className="relative">
											<img alt="" src={image4} className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
											<div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
										</div>
										<div className="relative">
											<img alt="" src={Image1} className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
											<div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
										</div>
										<div className="relative">
											<img alt="" src={image6} className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
											<div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Image section */}
				<div className="xl:mx-auto xl:max-w-7xl xl:px-8">
					<img alt="" src={residence} className="aspect-[5/2] w-full object-cover xl:rounded-3xl" />
				</div>

				{/* Content section */}
				<div className="px-6 mx-auto mt-32 max-w-7xl lg:px-8">
					<div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Us</h2>
						<div className="flex flex-col mt-6 gap-x-8 gap-y-20 lg:flex-row">
							<div className="lg:w-full lg:max-w-2xl lg:flex-auto">
								<p className="text-xl leading-8 text-gray-600">
									Located in Ponnani, Malappuram, Kerala, VPS Kalari is an eminent institution that offers a distinguished platform for mastering the
									ancient Indian martial art form of Kalaripayattu. In a country abundant with options for Kalari training, VPS Kalari stands out for
									its exceptional attributes and unwavering commitment to both the art and its practitioners. Led by a Gurukkal who represents the
									4th generation of dedicated practitioners, VPS Kalari transcends traditional Kalari practice by seamlessly integrating Kalari
									treatments. Our Gurukkal possesses a profound understanding of both Kalaripayattu and the intricacies of healing. Injuries
									sustained during training are addressed with precision and care, underscoring our holistic approach to this ancient art.
								</p>
								<div className="max-w-xl mt-10 text-base leading-7 text-gray-700">
									<p>
										For a quarter of a century, VPS Kalari has been a beacon of excellence, bringing recognition not only to itself but also to the
										town of Ponnani on both national and international stages. Our journey is defined by participation and triumph in prestigious
										events such as the National Games, Commonwealth Games, G20, and Khelo India, further solidifying our reputation as a trailblazer
										in the world of Kalaripayattu. At VPS Kalari, we take pride in our distinctive philosophy. We fervently believe in the power of
										sharing wisdom. Our Gurukkal actively imparts comprehensive knowledge, nurturing an environment where students can amass profound
										insights into this ancient art form. A pioneering initiative introduced by Shyju Gurukkal, the driving force behind VPS Kalari, is
										the theatrical presentation of Kalaripayattu. This innovative departure from traditional showcases has garnered critical acclaim.
										VPS Kalari's exceptional presentation of "Moksha" achieved a URF Asian Record, with 20 dedicated practitioners seamlessly blending
										Kalaripayattu into a mesmerizing theatrical experience. This achievement also set a new World Record in the domain of performing
										arts.
									</p>
									<p className="mt-10">
										Our residential Kalari program comes with an inclusive package thoughtfully curated, encompassing all facets of your stay. It
										ensures a seamless experience amidst minimalist facilities, featuring three nourishing vegetarian meals daily and comfortable
										accommodations in a traditional heritage villa. This serene environment provides the perfect backdrop for your journey of
										self-discovery and personal growth. Complimentary Wi-Fi keeps you connected to the outside world while you immerse yourself in the
										tranquillity of our Madhom. At VPS Kalari, we are not just practitioners; we are ambassadors of a tradition, custodians of
										knowledge, and champions of innovation. We believe in making the world a healthier place through the practice and propagation of
										Kalari as a way of life and Kalari treatments as a panacea. Kalari treatments, rooted in a deep understanding of vital sensitive
										points known as "marma points," offer solutions for injuries incurred during practice and various physical difficulties. Our
										Gurukkal personally examines and diagnoses each individual, prescribing tailored treatments that channel the body's energy for
										healing and rejuvenation. If you seek a holistic Kalari experience that seamlessly blends tradition with innovation, VPS Kalari is
										an exceptional choice. Join us in our mission to promote Kalaripayattu as a path to holistic well-being and discover the
										transformative power of this ancient martial art form.
									</p>
								</div>
							</div>
							<div className="lg:flex lg:flex-auto lg:justify-center">
								<dl className="w-64 space-y-8 xl:w-80">
									{stats.map((stat) => (
										<div key={stat.label} className="flex flex-col-reverse gap-y-4">
											<dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
											<dd className="text-5xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
										</div>
									))}
									<div className="h-[400px]">
										<img className="mt-[50px] w-full h-full object-contain" src={Moksha} alt="Kalari Logo" />
										<img className="mt-[50px] w-full h-full object-contain hidden lg:block" src={Moksha_2} alt="Kalari Logo" />
									</div>
								</dl>
							</div>
						</div>
					</div>
				</div>

				{/* Vision */}

				<div className="px-6 mx-auto mt-12 max-w-7xl lg:px-8">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Vision</h1>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						We aspire to make the ancient martial art of Kalarippayattu accessible to as many people as possible. Through dedicated training,
						holistic learning, and a commitment to preserving the rich heritage of Kalari, we envision empowering individuals to harness their
						inner strength, achieve physical and mental well-being, and embrace the transformative journey. We hope to foster a community of
						learners and practitioners who carry the essence of Kalari into their lives, making our world a healthier and more harmonious place.
					</p>
				</div>

				{/* Values section */}
				<div className="px-6 mx-auto mt-20 max-w-7xl lg:px-8">
					<div className="max-w-2xl mx-auto lg:mx-0">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our offerings</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Experience the joy of learning Kalaripayattu with a curriculum designed exclusively for you at VPS Kalari!
						</p>
					</div>
					<dl className="grid max-w-2xl grid-cols-1 mx-auto mt-16 text-base leading-7 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
						{values.map((value) => (
							<div key={value.name}>
								<dt className="font-semibold text-gray-900">{value.name}</dt>
								<dd className="mt-1 text-gray-600">{value.description}</dd>
							</div>
						))}
					</dl>
				</div>

				<div className="px-6 mx-auto mt-20 text-center max-w-7xl lg:px-8 text-[30px]/[40px]">
					And many more.
					<br />
					<div
						className="cursor-pointer"
						onClick={() => navigate("/courses")}
						style={{
							background: "radial-gradient(40.95% 71.45% at 47.13% 36.78%, #ff7b00 0%, #ff006e 50%, #8338ec 100%)",
							WebkitBackgroundClip: "text",
							color: "transparent",
							backgroundClip: "text",
							fontWeight: 700,
						}}>
						Check them out Now
					</div>
				</div>
			</main>

			{/* Footer */}
			<Footer />
		</div>
	);
}
