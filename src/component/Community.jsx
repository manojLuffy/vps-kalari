import React from "react";
import Header from "./Common/Header";
import Footer from "./Common/Footer";

const Community = () => {
	return (
		<div className="bg-gray-200">
			<Header />
			<main className="isolate">
				<div className="relative isolate -z-10">
					<div className="overflow-hidden">
						<div className="px-6 pb-8 mx-auto mt-16 max-w-7xl pt-36 sm:pt-60 lg:px-8 lg:pt-32"></div>
					</div>
				</div>
				<section className="px-4 md:px-16 lg:px-32">
					<div className="container mx-auto">
						<h2 className="mb-12 text-3xl font-bold text-center sm:mb-8 md:text-4xl">Community Impact</h2>
						<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
							{/* Free Swimming Classes */}
							<div>
								<h3 className="mb-4 text-xl font-bold">Free Swimming Classes</h3>
								<p className="leading-relaxed text-gray-700">
									At VPS Kalari, we take great pride in our community impact initiative of offering Free Swimming Classes every year during the
									summer holidays. These classes take place in the serene surroundings of our local pond, providing the perfect setting for students
									to learn essential swimming skills. Our dedicated Gurukkal personally conducts these classes, ensuring a safe and enjoyable
									learning experience for all participants. Through this initiative, we aim to promote water safety and positively contribute to the
									well-being of our community.
								</p>
							</div>

							{/* Scholarships */}
							<div>
								<h3 className="mb-4 text-xl font-bold">Scholarships</h3>
								<p className="leading-relaxed text-gray-700">
									A select number of students receive the privilege of studying Kalari at our school without any cost. We firmly believe in breaking
									economic barriers, ensuring that financial constraints never hinder one's access to quality Kalari education. Equity in Kalari
									education is not just a belief but a commitment we uphold.
								</p>
							</div>

							{/* Free Self-defense Classes */}
							<div>
								<h3 className="mb-4 text-xl font-bold">Free Self-defense Classes</h3>
								<p className="leading-relaxed text-gray-700">
									Committed to the safety of our female students, we provide complimentary self-defence classes. These sessions include simple yet
									effective moves designed to empower them in street encounters or everyday situations. It's our way of promoting confidence and
									security in their lives.
								</p>
							</div>

							{/* Film Nights */}
							<div>
								<h3 className="mb-4 text-xl font-bold">Film Nights</h3>
								<p className="leading-relaxed text-gray-700">
									Every week, VPS Kalari Madhom transforms into a celestial cinema as students gather under the starry nights for an inspiring movie
									session. These screenings, carefully curated with motivational films, not only kindle aspirations but also create a joyous communal
									space, fostering a sense of togetherness among our Kalari community.
								</p>
							</div>

							{/* No Drug Policy */}
							<div>
								<h3 className="mb-4 text-xl font-bold">No Drug Policy</h3>
								<p className="leading-relaxed text-gray-700">
									At VPS Kalari, we maintain a drug-free zone, reinforcing our commitment to a safe and supportive environment. Our Kalari conducts
									regular awareness sessions on substance abuse for students, parents, and the community. We firmly discourage any engagement in
									substance abuse, ensuring a space that promotes physical, mental, and emotional well-being for all our practitioners.
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default Community;
