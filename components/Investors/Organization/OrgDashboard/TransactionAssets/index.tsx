import React from "react";
import { TransactionAssetsCard, TransactionAssetsWrapper } from "./styles";
import { Chart1, Chart2 } from "../assets/icons";
import tgf from "../assets/images/tgf.png";
import rsd from "../assets/images/rsd.png";
import Image from "next/image";

const TransactionAssets = () => {
  return (
    <TransactionAssetsWrapper>
      <TransactionAssetsCard>
        <div className="description">
          <Image src={tgf} width={40} height={40} alt="" />
          <div className="name">
            <p>Tangl Growth Fund</p>
            <span>TGF</span>
          </div>
        </div>
        <div className="metrics">
          <Chart1 />
          <div className="metrics-amount">
            <p className="amount">$678,076</p>
            <p className="percentage">+20%</p>
          </div>
        </div>
      </TransactionAssetsCard>
      <TransactionAssetsCard>
        <div className="description">
          <Image src={rsd} width={40} height={40} alt="" />
          <div className="name">
            <p>Rosadex Estates</p>
            <span>RSD</span>
          </div>
        </div>
        <div className="metrics">
          <Chart2 />
          <div className="metrics-amount">
            <p className="amount">$678,076</p>
            <p className="percentage">+20%</p>
          </div>
        </div>
      </TransactionAssetsCard>
    </TransactionAssetsWrapper>
  );
};

export default TransactionAssets;
