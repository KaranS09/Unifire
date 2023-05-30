import React from "react";
import Welcome from "./Welcome";
import Services from "./Services";
import Transactions from "./Transactions";
import Footer from "./Footer";

export default function Shardpay() {
  return (
    <div>
      <div className="gradient-bg-welcome">
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}
