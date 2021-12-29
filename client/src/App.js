import { GlobalStyle } from "./global.styles";
import { Routes, Route, Link, Router } from "react-router-dom";
import React, { lazy, Suspense } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const LandingPage = lazy(() => import("./pages/HomePage/HomePage.page"));
const DashboardPage = lazy(() => import("./pages/Dashboard/Dashboard.page"));
const MintingPage = lazy(() => import("./pages/Mint/Mint.page"));

function CircularIndeterminate() {
  return (
    <Box sx={{ display: "flex" }}>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <CircularProgress style={{ color: "#b22c00", margin: "auto" }} />
      </div>
    </Box>
  );
}
function App() {
  return (
    <div>
      <GlobalStyle />

      <Suspense fallback={<CircularIndeterminate />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/mint" element={<MintingPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
