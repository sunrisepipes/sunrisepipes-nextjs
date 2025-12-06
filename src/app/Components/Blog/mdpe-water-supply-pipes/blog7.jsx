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
                  <div className="post-featured-thumb" data-background="/assets/images/blog/blogCardThumb3_1.png">
                  </div>
                  <div className="post-content">
                    <ul className="post-list d-flex align-items-center wow fadeInUp" data-wow-delay=".2s">
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
                    </ul>
                    <h3 className="wow fadeInUp" data-wow-delay=".4s">MDPE Water Supply Pipes – Reliable, Safe & Long-Lasting Solutions by Sunrise Pipes</h3>
                    <p className="mb-3 wow fadeInUp" data-wow-delay=".6s">
                      In India’s expanding residential, industrial, and agricultural sectors, the demand for safe and durable water supply systems is growing rapidly. Among the many options available, MDPE (Medium-Density Polyethylene) water supply pipes have become one of the most trusted choices for modern water distribution. Known for their strength, flexibility, and leak-proof performance, MDPE pipes ensure clean and uninterrupted water flow for various applications. Sunrise Pipes is a leading name in this category, offering high-quality MDPE water supply pipes designed for long-term reliability.
                    </p>
                    <p className="mb-3 wow fadeInUp" data-wow-delay=".8s">
                      MDPE water supply pipes are especially preferred because they are resistant to cracking, chemical reactions, and environmental stress. Their unique material composition makes them safer for carrying potable water without affecting taste or purity. MDPE pipes also perform exceptionally well under varying temperature and pressure conditions, making them suitable for rural and urban water distribution networks across India.
                    </p>
                    <p className="wow fadeInUp" data-wow-delay="1s">
                      One of the biggest advantages of MDPE pipes is their excellent flexibility and lightweight structure, which makes installation faster and more cost-effective. Unlike traditional metal pipes, MDPE pipes do not corrode, rust, or develop leakage issues over time. Their long service life and minimal maintenance requirements make them a smart investment for both small and large-scale water supply systems.
                    </p>
                    <p className="mt-4 mb-5 wow fadeInUp" data-wow-delay="1s">
                      Sunrise Pipes manufactures MDPE water supply pipes that meet strict industry standards and quality requirements. Each pipe is designed to deliver high flow efficiency and withstand pressure fluctuations, ensuring consistent water delivery. With a focus on durability, safety, and performance, Sunrise Pipes has become a trusted choice for households, contractors, and government water projects.<br/><br/>

                      If you are looking for strong, safe, and affordable MDPE water supply pipes in India, Sunrise Pipes provides dependable solutions that deliver long-lasting results.
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