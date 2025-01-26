"use client";
import Slider from "react-slick";
import data from "../../Data/productMdpe.json";
import Image from "next/image";
const MdpePipes = () => {
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
											Mdpe Description
										</h3>
										<p className="text1">
											Medium-Density Polyethylene (MDPE)
											pipes are renowned for their
											flexibility, durability, and
											excellent resistance to
											environmental stress and chemical
											corrosion. These pipes are
											lightweight yet incredibly strong,
											making them ideal for a variety of
											applications. With a smooth inner
											surface, MDPE pipes ensure efficient
											fluid flow while minimizing energy
											losses, making them an economical
											choice for water distribution and
											gas pipelines. Manufactured to the
											highest quality standards, MDPE
											pipes are designed to withstand high
											pressure and adverse weather
											conditions, ensuring a long lifespan
											and minimal maintenance.
										</p>

										<p className="text2">
											MDPE pipes are widely used for water
											supply systems, gas distribution,
											and irrigation applications due to
											their versatility and reliability.
											Their excellent resistance to impact
											and cracking makes them suitable for
											underground installations. MDPE
											pipes are also environmentally
											friendly as they are 100% recyclable
											and contribute to sustainable
											infrastructure solutions. With their
											ability to perform under a wide
											range of temperatures and pressures,
											MDPE pipes are a trusted choice for
											both domestic and industrial needs.
										</p>
									</div>
								</div>
							</div>
							<div className="col-12">
								<div className="main-thumb">
									<img
										src="/assets/images/product/projecDetailstThumb1_2.jpg"
										alt="thumb"
									/>
								</div>
							</div>
							<div className="col-xl-4 col-md-6">
								<div className="fancy-box style4">
									<div className="content">
										<h5>Materials</h5>
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
										<p className="text">4 bar</p>
										<p className="text">5 bar</p>
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
										<p className="text">20mm - 140mm</p>
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

							<div className="single-desc2">
								<div className="row gy-5">
									<div className="col-12">
										<h3 className="single-desc-title">
											Application Areas of MDPE Pipes
										</h3>

										<ul className="text1">
											<li>
												<strong>
													Water Supply Systems:
												</strong>{" "}
												Ideal for potable water
												distribution in residential,
												commercial, and industrial areas
												due to their non-toxic nature
												and resistance to corrosion.
											</li>
											<li>
												<strong>
													Gas Distribution Networks:
												</strong>{" "}
												Widely used for the safe and
												efficient transport of natural
												gas and LPG, thanks to their
												high pressure and impact
												resistance.
											</li>
											<li>
												<strong>
													Irrigation Systems:
												</strong>{" "}
												Perfect for agricultural
												irrigation networks, drip
												irrigation, and sprinkler
												systems, ensuring optimal water
												delivery for crops.
											</li>
											<li>
												<strong>
													Underground Pipe Networks:
												</strong>{" "}
												Used in underground
												installations for sewer systems
												and other fluid transport due to
												their durability and ability to
												withstand soil movement.
											</li>
											<li>
												<strong>
													Industrial Applications:
												</strong>{" "}
												Suitable for transporting
												chemicals, slurry, and
												industrial fluids due to their
												resistance to corrosion and
												chemical degradation.
											</li>
											<li>
												<strong>
													Telecommunication and
													Electrical Cable Protection:
												</strong>{" "}
												Acts as conduit pipes to protect
												cables from external damage,
												ensuring reliability and
												longevity in installations.
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

export default MdpePipes;
