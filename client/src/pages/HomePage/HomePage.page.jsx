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
} from "./HomePage.styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Tree, TreeNode } from "react-organizational-chart";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

// import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

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
              <div className="mytitle">October 2021: Genesis Minting</div>
              <ul>
                <li>
                  1,500 Genesis GeekPandaz, with over 120 unique traits, enter
                  the Universe.
                </li>
                <li>
                  Whitelisted members will be able to mint their GeekPandaz over
                  a 24-hour gas-free presale, launched at 3 pm EST on Thursday
                  the 11th of November 2021.
                </li>
                <li>
                  The public mint will launch at 3 pm EST on Friday the 12th of
                  November 2021.
                </li>
                <li>
                  We will simultaneously airdrop a 1-of-1 unique Legendary
                  GeekPandaz to one of our early adopters. The remaining 6
                  Legendaries will be distributed to the community at a later
                  date.
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
                <div className="mytitle">Q4 2021: GeekPandaz Honeymoon</div>
                <ul
                // dir="rtl"
                >
                  <li>
                    GeekPandaz will launch the first incubator and launchpad for
                    NFT blockchain games on IMX.
                  </li>
                  <li>
                    GeekPandaz will be migrated to a new contract, bringing new
                    features like breeding, renaming, and the ability to write
                    custom biographies.
                  </li>
                  <li>
                    GeekPandaz will receive their own staking platform, earning
                    $BAMBOO tokens (ERC20) that will be listed on a
                    decentralized exchange. A proportion of the minting proceeds
                    from GeekPandaz will be used to provide liquidity to this
                    token.
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
                <div className="mytitle">Q1 2022: Ecosystem Expansion</div>
                <ul
                // dir="rtl"
                >
                  <li>
                    Breeding: It’s time for the mating season! GeekPandaz
                    holders will be able to use their $BAMBOO tokens to produce
                    a unique baby MetaPanda. The GeekPandaz team will release an
                    additional supply of MetaPandaz for the public to mint,
                    allowing new members to join our community.
                  </li>
                  <li>
                    A MetaPandaz Community Chest will be opened and seeded with
                    ETH. Holders will be able to vote to launch experiences,
                    activations, and campaigns that benefit the entire Pandaz
                    ecosystem.
                  </li>
                  <li>
                    GeekPandaz will host regular tournaments for holders on
                    top-tier games, offering huge prize pools to the best gamers
                    in Pandaria.
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
                <div className="mytitle">Q2 2022: Entering the Metaverse</div>
                <ul
                // dir="rtl"
                >
                  <li>
                    GeekPandaz will target a partnership with The Sandbox to
                    launch GeekPandaz VX, a series of playable voxel-based
                    avatars for the metaverse.
                  </li>
                  <li>
                    The Bamboo Shop will be launched. Inside, Pandaz can
                    purchase custom equipment and wearables for the GeekPandaz
                    VX metaverse avatars.
                  </li>
                  <li>
                    Our team will leverage their passion for crypto gaming to
                    develop multiple P2E arcades for holders with playable NFTs.
                    Bamboo tokens will be used as the in-game currency.
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

