import globalStyles from "@/components/styles/global-68.css";
import jQuery1 from "@/components/styles/jquery_jscrollpane_css_2_0_0b11-0.css";
import shadowBox from "@/components/styles/shadowbox-0.css";
import fonts from "@/components/styles/fonts.css";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      class="js flexbox canvas canvastext webgl no-touch geolocation postmessage websqldatabase no-indexeddb hashchange history draganddrop
    websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns
    cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface video audio localstorage sessionstorage webworkers
    no-applicationcache svg inlinesvg smil svgclippaths"
    >
      <head>
        <meta name="viewport" content="width=device-width" />
        <script
          defer
          type="text/javascript"
          src="/javascripts/jquery.min.js"
        ></script>
        <script
          defer
          type="text/javascript"
          src="/javascripts/modernizr_1_7_min.js"
        ></script>
        <script
          defer
          type="text/javascript"
          src="/javascripts/jquery_placeholder_1_3.js"
        ></script>
        <script
          defer
          type="text/javascript"
          src="/javascripts/jquery_mousewheel_3_0_6.js"
        ></script>
        <script
          defer
          type="text/javascript"
          src="/javascripts/jquery_jscrollpane_min_2_0_0b11-0.js"
        ></script>
        <script defer src="/javascripts/global-58.js"></script>
        <title>Darkan - MMORPG</title>
        <meta
          name="keywords"
          content="MMORPG, Darkan, rpg, mmo, RuneScape, Jagex, java"
        />
        <meta
          name="description"
          content="A Runescape remake written in pure Java. Experience the fun of Runescape in 2012!"
        />
        <link
          async
          rel="icon"
          type="image/vnd.microsoft.icon"
          href="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/favicon.ico"
        />
        <link
          async
          rel="SHORTCUT ICON"
          href="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/favicon.ico"
        />
        <script
          defer
          type="text/javascript"
          src="/javascripts/jquery_elide_1_4.js"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
