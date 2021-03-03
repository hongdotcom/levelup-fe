import React from "react";
import bg from "../static/images/bg.jpg";
import Background from "../Components/Background";
import Navbar from "../Components/Navbar";
import { IsMobile } from "../Hooks/IsMobile";
import Dropdown from "../Components/Dropdown";
import HomeContent from "../Components/HomeContent/HomeContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  home: {
    width: "100vw",
    height: "100vh",
    maxWidth: "1600px",
  },
}));
const details = {
  bgStyle: {
    backgroundImage: "url(" + bg + ")",
    zIndex: -100,
  },
};

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.home} id="homeContainer">
      <Background customStyles={details.bgStyle} />
      {IsMobile() ? <Dropdown /> : <Navbar />}
      <HomeContent />
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>LevelUp Works</title>
        <meta name="robots" content="noindex,nofollow" />
        <link rel="dns-prefetch" href="//s.w.org" />
        <link rel="alternate" type="application/rss+xml" title="LevelUp Works » Feed" href="http://levels.levelupworks.com/index.php/feed/" />
        <link rel="alternate" type="application/rss+xml" title="LevelUp Works » Comments Feed" href="http://levels.levelupworks.com/index.php/comments/feed/" />
        {/* This site uses the Google Analytics by MonsterInsights plugin v7.16.2 - Using Analytics tracking - https://www.monsterinsights.com/ */}
        {/* Note: MonsterInsights is not currently configured on this site. The site owner needs to authenticate with Google Analytics in the MonsterInsights settings panel. */}
        {/* No UA code set */}
        {/* / Google Analytics by MonsterInsights */}
        <style dangerouslySetInnerHTML={{__html: "\nimg.wp-smiley,\nimg.emoji {\n\tdisplay: inline !important;\n\tborder: none !important;\n\tbox-shadow: none !important;\n\theight: 1em !important;\n\twidth: 1em !important;\n\tmargin: 0 .07em !important;\n\tvertical-align: -0.1em !important;\n\tbackground: none !important;\n\tpadding: 0 !important;\n}\n" }} />
        <link rel="stylesheet" id="pt-cv-public-style-css" href="http://levels.levelupworks.com/wp-content/plugins/content-views-query-and-display-post-page/public/assets/css/cv.css?ver=2.3.4" media="all" />
        <link rel="stylesheet" id="wp-block-library-css" href="http://levels.levelupworks.com/wp-includes/css/dist/block-library/style.min.css?ver=5.6.2" media="all" />
        <link rel="stylesheet" id="wp-block-library-theme-css" href="http://levels.levelupworks.com/wp-includes/css/dist/block-library/theme.min.css?ver=5.6.2" media="all" />
        <link rel="stylesheet" id="wpccp-css" href="http://levels.levelupworks.com/wp-content/plugins/wp-content-copy-protection/assets/css/style.min.css?ver=1614273076" media="all" />
        <link rel="stylesheet" id="monsterinsights-popular-posts-style-css" href="http://levels.levelupworks.com/wp-content/plugins/google-analytics-for-wordpress/assets/css/frontend.min.css?ver=7.16.2" media="all" />
        <link rel="stylesheet" id="twenty-twenty-one-style-css" href="http://levels.levelupworks.com/wp-content/themes/twentytwentyone/style.css?ver=1.1" media="all" />
        <link rel="stylesheet" id="twenty-twenty-one-print-style-css" href="http://levels.levelupworks.com/wp-content/themes/twentytwentyone/assets/css/print.css?ver=1.1" media="print" />
        <link rel="https://api.w.org/" href="http://levels.levelupworks.com/index.php/wp-json/" /><link rel="alternate" type="application/json" href="http://levels.levelupworks.com/index.php/wp-json/wp/v2/pages/1404" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="http://levels.levelupworks.com/xmlrpc.php?rsd" />
        <link rel="wlwmanifest" type="application/wlwmanifest+xml" href="http://levels.levelupworks.com/wp-includes/wlwmanifest.xml" /> 
        <meta name="generator" content="WordPress 5.6.2" />
        <link rel="canonical" href="http://levels.levelupworks.com/" />
        <link rel="shortlink" href="http://levels.levelupworks.com/" />
        <link rel="alternate" type="application/json+oembed" href="http://levels.levelupworks.com/index.php/wp-json/oembed/1.0/embed?url=http%3A%2F%2Flevels.levelupworks.com%2F" />
        <link rel="alternate" type="text/xml+oembed" href="http://levels.levelupworks.com/index.php/wp-json/oembed/1.0/embed?url=http%3A%2F%2Flevels.levelupworks.com%2F&format=xml" />
        <link rel="icon" href="http://levels.levelupworks.com/wp-content/uploads/2019/11/cropped-logo_trans-32x32.png" sizes="32x32" />
        <link rel="icon" href="http://levels.levelupworks.com/wp-content/uploads/2019/11/cropped-logo_trans-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="http://levels.levelupworks.com/wp-content/uploads/2019/11/cropped-logo_trans-180x180.png" />
        <meta name="msapplication-TileImage" content="http://levels.levelupworks.com/wp-content/uploads/2019/11/cropped-logo_trans-270x270.png" />
        <div align="center">
          <noscript>
            <div style="position:fixed; top:0px; left:0px; z-index:3000; height:100%; width:100%; background-color:#FFFFFF">
			        <br/><br/>
			        <div style="font-family: Tahoma; font-size: 14px; background-color:#FFFFCC; border: 1pt solid Black; padding: 10pt;">
				        Sorry, you have Javascript Disabled! To see this page as it is meant to appear, please enable your Javascript!
			        </div>
		        </div>
          </noscript>
        </div>
        <div id="page" className="site">
          <a className="skip-link screen-reader-text" href="#content">Skip to content</a>
          <header id="masthead" className="site-header has-title-and-tagline has-menu" role="banner">
            <div className="site-branding">
              <h1 className="site-title">LevelUp Works</h1>
            </div>{/* .site-branding */}
            <nav id="site-navigation" className="primary-navigation" role="navigation" aria-label="Primary menu">
              <div className="menu-button-container">
                <button id="primary-mobile-menu" className="button" aria-controls="primary-menu-list" aria-expanded="false">
                  <span className="dropdown-icon open">Menu					<svg className="svg-icon" width={24} height={24} aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.5 6H19.5V7.5H4.5V6ZM4.5 12H19.5V13.5H4.5V12ZM19.5 18H4.5V19.5H19.5V18Z" fill="currentColor" /></svg>				</span>
                  <span className="dropdown-icon close">Close					<svg className="svg-icon" width={24} height={24} aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 10.9394L5.53033 4.46973L4.46967 5.53039L10.9393 12.0001L4.46967 18.4697L5.53033 19.5304L12 13.0607L18.4697 19.5304L19.5303 18.4697L13.0607 12.0001L19.5303 5.53039L18.4697 4.46973L12 10.9394Z" fill="currentColor" /></svg>				</span>
                </button>{/* #primary-mobile-menu */}
              </div>{/* .menu-button-container */}
              <div className="primary-menu-container"><ul id="primary-menu-list" className="menu-wrapper"><li id="menu-item-2304" className="menu-item menu-item-type-post_type menu-item-object-page current-page-ancestor menu-item-has-children menu-item-2304"><a href="http://levels.levelupworks.com/index.php/levels/">Projects</a><button className="sub-menu-toggle" aria-expanded="false" onClick="twentytwentyoneExpandSubMenu(this)"><span className="icon-plus"><svg className="svg-icon" width={18} height={18} aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z" fill="currentColor" /></svg></span><span className="icon-minus"><svg className="svg-icon" width={18} height={18} aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6 11h12v2H6z" fill="currentColor" /></svg></span><span className="screen-reader-text">Open menu</span></button>
                    <ul className="sub-menu">
                      <li id="menu-item-2303" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2303"><a href="http://levels.levelupworks.com/index.php/levels/pw/">Teachers Only</a></li>
                    </ul>
                  </li>
                  <li id="menu-item-2300" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2300"><a href="http://levels.levelupworks.com/index.php/user-registration/">Sign Up</a></li>
                  <li id="menu-item-2301" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2301"><a href="http://levels.levelupworks.com/index.php/log-in/">Log In</a></li>
                </ul></div>	</nav>{/* #site-navigation */}
          </header>{/* #masthead */}
          <div id="content" className="site-content">
            <div id="primary" className="content-area">
              <main id="main" className="site-main" role="main">
                <article id="post-1404" className="post-1404 page type-page status-publish hentry entry">
                  <div className="entry-content">
                    <h2 className="has-text-align-center"><strong>Project-Based Digital Technologies Learning for Teachers and Students </strong></h2>
                    <figure className="wp-block-image size-large"><img loading="lazy" width={1024} height={200} src="http://levels.levelupworks.com/wp-content/uploads/2019/11/banner-1024x200.png" alt="" className="wp-image-1462" /></figure>
                    <p><strong><a rel="noreferrer noopener" aria-label="LevelUp Works (opens in a new tab)" href="https://www.levelupworks.com" target="_blank">LevelUp Works</a></strong> is an Auckland-based enterprise providing an authentic, project-based learning programme as a turn-key solution for teachers and students to advance their skills in Digital Technologies and other learning areas, in response to the New Zealand <a href="http://www.education.govt.nz/our-work/changes-in-education/digital-technologies-and-hangarau-matihiko-learning/">Digital Technologies &amp; Hangarau Matihiko</a>.</p>
                    <h2>Creative Problem Solving </h2>
                    <p>Co-designed by IT industry experts and schools in New Zealand, the Creative Problem Solving programme is designed as a series of Scratch-based digital creation projects and unplugged activities, aimed to encourage self-motivation and student agency, and achieve both <a rel="noreferrer noopener" aria-label="Progress Outcomes (opens in a new tab)" href="http://nzcurriculum.tki.org.nz/The-New-Zealand-Curriculum/Technology/Progress-outcomes" target="_blank">Progress Outcomes</a> of the Digital Technologies Curriculum, including:</p>
                    <ul><li>Computational thinking for digital technologies</li><li>Designing and developing digital outcomes</li></ul>
                    <p>Developed using an Agile approach, the programme is continually evolving as we receive feedback.  You will see more contents/features added in the months to come.</p>
                    <div className="wp-block-group"><div className="wp-block-group__inner-container">
                        <blockquote className="wp-block-quote is-style-default"><p><strong>In response to the impacts of COVID-19 to teachers and students, LevelUp Works opens up its programme for teachers and students to access at no cost until March 2021. </strong></p></blockquote>
                      </div></div>
                    <div className="wp-block-button aligncenter"><a className="wp-block-button__link" href="http://levels.levelupworks.com/index.php/user-registration/">Sign Up</a></div>
                    <div style={{height: '40px'}} aria-hidden="true" className="wp-block-spacer" />
                    <h2>Future-Proof Students for a Career in IR4.0</h2>
                    <p>Designed with IT industry experts, the programme develops the cognitive and social competencies students will find applicable to jobs and careers in the <a rel="noreferrer noopener" aria-label="Fourth Industrial Revolution (IR4) (opens in a new tab)" href="https://www.weforum.org/about/the-fourth-industrial-revolution-by-klaus-schwab" target="_blank">Fourth Industrial Revolution (IR4)</a>.  Below are some of these competencies.</p>
                    <figure className="wp-block-image size-large"><img loading="lazy" width={1024} height={285} src="http://levels.levelupworks.com/wp-content/uploads/2020/03/skills-1024x285.png" alt="" className="wp-image-2151" srcSet="http://levels.levelupworks.com/wp-content/uploads/2020/03/skills-1024x285.png 1024w, http://levels.levelupworks.com/wp-content/uploads/2020/03/skills-300x84.png 300w, http://levels.levelupworks.com/wp-content/uploads/2020/03/skills-768x214.png 768w, http://levels.levelupworks.com/wp-content/uploads/2020/03/skills-1536x428.png 1536w, http://levels.levelupworks.com/wp-content/uploads/2020/03/skills-850x237.png 850w, http://levels.levelupworks.com/wp-content/uploads/2020/03/skills.png 1797w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure>
                    <p>Relevant careers today includes:</p>
                    <ul><li>Software Developer</li><li>UX Designer</li><li>Process Automation Specialist</li></ul>
                    <h2>Designed to Deepen NZ Curriculum Key Principles</h2>
                    <p>Designed with the NZ Curriculum in mind, the programme aims to deepen the understanding of the <a rel="noreferrer noopener" aria-label="key principles (opens in a new tab)" href="http://nzcurriculum.tki.org.nz/The-New-Zealand-Curriculum#collapsible5" target="_blank">Key Principles</a>:</p>
                    <ul><li>High expectations – project-based learning courages students to achieve personal excellence</li><li>Learning to learn – challenges at the end of every project encourages students to explore and learn how to learn</li><li>Treaty of Waitangi – the programme acknowledges the principles of the Treaty of Waitangi, and include specific projects and assets on Maori culture</li><li>Community Engagement –  the programme encourages students to be involved in communities, such as family, whānau, school,&nbsp;and contribute and make connections with other people </li><li>Cultural diversity – designed in New Zealand, the programme reflects NZ’s cultural diversity</li><li>Coherence – the programme uses digital technologies to bridge across learning areas such as English, Arts, Languages, Mathematics and Statistics, Science, Social Sciences and Technology</li><li>Inclusion – the programme is designed with acknowledgement to the student’s identities and talents, allowing them to be creative to their personal ability</li><li>Future focus – the programme leads students to explore future themes such as artificial intelligence and augmented reality</li></ul>
                    <h2>Designed to Enhance Key Competencies</h2>
                    <p>The programme enhances capabilities of students in the <a href="http://nzcurriculum.tki.org.nz/The-New-Zealand-Curriculum#collapsible7" target="_blank" rel="noreferrer noopener" aria-label="5 Key Competencies (opens in a new tab)">5 Key Competencies</a> identified in the New Zealand Curriculum:</p>
                    <ul><li><strong>Thinking</strong>&nbsp;– in particular the programme focused on problem solving, design thinking and computational thinking.</li><li><strong>Using language, symbols, and texts</strong>&nbsp;– working with, being able to understand, and making sense of the codes (languages and symbols) in which knowledge is expressed.</li><li><strong>Managing self</strong>&nbsp;– projects and challenges are designed to motivate students to explore and experiment with self-motivation</li><li><strong>Relating to others</strong>&nbsp;– the programme is designed with unplugged sessions where students interact in a range of different situations, including things like being able to listen well, recognise different points of view,&nbsp;and share ideas.</li><li><strong>Participating and&nbsp;contributing</strong>&nbsp;– the programme encourages students to be involved in communities, such as family, whānau, school,&nbsp;and contribute and make connections with other people</li></ul>
                    <div className="wp-block-button aligncenter"><a className="wp-block-button__link" href="http://levels.levelupworks.com/index.php/user-registration/">Sign Up</a></div>
                  </div>{/* .entry-content */}
                </article>{/* #post-1404 */}
              </main>{/* #main */}
            </div>{/* #primary */}
          </div>{/* #content */}
          <footer id="colophon" className="site-footer" role="contentinfo">
            <div className="site-info">
              <div className="site-name">
                LevelUp Works																		</div>{/* .site-name */}
              <div className="powered-by">
                Proudly powered by <a href="https://wordpress.org/">WordPress</a>.			</div>{/* .powered-by */}
            </div>{/* .site-info */}
          </footer>{/* #colophon */}
        </div>{/* #page */}
      </div>
    </div>
  );
};

export default Home;
