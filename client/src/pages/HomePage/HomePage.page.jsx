import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

import promoVideo from "../../assets/video/Icey_panda_1920_1080_px.mp4";

import { Bottom, Top } from "../../global.styles";
import {
  HomePageCtn,
  VideoCtn,
  LandingCtn,
  LogoCtn,
  AboutCtn,
  TimeLineCtn,
  TimeLineItemCtn,
  LogoCtnItems,
  AppBarCtn,
  FaqsCtn,
  FaqItemCtn,
  TeamCtn,
  StyledNode,
  FooterCtn,
} from "./HomePage.styles";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Tree, TreeNode } from "react-organizational-chart";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkIcon from "@mui/icons-material/Link";

// import song from "../../assets/audio/bensound-dubstep.mp3";
import fish from "../../assets/img/profiles/fishnew.png";
import jc from "../../assets/img/profiles/jc.jfif";
import og from "../../assets/img/profiles/og.png";
import strange from "../../assets/img/projects/strange-creatures.jpg";
import rovers from "../../assets/img/projects/imx-rovers-new.png";
import rarity from "../../assets/img/projects/imx-rarity.jpg";
import acrona from "../../assets/img/projects/acrona-city.png";

function ColorsTimeline() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <Timeline position={isTabletOrMobile ? null : "alternate"}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            style={{
              background: "#36B0FF",
              width: "20px",
              height: "20px",
            }}
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration={3}>
            <TimeLineItemCtn>
              <div className="mytitle">December 2021</div>
              <ul>
                <li>
                  DAO: The Icetopia Council DAO formulates to give every holder
                  a voice in the project’s direction!
                </li>
                <li>
                  New Website: The website receives a facelift as a new era in
                  Icetopia begins! The accompanying interactive dashboard will
                  become available as well.
                </li>
              </ul>
            </TimeLineItemCtn>
          </ScrollAnimation>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            style={{
              background: "#36B0FF",
              width: "20px",
              height: "20px",
            }}
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineContent>
            <ScrollAnimation
              animateIn="fadeIn"
              animateOut="fadeOut"
              duration={3}
            >
              <TimeLineItemCtn>
                <div className="mytitle">January 2022</div>
                <ul>
                  <li>Staking: JC, the Head Developer, is putting in overtime for the Pandaz: the $ICE token is coming to life! The development of the staking mechanism is close to completion, and it will be integrated into the dashboard, which will include future drops and Icey Pandaz-exclusive merchandise. </li>
                  <li>
                  Expansion: The team aims to use this time to work on partnerships and collaborations to grow and strengthen the community. This includes other projects like Acrona City, IMX Squirrels, and MANY MORE! 
                  </li>
                  <li>
                  Launchpad: There will be projects launching off of Icey Pandaz, such as the IMX ROVERS! Icey Pandaz holders will receive whitelist spots and other potential perks for staking their panda and verifying on the website.
                  </li>
                  <li>
                  Gaming Teams/Guilds: The Icey Panda holders can join gaming teams and guilds that we partner with!                  </li>
                  
                </ul>
              </TimeLineItemCtn>
            </ScrollAnimation>
          </TimelineContent>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            style={{
              background: "#36B0FF",
              width: "20px",
              height: "20px",
            }}
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineContent>
            <ScrollAnimation
              animateIn="fadeIn"
              animateOut="fadeOut"
              duration={3}
            >
              <TimeLineItemCtn>
                <div className="mytitle">February 2022</div>
                <ul>
                  <li>
                  Community Games: Icey Pandaz will host regular tournaments for holders to compete in AAA games and there will be massive prize pools of $ICE up for grabs! Livestream tournaments will allow viewers to earn additional $ICE!
                  </li>
                  <li>Merchandise: A store will open with unique prizes to be bought with the $ICE token!!</li>
                  <li>Community Wallet: A MetaPandaz Community Chest will be opened and seeded with ETH. Holders will be able to vote to launch experiences, activations, and campaigns that benefit the entire Pandaz ecosystem.</li>
                </ul>
              </TimeLineItemCtn>
            </ScrollAnimation>
          </TimelineContent>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            style={{
              background: "#36B0FF",
              width: "20px",
              height: "20px",
            }}
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineContent>
            <ScrollAnimation
              animateIn="fadeIn"
              animateOut="fadeOut"
              duration={3}
            >
              <TimeLineItemCtn>
                <div className="mytitle">March 2022</div>
                <ul>
                  <li>
                  New Collection: There will be a new generation of 3-D Icey Pandaz on OpensSea
                  </li>
                  <li>
                  Breeding: It’s time for the mating season! Panda holders can utilize their $ICE tokens and breed (with the requirement of having at least two) to produce a unique baby Meta Panda. The Icey Pandaz team will release an additional supply of Meta Pandaz for the public to mint, allowing new members to join our community.</li>
                </ul>
              </TimeLineItemCtn>
            </ScrollAnimation>
          </TimelineContent>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            style={{
              background: "#36B0FF",
              width: "20px",
              height: "20px",
            }}
          />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineContent>
            <ScrollAnimation
              animateIn="fadeIn"
              animateOut="fadeOut"
              duration={3}
            >
              <TimeLineItemCtn>
                <div className="mytitle">April 2022</div>
                <ul>
                  <li>
                  $ICE will be able to be used to level up your Gen 2 Pandaz. With a unique Tier system to unlock special features of your Pandaz.
                  </li>
                  <li>
                    There will be much more in the future. Stay tuned for
                    updates on the roadmap!
                  </li>
                </ul>
              </TimeLineItemCtn>
            </ScrollAnimation>
          </TimelineContent>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

