import React from "react";
import Location from "../../pics/Location.png";

function Footer() {
	const footerNavigation = {
		social: [
			{
				name: "Facebook",
				href: "https://www.facebook.com/p/V-P-S-Kalari-ponnani-100064149576936/",
				icon: (props) => (
					<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
						<path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
						<path
							fill="#fff"
							d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
					</svg>
				),
			},
			{
				name: "Instagram",
				href: "https://www.instagram.com/vpskalari/",
				icon: (props) => (
					<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
						<radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse">
							<stop offset="0" stop-color="#fd5"></stop>
							<stop offset=".328" stop-color="#ff543f"></stop>
							<stop offset=".348" stop-color="#fc5245"></stop>
							<stop offset=".504" stop-color="#e64771"></stop>
							<stop offset=".643" stop-color="#d53e91"></stop>
							<stop offset=".761" stop-color="#cc39a4"></stop>
							<stop offset=".841" stop-color="#c837ab"></stop>
						</radialGradient>
						<path
							fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
							d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path>
						<radialGradient
							id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
							cx="11.786"
							cy="5.54"
							r="29.813"
							gradientTransform="matrix(1 0 0 .6663 0 1.849)"
							gradientUnits="userSpaceOnUse">
							<stop offset="0" stop-color="#4168c9"></stop>
							<stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop>
						</radialGradient>
						<path
							fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
							d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path>
						<path
							fill="#fff"
							d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path>
						<circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
						<path
							fill="#fff"
							d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
					</svg>
				),
			},
			{
				name: "YouTube",
				href: "https://www.youtube.com/@vpskalari",
				icon: (props) => (
					<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
						<path
							fill="#FF3D00"
							d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path>
						<path fill="#FFF" d="M20 31L20 17 32 24z"></path>
					</svg>
				),
			},
		],
	};

	return (
		<div>
			<div className="mx-[6%] mt-16 border-t border-gray-300"></div>
			<footer className="px-6 pb-20 mx-auto mt-10 overflow-hidden max-w-7xl sm:mt-12 sm:pb-24 lg:px-8">
				<div className="container mx-auto">
					<div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-2 lg:grid-cols-3">
						<div>
							<h4 className="mb-2 text-lg font-bold">Contact Us</h4>
							<p>
								<span className="font-bold">Phone:</span>{" "}
								<a href="tel:+919895297783" className="hover:underline">
									+919895297783
								</a>
								<br />
								<span className="font-bold">Email:</span>{" "}
								<a href="mailto:vpskalarikerala@gmail.com" className="hover:underline">
									vpskalarikerala@gmail.com
								</a>
							</p>
						</div>

						{/* Head Office Address */}
						<div>
							<h4 className="mb-2 text-lg font-bold">Head Office</h4>
							<p>
								VPS Kalari Madhom, Kadavanadu,
								<br />
								Ponnani, Kerala - 679586
							</p>
						</div>

						{/* Branches */}
						<div>
							<h4 className="mb-2 text-lg font-bold">Branches</h4>
							<p>
								<span className="font-bold">Kerala:</span> Vallachira, Kollam, Thrissur, Edappal, Malappuram Town Hall, Varavoor <br />
								<span className="font-bold">Karnataka:</span> Banaswadi, Whitefield
							</p>
						</div>
					</div>

					<div className="flex flex-col items-center justify-between md:flex-row">
						<div className="w-[100%] md:w-[50%]">
							<img
								src={Location}
								alt="VPS Kalari Location"
								className="w-full h-auto rounded-lg shadow-md" // Style the image
							/>
						</div>

						<div className="flex justify-center mt-12 space-x-10 md:mt-0 md:pr-24">
							{footerNavigation.social.map((item) => (
								<a key={item.name} target="_blank" rel="noopener noreferrer" href={item.href} className="text-gray-400 hover:text-gray-500">
									<span className="sr-only">{item.name}</span>
									<item.icon aria-hidden="true" className="w-6 h-6" />
								</a>
							))}
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
