"use client"
import { useEffect } from "react";
import loadBackgroudImages from "../../Common/loadBackgroudImages";
import Link from "next/link";
import Image from "next/image";

const BlogDetails = () => {

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="news-standard section-padding fix">
      <div className="container">
        <div className="news-details-area">
          <div className="row g-5">
            <div className="col-12 col-lg-12">
              <div className="blog-post-details">
                <div className="single-blog-post">
                  {/* <div className="post-featured-thumb" data-background="/assets/images/blog/blogCardThumb3_1.png">
                  </div> */}
                  <div className="post-content">
                    {/* <ul className="post-list d-flex align-items-center wow fadeInUp" data-wow-delay=".2s">
                      <li>
                        <i className="bi bi-person"></i>
                        By Admin
                      </li>
                      <li>
                        <i className="bi bi-chat"></i>
                        2 Comments
                      </li>
                      <li>
                        <Image src="/assets/images/icon/tagIcon.png" alt="img" width={20} height={20} />
                        IT Services
                      </li>
                    </ul> */}
                    <h3 className="wow fadeInUp" data-wow-delay=".4s">DWC Pipes for Drainage – Strong & Reliable Solutions by Sunrise Pipes</h3>
                    <p className="mb-3 wow fadeInUp" data-wow-delay=".6s">
                      Effective drainage systems are essential for managing wastewater, rainwater, and underground flow in urban, industrial, and infrastructure projects. To ensure long-lasting performance, the right type of pipe is critical. DWC (Double Wall Corrugated) pipes for drainage have become a preferred solution due to their strength, durability, and high load-bearing capacity. Sunrise Pipes offers premium-quality DWC pipes designed to deliver reliable drainage performance in all conditions.
                    </p>
                    <p className="mb-3 wow fadeInUp" data-wow-delay=".8s">
                      DWC drainage pipes feature a double-layer structure with a corrugated outer wall for strength and a smooth inner wall for efficient water flow. This unique design allows the pipes to handle heavy loads while ensuring minimal friction and faster discharge. These properties make DWC pipes ideal for underground drainage applications, especially in areas with high soil pressure or traffic load.
                    </p>
                    <p className="wow fadeInUp" data-wow-delay="1s">
                      One of the biggest advantages of DWC pipes is their excellent resistance to corrosion, chemicals, and moisture. Unlike traditional concrete or metal pipes, DWC pipes do not crack, rust, or degrade over time. This makes them suitable for sewage systems, stormwater drainage, road drainage, industrial effluent lines, and cable protection ducts.
                    </p>
                    <p className="mt-4 mb-5 wow fadeInUp" data-wow-delay="1s">
                      Sunrise Pipes manufactures high-quality DWC pipes that are lightweight, easy to install, and highly durable. Their flexibility allows them to adapt to uneven terrain, reducing installation time and cost. The pipes are designed to withstand harsh environmental conditions while maintaining consistent performance for years. <br/> <br/>
                      
                      With a long service life and low maintenance requirements, DWC pipes from Sunrise Pipes offer a cost-effective solution for modern drainage systems. Each pipe is manufactured using advanced technology and tested to meet strict quality standards, ensuring reliability and strength in every application.<br/> <br/>

                      If you are looking for durable and efficient DWC pipes for drainage, Sunrise Pipes provides dependable solutions for infrastructure, municipal, and industrial projects.
                    </p>
                  </div>
                </div>
                <div className="comment-form-wrap pt-5 wow fadeInUp" data-wow-delay="1.2s">
                  <h3>Leave a comments</h3>
                  <form id="contact-form">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input type="text" name="name" id="name" placeholder="Your Name" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input type="text" name="email" id="email2" placeholder="Your Email" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-clt">
                          <textarea name="message" id="message"
                            placeholder="Write Message"></textarea>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <button type="submit" className="theme-btn">
                          Post a Comment
                          <i className="bi bi-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;