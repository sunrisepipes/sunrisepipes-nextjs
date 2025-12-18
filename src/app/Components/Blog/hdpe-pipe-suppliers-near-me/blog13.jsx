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
                    <h3 className="wow fadeInUp" data-wow-delay=".4s">HDPE Pipe Suppliers Near Me – Trusted Quality & Fast Supply by Sunrise Pipes</h3>
                    <p className="mb-3 wow fadeInUp" data-wow-delay=".6s">
                      When searching for HDPE pipe suppliers near me, customers are usually looking for reliable quality, quick availability, and long-lasting performance. HDPE pipes are widely used for water supply, agriculture, drainage, and industrial applications due to their strength and flexibility. Sunrise Pipes is a trusted HDPE pipe manufacturer and supplier offering high-quality piping solutions to customers across India.
                    </p>
                    <p className="mb-3 wow fadeInUp" data-wow-delay=".8s">
                      Choosing a nearby HDPE pipe supplier ensures faster delivery, lower transportation costs, and better after-sales support. Sunrise Pipes supplies durable HDPE pipes that meet industry standards and perform efficiently in different environments. Whether the requirement is for a small agricultural project or a large infrastructure job, Sunrise Pipes delivers consistent quality and dependable service.
                    </p>
                    <p className="wow fadeInUp" data-wow-delay="1s">
                      HDPE pipes from Sunrise Pipes are resistant to corrosion, chemicals, and weather conditions, making them ideal for underground and outdoor use. Their leak-proof joints and smooth inner surface ensure efficient water flow with minimal maintenance. Available in multiple sizes, pressure ratings, and material grades, these pipes suit a wide range of applications.
                    </p>
                    <p className="mt-4 mb-5 wow fadeInUp" data-wow-delay="1s">
                      Sunrise Pipes also supports dealers, contractors, and project developers by ensuring steady supply and technical guidance. With a strong distribution network and manufacturing facility in Rajasthan, Sunrise Pipes serves customers looking for reliable HDPE pipe suppliers in nearby regions and beyond. <br/> <br/>
                      
                      If you are searching online for HDPE pipe suppliers near me, Sunrise Pipes offers high-quality products, timely delivery, and trusted performance.<br/>
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