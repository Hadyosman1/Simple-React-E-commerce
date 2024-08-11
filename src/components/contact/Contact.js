import useScrollToTop from "../../hooks/useScrollToTop";

export default function Contact() {
  useScrollToTop();
  return (
    <>
      <main>
        <div className="container py-5">
          <h2 className="fs-1 my-4 fw-bold text-primary ">Contact Us</h2>
          <div className="row g-3">
            <div className="col-xl-6">
              <div className="row row-cols-md-2 g-4">
                <div
                  className="aos-item"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="aos-item__inner">
                    <div className="bg-light hvr-shutter-out-horizontal d-block p-3">
                      <div className="d-flex justify-content-start">
                        <i className="fa-solid fa-envelope h3 pe-2"></i>
                        <span className="h5 text-primary fw-bold">Email</span>
                      </div>
                      <span>example@domain.com</span>
                    </div>
                  </div>
                </div>
                <div
                  className="aos-item"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="aos-item__inner">
                    <div className="bg-light hvr-shutter-out-horizontal d-block p-3">
                      <div className="d-flex justify-content-start">
                        <i className="fa-solid fa-phone h3 pe-2"></i>
                        <span className="h5 text-primary fw-bold">Phone</span>
                      </div>
                      <span>+0123456789, +9876543210</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="aos-item mt-4"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="aos-item__inner">
                  <div className="bg-light hvr-shutter-out-horizontal d-block p-3">
                    <div className="d-flex justify-content-start">
                      <i className="fa-solid fa-location-pin h3 pe-2"></i>
                      <span className="h5 text-primary fw-bold">
                        Office location
                      </span>
                    </div>
                    <span>#007, Street name, Bigtown BG23 4YZ, England</span>
                  </div>
                </div>
              </div>
              <div className="aos-item" data-aos="fade-up" data-aos-delay="800">
                <div className="mt-4 w-100 aos-item__inner">
                  <iframe
                    loading={"lazy"}
                    style={{ maxWidth: "100%" }}
                    title="map"
                    className="hvr-shadow"
                    width="100%"
                    height="345"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  >
                    <a href="https://www.maps.ie/distance-area-calculator.html">
                      measure acres/hectares on map
                    </a>
                  </iframe>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="200" className="col-xl-6">
              <h2 className="pb-4 text-primary fw-bold">Leave a message</h2>
              <div className="row g-3">
                <div className="col-6 mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Fname
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="John"
                  />
                </div>
                <div className="col-6 mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Lname
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="+1234567890"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Country
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="1">USA</option>
                  <option value="2">Non USA</option>
                </select>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  style={{ maxHeight: "158px" }}
                ></textarea>
              </div>
              <button type="button" className="btn btn-primary">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
