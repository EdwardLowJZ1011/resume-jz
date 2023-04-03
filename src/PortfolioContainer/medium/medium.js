import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./medium.css";


import axios from "axios";

import shape from "../../../src/assets/Testimonial/shape-bg.png";

export default function Medium(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const [mediumData, setMediumData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    await axios
      .get(
        `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@edwardlow0620`
      )
      .then((response) => {
        console.log(response);
        setMediumData(response.data.items);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>

    <ScreenHeading title={"Medium"} subHeading={"My Medium posts [Click Here]"} medium={true}/>

      <section className="medium-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              {mediumData.map((article) => (
                <div className="col-lg-12">
                  <div className="testi-item" style={{ height: 400 }}>
                    <h5>{article.title}</h5>
                    <p>{article.pubDate}</p>
                    <img
                      src={article.thumbnail}
                      alt="no internet connection"
                      width="50"
                      height="150"
                    ></img>
                    <p>
                      <b>Tags: </b>
                      <i>{article.categories.join(", ")}</i>
                    </p>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </section>

      <div className="footer-image">
        <img src={shape} alt="Photo not responding" />
      </div>
    </div>
  );
}
