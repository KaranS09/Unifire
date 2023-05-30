import React from "react";
import { SwapWidget } from "@uniswap/widgets";
import "@uniswap/widgets";

export default function Unify() {
  return (
    <div className="flex justify-center mt-[100px]">
      <div className="Uniswap">
        <SwapWidget />
      </div>
    </div>
  );
}
