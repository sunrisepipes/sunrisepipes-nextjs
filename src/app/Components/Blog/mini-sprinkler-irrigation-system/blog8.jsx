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
                    <h3 className="wow fadeInUp" data-wow-delay=".4s">Mini Sprinkler Irrigation System – Efficient Watering Solutions by Sunrise Pipes</h3>
                    <p className="mb-3 wow fadeInUp" data-wow-delay=".6s">
                      Modern farming in India demands irrigation systems that save water, improve crop growth, and reduce labor. One of the most effective methods for achieving this is the mini sprinkler irrigation system. Designed for uniform and gentle water distribution, mini sprinklers help farmers irrigate crops efficiently while reducing water wastage. Sunrise Pipes offers high-quality mini sprinkler irrigation systems that support better farming and long-lasting performance.
                    </p>
                    <p className="mb-3 wow fadeInUp" data-wow-delay=".8s">
                      A mini sprinkler irrigation system works by spraying water in fine droplets, similar to natural rain. This method ensures every plant receives the right amount of moisture, promoting healthy growth. It is especially effective for crops like vegetables, flowers, nurseries, pulses, fodder, and fruit plantations. Farmers prefer mini sprinklers because they cover a large area using low water pressure, making them suitable even in water-scarce regions.
                    </p>
                    <p className="wow fadeInUp" data-wow-delay="1s">
                      Sunrise Pipes manufactures durable and efficient mini sprinkler components designed to withstand harsh weather and long-term field use. The sprinklers provide uniform water distribution, preventing over-irrigation or waterlogging—common problems that affect crop quality. Their easy installation and compatibility with HDPE and MDPE pipelines make them a reliable solution for both small and large farms.
                    </p>
                    <p className="mt-4 mb-5 wow fadeInUp" data-wow-delay="1s">
                      One of the biggest advantages of Sunrise’s mini sprinkler systems is their water-saving capability. By delivering controlled water output, these systems help farmers reduce water usage while achieving higher productivity. They are also cost-effective, low maintenance, and ideal for Indian farming conditions. <br/> <br/>
                      
                      If you are looking for an efficient and long-lasting mini sprinkler irrigation system, Sunrise Pipes provides dependable solutions that help farmers increase yield and save water.
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