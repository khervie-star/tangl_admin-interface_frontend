import { GenButton } from "./assets/buttons";
import { AssetTitle } from "./assets/common";
import {
  AssetCard,
  AssetContainer,
  AssetGrid,
  AssetHeader,
  AssetImage,
  AssetName,
  AssetTable,
  StatusTag,
  TableBody,
  TableHead,
  ViewButton,
} from "./styles";
import AssetImg from "./assets.jpeg";
import Router, { useRouter } from "next/router";

const cards = [
  {
    name: "Tangl Growth Fund ",
    image: AssetImg.src,
    symbol: "TGF",
    price: 150000,
    tag: "Deployed",
  },
  {
    name: "Eco-energy Savings Fund",
    image: AssetImg.src,
    symbol: "ESF",
    price: 150000,
    tag: "Pending",
  },
  {
    name: "Bashmore Real Estates",
    image: AssetImg.src,
    symbol: "BMRE",
    price: 150000,
    tag: "Deployed",
  },
];

const OrgAssets = () => {
  const handleCreateNewAsset = () => {
    Router.push("/Investor/Organization/Assets/Create");
  };
  const viewAsset = (assetId: any) => {
    Router.push(`/Investor/Organization/Assets/View-Asset/${assetId}`);
  };
  return (
    <AssetContainer>
      <AssetHeader>
        <AssetTitle>Assets</AssetTitle>
        <GenButton onClick={handleCreateNewAsset}>Create New Asset</GenButton>
      </AssetHeader>
      <AssetGrid>
        {cards.map((card) => (
          <AssetCard key={card.symbol}>
            <AssetImage>
              <img height="100%" src={card.image} />
              <StatusTag status={card.tag}>{card.tag}</StatusTag>
            </AssetImage>
            <AssetName>
              <h1>{card.name}</h1>
              <p>{card.symbol}</p>
            </AssetName>
            <AssetTable>
              <TableHead>
                <p>Symbol</p>
                <span>{card.symbol}</span>
              </TableHead>
              <TableBody>
                <p>Aum</p>
                <span>${card.price}</span>
              </TableBody>
            </AssetTable>
            <ViewButton onClick={() => viewAsset(card.symbol)}>
              View Assets
            </ViewButton>
          </AssetCard>
        ))}
      </AssetGrid>
    </AssetContainer>
  );
};

export default OrgAssets;
