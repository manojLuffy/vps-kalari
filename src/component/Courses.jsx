import React, { useEffect } from "react";
import { courseData } from "./CourseData/courseData";
import Header from "./Common/Header";
import Footer from "./Common/Footer";

const Courses = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="bg-gray-200">
			<Header />
			<main className="isolate">
				<div className="relative isolate -z-10">
					<div className="overflow-hidden">
						<div className="px-6 pb-16 mx-auto mt-6 max-w-7xl pt-36 sm:pt-32 lg:px-8 lg:pt-32"></div>
					</div>
				</div>
				<div className="container px-4 mx-auto font-sans md:px-16 lg:px-32">
					<h1 className="mb-8 text-4xl font-bold text-center md:text-5xl">Our Kalari Courses</h1>
					<p className="mb-12 text-lg leading-relaxed text-center text-gray-700">
						Experience the joy of learning Kalaripayattu with a curriculum designed exclusively for you at VPS Kalari! We believe every learner is
						unique, and we strive to create a personalized and enriching experience to help you achieve your goals.
					</p>

					<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
						{courseData.map((course) => (
							<div
								key={course.id}
								className="overflow-hidden transition duration-300 ease-in-out transform bg-white rounded-lg shadow-lg hover:scale-105">
								{" "}
								<div className="p-6">
									<h2 className="mb-2 text-2xl font-bold">{course.title}</h2>
									{course.duration && (
										<p className="mb-2 text-gray-600">
											<span className="font-bold">Duration:</span> {course.duration}
										</p>
									)}
									<p className="mb-4 leading-relaxed text-gray-700">
										<div>
											{" "}
											{course.description.split("\n").map((paragraph, index) => (
												<p key={index} className="mb-3">
													{paragraph.startsWith("Course Highlights:") || // Check for "Course Highlights:"
													paragraph.startsWith("Course Overview:") || // Check for "Course Overview:"
													paragraph.startsWith("Duration:") ? ( // Check for "Duration:"
														<span
															dangerouslySetInnerHTML={{
																__html: paragraph.replace(/(Course Highlights:|Course Overview:|Duration:)/g, "<strong>$&</strong>"),
															}}
														/>
													) : (
														<span dangerouslySetInnerHTML={{ __html: paragraph }} />
													)}
												</p>
											))}
										</div>
									</p>
									{/* Link to Course Details (if applicable) */}
									{course.link && (
										<a
											href={course.link}
											className="inline-block px-4 py-2 font-medium text-white transition duration-300 bg-black rounded-full hover:bg-gray-800">
											Learn More
										</a>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Courses;
