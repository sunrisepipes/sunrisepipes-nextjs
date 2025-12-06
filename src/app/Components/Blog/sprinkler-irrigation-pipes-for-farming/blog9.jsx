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
                    <h3 className="wow fadeInUp" data-wow-delay=".4s">Sprinkler Irrigation Pipes for Farming – Efficient Watering Solutions by Sunrises Pipes</h3>
                    <p className="mb-3 wow fadeInUp" data-wow-delay=".6s">
                      Sprinkler irrigation has become one of the most effective and water-saving methods for modern farming in India. It distributes water uniformly across fields, helping farmers improve crop health while reducing wastage. To ensure smooth operation, high-quality sprinkler irrigation pipes are essential, and Sunrises Pipes is a trusted name in delivering durable, efficient, and long-lasting solutions.
                    </p>
                    <p className="mb-3 wow fadeInUp" data-wow-delay=".8s">
                      Sprinkler irrigation pipes are designed to handle high pressure and continuous water flow. They are lightweight, easy to install, and suitable for all types of crops, including wheat, vegetables, sugarcane, cotton, and fruits. Their flexibility allows farmers to cover large areas with minimal effort.
                    </p>
                    <p className="wow fadeInUp" data-wow-delay="1s">
                      Sunrises Pipes manufactures sprinkler irrigation pipes using high-grade materials that resist UV rays, corrosion, and weather damage. This ensures that the pipes remain strong even under direct sunlight and harsh field conditions. The strong build quality also helps maintain constant pressure, ensuring even water distribution across the entire farmland.
                    </p>
                    <p className="mt-4 mb-5 wow fadeInUp" data-wow-delay="1s">
                      These pipes are compatible with both portable and fixed sprinkler systems, making them ideal for small farms, medium-scale agriculture, and large commercial fields. Their long lifespan and low maintenance requirements make them a cost-effective choice for farmers looking to upgrade their irrigation setup. <br/> <br/>
                      
                      At Sunrises Pipes, quality and performance come first. Our sprinkler irrigation pipes are tested for durability, pressure resistance, and leakage prevention. With reliable fittings and superior manufacturing standards, they help farmers achieve higher crop yield using less water.<br/> <br/>

                      For farmers who want to save water, reduce effort, and increase productivity, Sprinkler Irrigation Pipes from Sunrises Pipes offer the perfect solution. They ensure efficient watering, long-term durability, and excellent value for money.
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