function MobileColorsTimeline() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      <TimeLineItemCtn>
        <div className="mytitle">December 2021</div>
          <ul>
            <li>
              DAO: The Icetopia Council DAO formulates to give every holder
              a voice in the project’s direction!
            </li>
            <li>
              New Website: The website receives a facelift as a new era in
              Icetopia begins! The accompanying interactive dashboard will
              become available as well.
            </li>
          </ul>
      </TimeLineItemCtn>

      <TimeLineItemCtn>
        <div className="mytitle">January 2022</div>
          <ul>
            <li>Staking: JC, the Head Developer, is putting in overtime for the Pandaz: the $ICE token is coming to life! The development of the staking mechanism is close to completion, and it will be integrated into the dashboard, which will include future drops and Icey Pandaz-exclusive merchandise. </li>
            <li>
            Expansion: The team aims to use this time to work on partnerships and collaborations to grow and strengthen the community. This includes other projects like Acrona City, IMX Squirrels, and MANY MORE! 
            </li>
            <li>
            Launchpad: There will be projects launching off of Icey Pandaz, such as the IMX ROVERS! Icey Pandaz holders will receive whitelist spots and other potential perks for staking their panda and verifying on the website.
            </li>
            <li>
            Gaming Teams/Guilds: The Icey Panda holders can join gaming teams and guilds that we partner with!                  </li>
            
          </ul>
      </TimeLineItemCtn>
      <TimeLineItemCtn>
        <div className="mytitle">February 2022</div>
        <ul>
          <li>
            Community Games: Icey Pandaz will host regular tournaments for holders to compete in AAA games and there will be massive prize pools of $ICE up for grabs! Livestream tournaments will allow viewers to earn additional $ICE!
          </li>
          <li>Merchandise: A store will open with unique prizes to be bought with the $ICE token!!</li>
          <li>Community Wallet: A MetaPandaz Community Chest will be opened and seeded with ETH. Holders will be able to vote to launch experiences, activations, and campaigns that benefit the entire Pandaz ecosystem.</li>
        </ul>
      </TimeLineItemCtn>

      <TimeLineItemCtn>
        <div className="mytitle">March 2022</div>
        <ul>
          <li>
            New Collection: There will be a new generation of 3-D Icey Pandaz on OpensSea
          </li>
          <li>
            Breeding: It’s time for the mating season! Panda holders can utilize their $ICE tokens and breed (with the requirement of having at least two) to produce a unique baby Meta Panda. The Icey Pandaz team will release an additional supply of Meta Pandaz for the public to mint, allowing new members to join our community.</li>
        </ul>
      </TimeLineItemCtn>

      <TimeLineItemCtn>
        <div className="mytitle">April 2022</div>
          <ul>
            <li>
            $ICE will be able to be used to level up your Gen 2 Pandaz. With a unique Tier system to unlock special features of your Pandaz.
            </li>
            <li>
              There will be much more in the future. Stay tuned for
              updates on the roadmap!
            </li>
          </ul>
      </TimeLineItemCtn>
    </>
  );
}
const FaqItem = ({ label = "", text = "" }) => {
  const [show, setshow] = useState(false);
  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration={3}>
      <FaqItemCtn show={show}>
        <div className="label">
          <div className="div">{label}</div>
          <span
            onClick={() => {
              setshow(!show);
            }}
          >
            {show ? "V" : ">"}
          </span>
        </div>
        <div className="text">{text}</div>
      </FaqItemCtn>
    </ScrollAnimation>
  );
};

