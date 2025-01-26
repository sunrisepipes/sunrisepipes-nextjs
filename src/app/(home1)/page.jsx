import React from "react";
import HeroBanner3 from "../Components/HeroBanner/HeroBanner3";
import Feature4 from "../Components/Feature/Feature4";
import Feature5 from "../Components/Feature/Feature5";
import Feature6 from "../Components/Feature/Feature6";
import HowWork3 from "../Components/HowWork/HowWork3";
import Pricing3 from "../Components/Pricing/Pricing3";
import Counter1 from "../Components/Counter/Counter1";
import About3 from "../Components/About/About3";
import Brand3 from "../Components/Brand/Brand1";
import Testimonial from "../Components/Testimonial/Testimonial";
import Blog1 from "../Components/Blog/Blog1";

const page = () => {
	return (
		<div>
			<HeroBanner3
				bgimg="/assets/images/hero/hero-bg2.png"
				subtitle="Sunries Pipes"
				title="Revolutionizing Piping Solutions for a <span>Sustainable Future<span/>"
				content="Explore our high-quality HDPE Pipes, Sprinkler Systems, and Accessories, designed to enhance efficiency, durability, and performance for agriculture, infrastructure, and beyond."
				btnname="Explore Our Products"
				btnurl="/project"
				btnname2="Learn More"
				btnurl2="/about"
				img1="/assets/images/hero/01.png"
				img2="/assets/images/hero/mobile.png"
			></HeroBanner3>
			<Brand3></Brand3>
			<Feature4
				img="/assets/images/about/01.png"
				subtitle="What we do"
				title="We Deliver Excellence with Every Pipe"
				content="With decades of experience and a passion for innovation, we craft durable, reliable, and sustainable piping solutions for agriculture, infrastructure, and beyond."
				FeatureList={[
					"<b>Unmatched Expertise :</b> <span>  Backed by over 30 years of experience in plastic manufacturing</span>",
					"<b>Cutting-Edge Technology :</b> <span> Advanced manufacturing processes for superior performance.</span>",
					"<b>Certified Quality :</b> <span> Products that adhere to international standards like IS: 4427 and IS: 12786.</span>",
					"<b>Customer-Centric Solutions :</b> <span>  Tailored to meet the diverse needs of our clients.</span>",
				]}
				btnname="Learn More"
				btnurl="/contact"
			></Feature4>
			{/* <Feature5></Feature5> */}
			<Feature6></Feature6>
			<HowWork3></HowWork3>
			<Counter1 ></Counter1>
			<About3
				img1="/assets/images/what-do.png"
				subtitle="What We Do"
				title="We offer pipes for all sectors."
				content="From agriculture to industrial needs, our pipes are designed to cater to diverse sectors with unmatched quality and performance."
				boxtitle1="Expert Solutions for Agriculture"
				boxcontent1="Our pipes and irrigation systems ensure efficient water management for sustainable farming practices."
				boxtitle2="Reliable Infrastructure Applications"
				boxcontent2="Durable and dependable, our pipes support infrastructure projects across various industries."
			></About3>
			{/* <Brand3></Brand3> */}
			<Testimonial></Testimonial>
		</div>
	);
};

export default page;
