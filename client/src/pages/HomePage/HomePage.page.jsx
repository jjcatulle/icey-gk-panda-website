import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

import promoVideo from "../../assets/video/twitter.mp4";
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
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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

function ColorsTimeline() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <Timeline position={isTabletOrMobile ? null : "alternate"}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            style={{
              background: "#b22c00",
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
                  New Project Lead: Chen transferred ownership to FISHMARKET.
                  The new lead has built his own dedicated team and a new
                  promising vision to the Geek Pandaz!
                </li>
                <li>
                  DAO: The Pandaria Council DAO formulates to give every holder
                  a voice in the project’s direction!
                </li>
                <li>
                  New Website: The website receives a facelift as a new era in
                  Pandaria begins! The accompanying interactive dashboard will
                  become available as well.
                </li>
                <li>
                  Staking: JC, the Head Developer, is putting in overtime for
                  the Pandaz: the $GEEK token is coming to life! The development
                  of the staking mechanism is close to completion, and it will
                  be integrated into the dashboard, which will include future
                  drops and GeekPandaz-exclusive merchandise.
                </li>
                <li>
                  OpenSea Integration: The test run integration from IMX to the
                  ETH mainnet has been successful! We are working on gaining
                  access to the metadata from the previous developer,
                  Kotnascher, to finalize the process.
                </li>
                <li>
                   Christmas Miracle(s): One lucky Panda holder will be
                  airdropped a LEGENDARY PANDA! A second legendary will also be
                  Dutch auctioned on Open Sea with the Geek Pandaz join
                </li>
                <li>
                   All Panda holders get an interesting surprise…a free Jolly
                  Panda! 800 Jolly Pandas join the Geek Pandas to celebrate a
                  successful OpenSea integration! That is all the information we
                  are allowed to give away for now…
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
              background: "#b22c00",
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
                <ul
                // dir="rtl"
                >
                  <li>
                    Expansion: The team aims to use this time to work on
                    partnerships and collaborations to grow and strengthen the
                    community. This includes other IMX projects like Foreign
                    Fuels, Pixel Degens and IMX Squirrels.
                  </li>
                  <li>
                    Private Gaming Ecosystem: We will begin to implement twitch
                    influencers into our gameplan: Panda holders will have
                    access to twitch rewards for watching GeekPandaz-sponsored
                    content creators!
                  </li>
                  <li>
                    Verified GeekPandaz holders will gain access to
                    collaborations and partnerships for watching Geekpandaz
                    streamers! We will have many surprises in store to support
                    our gaming community!
                  </li>
                  <li>
                    Launchpad: There will be projects launching off of
                    GeekPandaz website. GeekPandaz holders will be given
                    whitelist spots and other potential perks for staking their
                    panda and verifying on the website.
                  </li>
                  <li>
                    Community Wallet: A MetaPandaz Community Chest will be
                    opened and seeded with ETH. Holders will be able to vote to
                    launch experiences, activations, and campaigns that benefit
                    the entire Pandaz ecosystem.
                  </li>
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
              background: "#b22c00",
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
                <ul
                // dir="rtl"
                >
                  <li>
                    Community Games: GeekPandaz will host regular tournaments
                    for holders to compete in AAA games and there will be
                    massive prize pools of $GEEK up for grabs! Livestream
                    tournaments will allow viewers to earn additional $GEEK!
                  </li>
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
              background: "#b22c00",
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
                <ul
                // dir="rtl"
                >
                  <li>
                    New Collection: There will be a new generation of GeekPandaz
                    on OpensSea
                  </li>
                  <li>
                    Breeding: It’s time for the mating season! GeekPandaz
                    holders can utilize their $GEEK tokens and burn one of their
                    GeekPandaz (with the requirement of having at least 2) to
                    produce a unique baby MetaPanda. The GeekPandaz team will
                    release an additional supply of MetaPandaz for the public to
                    mint, allowing new members to join our community.
                  </li>
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
              background: "#b22c00",
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
                <ul
                // dir="rtl"
                >
                  <li>
                    $GEEK will be able to be used to level up your Gen 2 Pandaz.
                    With a unique Tier system to unlock special features of your
                    Pandaz.
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
            New Project Lead: Chen transferred ownership to FISHMARKET. The new
            lead has built his own dedicated team and a new promising vision to
            the Geek Pandaz!
          </li>
          <li>
            DAO: The Pandaria Council DAO formulates to give every holder a
            voice in the project’s direction!
          </li>
          <li>
            New Website: The website receives a facelift as a new era in
            Pandaria begins! The accompanying interactive dashboard will become
            available as well.
          </li>
          <li>
            Staking: JC, the Head Developer, is putting in overtime for the
            Pandaz: the $GEEK token is coming to life! The development of the
            staking mechanism is close to completion, and it will be integrated
            into the dashboard, which will include future drops and
            GeekPandaz-exclusive merchandise.
          </li>
          <li>
            OpenSea Integration: The test run integration from IMX to the ETH
            mainnet has been successful! We are working on gaining access to the
            metadata from the previous developer, Kotnascher, to finalize the
            process.
          </li>
          <li>
             Christmas Miracle(s): One lucky Panda holder will be airdropped a
            LEGENDARY PANDA! A second legendary will also be Dutch auctioned on
            Open Sea with the Geek Pandaz join
          </li>
          <li>
             All Panda holders get an interesting surprise…a free Jolly Panda!
            800 Jolly Pandas join the Geek Pandas to celebrate a successful
            OpenSea integration! That is all the information we are allowed to
            give away for now…
          </li>
        </ul>
      </TimeLineItemCtn>

      <TimeLineItemCtn>
        <div className="mytitle">January 2022</div>
        <ul
        // dir="rtl"
        >
          <li>
            Expansion: The team aims to use this time to work on partnerships
            and collaborations to grow and strengthen the community. This
            includes other IMX projects like Foreign Fuels, Pixel Degens and IMX
            Squirrels.
          </li>
          <li>
            Private Gaming Ecosystem: We will begin to implement twitch
            influencers into our gameplan: Panda holders will have access to
            twitch rewards for watching GeekPandaz-sponsored content creators!
          </li>
          <li>
            Verified GeekPandaz holders will gain access to collaborations and
            partnerships for watching Geekpandaz streamers! We will have many
            surprises in store to support our gaming community!
          </li>
          <li>
            Launchpad: There will be projects launching off of GeekPandaz
            website. GeekPandaz holders will be given whitelist spots and other
            potential perks for staking their panda and verifying on the
            website.
          </li>
          <li>
            Community Wallet: A MetaPandaz Community Chest will be opened and
            seeded with ETH. Holders will be able to vote to launch experiences,
            activations, and campaigns that benefit the entire Pandaz ecosystem.
          </li>
        </ul>
      </TimeLineItemCtn>
      <TimeLineItemCtn>
        <div className="mytitle">February 2022</div>
        <ul
        // dir="rtl"
        >
          <li>
            Community Games: GeekPandaz will host regular tournaments for
            holders to compete in AAA games and there will be massive prize
            pools of $GEEK up for grabs! Livestream tournaments will allow
            viewers to earn additional $GEEK!
          </li>
        </ul>
      </TimeLineItemCtn>

      <TimeLineItemCtn>
        <div className="mytitle">March 2022</div>
        <ul
        // dir="rtl"
        >
          <li>
            New Collection: There will be a new generation of GeekPandaz on
            OpensSea
          </li>
          <li>
            Breeding: It’s time for the mating season! GeekPandaz holders can
            utilize their $GEEK tokens and burn one of their GeekPandaz (with
            the requirement of having at least 2) to produce a unique baby
            MetaPanda. The GeekPandaz team will release an additional supply of
            MetaPandaz for the public to mint, allowing new members to join our
            community.
          </li>
        </ul>
      </TimeLineItemCtn>

      <TimeLineItemCtn>
        <div className="mytitle">April 2022</div>
        <ul
        // dir="rtl"
        >
          <li>
            $GEEK will be able to be used to level up your Gen 2 Pandaz. With a
            unique Tier system to unlock special features of your Pandaz.
          </li>
          <li>
            There will be much more in the future. Stay tuned for updates on the
            roadmap!
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
      if (slide.slideIndex != slideLength) {
        setslide({ ...slide, slideIndex: slide.slideIndex + 1 });
      } else {
        setslide({ ...slide, slideIndex: 0 });
      }
    }, 1000);
  }, []);

  const toggleMuteBtn = () => {
    setmute(!mute);
  };
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
              <a href="https://discord.gg/9rEhk5x3Xm" className="item">
                Discord
              </a>
              <a href="https://twitter.com/GeekPandaz" className="item">
                Twitter
              </a>
              <a className="item">Contact Us</a>
              <a
                href="https://market.x.immutable.com/assets?collection=0xdf1a6b88b8c1c3a6f6eaf3f43c6b052ef94a662d"
                className="item"
              >
                Imx
              </a>
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
                    "1500 unique Pandaz in the Forest of Pandaria ready to take over the metaverse ",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <a href="/mint">Mint</a>
              <div className="mute" onClick={toggleMuteBtn}>
                {mute ? "Unmute" : "Mute"} Audio
              </div>
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
                    The GeekPandaz are a Genesis collection of 1,500 unique NFTs
                    on Immutable X ready to take over the Pandaria universe.
                  </div>
                  <div className="description">
                    It all starts with the Genesis GeekPandaz mint. The
                    Pandarian family grows together, and the proceeds of this
                    mint will be used to fund a launchpad for blockchain games.
                    We believe that the blockchain will revolutionize
                    play-to-earn gaming by introducing transparency, ownership,
                    incentive models, and NFTs to the space. We see the
                    Pandarian family as having a major role to play in the
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
                <img src={slide.pictures[slide.slideIndex]} alt="" srcset="" />
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
          <FaqsCtn>
            <div className="title">FAQ</div>
            <div className="items">
              <FaqItem
                label="Who are the GeekPandaz?"
                text="The GeekPandaz are a collection of 1500 unique NFTs living on Immutable X. Each Panda is a sight to behold - thoughtfully designed, loaded with accessories, and ready to take over the Pandaria universe."
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
                  src="https://media.discordapp.net/attachments/926597475295461436/931664657939329044/inconnu.png?width=1138&height=1138"
                  alt=""
                  srcset=""
                  onClick={() => {
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
                  src="https://bafkreieyj2v66i6bwnbtj5nztsz3lw7tg4horj3uwkamplmmzi5iegaqnu.ipfs.dweb.link/"
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
                  src="https://cdn.discordapp.com/attachments/919383873153028167/921627009208156190/Drip.png"
                  alt=""
                  srcset=""
                />
                <div className="name">OG</div>
                <div className="role">Management Lead</div>
                <div className="role">
                  {/* <TwitterIcon style={{ cursor: "pointer" }} /> */}
                </div>
              </StyledNode>
              <StyledNode>
                <img
                  src="https://bafkreiaol6xc4sr5bwdgwqoxeroczgwdvuan4snjiniqxvh4dav3gfm4sm.ipfs.dweb.link/"
                  alt=""
                  srcset=""
                />
                <div className="name">Jake aka YOLO</div>
                <div className="role">Communications</div>
                <div className="role">
                  <a href="https://twitter.com/JakeYoloxD">
                    <TwitterIcon style={{ cursor: "pointer" }} />
                  </a>
                  {/* <TwitterIcon style={{ cursor: "pointer" }} /> */}
                </div>
              </StyledNode>
              <StyledNode>
                <img
                  src="https://bafkreig2xiowokslu7fgrx2jld6sgmfu7a64hxhoshn2rjrtsllfg4ufjq.ipfs.dweb.link/"
                  alt=""
                  srcset=""
                />
                <div className="name">Jake</div>
                <div className="role">Marketing Lead</div>
                <div className="role">
                  <a href="https://twitter.com/juicyjakee">
                    <TwitterIcon style={{ cursor: "pointer" }} />
                  </a>
                  {/* <TwitterIcon style={{ cursor: "pointer" }} /> */}
                </div>
              </StyledNode>
              <StyledNode>
                <img
                  src="https://media.discordapp.net/attachments/937537796095229962/950994757113487390/Meta_Machi.jpg"
                  alt=""
                  srcset=""
                />
                <div className="name">Matchi</div>
                <div className="role">Community Manager</div>
                <div className="role">
                  <a href="https://twitter.com/MachiStyleo">
                    <TwitterIcon style={{ cursor: "pointer" }} />
                  </a>
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
