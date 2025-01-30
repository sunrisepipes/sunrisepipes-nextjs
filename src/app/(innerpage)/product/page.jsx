import BreadCumb from "@/app/Components/Common/BreadCumb";
import Project1 from "@/app/Components/Project/Product1";
import HowWork3 from "@/app/Components/HowWork/HowWork3";
import About3 from "@/app/Components/About/About3";

import React from "react";

const page = () => {
	return (
		<div>
			<BreadCumb
				bgimg="/assets/images/bg/breadcumgBg.png"
				Title="Our Products"
			></BreadCumb>
			<About3
				img1="/assets/images/what-do.png"
				subtitle="What We offer"
				title="Sunrise Pipes We offer pipes for all sectors."
				content="From agriculture to industrial needs, our sunrise pipes are designed to cater to diverse sectors with unmatched quality and performance."
				boxtitle1="Expert Solutions for Agriculture"
				boxcontent1="Our pipes and irrigation systems ensure efficient water management for sustainable farming practices."
				boxtitle2="Reliable Infrastructure Applications"
				boxcontent2="Durable and dependable, our pipes support infrastructure projects across various industries."
			></About3>
			<Project1></Project1>
			<HowWork3></HowWork3>
		</div>
	);
};

export default page;
