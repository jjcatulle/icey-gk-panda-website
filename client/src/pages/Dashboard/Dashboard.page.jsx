import React, { useState } from "react";
import {
  DashboardContents,
  DashboardCtn,
  WelcomeCtn,
  SideBarCtn,
  MainBody,
  DashboardWelcome,
  CollectionGridCtn,
} from "./Dashoard.styles";
import { Link, ImmutableXClient } from "@imtbl/imx-sdk";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../redux/user";

import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import TagIcon from "@mui/icons-material/Tag";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CollectionItem from "../../components/collectionItem/collectionItem.compenent";

const NETLINK = "https://link.x.immutable.com";

const DashBoard = () => {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.user);
  const [currentPage, setcurrentPage] = useState("home");

  const renderSwitch = () => {
    switch (currentPage) {
      case "home":
        return (
          <DashboardWelcome>
            <div className="title">Welcome..</div>
            <div className="">
              This dashboard includes tools to better help you manage your
              Pandaria Citizenship.
            </div>
          </DashboardWelcome>
        );
      case "assets":
        return (
          <CollectionGridCtn>
            {User.user.assets.map((data) => (
              <CollectionItem data={data} />
            ))}
          </CollectionGridCtn>
        );
      case "rewards":
        return "rewards";
      case "social":
        return "social";
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
          <EmojiEventsIcon onClick={() => setcurrentPage("rewards")} />
          <TagIcon onClick={() => setcurrentPage("social")} />
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
              const link = new Link(NETLINK);
              const client = await ImmutableXClient.build({
                publicApiUrl: NETLINK,
              });
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
                    assets: data,
                  })
                );
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
