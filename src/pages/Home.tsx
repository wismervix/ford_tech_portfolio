import maro from "../assets/images/home_hero__maro.png";
import corelDraw from "../assets/images/corel_draw.png";
import AnimatedButton from "../components/shared/AnimatedButton";
import SvgIcon from "../components/shared/SvgIcon/SvgIcon";
import StripAnimation from "../components/StripAnimation";

function Home() {
  return (
    <main id="home-page">
      <div className="home-hero">
        <div className="hero-content w-full px-4 sm:px-10 lg:px-18 pt-12 pb-14">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="right_limiter col-span-9">
              {/* Availability Pill */}
              <div className="available_pill">
                <span className="dot"></span>
                <span>Available for collaboration</span>
              </div>

              {/* Header */}
              <h1>
                Hey, I’m Akeh Oghenemaro <span> UI/UX Designer</span> base in
                Lagos.
              </h1>

              {/* Paragraph */}
              <p>
                I’m an experienced Product Designer with 4+years in the the
                field collaborating with various companies and start-ups.
              </p>

              {/* Button Row */}
              <div className="btn-row">
                <button className="btn">
                  <SvgIcon name="figma" />
                  Figma
                </button>
                <button className="btn">
                  <img src={corelDraw} alt="Corel Draw icon" />
                  Corel Draw
                </button>
                <button className="btn">
                  <SvgIcon name="adobeIllustrator" />
                  Adobe Illustrator
                </button>
                <button className="btn">
                  <SvgIcon name="wordPress" />
                  Word Press
                </button>
              </div>

              {/* CTAs */}
              <AnimatedButton
                href="/assets/Akeh-Oghenemaro-CV.pdf"
                download="Akeh-Oghenemaro-CV.pdf"
              >
                Download CV{" "}
              </AnimatedButton>
            </div>
            <div className="col-span-3">
              <img src={maro} alt="Maro" />
            </div>
          </div>
        </div>
      </div>
      <StripAnimation />
    </main>
  );
}

export default Home;
