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
  return (
    <AssetContainer>
      <AssetHeader>
        <AssetTitle>Assets</AssetTitle>
        <GenButton>Create New Asset</GenButton>
      </AssetHeader>
      <AssetGrid>
        {cards.map((card) => (
          <AssetCard key={card.symbol}>
            <AssetImage>
              <img  height="100%"src={card.image} />
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
            <ViewButton>View Assets</ViewButton>
          </AssetCard>
        ))}
      </AssetGrid>
    </AssetContainer>
  );
};

export default OrgAssets;
