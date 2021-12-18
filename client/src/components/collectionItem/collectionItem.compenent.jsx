import React, { useState } from "react";
import { link } from "../../constants/imx";
import { CollectionItemCtn } from "./collectionItem.styles";
import { Link, ERC721TokenType } from "@imtbl/imx-sdk";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";

const CollectionItem = ({ data }) => {
  const [open, setOpen] = React.useState(false);

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

  return (
    <div>
      <CollectionItemCtn
        onClick={async () => {
          // openPopUp(data);
          handleClickOpen();
          console.log(data);
          // return
          // await link.prepareWithdrawal({
          //   type: ERC721TokenType.ERC721,
          //   tokenId: data.token_id,
          //   tokenAddress: data.token_address
          // });
        }}
      >
        <>
          <img
            src="https://via.placeholder.com/200?text=Loading%20image"
            style={loaded ? { display: "none" } : {}}
          />
          <img
            src={data.image_url}
            onLoad={showImage}
            style={loaded ? {} : { display: "none" }}
          />
        </>
        <div className="details">{data.name}</div>
        <div className="details">{data.status}</div>
      </CollectionItemCtn>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Tansfer</DialogTitle>
        <List sx={{ pt: 0 }}>
          <ListItem
            button
            onClick={async () => {
              try {
                await link.prepareWithdrawal({
                  type: ERC721TokenType.ERC721,
                  tokenId: data.token_id,
                  tokenAddress: data.token_address,
                });
                await link.completeWithdrawal({
                  
                })
              } catch (error) {
                alert(error.message);
              }
            }}
          >
            <ListItemText primary="Prepare Transfer" />
          </ListItem>
          <ListItem button onClick={async() => {
            try {
              await link.completeWithdrawal({
                type: ERC721TokenType.ERC721,
                tokenId: data.token_id,
                tokenAddress: data.token_address,
              });
            } catch (error) {
              alert(error)
            }
          }}>
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
