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
                    <h3 className="wow fadeInUp" data-wow-delay=".4s">Potable Water Pipeline HDPE – Safe & Reliable Water Supply by Sunrise Pipes</h3>
                    <p className="mb-3 wow fadeInUp" data-wow-delay=".6s">
                      Clean and safe drinking water is essential for every household, industry, and community. To ensure hygienic and long-lasting water distribution, HDPE potable water pipelines are widely used across India. Known for their safety, durability, and leak-free performance, HDPE pipes are the preferred choice for modern water supply systems. Sunrise Pipes manufactures high-quality HDPE pipelines designed specifically for potable water applications.
                    </p>
                    <p className="mb-3 wow fadeInUp" data-wow-delay=".8s">
                      HDPE pipes are ideal for potable water because they are non-toxic, corrosion-resistant, and do not affect the taste or quality of water. Unlike metal pipes, HDPE does not rust or react with chemicals, ensuring a clean and safe drinking water supply. Their smooth inner surface allows efficient water flow and prevents the buildup of contaminants over time.
                    </p>
                    <p className="wow fadeInUp" data-wow-delay="1s">
                      One of the key benefits of HDPE potable water pipelines is their leak-proof jointing system. Fusion-welded joints create a strong, continuous pipeline that minimizes water loss and reduces maintenance costs. This makes HDPE pipelines suitable for both urban water distribution networks and rural drinking water projects.
                    </p>
                    <p className="mt-4 mb-5 wow fadeInUp" data-wow-delay="1s">
                      Sunrise Pipes manufactures HDPE potable water pipes that comply with national quality standards and are tested for pressure, strength, and long-term performance. These pipes are lightweight, easy to install, and capable of withstanding high pressure and varying soil conditions, making them ideal for underground water supply systems. <br/> <br/>
                      
                      If you are looking for a safe, durable, and efficient potable water pipeline HDPE solution, Sunrise Pipes provides reliable piping systems designed to deliver clean drinking water for years.<br/>
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