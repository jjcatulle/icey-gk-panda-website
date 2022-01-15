import React, { useState, useEffect } from "react";
import { link } from "../../constants/imx";
import { CollectionItemCtn } from "./collectionItem.styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";

import Farm from "../../ethereum/abis/NFTFarm.json";
import NFT from "../../ethereum/abis/MyNFT.json";
import web3 from "../../ethereum/web3";
import Contracts from "../../ethereum/contractsInterface";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const CollectionItem = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const [isStaked, setisStaked] = useState(false);
  const [item, setitem] = useState({
    data: null,
    loading: true,
  });
  const [stakeStatus, setstakeStatus] = useState(undefined);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [loaded, setloaded] = useState(false);

  const showImage = () => {
    setloaded(true);
  };

  useEffect(() => {
    (async () => {
      const networkId = await web3.eth.net.getId();
      if (networkId != 137) {
        alert("Please change yournetwork to matic and try again");
      }
      const accounts = await web3.eth.getAccounts();
      const isStaked = await Contracts("FARM")
        .methods.stakingRecord(accounts[0], data)
        .call();
      setisStaked(isStaked);
      try {
        const res = await fetch(
          `https://gateway.pinata.cloud/ipfs/QmYDww13mqi9jc6NdWju8nJA7C12RiSPh16nVD8r7amG4u/${data}.json`
        );
        const jsonres = await res.json();
        // alert(jsonres.name);
        setitem({
          data: jsonres,
          loading: false,
        });
      } catch (error) {
        console.log("error");
      }
    })();
  }, [data, setitem, setisStaked]);

  return item.loading ? (
    <div className="">Loading</div>
  ) : open ? (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </div>
  ) : (
    <div>
      <CollectionItemCtn
        onClick={async () => {
          // openPopUp(data);
          try {
            setOpen(true);
            setstakeStatus("waiting....");
            let items = [];
            items.push(data);
            const networkId = await web3.eth.net.getId();
            if (networkId != 137) {
              alert("Please change yournetwork to matic and try again");
            }
            const accounts = await web3.eth.getAccounts();
            const isStaked = await Contracts("FARM")
              .methods.stakingRecord(accounts[0], data)
              .call();
            if (isStaked) {
              await Contracts("FARM")
                .methods.unstake(data)
                .send({ from: accounts[0] });
              setstakeStatus("not staked");
              fetch("/update/" + accounts[0], {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name: data,
                  staking: false,
                }),
              })
                .then((response) => response.json())
                .then((data) => {
                  console.log("Success:", data);
                });
              setOpen(false);
              return;
            }
            await Contracts("NFT")
              .methods.approve(Farm.networks["137"].address, data)
              .send({ from: accounts[0] });
            await Contracts("FARM")
              .methods.stake(items)
              .send({ from: accounts[0] });
            setstakeStatus("staked");
            fetch("/update/" + accounts[0], {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: data,
                staking: true,
              }),
            })
              .then((response) => response.json())
              .then((data) => {
                console.log("Success:", data);
              });
            setOpen(false);
          } catch (error) {
            alert("error while staking");
            setOpen(false);
          }
          return;
        }}
      >
        <div className="">{item.data.name}</div>
        <>
          <img
            src="https://via.placeholder.com/200?text=Loading%20image"
            style={loaded ? { display: "none" } : {}}
          />
          <img
            src={item?.data.image?.replace(
              "ipfs://",
              "https://cloudflare-ipfs.com/ipfs/"
            )}
            onLoad={showImage}
            style={loaded ? {} : { display: "none" }}
          />
        </>
        <div className="details">{isStaked ? "Staking" : "not staking"}</div>
      </CollectionItemCtn>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Tansfer</DialogTitle>
        <List sx={{ pt: 0 }}>
          <ListItem
            button
            onClick={async () => {
              // try {
              //   await link.prepareWithdrawal({
              //     type: ERC721TokenType.ERC721,
              //     tokenId: data.token_id,
              //     tokenAddress: data.token_address,
              //   });
              //   await link.completeWithdrawal({});
              // } catch (error) {
              //   alert(error.message);
              // }
            }}
          >
            <ListItemText primary="Prepare Transfer" />
          </ListItem>
          <ListItem
            button
            onClick={async () => {
              // try {
              //   await link.completeWithdrawal({
              //     type: ERC721TokenType.ERC721,
              //     tokenId: data.token_id,
              //     tokenAddress: data.token_address,
              //   });
              // } catch (error) {
              //   alert(error);
              // }
            }}
          >
            <ListItemText primary="Complete Transfer" />
          </ListItem>
        </List>
        {/* <DialogActions>
          <Button onClick={handleClose}>Done</Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
};

export default CollectionItem;
