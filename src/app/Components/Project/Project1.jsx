import ProjectCard from "../Card/ProjectCard";

const Project1 = () => {
	return (
		<section className="project-section section-padding fix">
			<div className="container">
				<div className="row gy-4">
					<div className="col-xl-6 col-md-6">
						<ProjectCard
							img="/assets/images/project/projectThumb1_1.jpg"
							title="HDPE Pipes"
							btnname="View Products"
						></ProjectCard>
					</div>
					<div className="col-xl-6 col-md-6">
						<div className="row gy-4">
							<div className="col-md-6">
								<ProjectCard
									img="/assets/images/project/projectThumb1_2.jpg"
									title="Sprinkler Irrigation System"
									btnname="View Products"
								></ProjectCard>
							</div>
							<div className="col-md-6">
								<ProjectCard
									img="/assets/images/project/projectThumb1_3.jpg"
									title="MINI Sprinkler System"
									btnname="View Products"
								></ProjectCard>
							</div>
							<div className="col-md-6">
								<ProjectCard
									img="/assets/images/project/projectThumb1_4.jpg"
									title="MDPE Pipes"
									btnname="View Products"
								></ProjectCard>
							</div>
							{/* <div className="col-md-6">
								<ProjectCard
									img="/assets/images/project/projectThumb1_5.jpg"
									title="HDPE Accessories"
									btnname="View Products"
								></ProjectCard>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Project1;
