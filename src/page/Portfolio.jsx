import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Portfolio() {
  const [webSiteData, setWebSiteData] = useState([]);
  const [webDesignData, setWebDesignData] = useState([]);
  useEffect(() => {
    // const getPortfolioData = async () => {
    //   let data = await fetch("http://95.216.165.58/portfolio/").then((a) =>
    //     a.json()
    //   );
    //   setPortfolioData(data);
    // };
    // getPortfolioData();
    const getWebSiteData = async () => {
      let data = await fetch(
        "https://admin.trustcenterholding.com/service/3/"
      ).then((a) => a.json());
      setWebSiteData(data.portfolio);
    };
    getWebSiteData();
    const getWebDesignData = async () => {
      let data = await fetch(
        "https://admin.trustcenterholding.com/service/4/"
      ).then((a) => a.json());
      setWebDesignData(data.portfolio);
    };
    getWebDesignData();
  }, []);
  return (
    <>
      <section id="portfolio-section">
        <div className="container">
          <h3 className="h-title" style={{ fontWeight: "600" }}>
            Portfolio
          </h3>
          <div className="portfolios-div">
            <span className="portfolios-title">Web-site</span>
            <div className="portfolios">
              {webSiteData.map((w, index) => (
                <Link
                  key={index}
                  to={`/portfolio/${w.id}/`}
                  className="portfolio"
                >
                  <img
                    src={`https://admin.trustcenterholding.com/${w.main_image}`}
                    alt=""
                  />
                </Link>
              ))}
            </div>
            {/* <span className="more">
              More <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
            </span> */}
          </div>
          <div className="portfolios-div">
            <span className="portfolios-title">Web-design</span>
            <div className="portfolios">
              {webDesignData.map((w, index) => (
                <Link
                  key={index}
                  className="portfolio"
                  to={`/portfolio/${w.id}/`}
                >
                  <img
                    src={`https://admin.trustcenterholding.com/${w.main_image}`}
                    alt=""
                  />
                </Link>
              ))}
            </div>
            {/* <span className="more">
              More <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
            </span> */}
          </div>
          {/* <div className="portfolios-div">
            <span className="portfolios-title">Social-Media</span>
            <div className="portfolios">
              <div className="portfolio"></div>
              <div className="portfolio"></div>
              <div className="portfolio"></div>
            </div>
            <span className="more">
              More <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
            </span>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Portfolio;
