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
                    <h3 className="wow fadeInUp" data-wow-delay=".4s">HDPE Pipe Fittings and Accessories – Reliable Connections by Sunrise Pipes</h3>
                    <p className="mb-3 wow fadeInUp" data-wow-delay=".6s">
                      A strong pipeline system is not complete without high-quality fittings and accessories. In water supply, irrigation, industrial, and drainage projects, HDPE pipe fittings and accessories play a crucial role in ensuring leak-free performance and long-term durability. Sunrise Pipes offers a wide range of HDPE fittings designed to provide secure connections and reliable operation in every application.
                    </p>
                    <p className="mb-3 wow fadeInUp" data-wow-delay=".8s">
                      HDPE pipe fittings are manufactured to match the strength and flexibility of HDPE pipes. They are resistant to corrosion, chemicals, and pressure variations, making them ideal for underground and outdoor installations. These fittings ensure smooth flow and strong joints, even in demanding environments.
                    </p>
                    <p className="wow fadeInUp" data-wow-delay="1s">
                      Sunrise Pipes provides a complete range of HDPE fittings and accessories, including couplers, elbows, tees, reducers, end caps, flanges, and adaptors. These components are designed for easy installation and perfect alignment, helping reduce leakage and maintenance issues. Their precision design ensures compatibility with HDPE pipes of various sizes and pressure ratings.
                    </p>
                    <p className="mt-4 mb-5 wow fadeInUp" data-wow-delay="1s">
                      One of the key advantages of HDPE fittings is their ability to create leak-proof joints through fusion or mechanical connections. This improves pipeline efficiency and extends the life of the entire system. HDPE accessories also help in flow control, direction changes, and system expansion without compromising performance. <br/> <br/>
                      
                      At Sunrise Pipes, all HDPE pipe fittings and accessories are manufactured using high-quality raw materials and tested for strength, durability, and pressure resistance. They are suitable for applications such as potable water supply, agriculture irrigation, industrial pipelines, and drainage systems.<br/> <br/>

                      If you are looking for dependable HDPE pipe fittings and accessories, Sunrise Pipes offers solutions that ensure strong connections, smooth performance, and long-lasting reliability.
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