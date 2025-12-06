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
                    <h3 className="wow fadeInUp" data-wow-delay=".4s">High Durability Water Pipes – Long-Lasting Performance by Sunrise Pipes</h3>
                    <p className="mb-3 wow fadeInUp" data-wow-delay=".6s">
                      In India, where water supply systems are exposed to varying temperatures, soil conditions, and high usage, choosing the right pipeline is essential for long-term performance. This is why high durability water pipes have become a preferred choice for households, industries, agriculture, and government water projects. Sunrise Pipes is one of the leading manufacturers offering strong, reliable, and long-lasting water pipes designed to handle tough conditions efficiently.
                    </p>
                    <p className="mb-3 wow fadeInUp" data-wow-delay=".8s">
                      High durability water pipes are built to withstand corrosion, chemical reactions, rust, and environmental stress. Whether installed underground, in open fields, or in industrial zones, these pipes maintain their strength and performance without cracking or degrading over time. Their robust structure ensures smooth water flow, reduced leakage, and minimum maintenance—making them a smart investment for long-term use.
                    </p>
                    <p className="wow fadeInUp" data-wow-delay="1s">
                      Sunrise Pipes manufactures premium-quality HDPE and MDPE water pipes that meet strict quality and safety standards. These pipes are designed to handle high pressure, making them suitable for water distribution networks, irrigation systems, and industrial water supply. Their flexibility and lightweight nature also make installation faster and more cost-effective, even in uneven or challenging terrains.
                    </p>
                    <p className="mt-4 mb-5 wow fadeInUp" data-wow-delay="1s">
                      One of the biggest advantages of using Sunrise’s high durability pipes is their long service life. Unlike traditional metal pipes that corrode or break down, Sunrise Pipes offer over 50 years of reliable performance. This ensures a continuous and safe water supply for households, farms, factories, and large-scale projects.
                      <br/> <br/>
                      If you’re looking for high durability water pipes that offer strength, stability, and long-term value, Sunrise Pipes provides the perfect solution.
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