const HomePage = () => {
  const navigate = useNavigate();
  // const [audio] = useState(new Audio({song}));

  const [mute, setmute] = useState(true);
  const [slide, setslide] = useState({
    interval: null,
    slideIndex: 0,
    pictures: [
      "https://bafkreiafjzxjsoiomn4o3padmdlhwm33q2gphaffszsv6vuktsdb55en4q.ipfs.dweb.link/",
      "https://bafkreigyuajeqvnsi3s4ubhpb2uubflkgqp6d7aqmrxeokivaely3w4rfu.ipfs.dweb.link/",
      "https://bafkreie4cmrwrzm3gk2yc6tbc3g3qu7snx745nkxeq6rwghav7of3ys5mq.ipfs.dweb.link/",
      "https://bafkreig6on75imnw25kf6bmp7d7gsfbgwihuir72fpjn3wbjxnxzpg67ty.ipfs.dweb.link/",
      "https://bafkreibicy4ki7id5dzwm2y36szj245hmpsmrm2uo3rntuilnx5nju36o4.ipfs.dweb.link/",
      "https://bafkreicpanwdeluyunlx4csdfrnipqz6j3nekxgsjc5cgucffgjt4f4xve.ipfs.dweb.link/",
      "https://bafkreibpukeeojjhwguhnwyhuxpsvazz2vx6iewqaf52757gtihk3hgmmu.ipfs.dweb.link/",
      "https://bafkreigg3h2glyjmsstu7chw3agp5offhstc5owun66mzafrc6xkqdo6mu.ipfs.dweb.link/",
      "https://bafkreic5icimwhuuz5run5poa5n4yoxx42gqp6ihtnii7sfqzaqde2q2jy.ipfs.dweb.link/",
      "https://bafkreidlavbe3i4mittfem7gsg7r53o2md6kve3624e75ev675lrgz6xwe.ipfs.dweb.link/",
      "https://bafkreihv4p7cu36fzqhcvjq27x44kpxyyu2lspe5sfft3edqghig65sbm4.ipfs.dweb.link/",
    ],
  });
  useEffect(() => {
    setInterval(() => {
      let slideLength = slide.pictures.length - 1;
      if (slide.slideIndex !== slideLength) {
        setslide({ ...slide, slideIndex: slide.slideIndex + 1 });
      } else {
        setslide({ ...slide, slideIndex: 0 });
      }
    }, 1000);
  }, [slide]);

  const toggleMuteBtn = () => {
    setmute(!mute);
  };

  // useEffect(() => {
  //   !mute ? audio.play() : audio.pause();
  // }, [audio, mute]);

  // useEffect(() => {
  //   audio.addEventListener('ended', () => setmute(false));
  //   return () => {
  //     audio.removeEventListener('ended', () => setmute(false));
  //   };
  // }, [audio]);

  return (
    <HomePageCtn>
      <LandingCtn>
        <Bottom>
          <VideoCtn autoPlay muted={mute} loop>
            <source src={promoVideo} type="video/mp4" />
          </VideoCtn>
        </Bottom>
        <Top>
          <AppBarCtn>
            <div className="contents">
              <a href="https://twitter.com/IceyPandaz" target="_blank" rel="noreferrer" className="item">
                Twitter
              </a>
              <a href="https://forms.gle/5TWb4PCycjqJ818p8" target="_blank" rel="noreferrer" className="item">Contact Us</a>
              <Link to="/dashboard" className="button">
                Dashboard
              </Link>
            </div>
          </AppBarCtn>
          <LogoCtn>
            <LogoCtnItems>
              <div className="name-company">ICEYPANDAZ</div>

              <Typewriter
                className="type"
                options={{
                  strings: [
                    "800 unique Pandaz in the Forest of Icetopia ready to take over the metaverse ",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              {/* <a href="/mint">Mint</a> */}
              {/* <div className="mute" onClick={toggleMuteBtn}>
                {mute ? "Unmute" : "Mute"} Audio
              </div> */}
            </LogoCtnItems>
          </LogoCtn>
          <AboutCtn id="about">
            <div className="about-info">
              <ScrollAnimation
                animateIn="fadeIn"
                animateOut="fadeOut"
                duration={3}
              >
                <div className="content">
                  <div className="title">
                    The IceyPandaz are a Genesis collection of 800 unique NFTs
                    on Opensea ready to take over the Icetopia universe.
                  </div>
                  <div className="description">
                    It all starts with the Genesis IceyPandaz mint. The
                    Icetopian family grows together, and the proceeds of this
                    mint will be used to fund a launchpad for blockchain games.
                    We believe that the blockchain will revolutionize
                    play-to-earn gaming by introducing transparency, ownership,
                    incentive models, and NFTs to the space. We see the
                    Icetopian family as having a major role to play in the
                    growth and evolution of this space.
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="about-image">
              <ScrollAnimation
                animateIn="fadeIn"
                animateOut="bounceOutRight"
                duration={3}
              >
                <img src="https://media.discordapp.net/attachments/937537796095229962/941156043117973564/Webp.net-gifmaker_5.gif" alt="" srcset="" />
              </ScrollAnimation>
            </div>
          </AboutCtn>
          <TimeLineCtn>
            <div className="items">
              <div className="title">ROADMAP 1.0</div>
              <div className="desktop">
                <ColorsTimeline />
              </div>
              <div className="mobile">
                <MobileColorsTimeline />
              </div>
            </div>
          </TimeLineCtn>
          
          <TeamCtn>
            <div className="title">Projects</div>
            <div className="items">
              <StyledNode>
                <img
                  src={rovers}
                  alt="IMX Rovers"
                  srcset=""
                />
                <div className="name">IMX Rovers</div>
                <div className="role">Project</div>
                <div className="role">
                  <a href="https://imxrovers.club/" target="_blank" rel="noreferrer">
                    <LinkIcon style={{ cursor: "pointer" }} />
                  </a>
                </div>
              </StyledNode>
              <StyledNode>
                <img
                  src={strange}
                  alt="Strange Creatures"
                  srcset=""
                />
                <div className="name">Strange Creatures</div>
                <div className="role">Project</div>
                <div className="role">
                  <a href="https://strangecreatures.io/" target="_blank" rel="noreferrer">
                    <LinkIcon style={{ cursor: "pointer" }} />
                  </a>
                </div>
              </StyledNode>
            </div>
          </TeamCtn>
          <TeamCtn>
            <div className="title">Partners</div>
            <div className="items">
            <StyledNode>
                <img
                  src={acrona}
                  alt="Acrona City"
                  srcset=""
                />
                <div className="name">Acrona City</div>
                <div className="role">Partner</div>
                <div className="role">
                  <a href="https://acronacity.com.au/" target="_blank" rel="noreferrer">
                    <LinkIcon style={{ cursor: "pointer" }} />
                  </a>
                </div>
              </StyledNode>
              <StyledNode>
                <img
                  src={rarity}
                  alt="IMX Rarity"
                  srcset=""
                />
                <div className="name">IMX Rarity</div>
                <div className="role">Partner</div>
                <div className="role">
                  <a href="https://imxrarity.io/" target="_blank" rel="noreferrer">
                    <LinkIcon style={{ cursor: "pointer" }} />
                  </a>
                </div>
              </StyledNode>
            </div>
          </TeamCtn>
          <FaqsCtn>
            <div className="title">FAQ</div>
            <div className="items">
              <FaqItem
                label="Who are the IceyPandaz?"
                text="The IceyPandaz are a collection of 800 unique NFTs living on Immutable X. Each Panda is a sight to behold - thoughtfully designed, loaded with accessories, and ready to take over the Icetopia universe."
              />
              <FaqItem
                label="Why did you choose Immutable X?"
                text='Immutable X is a leading ‘Layer 2’ solution for NFTs on the Ethereum network. Minting and trading on the Immutable platform currently requires NO GAS FEES! Our team truly believes that IMX is the "Uncrowned King" of the NFT market.  

Immutable have partnered with TikTok, Veve and Opensea. You can find out more about their platform here: https://www.immutable.com/ and here: https://immutablex.medium.com/.'
              />
            </div>
          </FaqsCtn>

          <TeamCtn>
            <div className="title">The Team</div>
            <div className="items">
              <StyledNode>
                <img
                  src={fish}
                  alt=""
                  srcset=""
                  onClick={()=>{
                    window.location.href =
                      "https://forms.gle/QGbDbdFExUKseWDQ6";
                  }}
                />
                <div className="name">Fish</div>
                <div className="role">Project Lead</div>
                <div className="role">
                  <a href="https://twitter.com/Fishychicken5">
                    <TwitterIcon style={{ cursor: "pointer" }} />
                  </a>
                </div>
              </StyledNode>
              <StyledNode>
                <img
                  src={jc}
                  alt=""
                  srcset=""
                />
                <div className="name">JC</div>
                <div className="role">Developer</div>
                <div className="role">
                  <a href="https://twitter.com/JC__Jean">
                    <TwitterIcon style={{ cursor: "pointer" }} />
                  </a>
                </div>
              </StyledNode>
              <StyledNode>
                <img
                  src={og}
                  alt=""
                  srcset=""
                />
                <div className="name">OG</div>
                <div className="role">Management Lead</div>
                <div className="role">
                  {/* <TwitterIcon style={{ cursor: "pointer" }} /> */}
                </div>
              </StyledNode>
            </div>
          </TeamCtn>
          <FooterCtn>
            <div style={{ margin: "auto" }}>
              Made with <FavoriteIcon /> by JC for IceyPandaz - All Rights
              Reserved -
            </div>
          </FooterCtn>
        </Top>
      </LandingCtn>
    </HomePageCtn>
  );
};

export default HomePage;
