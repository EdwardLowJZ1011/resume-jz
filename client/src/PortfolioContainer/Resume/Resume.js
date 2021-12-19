import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
import { StoreContext } from "../../../src/store";

export default function Resume(props) {
  const { lang, cert } = useContext(StoreContext);
  const language = lang[0];
  const certno = cert[0];

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          {props.href ? (
            <a class="link-text" href={props.href} target="_blank">
              <span>{props.heading ? props.heading : ""}</span>
            </a>
          ) : (
            <span>{props.heading ? props.heading : ""}</span>
          )}
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});
  const resumeBullets =
    language == "EN"
      ? [
          { label: "Education", logoSrc: "education.svg" },
          { label: "Work History", logoSrc: "work-history.svg" },
          { label: "Programming Skills", logoSrc: "programming-skills.svg" },
          { label: "Projects", logoSrc: "projects.svg" },
          { label: "Certificates", logoSrc: "certificates.svg" },
          { label: "Interests", logoSrc: "interests.svg" },
        ]
      : [
          { label: "学历", logoSrc: "education.svg" },
          { label: "工作经验", logoSrc: "work-history.svg" },
          { label: "编程能力", logoSrc: "programming-skills.svg" },
          { label: "项目", logoSrc: "projects.svg" },
          { label: "证书", logoSrc: "certificates.svg" },
          { label: "兴趣", logoSrc: "interests.svg" },
        ];

  const programmingSkillsDetails = [
    { skill: "Javascripts", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 70 },
    { skill: "Python", ratingPercentage: 85 },
    { skill: "C#", ratingPercentage: 85 },
    { skill: "C++", ratingPercentage: 85 },
    { skill: "Java", ratingPercentage: 90 },
    { skill: "Parallel Programming", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 50 },
    { skill: "RPA Skills", ratingPercentage: 85 },
  ];

  const certificateDetails = [
    {
      title: "Google IT Automation with Python Specialization",
      href: "https://www.coursera.org/account/accomplishments/specialization/certificate/UEUR5CFRKUSS",
      description:
        "Gesture Detection, facial recognition, and This six-course certificate, developed by Google, is designed to provide IT professionals with in-demand skills",
    },
    {
      title: "IBM AI Engineering Specialization",
      href: "https://www.coursera.org/account/accomplishments/specialization/certificate/YQ66WPQJG8YZ",
      description:
        "Professional Certificate have a practical understanding of Machine Learning (ML) & Deep Learning (DL)",
    },
    {
      title: "AlgoExpert",
      href: "https://certificate.algoexpert.io/AlgoExpert%20Certificate%20AE-b7271be7df",
      description:
        "Achieve hundreds of algorithmn Questions, keep optimize the code.",
    },
    {
      title: "System Expert",
      href: "https://certificate.algoexpert.io/SystemsExpert%20Certificate%20SE-51843be914",
      description: "Understand the system design and methodology.",
    },
  ];

  const projectDetails =
    language == "EN"
      ? [
          {
            title: "Shop Tech Ecommerce Selling Platform",
            duration: { fromDate: "2021", toDate: "2021" },
            description:
              "Build a Fully Functional E-commerce website using MERN Stack, using Redux for state management, stripe for payments, Cloudinary for images, and implement Authentication",
            subHeading:
              "Technologies Used: React (Frontend), Node.js (Backend runtime environment), Express (Backend Framework), MongoDB (Database), Cloudinary, Stripe",
          },
          {
            title: "Promax Ecommerce Selling Platform",
            duration: { fromDate: "2021", toDate: "2021" },
            description:
              "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
            subHeading:
              "Technologies Used: React (Frontend), Node.js (Backend runtime environment), Express (Backend Framework), MongoDB (Database), Paypal",
          },
          {
            title: "Carmax Ecommerce Platform",
            duration: { fromDate: "2020", toDate: "2021" },
            description:
              "A website for a car business owner who wants to list his cars on his website and allow the user browse through all latest cars and featured car.",
            subHeading: "Technologies Used: Django, HTML, CSS, Bootstrap",
          },
        ]
      : [
          {
            title: "Shop Tech电子商务销售平台",
            duration: { fromDate: "2021", toDate: "2021" },
            description:
              "使用 MERN Stack 构建功能齐全的电子商务网站，使用 Redux 进行状态管理，使用 stipe 处理我们的付款，Cloudinary 处理我们的图像，并遵循最佳实践来实施身份验证和授权",
            subHeading:
              "使用的技术：React（前端）、Node.js（后端运行环境）、Express（后端框架）、MongoDB（数据库）、Cloudinary、Stripe",
          },
          {
            title: "Promax电子商务销售平台",
            duration: { fromDate: "2021", toDate: "2021" },
            description:
              "使用 React、Redux、Express 和 MongoDB 从头开始构建电子商务平台",
            subHeading:
              "使用的技术：React（前端）、Node.js（后端运行环境）、Express（后端框架）、MongoDB（数据库）、Paypal",
          },
          {
            title: "Carmax电子商务平台",
            duration: { fromDate: "2020", toDate: "2021" },
            description:
              "一个供汽车企业主使用的网站，他希望在自己的网站上列出他的汽车，并允许用户访问他的网站并浏览他所有的最新汽车和特色汽车，按型号或价格搜索和过滤汽车，并制作一些 询问他正在出售的汽车。",
            subHeading: "使用的技术：Django、HTML、CSS、Bootstrap",
          },
        ];

  const resumeDetails =
    language == "EN"
      ? [
          <div className="resume-screen-container" key="education">
            <ResumeHeading
              heading={"University Tunku Abdul Rahman"}
              subHeading={"BACHELOR OF INFORMATION SYSTEM ENGINEERING"}
              fromDate={"2017"}
              toDate={"2019"}
            />
          </div>,
          <div className="resume-screen-container" key="work-experience">
            <ResumeHeading
              heading={"Huawei Technology Sdn Bhd"}
              subHeading={"Department IT Team Lead"}
              fromDate={"2020"}
              toDate={"present"}
            />
            {}
            <div className="experience-description">
              <span className="resume-description-text">
                Served as departmental IT development Leader. Departmental IT
                development framework construction and bridge communication
                between IT and business operations. Using ETL to connect with
                company DB and build BI dashboard to boost KPI management.
                Develop RPA tools to replace manual operations, and use React to
                develop operating systems to improve business efficiency.
              </span>
            </div>

            <div className="experience-description">
              <span className="resume-description-text">
                - Business Analyst, writing proposal and planning the
                development
              </span>
              <br />
              <span className="resume-description-text">
                - Bridges communication between IT and business operations
              </span>
              <br />
              <span className="resume-description-text">
                - BI Analyst & ETL Developer & Reactjs Dev / Django Dev
              </span>
              <br />
              <span className="resume-description-text">
                - The cultivation of the talent teams
              </span>
              <br />
              <span className="resume-description-text">
                - Business Operation Automation (RPA Dev)
              </span>
            </div>
          </div>,
          <div
            className="resume-screen-container programming-skills-container"
            key="programming-skills"
          >
            {programmingSkillsDetails.map((skill, index) => (
              <div className="skill-parent" key={index}>
                <div className="heading-bullet"></div>
                <span>{skill.skill}</span>
                <div className="skill-percentage">
                  <div
                    style={{ width: skill.ratingPercentage + "%" }}
                    className="active-percentage-bar"
                  ></div>
                </div>
              </div>
            ))}
          </div>,
          <div className="resume-screen-container" key="projects">
            {projectDetails.map((projectDetail, index) => (
              <ResumeHeading
                key={index}
                heading={projectDetail.title}
                subHeading={projectDetail.subHeading}
                description={projectDetail.description}
                fromDate={projectDetail.duration.fromDate}
                toDate={projectDetail.duration.toDate}
              />
            ))}
            <div class="show-more-btn">
              <a
                class="link-button"
                href="https://low-it-blog-seven.vercel.app/"
                target="_blank"
              >
                &#10097;&#10097;&#10097;Show More
              </a>
            </div>
          </div>,
          <div className="resume-screen-container" key="certificates">
            {certificateDetails.map((certificateDetail, index) => (
              <ResumeHeading
                key={index}
                heading={certificateDetail.title}
                description={certificateDetail.description}
                href={certificateDetail.href}
              />
            ))}
              <div class="show-more-btn">
                <a
                  class="link-button"
                  href='/mycertificate'
                  target="_blank"
                >
                  &#10097;&#10097;&#10097;Show More ({certno.length})
                </a>
              </div>
          </div>,
          <div className="resume-screen-container" key="interests">
            <ResumeHeading
              heading="Artifical Intelligence"
              description="Gesture Detection, facial recognition, and DeepFaceLab"
            />
            <ResumeHeading
              heading="IoT"
              description="Developed ESP8266, ESP32Cam, Digispark and robotic car"
            />
            <ResumeHeading
              heading="Programming Practices"
              description="Codign Design Patterns, Algorithmns, Software design and Software Development"
            />
            <ResumeHeading
              heading="Video Games"
              description="Hacknet Lab, Strategic game, and Watch Dog"
            />
          </div>,
        ]
      : [
          <div className="resume-screen-container" key="education">
            <ResumeHeading
              heading={"东姑阿都拉曼大学"}
              subHeading={"信息系统工程学士学位"}
              fromDate={"2017"}
              toDate={"2019"}
            />
          </div>,
          <div className="resume-screen-container" key="work-experience">
            <ResumeHeading
              heading={"华为技术私人有限公司"}
              subHeading={"部门 IT 团队负责人"}
              fromDate={"2020"}
              toDate={"至今"}
            />
            {}
            <div className="experience-description">
              <span className="resume-description-text">
                担任部门IT开发负责人。
                部门IT开发框架搭建，搭建IT与业务运营沟通的桥梁。
                使用ETL连接公司DB，构建BI仪表盘，提升KPI管理。
                开发RPA工具替代人工操作，使用React开发操作系统提升业务效率。
              </span>
            </div>

            <div className="experience-description">
              <span className="resume-description-text">
                - 业务分析师，撰写提案并规划发展
              </span>
              <br />
              <span className="resume-description-text">
                - 在 IT 和业务运营之间架起沟通的桥梁
              </span>
              <br />
              <span className="resume-description-text">
                - BI 分析师 & ETL 开发人员 & Reactjs 开发人员 / Django 开发人员
              </span>
              <br />
              <span className="resume-description-text">- 人才队伍的培养</span>
              <br />
              <span className="resume-description-text">
                - 业务运营自动化（RPA 开发）
              </span>
            </div>
          </div>,
          <div
            className="resume-screen-container programming-skills-container"
            key="programming-skills"
          >
            {programmingSkillsDetails.map((skill, index) => (
              <div className="skill-parent" key={index}>
                <div className="heading-bullet"></div>
                <span>{skill.skill}</span>
                <div className="skill-percentage">
                  <div
                    style={{ width: skill.ratingPercentage + "%" }}
                    className="active-percentage-bar"
                  ></div>
                </div>
              </div>
            ))}
          </div>,
          <div className="resume-screen-container" key="projects">
            {projectDetails.map((projectDetail, index) => (
              <ResumeHeading
                key={index}
                heading={projectDetail.title}
                subHeading={projectDetail.subHeading}
                description={projectDetail.description}
                fromDate={projectDetail.duration.fromDate}
                toDate={projectDetail.duration.toDate}
              />
            ))}
            <div class="show-more-btn">
              <a
                class="link-button"
                href="https://low-it-blog-seven.vercel.app/"
                target="_blank"
              >
                &#10097;&#10097;&#10097;更多
              </a>
            </div>
          </div>,
          <div className="resume-screen-container" key="certificates">
            {certificateDetails.map((certificateDetail, index) => (
              <ResumeHeading
                key={index}
                heading={certificateDetail.title}
                description={certificateDetail.description}
                href={certificateDetail.href}
              />
            ))}
            <div class="show-more-btn">
              <a
                class="link-button"
                href='/mycertificate'
                target="_blank"
              >
                &#10097;&#10097;&#10097;更多 ({certno.length})
              </a>
            </div>
          </div>,
          <div className="resume-screen-container" key="interests">
            <ResumeHeading
              heading="人工智能"
              description="手势检测、面部识别和 DeepFaceLab"
            />
            <ResumeHeading
              heading="物联网"
              description="开发ESP8266、ESP32Cam、Digispark和机器人车"
            />
            <ResumeHeading
              heading="编程实践"
              description="编码设计模式、算法、软件设计和软件开发"
            />
            <ResumeHeading
              heading="视频游戏"
              description="黑客网络实验室、战略游戏和看门狗"
            />
          </div>,
        ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="no internet access"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((resumeDetail) => resumeDetail)}
      </div>
    );
  };

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== this.props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);
  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullets-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
