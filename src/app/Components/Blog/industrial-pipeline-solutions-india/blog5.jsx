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
                    <h3 className="wow fadeInUp" data-wow-delay=".4s">Industrial Pipeline Solutions in India – Sunrise Pipes Delivering Strength, Safety & Reliability</h3>
                    <p className="mb-3 wow fadeInUp" data-wow-delay=".6s">
                      India’s industrial sector is expanding rapidly, with rising demand from manufacturing, chemical plants, refineries, construction, mining, and water management projects. To support this growth, industries need strong, reliable, and long-lasting pipeline systems that can handle high pressure, harsh environments, and continuous operations. This is where Sunrise Pipes plays a key role by offering advanced industrial pipeline solutions in India designed for performance, safety, and durability.
                    </p>
                    <p className="mb-3 wow fadeInUp" data-wow-delay=".8s">
                      Industrial pipelines require materials that can withstand chemical exposure, temperature variations, and heavy usage. Sunrise Pipes manufactures high-quality HDPE, MDPE, and DWC pipes that meet these exact needs. These pipes are corrosion-resistant, leak-proof, and engineered to perform efficiently in demanding industrial conditions. Whether it’s fluid transfer, drainage, cable protection, or water supply, Sunrise Pipes provides dependable solutions for every type of industrial application.
                    </p>
                    <p className="wow fadeInUp" data-wow-delay="1s">
                      HDPE and MDPE pipes from Sunrise Pipes are known for their flexibility, strength, and long service life. Their fusion-welded joints reduce leakage risks, ensuring smooth and uninterrupted flow across pipelines. These pipes also maintain consistent performance even under high pressure, making them suitable for chemical transport, industrial water systems, and underground installations. DWC pipes add further value by offering strong protective layers for cable ducting and heavy-duty drainage.
                    </p>
                    <p className="mt-4 mb-5 wow fadeInUp" data-wow-delay="1s">
                      Sunrise Pipes focuses on delivering products that meet industry standards and quality requirements. Every pipe is manufactured using modern machinery and tested for durability, pressure, and environmental resistance. Industries across India trust Sunrise Pipes for their easy installation, low maintenance, and cost-effective performance, making the brand a preferred partner for large-scale projects. <br/> <br/>
                      If you are searching for reliable industrial pipeline solutions in India, Sunrise Pipes offers strong, safe, and long-lasting pipes designed for every industrial need.
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