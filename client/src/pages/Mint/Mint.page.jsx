import React, { useEffect, useState } from "react";
import { QuantityPicker } from "react-qty-picker";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import web3 from "../../ethereum/web3";
import Contracts from "../../ethereum/contractsInterface";

function CircularIndeterminate() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
}

function MintingPage() {
  const [account, setaccount] = useState(null);
  const [quantity, setquantity] = useState(0);
  const [myContract, setmyContract] = useState(null);
  const [status, setstatus] = useState({
    error: false,
    message: "",
    loading: false,
  });

  const handleBuy = async () => {
    try {
      if (quantity <= 0) {
        alert("quantity needs to be more than 0");
        return;
      }
      const networkId = await web3.eth.net.getId();
      if (networkId != 137) {
        alert("Please change yournetwork to matic and try again");
      }
      const accounts = await web3.eth.getAccounts();
      setstatus({ ...status, loading: true });
      await Contracts("NFT")
        .methods.mint(quantity)
        .send({
          from: accounts[0],
          value: 59440000000000000000 * quantity,
        });
      alert("Transaction sent");
    } catch (error) {
      alert(error.message);
      // setstatus({ ...status, error: true });

      // setstatus({ ...status, error: true, message: error.message });
      console.log(status);
    }
    setstatus({ ...status, loading: false });
  };

  return (
    <div
      className=""
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
      }}
    >
      <div
        style={{
          fontSize: "100px",
          color: "#36B0FF",
        }}
      >
        Icey Pandaz
      </div>
      <h1>Icey Pandaz Mint</h1>

      <div
        style={{
          width: "200px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          //   background: "red",
        }}
      >
        <QuantityPicker
          min={1}
          onChange={(value) => {
            setquantity(value);
          }}
        />
      </div>

      <h3>59.44 Matic (about .04 eth)</h3>

      <div
        style={{
          fontSize: "40px",
          color: "#36B0FF",
          border: "2px solid #36B0FF",
          padding: "10px",
          cursor: "pointer",
          borderRadius: "10px",
        }}
        onClick={handleBuy}
      >
        MINT
      </div>
      <div
        style={{
          marginBottom: "10px",
        }}
        className=""
      >
        {status.error ? `error:${status.message}` : `${status.message}`}
      </div>
      {status.loading ? <CircularIndeterminate /> : null}
    </div>
  );
}

export default MintingPage;
