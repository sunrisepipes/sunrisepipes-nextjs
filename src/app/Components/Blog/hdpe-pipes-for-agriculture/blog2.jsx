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
                    <h3 className="wow fadeInUp" data-wow-delay=".4s">
                      HDPE Pipes for Agriculture – Strong, Flexible & Long-Lasting Solutions by Sunrise Pipes
                    </h3>
                    <p className="mb-3 wow fadeInUp" data-wow-delay=".6s">
                      In India, agriculture depends heavily on reliable and efficient water supply systems. Farmers need pipelines that can withstand tough field conditions, high water pressure, and long-term exposure to sunlight and chemicals. This is why HDPE pipes for agriculture have become one of the most preferred choices across the country. Known for their strength, flexibility, and long service life, HDPE pipes ensure smooth and uninterrupted water flow for every type of farm. Sunrise Pipes offers high-quality HDPE agricultural pipes designed to support modern irrigation needs and deliver long-lasting performance.
                    </p>
                    <p className="mb-3 wow fadeInUp" data-wow-delay=".8s">
                      HDPE agricultural pipes are highly resistant to corrosion, rust, and chemical reactions, making them ideal for use in Indian farmlands. Whether the soil is acidic, rocky, or exposed to harsh weather, these pipes maintain their strength and do not crack or degrade. Their flexibility allows easy installation even in uneven fields, while the fusion-welded joints minimize leakage and ensure efficient water usage—an essential factor in today’s water-scarce farming areas.
                    </p>
                    <p className="wow fadeInUp" data-wow-delay="1s">
                      One of the major advantages of HDPE pipes in agriculture is their lightweight structure, which makes handling and installation simple for farmers. These pipes are suitable for various irrigation systems including drip, sprinkler, and mini-sprinkler setups. Their smooth inner surface allows faster water flow with less friction, helping farmers save energy and improve irrigation efficiency.
                    </p>
                    <p className="mt-4 mb-5 wow fadeInUp" data-wow-delay="1s">
                      Sunrise Pipes manufactures premium-grade HDPE agricultural pipes that follow strict quality standards and deliver high performance in every season. Built using durable PE material grades like PE-63, PE-80, and PE-100, these pipes can withstand high pressure, rough usage, and long hours of water flow. Farmers trust Sunrise Pipes for consistent quality, reliability, and affordability. <br/> <br/>

                      If you’re looking for strong, durable, and cost-effective HDPE pipes for agriculture, Sunrise Pipes provides solutions that help farmers increase productivity and reduce maintenance costs.
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