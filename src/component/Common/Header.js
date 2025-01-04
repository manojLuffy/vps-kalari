import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../pics/logo.png";

const navigation = [
	// { name: "About", href: "/about" },
	{ name: "Courses", href: "/courses" },
	{ name: "ShyjuGurukkal", href: "/ShyjuGurukkal" },
	{ name: "Community", href: "/Community" },
	{ name: "Theatre", href: "/Theatre" },
	// { name: "Awards", href: "/Awards" },
];

function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="absolute inset-x-0 top-0 z-50">
			<nav aria-label="Global" className="flex items-center justify-between p-6 pb-2 mx-auto max-w-7xl lg:px-8">
				<div className="flex lg:flex-1">
					<a href="/" className="-m-1.5 p-1.5">
						<span className="sr-only">Your Company</span>
						<img alt="" src={Logo} className="w-auto h-40" />
					</a>
				</div>
				<div className="flex md:hidden">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(true)}
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
						<span className="sr-only">Open main menu</span>
						<Bars3Icon aria-hidden="true" className="w-6 h-6" />
					</button>
				</div>
				<div className="hidden md:flex md:gap-x-12 ">
					{navigation.map((item) => (
						<a key={item.name} href={item.href} className="text-[20px]/[24px] font-semibold leading-6 text-gray-900">
							{item.name}
						</a>
					))}
				</div>
			</nav>
			<Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="md:hidden">
				<div className="fixed inset-0 z-50" />
				<DialogPanel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-gray-200 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">Your Company</span>
							<img alt="" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="w-auto h-8" />
						</a>
						<button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-700">
							<span className="sr-only">Close menu</span>
							<XMarkIcon aria-hidden="true" className="w-6 h-6" />
						</button>
					</div>
					<div className="flow-root">
						<img alt="" src={Logo} className="w-auto h-40 -mt-8" />
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="py-6 space-y-2">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50">
										{item.name}
									</a>
								))}
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	);
}

export default Header;
