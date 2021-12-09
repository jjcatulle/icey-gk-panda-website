import { GlobalStyle } from "./global.styles";
import { Routes, Route, Link, Router } from "react-router-dom";
import React, { lazy, Suspense } from "react";
const LandingPage = lazy(() => import("./pages/HomePage/HomePage.page"));
const DashboardPage = lazy(() => import("./pages/Dashboard/Dashboard.page"));

function App() {
  return (
    <div>
      <GlobalStyle />

      <Suspense fallback={<h1>Still Loading…</h1>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
