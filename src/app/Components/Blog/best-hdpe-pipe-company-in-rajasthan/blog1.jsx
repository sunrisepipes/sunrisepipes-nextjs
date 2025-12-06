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
                    <h3 className="wow fadeInUp" data-wow-delay=".4s">Best HDPE Pipe Company in Rajasthan – Sunrise Pipes Leading the Way in Quality & Durability</h3>
                    <p className="mb-3 wow fadeInUp" data-wow-delay=".6s">
                      Rajasthan’s growing agricultural, industrial, and rural development sectors demand strong, reliable, and long-lasting piping solutions. With harsh climate conditions, high temperatures, and challenging soil types, the state needs pipelines that can perform without corrosion, leakage, or frequent maintenance. This is where Sunrise Pipes has earned its reputation as one of the best HDPE pipe companies in Rajasthan, offering high-performance pipes designed to meet the region’s tough requirements.
                    </p>
                    <p className="mb-3 wow fadeInUp" data-wow-delay=".8s">
                      Sunrise Pipes manufactures premium-grade HDPE pipes known for their strength, flexibility, and long service life. These pipes are resistant to chemicals, rust, and environmental stress, making them perfect for water supply, irrigation, drainage, and industrial applications across the state. Whether it’s for agricultural fields in rural Rajasthan or infrastructure projects in growing industrial areas, Sunrise Pipes delivers solutions that ensure consistent and efficient water flow.
                    </p>
                    <p className="wow fadeInUp" data-wow-delay="1s">
                      Farmers across Rajasthan prefer Sunrise HDPE pipes because they are lightweight, easy to install, and highly durable even in extreme weather conditions. Their flexibility helps the pipes adapt to uneven land, while fusion-welded joints ensure leak-free performance. These benefits make Sunrise Pipes a trusted choice for drip irrigation, sprinkler systems, borewell connections, and agricultural water supply.
                    </p>
                    <p className="mt-4 mb-5 wow fadeInUp" data-wow-delay="1s">
                      Sunrise Pipes stands out in the industry due to its commitment to quality and compliance with national standards. Every pipe is manufactured using advanced technology and tested for pressure, strength, and long-term performance. The brand focuses on producing HDPE pipes in multiple grades and diameters, offering solutions for small farms to large infrastructure projects. <br/><br/>

                      If you are searching for the best HDPE pipe company in Rajasthan, Sunrise Pipes provides dependable, high-quality, and cost-effective piping solutions suitable for all types of applications.
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