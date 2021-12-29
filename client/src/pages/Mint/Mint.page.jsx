import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { QuantityPicker } from "react-qty-picker";

import MyNFT from "../../abis/MyNFT.json";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

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

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };

  const loadBlockchainData = async () => {
    const web3 = window.web3;
    // Load account
    const accounts = await web3.eth.getAccounts();
    setaccount(accounts[0]);
    // Network ID
    const networkId = await web3.eth.net.getId();
    const networkData = MyNFT.networks[networkId];
    if (networkData) {
      const myNFT = new web3.eth.Contract(MyNFT.abi, networkData.address);
      console.log(myNFT);
      setmyContract(myNFT);
      //   this.setState({ dtube });
      //   const videosCount = await dtube.methods.videoCount().call();
      //   this.setState({ videosCount });
      //   // Load videos, sort by newest
      //   for (var i = videosCount; i >= 1; i--) {
      //     const video = await dtube.methods.videos(i).call();
      //     this.setState({
      //       videos: [...this.state.videos, video],
      //     });
      //   }
      //   //Set latest video with title to view as default
      //   const latest = await dtube.methods.videos(videosCount).call();
      //   this.setState({
      //     currentHash: latest.hash,
      //     currentTitle: latest.title,
      //   });
      //   this.setState({ loading: false });
    } else {
      window.alert(
        "Pandaz contract not deployed to detected network. Please switch to the polygon network! and reload this page"
      );
    }
  };
  const handleBuy = async () => {
    try {
      if (quantity <= 0) {
        alert("quantity needs to be more than 0");
        return;
      }
      setstatus({ ...status, loading: true });
      await myContract.methods.mint(quantity).send({
        from: account,
        value: 59440000000000000000 * quantity,
      });
    } catch (error) {
      alert(error.message)
      // setstatus({ ...status, error: true });

      // setstatus({ ...status, error: true, message: error.message });
      console.log(status);
    }
    setstatus({ ...status, loading: false });
  };

  useEffect(() => {
    (async () => {
      await loadWeb3();
      await loadBlockchainData();
    })();
  }, []);

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
          color: "#b22c00",
        }}
      >
        Geek Pandaz
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
          color: "#b22c00",
          border: "2px solid #b22c00",
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
