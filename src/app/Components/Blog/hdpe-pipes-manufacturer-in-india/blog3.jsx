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
                    <h3 className="wow fadeInUp" data-wow-delay=".4s">HDPE Pipes Manufacturer in India – Why Sunrise Pipes is a Trusted Name in the Industry</h3>
                    <p className="mb-3 wow fadeInUp" data-wow-delay=".6s">
                      In India’s fast-growing infrastructure and agricultural sectors, the need for strong, reliable, and cost-effective piping solutions is increasing rapidly. Among all available options, HDPE pipes have become the top choice for water supply, irrigation, sewage systems, and industrial fluid transport. If you are looking for a dependable HDPE pipes manufacturer in India, Sunrise Pipes stands out with its commitment to quality, innovation, and long-lasting performance.
                    </p>
                    <p className="mb-3 wow fadeInUp" data-wow-delay=".8s">
                      HDPE (High-Density Polyethylene) pipes are popular across India because they offer a perfect balance of flexibility, strength, and durability. These pipes are highly resistant to corrosion, chemicals, rust, and moisture, making them ideal for harsh soil conditions and extreme weather. Their fusion-welded joints ensure leak-free performance, reduce maintenance, and extend the overall life of the pipeline system.
                    </p>
                    <p className="wow fadeInUp" data-wow-delay="1s">
                      Unlike many other materials, HDPE pipes are lightweight and flexible, which makes transportation and installation faster, easier, and more cost-effective. Their flexibility also reduces the number of fittings required, helping prevent joint failures and improving system reliability. With a life expectancy of over 50 years, HDPE pipes are considered one of the most durable and sustainable choices for long-term infrastructure and agricultural projects.
                    </p>
                    <p className="mt-4 mb-5 wow fadeInUp" data-wow-delay="1s">
                      Sunrise Pipes continues to be a trusted manufacturer in this segment by delivering high-quality HDPE piping solutions designed for superior performance and long-term reliability.
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