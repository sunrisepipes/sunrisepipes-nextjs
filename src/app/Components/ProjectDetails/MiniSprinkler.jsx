"use client";
import Slider from "react-slick";
import data from "../../Data/productMiniSprinkler.json";
import Image from "next/image";
const MiniSprinkler = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 2000,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		swipeToSlide: true,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1399,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<section className="project-details-section section-padding fix">
			<div className="project-details-container-wrapper">
				<div className="container">
					<div className="project-details-wapper">
						<div className="row">
							<div className="single-desc">
								<div className="row gy-5">
									<div className="col-12">
										<h3 className="single-desc-title">
											Mini Sprinkler Description
										</h3>
										<p className="text1">
											Mini Sprinkler Systems are an
											efficient and cost-effective
											irrigation solution designed to
											deliver water uniformly to crops,
											lawns, and gardens. These systems
											are ideal for small to medium-sized
											areas, providing gentle and precise
											water distribution that promotes
											healthy plant growth. The sprinklers
											are engineered to offer adjustable
											spray patterns and flow rates,
											making them suitable for a variety
											of applications, including
											nurseries, orchards, vegetable
											fields, and landscaped gardens. With
											a focus on conserving water, mini
											sprinklers ensure that every drop is
											utilized effectively, minimizing
											waste and maximizing efficiency.
										</p>

										<p className="text2">
											Built with high-quality, durable
											materials, Mini Sprinkler Systems
											are resistant to corrosion, UV
											degradation, and clogging, ensuring
											long-lasting performance even in
											harsh environmental conditions.
											These systems are easy to install,
											operate, and maintain, making them a
											popular choice for farmers and
											gardeners alike. Whether used for
											precise spot irrigation or for
											maintaining soil moisture, Mini
											Sprinkler Systems provide a reliable
											and eco-friendly irrigation
											solution, supporting sustainable
											agricultural and landscaping
											practices.
										</p>
									</div>
								</div>
							</div>
							<div className="col-12">
								<div className="main-thumb">
									<img
										src="/assets/images/product/projecDetailstThumb1_1.jpg"
										alt="thumb"
									/>
								</div>
							</div>
							<div className="col-xl-4 col-md-6">
								<div className="fancy-box style4">
									<div className="content">
										<h5>Materials</h5>
										<p className="text">PE-63</p>
										<p className="text">PE-80</p>
										<p className="text">PE-100</p>
									</div>
									<div className="icon-box style2">
										<Image
											src="/assets/images/icon/projectDetailsIcon1_1.svg"
											alt="img"
											width={49}
											height={49}
										/>
									</div>
								</div>
							</div>
							<div className="col-xl-4 col-md-6">
								<div className="fancy-box style4">
									<div className="content">
										<h5>Pressure</h5>
										<p className="text">2.5 bar</p>
										<p className="text">4 bar</p>
										<p className="text">6 bar</p>
										<p className="text">8 bar</p>
										<p className="text">10 bar</p>
									</div>
									<div className="icon-box style2">
										<Image
											src="/assets/images/icon/projectDetailsIcon1_2.svg"
											alt="img"
											width={50}
											height={50}
										/>
									</div>
								</div>
							</div>
							<div className="col-xl-4 col-md-6">
								<div className="fancy-box style4">
									<div className="content">
										<h5>Range</h5>
										<p className="text">20mm - 200mm</p>
									</div>
									<div className="icon-box style2">
										<Image
											src="/assets/images/icon/projectDetailsIcon1_3.svg"
											alt="img"
											width={50}
											height={42}
										/>
									</div>
								</div>
							</div>
							{/* 
							<div className="testimonial-wrap">
								<div className="row gy-5">
									<div className="col-xl-12">
										<div className="testimonial-card">
											<div className="tesimonial-content">
												<div className="icon">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="53"
														height="38"
														viewBox="0 0 53 38"
														fill="none"
													>
														<path
															d="M52.5 23.4375C52.5 31.207 46.207 37.5 38.4375 37.5H37.5C35.4258 37.5 33.75 35.8242 33.75 33.75C33.75 31.6758 35.4258 30 37.5 30H38.4375C42.0586 30 45 27.0586 45 23.4375V22.5H37.5C33.3633 22.5 30 19.1367 30 15V7.5C30 3.36328 33.3633 0 37.5 0H45C49.1367 0 52.5 3.36328 52.5 7.5V11.25V15V23.4375ZM22.5 23.4375C22.5 31.207 16.207 37.5 8.4375 37.5H7.5C5.42578 37.5 3.75 35.8242 3.75 33.75C3.75 31.6758 5.42578 30 7.5 30H8.4375C12.0586 30 15 27.0586 15 23.4375V22.5H7.5C3.36328 22.5 0 19.1367 0 15V7.5C0 3.36328 3.36328 0 7.5 0H15C19.1367 0 22.5 3.36328 22.5 7.5V11.25V15V23.4375Z"
															fill="#7444FD"
														/>
													</svg>
												</div>
												<p className="text3">
													And the day came when the
													risk to remain tight in a
													bud was more painful than
													the risk it took to blossom.
												</p>
											</div>
											<div className="testimonial-author">
												– BILLI REUSS
											</div>
										</div>
									</div>
								</div>
							</div> 
							*/}
							<div className="single-desc2">
								<div className="row gy-5">
									<div className="col-12">
										<h3 className="single-desc-title">
											Application Areas of Mini Sprinkler System
										</h3>

										<ul className="text1">
											<li>
												<strong>
													Agricultural Fields:
												</strong>{" "}
												Ideal for irrigating vegetable
												crops, pulses, and other row
												crops with precise and uniform
												water distribution.
											</li>
											<li>
												<strong>Orchards:</strong>{" "}
												Perfect for watering fruit trees
												such as mango, citrus, and
												guava, ensuring optimal soil
												moisture around the root zone.
											</li>
											<li>
												<strong>
													Plant Nurseries:
												</strong>{" "}
												Provides gentle and controlled
												irrigation for delicate plants
												and seedlings in nurseries.
											</li>
											<li>
												<strong>Greenhouses:</strong>{" "}
												Maintains a consistent humidity
												level and uniform irrigation for
												plants grown in controlled
												environments.
											</li>
											<li>
												<strong>
													Lawns and Gardens:
												</strong>{" "}
												Efficient for maintaining
												residential and commercial
												lawns, as well as ornamental
												gardens, with minimal water
												waste.
											</li>
											<li>
												<strong>
													Hilly or Undulating
													Terrains:
												</strong>{" "}
												Suitable for irrigation in
												uneven landscapes where
												conventional methods may be less
												effective.
											</li>
											<li>
												<strong>Floriculture:</strong>{" "}
												Provides precise water
												distribution for flower crops,
												enhancing their growth and
												yield.
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div className="slider-area projectSliderThree">
								<div
									className="swiper gt-slider"
									id="projectSliderThree"
								>
									<div className="swiper-wrapper cs_slider_gap_301">
										<Slider {...settings}>
											{data.map((item, index) => (
												<div
													key={index}
													className="swiper-slide"
												>
													<div className="project-thumb">
														<img
															src={item.img}
															alt="thumb"
														/>
													</div>
												</div>
											))}
										</Slider>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MiniSprinkler;
