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
                    <h3 className="wow fadeInUp" data-wow-delay=".4s">ISO Certified Pipe Manufacturer – Quality & Reliability by Sunrise Pipes</h3>
                    <p className="mb-3 wow fadeInUp" data-wow-delay=".6s">
                      When selecting pipes for water supply, agriculture, drainage, or industrial use, quality and safety are critical. Choosing an ISO certified pipe manufacturer ensures that the products meet international standards for consistency, durability, and performance. Sunrise Pipes is a trusted ISO certified manufacturer, delivering high-quality piping solutions designed for long-term reliability.
                    </p>
                    <p className="mb-3 wow fadeInUp" data-wow-delay=".8s">
                      ISO certification reflects a company’s commitment to strict quality control, advanced manufacturing processes, and customer satisfaction. At Sunrise Pipes, every stage of production is carefully monitored—from raw material selection to final testing. This ensures that each pipe delivers consistent performance and meets industry expectations across all applications.
                    </p>
                    <p className="wow fadeInUp" data-wow-delay="1s">
                      Sunrise Pipes manufactures a wide range of HDPE, MDPE, and DWC pipes suitable for potable water supply, irrigation systems, underground drainage, and industrial pipelines. These pipes are resistant to corrosion, chemicals, and environmental stress, making them ideal for Indian operating conditions. Their strength and flexibility also help reduce leakage and maintenance costs.
                    </p>
                    <p className="mt-4 mb-5 wow fadeInUp" data-wow-delay="1s">
                      Being an ISO certified pipe manufacturer, Sunrise Pipes follows standardized testing procedures to ensure pressure resistance, durability, and long service life. The use of modern machinery and skilled professionals ensures precision, safety, and reliability in every product. <br/> <br/>
                      
                      If you are looking for a dependable ISO certified pipe manufacturer, Sunrise Pipes offers quality-driven solutions that combine performance, durability, and value.<br/>
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