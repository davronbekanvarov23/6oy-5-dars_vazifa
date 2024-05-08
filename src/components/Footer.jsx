import "./Footer.css";
import telegramm from "../../public/assets/telegram.svg";
import fecebook from "../../public/assets/facebook.svg";
import intagramm from "../../public/assets/instagram.svg";
function Footer() {
  return (
    <div className="Footer">
      <div className="footer_content container">
        <div className="footer-left">
          <h4>Copyright 2020</h4>
          <p>
            Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
            facilisis lacinia ex, eget sollicitudin massa pellentesque in.
            Vivamus mattis eros at sem pulvinar tincidunt.
          </p>
        </div>
        <div className="footer-center">
          <h4>Sayt sahifalari</h4>
          <div className="footer__end">
            <ul className="footer__list">
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Bosh sahifa
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="/xizmatlar">
                  Xizmatlar
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="/portfolio">
                  Portfolio
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="jamoa">
                  Jamoa
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="Blog">
                  Blog
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="Kontaktlar">
                  Kontaktlar
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-end">
          <h4>Biz internetda</h4>
          <ul className="socials">
            <li>
              <img src={telegramm} alt="" />
              <a href="#">Telegram</a>
            </li>
            <li>
              <img src={fecebook} alt="" />
              <a href="#"> Fecebook</a>
            </li>
            <li>
              <img src={intagramm} alt="" />
              <a href="#"> Instagramm</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
