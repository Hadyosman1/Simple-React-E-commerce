import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="logo">
          <Link
            className="navbar-brand fs-4 fw-bold text-light d-flex align-items-center "
            to="/"
          >
            <img
              className="rounded footer-logo"
              width="100px"
              src="/assets/logo.svg"
              alt="logo"
            />
          </Link>
        </div>
        <div className="lists">
          <div className="list">
            <h3>Features</h3>
            <ul>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div className="list">
            <h3>Resources</h3>
            <ul>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="list">
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="social-media">
          <div className="icons">
            <a
              rel="noreferrer"
              href="https://www.facebook.com/haadii.osman"
              target="_blank"
            >
              <i className="fa-brands fa-square-facebook"> </i>
            </a>
            <a
              rel="noreferrer"
              href="https://twitter.com/hadyOsman_"
              target="_blank"
            >
              <i className="fa-brands fa-square-twitter"></i>
            </a>
            <a
              rel="noreferrer"
              href="https://www.instagram.com/hady_osman22/"
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="/#">
              <i className="fa-brands fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
