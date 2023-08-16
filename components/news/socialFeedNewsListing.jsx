import Script from "next/script";
import Link from "next/link";
export default function SocialFeedNewsListing() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/octicons@4.4.0/build/font/octicons.css"
      />
      <link rel="stylesheet" href="/styles/github-activity.css" />

      <Script
        type="text/javascript"
        src="https://unpkg.com/mustache@4.2.0/mustache.min.js"
      ></Script>
      <Script
        type="text/javascript"
        src="/javascripts/github-activity.js"
      ></Script>

      <link
        rel="stylesheet"
        href="https://unpkg.com/github-activity-feed@latest/dist/github-activity.dark.min.css"
      />

      <div id="SNcontainer">
        <div id="DiscordPanel">
          <h3 class="Gradient">
            <span class="G0">Discord</span>
            <span class="G1" aria-hidden="true">
              Discord
            </span>
            <span class="G2" aria-hidden="true">
              Discord
            </span>
            <span class="G3" aria-hidden="true">
              Discord
            </span>
            <span class="G4" aria-hidden="true">
              Discord
            </span>
            <span class="G5" aria-hidden="true">
              Discord
            </span>
            <span class="G6" aria-hidden="true">
              Discord
            </span>
            <span class="mask">
              <span class="spacing">Discord</span>
              <span class="middleUnderscore">
                <span class="spacing" aria-hidden="true">
                  Discord
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
                Facebook
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
          <div id="FacebookFeedHolder" class="scroll-pane webkit">
            <iframe
              src="https://discord.com/widget?id=118102728026095623&theme=dark"
              width="270"
              height="305"
              allowtransparency="true"
              frameborder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
          </div>
        </div>

        <div id="TwitterPanel">
          <h3 class="Gradient">
            <span class="G0">GitLab</span>
            <span class="G1" aria-hidden="true">
              GitLab
            </span>
            <span class="G2" aria-hidden="true">
              GitLab
            </span>
            <span class="G3" aria-hidden="true">
              GitLab
            </span>
            <span class="G4" aria-hidden="true">
              GitLab
            </span>
            <span class="G5" aria-hidden="true">
              GitLab
            </span>
            <span class="G6" aria-hidden="true">
              GitLab
            </span>
            <span class="mask">
              <span class="spacing">GitLab</span>
              <span class="middleUnderscore">
                <span class="spacing" aria-hidden="true">
                  GitLab
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
                GitLab
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
          <div id="TwitterFeedHolder" class="scroll-pane webkit"></div>
        </div>
      </div>
    </>
  );
}
