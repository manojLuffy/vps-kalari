import React, { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = ({ images, className, autoSlideInterval = 5000 }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState("right");
	const [touchStart, setTouchStart] = useState(null);

	const goToPrevious = useCallback(() => {
		setDirection("left");
		setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	}, [images.length]);

	const goToNext = useCallback(() => {
		setDirection("right");
		setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	}, [images.length]);

	const handleTouchStart = (e) => {
		setTouchStart(e.touches[0].clientX);
	};

	const handleTouchEnd = (e) => {
		if (!touchStart) return;
		const touchEnd = e.changedTouches[0].clientX;
		const delta = touchEnd - touchStart;

		if (delta < -50) goToNext();
		if (delta > 50) goToPrevious();
		setTouchStart(null);
	};

	useEffect(() => {
		const slideInterval = setInterval(goToNext, autoSlideInterval);
		return () => clearInterval(slideInterval);
	}, [goToNext, autoSlideInterval]);

	const slideVariants = {
		hiddenRight: { x: "100%", opacity: 0 },
		hiddenLeft: { x: "-100%", opacity: 0 },
		visible: {
			x: "0%",
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 20,
			},
		},
		exitRight: {
			x: "-100%",
			opacity: 0,
			transition: { duration: 0.3 },
		},
		exitLeft: {
			x: "100%",
			opacity: 0,
			transition: { duration: 0.3 },
		},
	};

	return (
		<div className={`relative w-full h-full overflow-hidden ${className}`}>
			<div className="relative w-full h-full" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
				<AnimatePresence initial={false} custom={direction}>
					<motion.img
						key={currentIndex}
						src={images[currentIndex]}
						alt={`Slide ${currentIndex + 1}`}
						className="absolute inset-0 object-cover w-full h-full"
						variants={slideVariants}
						initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
						animate="visible"
						exit={direction === "right" ? "exitLeft" : "exitRight"}
					/>
				</AnimatePresence>

				{/* Progress Indicators */}
				<div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[25] flex gap-2 sm:bottom-8">
					{images.map((_, idx) => (
						<motion.div
							key={idx}
							className={`h-1 sm:h-2 rounded-full ${idx === currentIndex ? "bg-white w-8" : "bg-white/30 w-4"}`}
							initial={{ width: "1rem" }}
							animate={{
								width: idx === currentIndex ? "2rem" : "1rem",
								backgroundColor: idx === currentIndex ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.3)",
							}}
							transition={{ duration: 0.3 }}
						/>
					))}
				</div>

				{/* Gradient Overlay */}
				<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
			</div>
		</div>
	);
};

export default Carousel;
