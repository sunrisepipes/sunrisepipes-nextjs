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
                    <h3 className="wow fadeInUp" data-wow-delay=".4s">DWC Underground Drainage Pipes – Durable & Efficient Solutions by Sunrise Pipes</h3>
                    <p className="mb-3 wow fadeInUp" data-wow-delay=".6s">
                      Modern infrastructure projects require drainage systems that are strong, reliable, and capable of handling heavy underground loads. This is why DWC underground drainage pipes are widely used in urban development, highways, industrial zones, and residential projects. Designed for long-term performance, Sunrise Pipes offers high-quality DWC pipes that ensure efficient underground drainage with maximum durability.
                    </p>
                    <p className="mb-3 wow fadeInUp" data-wow-delay=".8s">
                      DWC (Double Wall Corrugated) underground drainage pipes feature a corrugated outer wall that provides excellent load-bearing strength and a smooth inner wall that allows free and fast water flow. This combination makes them ideal for underground installation where soil pressure, traffic load, and environmental stress are common challenges.
                    </p>
                    <p className="wow fadeInUp" data-wow-delay="1s">
                      One of the key advantages of DWC pipes is their resistance to corrosion, chemicals, and moisture. Unlike concrete or metal pipes, they do not rust, crack, or degrade over time. This makes them suitable for stormwater drainage, sewage systems, road drainage, and industrial wastewater management.
                    </p>
                    <p className="mt-4 mb-5 wow fadeInUp" data-wow-delay="1s">
                      Sunrise Pipes manufactures DWC underground drainage pipes using advanced technology and high-quality raw materials. These pipes are lightweight, easy to transport, and quick to install, which helps reduce overall project time and cost. Their flexibility allows them to adapt to uneven terrain while maintaining structural strength. <br/> <br/>
                      
                      With a long service life and minimal maintenance requirements, DWC pipes from Sunrise Pipes provide a cost-effective and reliable drainage solution. Each pipe is tested for strength, durability, and performance to meet industry standards and ensure consistent results.<br/> <br/>

                      If you are looking for strong and long-lasting DWC underground drainage pipes, Sunrise Pipes delivers dependable solutions for infrastructure, municipal, and industrial drainage projects.
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