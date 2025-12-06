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
                    <h3 className="wow fadeInUp" data-wow-delay=".4s">MDPE Gas Pipeline Pipes – Safe & Reliable Gas Supply | Sunrises Pipes</h3>
                    <p className="mb-3 wow fadeInUp" data-wow-delay=".6s">
                      MDPE (Medium-Density Polyethylene) Gas Pipeline Pipes are widely used for safe and efficient gas distribution across residential, commercial, and industrial networks. Their flexibility, strength, and long service life make them a trusted choice. At Sunrises Pipes, we manufacture high-quality MDPE gas pipes designed for reliable and secure gas flow.
                    </p>
                    <p className="mb-3 wow fadeInUp" data-wow-delay=".8s">
                      MDPE gas pipes offer excellent resistance to cracks, chemicals, and pressure variations. This ensures safe transmission of natural gas and LPG without the risk of leakage. Their lightweight and flexible structure makes installation easier, especially in underground gas networks where durability and bendability are essential.
                    </p>
                    <p className="wow fadeInUp" data-wow-delay="1s">
                      These pipes are also corrosion-free, unlike metal pipelines that rust over time. MDPE material remains stable and non-reactive, guaranteeing a clean and uninterrupted gas supply. Due to their long lifespan of more than 50 years, MDPE gas pipes require minimal maintenance, reducing operational costs.
                    </p>
                    <p className="mt-4 mb-5 wow fadeInUp" data-wow-delay="1s">
                      MDPE gas pipeline pipes are used in PNG networks, LPG distribution lines, industrial gas systems, and residential colonies. They are also ideal for hotels, factories, and institutions that need consistent gas flow for their operations.<br/> <br/>

                      At Sunrises Pipes, we follow strict quality standards to produce MDPE gas pipes that are UV-stabilized, leak-proof, and highly durable. Our pipes meet IS: 14885 guidelines and are tested for pressure, strength, and environmental resistance. <br/> <br/>
                      
                      If you need a safe, durable, and cost-effective solution for gas distribution, MDPE Gas Pipeline Pipes from Sunrises Pipes are the perfect choice. They deliver long-term reliability and superior performance for all types of gas supply networks.
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