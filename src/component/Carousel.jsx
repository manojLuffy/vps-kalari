import React, { useCallback, useEffect, useState } from "react";

const Carousel = ({ images, className, autoSlideInterval = 5000 }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [touchStart, setTouchStart] = useState(null);
	const [touchEnd, setTouchEnd] = useState(null);

	const goToPrevious = useCallback(() => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	}, [currentIndex, images.length]);

	const goToNext = useCallback(() => {
		const isLastSlide = currentIndex === images.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	}, [currentIndex, images.length]);

	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};

	const handleTouchStart = (e) => {
		setTouchStart(e.targetTouches[0].clientX);
	};

	const handleTouchMove = (e) => {
		setTouchEnd(e.targetTouches[0].clientX);
	};

	const handleTouchEnd = () => {
		if (!touchStart || !touchEnd) return;
		const distance = touchStart - touchEnd;
		if (distance > 50) {
			goToNext();
		}
		if (distance < -50) {
			goToPrevious();
		}
		setTouchStart(null);
		setTouchEnd(null);
	};

	useEffect(() => {
		const slideInterval = setInterval(goToNext, autoSlideInterval);
		return () => clearInterval(slideInterval);
	}, [goToNext, autoSlideInterval]);

	return (
		<div className={`absolute inset-0 w-full h-full ${className}`}>
			<div className="relative w-full h-full" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
				{/* Image */}
				<img
					src={images[currentIndex]}
					alt={`Slide ${currentIndex + 1}`}
					className="absolute inset-0 object-cover w-full h-full transition-opacity duration-500"
				/>

				{/* Navigation Container */}
				<div className="absolute inset-0">
					{/* Left Navigation Area */}
					{/* <div className="absolute inset-y-0 left-0 z-[15] w-[75px] flex items-center justify-start px-2 sm:w-[100px] sm:px-4">
						<button
							onClick={goToPrevious}
							className="p-1 text-lg text-white transition-all rounded-full sm:p-2 sm:text-2xl bg-black/40 hover:bg-black/60 focus:outline-none hover:scale-110"
							aria-label="Previous slide">
							❮
						</button>
					</div> */}

					{/* Right Navigation Area */}
					{/* <div className="absolute inset-y-0 right-0 z-[15] w-[75px] flex items-center justify-end px-2 sm:w-[100px] sm:px-4">
						<button
							onClick={goToNext}
							className="p-1 text-lg text-white transition-all rounded-full sm:p-2 sm:text-2xl bg-black/40 hover:bg-black/60 focus:outline-none hover:scale-110"
							aria-label="Next slide">
							❯
						</button>
					</div> */}

					{/* Indicators */}
					<div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[15] flex gap-2 sm:bottom-8">
						{images.map((_, idx) => (
							<button
								key={idx}
								onClick={(e) => {
									e.stopPropagation();
									goToSlide(idx);
								}}
								className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
									idx === currentIndex ? "bg-white w-4 sm:w-6" : "bg-white/70 hover:bg-white"
								}`}
								aria-label={`Go to slide ${idx + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
