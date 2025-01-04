import React, { useState, useEffect, useRef } from "react";
// import moksha1 from "../assets/moksha/moksha1.jpg"; // Import your Moksha images
// import moksha2 from "../assets/moksha/moksha2.jpg";
// ... import other images
import theatre1 from "../pics/theatre_1.jpg";
import Header from "./Common/Header";
import Footer from "./Common/Footer";

const Theatre = () => {
	const images = ["werwrg"];

	// ... (scrolling banner logic remains the same) ...

	return (
		<div className="bg-gray-200">
			{/* ... (scrolling banner code remains the same) ...  */}
			<Header />
			<main className="isolate">
				<div className="relative isolate -z-10">
					<div className="overflow-hidden">
						<div className="px-6 pb-8 mx-auto mt-16 max-w-7xl pt-36 sm:pt-60 lg:px-8 lg:pt-32"></div>
					</div>
				</div>
				{/* Moksha Gallery */}
				<section className="px-4 md:px-16 lg:px-32">
					<div className="container mx-auto">
						<h2 className="mb-8 text-3xl font-bold text-center md:text-4xl">Moksha - A Glimpse into the Performance</h2>
						<div className="my-24">
							<div className="w-full h-auto aspect-video">
								<iframe
									src="https://www.youtube.com/embed/rpkOYMl7tmE"
									title="YouTube video player"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowFullScreen
									className="w-full h-full" // Ensures video fills container
								></iframe>
							</div>
						</div>
						{/* Moksha Description */}
						<p className="mb-8 text-lg leading-relaxed text-gray-700">
							Immerse yourself in the captivating world of 'Moksha,' a theatrical production seamlessly blending the essence of Kalaripayattu with
							an indomitable spirit. Originating from the rich heritage of Kerala, Kalaripayattu emerged as a form of bodily practice, a
							competitive sport, and a mesmerizing performing art. Through intense training in weaponry and combat, warriors honed their skills to
							defend their land, traditions, and people.
							<br />
							<br />
							During the colonial era, Kalaripayattu faced formidable challenges as Western influence and modern weaponry were introduced.
							Witnessing a decline from the sixteenth to the eighteenth century, the British imposed a ban, fearing a potential uprising and
							revolution. Despite these adversities, the Gurukkals, Grandmasters of Kalaripayattu, persevered with clandestine training, nurturing
							the ancient tradition in secrecy.
							<br />
							<br />
							Enter the stage of 'Moksha,' where courageous warriors take centre stage, portraying the resilience and determination that defined
							their spirits. Commissioned by Sir William Benedict of the British government, a relentless investigation sought to suppress any
							resurgence of Kalaripayattu. However, our brave warriors faced the challenge fearlessly, safeguarding their art and preserving its
							legacy.
							<br />
							<br />
							Through artistic brilliance and evocative storytelling, 'Moksha' pays homage to the unwavering dedication of these valiant warriors,
							highlighting their unyielding spirit and undying love for their land. Witness the clash of cultures and ideologies, as the stage
							comes alive with the fervour of Kalaripayattu and the pursuit of 'Moksha' - a liberation that transcends mere physicality, embodying
							the very essence of their existence.
							<br />
							<br />
							Step into a world where tradition, history, and bravery intertwine, as 'Moksha' takes you on an unforgettable journey through time,
							celebrating the time-honoured legacy of Kalaripayattu and the warriors who kept its flame alive against all odds.
						</p>
					</div>
					{/* YouTube Video Embed */}
					<div className="my-24">
						<img
							src={theatre1}
							alt="Shyju Gurukkal"
							className="w-full h-auto transition duration-300 ease-in-out transform shadow-lg hover:scale-105"
						/>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default Theatre;
