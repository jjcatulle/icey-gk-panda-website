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
} from "./Dashoard.styles";
import { Link, ImmutableXClient } from "@imtbl/imx-sdk";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../redux/user";

import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import TagIcon from "@mui/icons-material/Tag";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CollectionItem from "../../components/collectionItem/collectionItem.compenent";
import { Bottom, Top } from "../../global.styles";
import { link } from "../../constants/imx";

import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

const CollectionGrid = () => {
  const [items, setitems] = useState([]);
  const User = useSelector((state) => state.user);

  useEffect(async () => {
    const response = await fetch("/api?user=" + User.user.address);
    let data = await response.text();
    data = JSON.parse(data);
    setitems(data);
  }, []);
  return (
    <CollectionGridCtn>
      {items.map((data) => (
        <CollectionItem data={data} />
      ))}
    </CollectionGridCtn>
  );
};
const DashBoard = () => {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.user);
  const [currentPage, setcurrentPage] = useState("home");
  const [transferTomaain, settransferTomaain] = useState({
    isOpen: false,
    id: null,
  });

  const renderSwitch = () => {
    switch (currentPage) {
      case "home":
        return (
          <DashboardWelcome>
            <div className="title">Welcome..</div>
            <div className="">
              This dashboard includes tools to help with your migration to the
              main ethereum network
            </div>
          </DashboardWelcome>
        );
      case "assets":
        return <CollectionGrid />;
      case "rewards":
        return "rewards";
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

  return User.connected ? (
    <DashboardCtn>
      <DashboardContents>
        <SideBarCtn>
          <HomeIcon onClick={() => setcurrentPage("home")} />
          <InventoryIcon onClick={() => setcurrentPage("assets")} />
          {/* <EmojiEventsIcon onClick={() => setcurrentPage("rewards")} /> */}
          {/* <TagIcon onClick={() => setcurrentPage("social")} /> */}
        </SideBarCtn>
        <MainBody>
          <div className="header">
            <div className="name">GeekPandaz</div>
            <div className="button">{User.user.address}</div>
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
            onClick={async () => {
              try {
                const { address, starkPublicKey } = await link.setup({});
                const response = await fetch("/api?user=" + address);
                let data = await response.text();
                console.log(data);
                data = JSON.parse(data);
                if (address && data) {
                  dispatch(
                    setUserData({
                      address,
                      starkPublicKey,
                      // assets: data,
                    })
                  );
                }
              } catch (error) {
                console.log(error);
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
