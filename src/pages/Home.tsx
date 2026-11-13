import maro from "../assets/images/home_hero__maro.png";
import maroGreen from "../assets/images/maro_green.png";
import whiteEdge from "../assets/images/white_edge.png";
import deepWhiteEdge from "../assets/images/deep_white_edge.png";
import blueEdge from "../assets/images/blue_edge.png";
import deepBlueEdge from "../assets/images/deep_blue_edge.png";
import corelDraw from "../assets/images/corel_draw.png";
import unityCoinBanner from "../assets/images/unity_coin_banner.png";
import tierwaveBanner from "../assets/images/tierwave_banner.png";
import tierwaveLogo from "../assets/images/tierwave_logo.png";
import AnimatedButton from "../components/shared/AnimatedButton";
import SvgIcon from "../components/shared/SvgIcon/SvgIcon";
import StripAnimation from "../components/StripAnimation";
import {
  ExternalLink,
  ArrowUpRight,
  ChevronDown,
  CalendarDays,
  MapPin,
} from "lucide-react";
import { experiences } from "../data/experiences";

function Home() {
  return (
    <main id="home-page">
      <section className="home-hero">
        <div className="hero-content w-full px-4 sm:px-10 lg:px-18 pt-12 pb-14">
          {/* Availability Pill */}
          <div className="available_pill">
            <span className="dot"></span>
            <span>Available for collaboration</span>
          </div>
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="right_limiter order-2 lg:order-1 col-span-12 lg:col-span-7 xl:col-span-9">
              {/* Header */}
              <SvgIcon name="toggle" size={39} />
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
            </div>
            <div className="order-1 lg:order-2 col-span-12 lg:col-span-5 xl:col-span-3">
              <img src={maro} alt="Maro" />
            </div>
          </div>

          {/* CTAs */}
          <div className="cta-btns">
            <AnimatedButton
              className="download"
              href="/assets/Akeh-Oghenemaro-CV.pdf"
              download="Akeh-Oghenemaro-CV.pdf"
            >
              Download CV{" "}
            </AnimatedButton>

            <button className="btn white">
              my project
              <ArrowUpRight size={23} strokeWidth={2.2} />
            </button>
          </div>

          <div className="atom">
            <SvgIcon name="atom" size={35} />
          </div>
          <div className="x_home">
            <SvgIcon name="xHome" size={26} />
          </div>
          <div className="circle_icon">
            <SvgIcon name="circle" size={30} />
          </div>
          <div className="globe_connect">
            <SvgIcon name="globeConnect" size={50} />
          </div>
        </div>
      </section>

      <StripAnimation />

      <div className="max-w-4xl mx-0 sm:mx-auto mt-[63px] mb-[69px] px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="card-item">
            <img src={blueEdge} alt="edge image" className="circle-edger" />
            <img src={deepBlueEdge} alt="edge image" className="circle-edge" />

            <div className="icon-cont">
              <SvgIcon name="touch" width={29} height={35} />
            </div>

            <h4 className="title">Highly Tailored IT Design Management</h4>
            <p className="desc">we give you the excellent design</p>
          </div>
          <div className="card-item">
            <img
              src={deepWhiteEdge}
              alt="edge image"
              className="circle-edger"
            />
            <img src={whiteEdge} alt="edge image" className="circle-edge" />

            <div className="icon-cont">
              <SvgIcon name="blocks" size={26} />
            </div>

            <h4 className="title">Highly Tailored IT Design Management</h4>
            <p className="desc">we give you the excellent design</p>
          </div>
          <div className="card-item">
            <img src={blueEdge} alt="edge image" className="circle-edger" />
            <img src={deepBlueEdge} alt="edge image" className="circle-edge" />

            <div className="icon-cont">
              <SvgIcon name="awardWhite" width={31} height={34} />
            </div>

            <h4 className="title">With over 4+ Years Experience</h4>
            <p className="desc">we give you the excellent design</p>
          </div>
        </div>
      </div>

      <section className="home-about">
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="order-2 md:order-1 col-span-12 md:col-span-6">
            <h1>
              About <span> Ford_Tech</span>
            </h1>
            {/* Paragraph */}
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, cue porro
            </p>

            <button className="btn cta">
              Read more
              <ChevronDown size={18} strokeWidth={2} />
            </button>
          </div>
          <div className="order-1 md:order-2 col-span-12 md:col-span-6">
            <div className="img-cont">
              <img src={maroGreen} alt="Maro" />
            </div>
          </div>
        </div>
      </section>

      <section className="experiences">
        <div className="experience-header">
          <div className="sec-badge">
            <SvgIcon name="briefcaseClock" size={25} />{" "}
            <span>Career Journey</span>
          </div>
          <div className="sec-title">Project & Experience</div>
          <div className="sec-desc">
            Selected work showcasing my process and results
          </div>
        </div>

        <div className="timeline">
          {experiences.map((project) => (
            <div className="container" key={project.id}>
              <div className="content experience-card">
                <div className="name-logo-cont">
                  <div className="logo-cont">
                    <img src={project.logo} alt={`${project.company} logo`} />
                  </div>

                  <div className="name-cont">
                    <div className="name">{project.company}</div>

                    <div className="badge">
                      <SvgIcon name="smartPhone" width={8} height={13} />
                      <span>{project.companyType}</span>
                    </div>
                  </div>
                </div>

                <div className="role-date-cont">
                  <div className="role">{project.role}</div>

                  <div className="date-cont">
                    <div className="e-flex">
                      <span>
                        <CalendarDays size={19} strokeWidth={2} />
                      </span>
                      <span>{project.duration}</span>
                    </div>

                    <div className="e-flex">
                      <span>
                        <MapPin size={19} strokeWidth={2} />
                      </span>
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>

                <div className="desc">{project.description}</div>

                <div className="tech-badge-cont">
                  {project.technologies.map((technology) => (
                    <div className="tech-badge" key={technology}>
                      {technology}
                    </div>
                  ))}
                </div>

                <div className="achievement">
                  <h3 className="achievement-title">
                    <SvgIcon name="award" width={17} height={19} />
                    <span>Key Achievements</span>
                  </h3>

                  <ul>
                    {project.achievements.map((achievement, index) => (
                      <li key={index}>
                        <span className="dot"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="projects">
        <div className="project-header">
          <div className="sec-badge">
            <SvgIcon name="bullsEye" size={23} /> <span>Feature work</span>
          </div>
          <div className="sec-title">Recent Project</div>
          <div className="sec-desc">
            Selected work showcasing my process and results
          </div>
        </div>

        {/* Project cards will be rendered here */}
        <div className="project-cards-cont">
          <div className="project-card">
            <div className="img-cont">
              <img
                src={unityCoinBanner}
                alt="Unity Coin Project Banner Image"
              />
            </div>
            <div className="project-content">
              <div className="badge">
                <SvgIcon name="laptop" width={15} height={12} />
                <span>Web App</span>
              </div>
              <div className="name">Unity Coin</div>
              <div className="desc">
                Supercharge your business with Our product Auction that converts
              </div>
              <div className="e-flex">
                <span>
                  <SvgIcon name="lightning" width={14} height={20} />
                </span>
                <span>tech stack</span>
              </div>
              <div className="tech-badge-cont">
                <div className="tech-badge">
                  <SvgIcon name="figma" size={22} />
                  Figma
                </div>
                <div className="tech-badge">
                  <img src={corelDraw} alt="Corel Draw icon" />
                  Corel Draw
                </div>
                <div className="tech-badge">
                  <SvgIcon name="adobeIllustrator" size={22} />
                  Adobe Illustrator
                </div>
                <div className="tech-badge">
                  <SvgIcon name="wordPress" size={22} />
                  Word Press
                </div>
              </div>
              <button className="btn cta">
                live demo
                <ExternalLink size={23} strokeWidth={2.2} />
              </button>
            </div>
          </div>

          <div className="project-card">
            <div className="img-cont">
              <img src={tierwaveBanner} alt="Tierwave Project Banner Image" />
            </div>
            <div className="project-content">
              <div className="badge">
                <SvgIcon name="laptop" width={15} height={12} />
                <span>Web App</span>
              </div>
              <div className="name">
              <img src={tierwaveLogo} alt="Tierwave Logo Image" />
                Tierwave
                </div>
              <div className="desc">
                Supercharge your business with Our product Auction that converts
              </div>
              <div className="e-flex">
                <span>
                  <SvgIcon name="lightning" width={14} height={20} />
                </span>
                <span>tech stack</span>
              </div>
              <div className="tech-badge-cont">
                <div className="tech-badge">
                  <SvgIcon name="figma" size={22} />
                  Figma
                </div>
                <div className="tech-badge">
                  <img src={corelDraw} alt="Corel Draw icon" />
                  Corel Draw
                </div>
                <div className="tech-badge">
                  <SvgIcon name="adobeIllustrator" size={22} />
                  Adobe Illustrator
                </div>
                <div className="tech-badge">
                  <SvgIcon name="wordPress" size={22} />
                  Word Press
                </div>
              </div>
              <button className="btn cta">
                live demo
                <ExternalLink size={23} strokeWidth={2.2} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
