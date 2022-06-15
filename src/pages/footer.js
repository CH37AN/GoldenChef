import React from "react";

class footer extends React.Component {
  render() {
    return (
      <div>
        {/* ======= Chefs Section ======= */}
        <section id="chefs" className="chefs">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Chefs</h2>
              <p>Our Proffesional Chefs</p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="member" data-aos="zoom-in" data-aos-delay={100}>
                  <img
                    src="images\Shared from Lightroom mobile.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Chetan Bhuvad</h4>
                      <span>Master Chef</span>
                    </div>
                    <div className="social">
                      <a href>
                        <i className="bi bi-twitter" />
                      </a>
                      <a href>
                        <i className="bi bi-facebook" />
                      </a>
                      <a href>
                        <i className="bi bi-instagram" />
                      </a>
                      <a href>
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="member" data-aos="zoom-in" data-aos-delay={200}>
                  <img src="images\Anup.jpg" className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Anup Hingmire</h4>
                      <span>Patissier</span>
                    </div>
                    <div className="social">
                      <a href>
                        <i className="bi bi-twitter" />
                      </a>
                      <a href>
                        <i className="bi bi-facebook" />
                      </a>
                      <a href>
                        <i className="bi bi-instagram" />
                      </a>
                      <a href>
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="member" data-aos="zoom-in" data-aos-delay={300}>
                  <img
                    src="assets\img\chefs\chhaya.jpeg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Chhaya Munji</h4>
                      <span>Cook</span>
                    </div>
                    <div className="social">
                      <a href>
                        <i className="bi bi-twitter" />
                      </a>
                      <a href>
                        <i className="bi bi-facebook" />
                      </a>
                      <a href>
                        <i className="bi bi-instagram" />
                      </a>
                      <a href>
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Chefs Section */}
        {/* ======= Contact Section ======= */}
        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Contact</h2>
              <p>Contact Us</p>
            </div>
          </div>
          <div className="container" data-aos="fade-up">
            <div className="row mt-5">
              <div className="col-lg-4">
                <div className="info">
                  <div className="email">
                    <i className="bi bi-envelope" />
                    <h4>Email:</h4>
                    <p>info@example.com</p>
                  </div>
                  <div className="phone">
                    <i className="bi bi-phone" />
                    <h4>Call:</h4>
                    <p>+91 563738393</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 mt-5 mt-lg-0">
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  className="php-email-form"
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      rows={8}
                      placeholder="Message"
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Section */}

        {/* End #main */}
        {/* ======= Footer ======= */}
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="footer-info">
                    <h3>
                      Golden Chefs
                      <br />
                      Recipe book
                    </h3>
                    <strong>Phone:</strong> +91 563738393
                    <br />
                    <strong>Email:</strong> info@ex.com
                    <br />
                    <p />
                    <div className="social-links mt-3">
                      <a href="#" className="twitter">
                        <i className="bx bxl-twitter" />
                      </a>
                      <a href="#" className="facebook">
                        <i className="bx bxl-facebook" />
                      </a>
                      <a href="#" className="instagram">
                        <i className="bx bxl-instagram" />
                      </a>
                      <a href="#" className="google-plus">
                        <i className="bx bxl-skype" />
                      </a>
                      <a href="#" className="linkedin">
                        <i className="bx bxl-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right" /> <a href="#">Home</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">Terms of service</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">Privacy policy</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-6 footer-newsletter">
                  <h4>Our Newsletter</h4>
                  <p>
                    Subscribe to our newsletter to get new recipe from our chefs
                  </p>
                  <form action method="post">
                    <input type="email" name="email" />
                    <input type="submit" defaultValue="Submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* End Footer */}
        {/* <div id="preloader" />
        <a
          href="#"
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short" />
        </a> */}
      </div>
    );
  }
}

export default footer;
