import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";

export default function Home() {
  return (
    <div id="Background">
      <div id="TopBackground">
        <div id="BottomBackground">
          <Header />
          <div id="bannerContainer">
            <div id="headerMask"></div>
            <div id="banner">
              <a
                id="bannerPrevious"
                class="HoverImg"
                onclick="previousBanner()"
              >
                <img src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/prev-button.webp" />
              </a>
              <div id="bannerReel">
                <a>
                  <img
                    id="banner1"
                    src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/pen7KIN.webp"
                    alt=""
                    title=""
                  />
                </a>
                <a>
                  <img
                    id="banner2"
                    src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/JDvheVV.webp"
                    alt=""
                    title=""
                  />
                </a>
                <a>
                  <img
                    id="banner3"
                    src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/loyalty.webp"
                    alt=""
                    title=""
                  />
                </a>
                <a>
                  <img
                    id="banner4"
                    src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/WyT71yZ.webp"
                    alt=""
                    title=""
                  />
                </a>
                <a>
                  <img
                    id="banner5"
                    src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/Es2xH3J.webp"
                    alt=""
                    title=""
                  />
                </a>
                <a>
                  <img
                    id="banner6"
                    src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/NqBtkGF.webp"
                    alt=""
                    title=""
                  />
                </a>
                <a>
                  <img
                    id="banner7"
                    src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/0aGiFuK.webp"
                    alt=""
                    title=""
                  />
                </a>
              </div>
              <a id="bannerNext" class="HoverImg" onclick="nextBanner()">
                <img
                  src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/next-button.png?1"
                  alt=""
                  title=""
                />
              </a>
            </div>
            <div id="bannerBorder"></div>
          </div>

          <div id="MainContentOuter">
            <div class="MainContentBg">
              <div class="MainContentTopBg">
                <div class="MainContentBottomBg">
                  <div id="MainContent">
                    <div id="leftColumn">
                      <h3 class="Gradient" id="mainTitle">
                        <span class="G0">Latest News</span>
                        <span class="G1" aria-hidden="true">
                          Latest News
                        </span>
                        <span class="G2" aria-hidden="true">
                          Latest News
                        </span>
                        <span class="G3" aria-hidden="true">
                          Latest News
                        </span>
                        <span class="G4" aria-hidden="true">
                          Latest News
                        </span>
                        <span class="G5" aria-hidden="true">
                          Latest News
                        </span>
                        <span class="G6" aria-hidden="true">
                          Latest News
                        </span>
                        <span class="mask">
                          <span class="spacing">Latest News</span>
                          <span class="middleUnderscore">
                            <span class="spacing" aria-hidden="true">
                              Latest News
                            </span>
                          </span>
                        </span>
                        <span class="rightUnderscore">
                          <img
                            src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/underscore_right.webp"
                            class="right"
                            alt=""
                          />
                          <span class="spacing" aria-hidden="true">
                            Latest News
                          </span>
                        </span>
                        <span class="leftUnderscore">
                          <img
                            src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/underscore_flourish_left.webp"
                            class="left"
                            alt=""
                          />
                        </span>
                      </h3>
                      <a href="/news/list" class="Button Button29">
                        <span>
                          <span>
                            <span class="">
                              <b>View All News</b>
                            </span>
                          </span>
                        </span>
                      </a>
                      {/* <indexnewsarticles></> */}
                    </div>
                    <div id="rightColumn">
                      <div id="social">
                        <div id="socialInner"></div>
                      </div>
                      {/* <socialFeed></> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
