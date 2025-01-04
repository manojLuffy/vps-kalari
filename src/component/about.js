import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Carousel from "./carosel";
import Image1 from "../pics/image1.jpg";
import Image2 from "../pics/image2.jpg";
import Image3 from "../pics/image3.jpg";
import image4 from "../pics/image4.jpg";
import image5 from "../pics/image5.jpg";
import image6 from "../pics/residence.jpg";
import Header from "./Common/Header";
import Footer from "./Common/Footer";

const timeline = [
	{
		name: "Founded company",
		description: "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.",
		date: "Aug 2021",
		dateTime: "2021-08",
	},
	{
		name: "Secured $65m in funding",
		description: "Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.",
		date: "Dec 2021",
		dateTime: "2021-12",
	},
	{
		name: "Released beta",
		description:
			"Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.",
		date: "Feb 2022",
		dateTime: "2022-02",
	},
	{
		name: "Global launch of product",
		description: "Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.",
		date: "Dec 2022",
		dateTime: "2022-12",
	},
];

const images = [Image1, image6, image5];

export default function About() {
	return (
		<div className="bg-gray-200">
			<Header />
			{/* caousoal */}
			<div className="w-full mt-60">
				<Carousel images={images} />
			</div>
			<div className="mt-32 overflow-hidden sm:mt-40">
				<div className="px-6 mx-auto max-w-7xl lg:flex lg:px-8">
					<div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
						<div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our people</h2>
							<p className="mt-6 text-xl leading-8 text-gray-600">
								Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut molestiae velit error
								quod. Excepturi quidem expedita molestias quas.
							</p>
							<p className="mt-6 text-base leading-7 text-gray-600">
								Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
								fugiat. Quasi aperiam sit non sit neque reprehenderit.
							</p>
						</div>
						<div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
							<div className="flex-auto w-0 lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
								<img alt="" src={Image1} className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover" />
							</div>
							<div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
								<div className="flex self-end justify-end flex-none order-first w-64 lg:w-auto">
									<img alt="" src={Image2} className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
								</div>
								<div className="flex justify-end flex-auto w-96 lg:w-auto lg:flex-none">
									<img alt="" src={Image3} className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
								</div>
								<div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
									<img alt="" src={image4} className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="px-6 mx-auto mt-32 max-w-7xl lg:px-8">
				<div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
					{timeline.map((item) => (
						<div key={item.name}>
							<time dateTime={item.dateTime} className="flex items-center text-sm font-semibold leading-6 text-indigo-600">
								<svg viewBox="0 0 4 4" aria-hidden="true" className="flex-none w-1 h-1 mr-4">
									<circle r={2} cx={2} cy={2} fill="currentColor" />
								</svg>
								{item.date}
								<div
									aria-hidden="true"
									className="absolute w-screen h-px -ml-2 -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
								/>
							</time>
							<p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{item.name}</p>
							<p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
						</div>
					))}
				</div>
			</div>

			{/* Footer */}
			<Footer />
		</div>
	);
}
