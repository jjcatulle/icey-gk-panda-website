import React, { useState, useEffect } from "react";
import {
  DashboardContents,
  DashboardCtn,
  WelcomeCtn,
  SideBarCtn,
  MainBody,
  DashboardWelcome,
  CollectionGridCtn,
  PopUPCtn,
  StakingCtn,
} from "./Dashoard.styles";

import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import TagIcon from "@mui/icons-material/Tag";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CollectionItem from "../../components/collectionItem/collectionItem.compenent";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

import web3 from "../../ethereum/web3";
import Contracts from "../../ethereum/contractsInterface";
import banner from "../../assets/img/bg/Website_Banner.png";

const CollectionGrid = () => {
  const [items, setitems] = useState([]);
  useEffect(() => {
    (async () => {
      const networkId = await web3.eth.net.getId();
      if (networkId != 137) {
        alert("Please change yournetwork to matic and try again");
      }
      const accounts = await web3.eth.getAccounts();
      let nfts = await Contracts("NFT")
        .methods.walletOfOwner(accounts[0])
        .call();
      if (nfts && nfts.length > 0) {
        setitems(items);
      }
    })();
  }, []);
  return (
    <CollectionGridCtn>
      {items.map((data) => (
        <CollectionItem data={data} />
      ))}
    </CollectionGridCtn>
  );
};

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const StakingDashBoard = () => {
  const [userData, setuserData] = useState({
    items: [],
    totalStaked: 0,
    lastrewarded: null,
    totalBalance: 0,
  });
  useEffect(() => {
    (async () => {
      const networkId = await web3.eth.net.getId();
      if (networkId != 137) {
        alert("Please change yournetwork to matic and try again");
      }
      const accounts = await web3.eth.getAccounts();
      let nfts = await Contracts("NFT")
        .methods.walletOfOwner(accounts[0])
        .call();
      if (nfts && nfts.length > 0) {
        setuserData({ ...userData, items: nfts });
      }
      let totalStaked = await Contracts("FARM")
        .methods.totalStaked(accounts[0])
        .call();
      let lastrewarded = await Contracts("FARM")
        .methods.lastRewarded(accounts[0])
        .call();
      let totalBalance = await Contracts("TOKEN")
        .methods.balanceOf(accounts[0])
        .call();
      let response = await fetch("/user/" + accounts[0]);
      const jsonRes = await response.json();
      nfts = [...jsonRes, ...nfts];
      setuserData({
        totalStaked,
        lastrewarded,
        items: nfts,
        totalBalance: totalBalance,
      });
    })();
  }, []);

  async function claimToken() {
    try {
      const networkId = await web3.eth.net.getId();
      if (networkId != 137) {
        alert("Please change yournetwork to matic and try again");
      }
      const accounts = await web3.eth.getAccounts();

      await Contracts("FARM")
        .methods.claimReWards()
        .send({ from: accounts[0] });
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <StakingCtn>
      <div className="details-ctn">
        <div className="item">
          <div className="label">Total Staked</div>
          <div className="value">{userData.totalStaked}</div>
        </div>
        <div className="item">
          <div className="label">Balance</div>
          <div className="value">
            {userData.totalBalance / 1000000000000000000}
          </div>
        </div>
        <div className="item">
          <div className="label">Last Claimed</div>
          <div className="value">{userData.lastrewarded}</div>
        </div>
      </div>
      <button className="claim-btn" onClick={() => claimToken()}>
        Claim tokens
      </button>
      {/* <CollectionGrid /> */}
      <div
        style={{
          width: "100%",
          overflow: "scroll",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {userData.items.map((i, index) => {
              return (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <Item>
                    <CollectionItem data={i} />
                  </Item>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>
    </StakingCtn>
  );
};

const DashBoard = () => {
  const [currentPage, setcurrentPage] = useState("home");
  const [user, setUser] = useState({
    address: null,
    connected: false,
  });

  const renderSwitch = () => {
    switch (currentPage) {
      case "home":
        return (
          <DashboardWelcome>
            <div className="title">(Beta) Welcome..</div>
            <div className="dashboard-wp">
              This dashboard will include tools to help you manage your
              membership as a Panda holder
            </div>
          </DashboardWelcome>
        );
      case "assets":
        return <CollectionGrid />;
      case "rewards":
        return <StakingDashBoard />;
      case "social":
        return (
          <Box
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <nav aria-label="main mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <TwitterIcon />
                    </ListItemIcon>
                    <ListItemText primary="Twitter" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InstagramIcon />
                    </ListItemIcon>
                    <ListItemText primary="Instagram" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        );
      default:
        return "foo";
    }
  };

  return user.connected ? (
    <DashboardCtn>
      <DashboardContents>
        <SideBarCtn>
          <HomeIcon onClick={() => setcurrentPage("home")} />
          <EmojiEventsIcon onClick={() => setcurrentPage("rewards")} />
          {/* <TagIcon onClick={() => setcurrentPage("social")} /> */}
        </SideBarCtn>
        <MainBody>
        <div className="site-bg">
          <img src={banner} alt="IceyPandaz" style={{width: "100%", height: "100%"}} />
        </div>

          <div className="header">
            <div className="name">Icey Pandaz</div>
            <div className="button" onClick={() => {}}>
              {user.address}
            </div>
          </div>
          <div className="body">{renderSwitch()}</div>
        </MainBody>
      </DashboardContents>
    </DashboardCtn>
  ) : (
    <DashboardCtn>
      <WelcomeCtn>
        <div className="center">
          <div className="">Welcome Pandaria Citizen</div>
          <button
            style={{
              cursor: "pointer",
            }}
            onClick={async () => {
              const networkId = await web3.eth.net.getId();
              if (networkId != 137) {
                alert("Please change yournetwork to matic and try again");
              }
              const accounts = await web3.eth.getAccounts();
              let nfts = await Contracts("NFT")
                .methods.walletOfOwner(accounts[0])
                .call();
              if (nfts && nfts.length > 0) {
                setUser({
                  connected: true,
                  address: accounts[0],
                });
              } else {
                let isStaker = await Contracts("FARM")
                  .methods.isStaking(accounts[0])
                  .call();
                if (isStaker) {
                  setUser({
                    connected: true,
                    address: accounts[0],
                  });
                }
              }
            }}
          >
            Sign In
          </button>
        </div>
      </WelcomeCtn>
    </DashboardCtn>
  );
};

export default DashBoard;
