import "./Main.css";
import youtubeImg from "../../public/assets/youtube-embed.png";
import websiteIll from "../../public/assets/website-illustration.png";
import botIMg from "../../public/assets/bot-illustration.png";
import smmImg from "../../public/assets/smm-illustration.png";
import designImg from "../../public/assets/design-illustration.png";
import crmImg from "../../public/assets/crm-illustration.png";
import man from "../../public/assets/step-illlustration.png";
import women from "../../public/assets/step-illlustration2.png";
import men3 from "../../public/assets/step-illustration3.png";
import men4 from "../../public/assets/step-illustration4.png";
import men5 from "../../public/assets/step-illustration5.png";
function Main() {
  return (
    <div className="Main container">
      <div className="hero">
        <div className="hero__content">
          <h2>Biznesingizni keyingi bosqichga olib chiqing</h2>
          <p>
            Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
            facilisis lacinia ex, eget sollicitudin massa pellentesque in.
            Vivamus mattis eros at sem pulvinar
          </p>
          <button className="hero-btn">Xizmatlar bilan tanishish</button>
        </div>
        <img src={youtubeImg} alt="" width={458} height={258} />
      </div>

      <div className="Xizmatlar">
        <h3 className="Xizmatlar__title">Xizmatlar</h3>
        <p className="Xizmatlar__discription">
          Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
          facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus
          mattis eros at sem pulvinar
        </p>
        <div className="Xizmatlar__box">
          <div className="Xizmatlar__box-top">
            <div className="card">
              <img src={websiteIll} alt="" />
              <h4>Vebsayt tuzish</h4>
              <p>lorem ipsum</p>
            </div>
            <div className="card">
              <img src={botIMg} alt="" />
              <h4> Telegram bot</h4>
              <p>lorem ipsum</p>
            </div>
            <div className="card">
              <img src={smmImg} alt="" />
              <h4>SMM</h4>
              <p>lorem ipsum</p>
            </div>
          </div>
          <div className="Xizmatlar__box-bottom">
            <div className="card">
              <img src={designImg} alt="" />
              <h4>Grafik dizayn</h4>
              <p>lorem ipsum</p>
            </div>
            <div className="card">
              <img src={crmImg} alt="" />
              <h4>CRM tizimlar</h4>
              <p>lorem ipsum</p>
            </div>
          </div>
        </div>
        <div className="xizmatlar__bottoms">
          <button className="btn">Buyurtma berish</button>
          <a href="/xizmatlar">Xizmatlar sahifasiga o’tish</a>
        </div>
      </div>

      <div className="step">
        <h3>Biz qanday ishlaymiz?</h3>
        <p className="text">
          Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
          facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus
          mattis eros at sem pulvinar
        </p>
        <div className="step__card">
          <img src={man} alt="" height={278} width={300} />
          <div className="step__card__content">
            <h4>Talablarni aniqlab chiqamiz</h4>
            <p>
              Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
              Nam facilisis
            </p>
          </div>
        </div>

        <div className="step__card">
          <div className="step__card__content">
            <h4>Bir necha yechimlarni taklif qilamiz</h4>
            <p>
              Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
              Nam facilisis
            </p>
          </div>
          <img src={women} alt="" height={225} width={300} />
        </div>

        <div className="step__card">
          <img src={men3} alt="" height={259} width={300} />
          <div className="step__card__content">
            <h4>Loyiha uchun vaqt belgilaymiz</h4>
            <p>
              Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
              Nam facilisis
            </p>
          </div>
        </div>

        <div className="step__card">
          <div className="step__card__content">
            <h4>A’lo sifat bilan bajarib topshiramiz</h4>
            <p>
              Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
              Nam facilisis
            </p>
          </div>
          <img src={men4} alt="" height={172} width={300} />
        </div>

        <div className="step__card">
          <img src={men5} alt="" height={232} width={300} />
          <div className="step__card__content">
            <h4>Qo’llab-quvvatlab boramiz</h4>
            <p>
              Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
              Nam facilisis
            </p>
          </div>
        </div>
        <button className="btn">Buyurtma berish</button>
      </div>
    </div>
  );
}

export default Main;