const StyledTreeExample = () => (
  <Tree
    lineWidth={"2px"}
    lineColor={"white"}
    lineBorderRadius={"10px"}
    label={
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <StyledNode>
          <img
            src="https://cdn.discordapp.com/avatars/889030251584323664/f1fbef0cdb677a51b9d1bf90a559564d.webp"
            alt=""
            srcset=""
          />
          <div className="name">Chen</div>
          <div className="role">Founder</div>
        </StyledNode>
        <div style={{ width: "20px" }} className="div"></div>
        <StyledNode>
          <StyledNode>
            <img
              src="https://cdn.discordapp.com/avatars/889030251584323664/f1fbef0cdb677a51b9d1bf90a559564d.webp"
              alt=""
              srcset=""
            />
            <div className="name">Chen</div>
            <div className="role">Founder</div>
          </StyledNode>
        </StyledNode>
      </div>
    }
  >
    <TreeNode
      label={
        <StyledNode>
          {" "}
          <img
            src="https://cdn.discordapp.com/avatars/889030251584323664/f1fbef0cdb677a51b9d1bf90a559564d.webp"
            alt=""
            srcset=""
          />
          <div className="name">Chen</div>
          <div className="role">Founder</div>
        </StyledNode>
      }
    >
      <TreeNode label={<StyledNode>Marketing</StyledNode>}>
        <TreeNode
          label={
            <StyledNode>
              {" "}
              <img
                src="https://cdn.discordapp.com/avatars/889030251584323664/f1fbef0cdb677a51b9d1bf90a559564d.webp"
                alt=""
                srcset=""
              />
              <div className="name">Chen</div>
            </StyledNode>
          }
        />
        <TreeNode
          label={
            <StyledNode>
              {" "}
              <img
                src="https://cdn.discordapp.com/avatars/889030251584323664/f1fbef0cdb677a51b9d1bf90a559564d.webp"
                alt=""
                srcset=""
              />
              <div className="name">Chen</div>
            </StyledNode>
          }
        />
      </TreeNode>
      <TreeNode label={<StyledNode>Management</StyledNode>} />
      <TreeNode label={<StyledNode>Dev</StyledNode>} />
    </TreeNode>
  </Tree>
);
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
    }, 700);
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
              <div className="name-company">GEEKPANDAZ</div>

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

              {/* <img src="https://images.squarespace-cdn.com/content/v1/617173c2e542983559ce6958/773a28c0-f409-432e-88d8-afe88128ee98/LOGO+web+PNG.png?format=1500w" /> */}
              <a href="#about">EXPLORE</a>
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
              <div className="content">
                <ColorsTimeline />
              </div>
            </div>
          </TimeLineCtn>
          <FaqsCtn>
            <div className="title">Faq</div>
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
              <FaqItem
                label="What are the future utiities of the Project?"
                text="
The GeekPandaz team has built an exciting long-term roadmap. A few highlights include An incubator and launchpad for NFT blockchain games on IMX
,GeekPandaz will receive their own staking platform, earning $BAMBOO tokens (ERC20) that will be listed on a decentralized exchange
,GeekPandaz holders will be able to use their $BAMBOO tokens to breed their NFTs, producing unique baby MetaPandaz
,GeekPandaz VX, a series of playable voxel-based avatars for The Sandbox metaverse
,and The Bamboo Shop, in which Pandaz can purchase custom equipment and wearables for the GeekPandaz VX metaverse avatars."
              />
            </div>
          </FaqsCtn>

          <TeamCtn>
            <div className="title">The Team</div>
            <div className="items">
              <StyledNode>
                <img
                  src="https://cdn.discordapp.com/avatars/889030251584323664/f1fbef0cdb677a51b9d1bf90a559564d.webp"
                  alt=""
                  srcset=""
                />
                <div className="name">FISH</div>
                <div className="role">Founder</div>
              </StyledNode>{" "}
              <StyledNode>
                <img
                  src="https://cdn.discordapp.com/avatars/889030251584323664/f1fbef0cdb677a51b9d1bf90a559564d.webp"
                  alt=""
                  srcset=""
                />
                <div className="name">MONTY</div>
                <div className="role">Founder</div>
              </StyledNode>{" "}
              <StyledNode>
                <img
                  src="https://cdn.discordapp.com/avatars/889030251584323664/f1fbef0cdb677a51b9d1bf90a559564d.webp"
                  alt=""
                  srcset=""
                />
                <div className="name">JAKES</div>
                <div className="role">Founder</div>
              </StyledNode>{" "}
              <StyledNode>
                <img
                  src="https://cdn.discordapp.com/avatars/889030251584323664/f1fbef0cdb677a51b9d1bf90a559564d.webp"
                  alt=""
                  srcset=""
                />
                <div className="name">JC</div>
                <div className="role">Founder</div>
              </StyledNode>{" "}
            </div>
          </TeamCtn>
        </Top>
      </LandingCtn>
    </HomePageCtn>
  );
};

export default HomePage;
