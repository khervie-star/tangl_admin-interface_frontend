import {
  DownloadNow,
  ReportFloat,
  ReportsCard,
  ReportsContainer,
  ReportsFilter,
  ReportsGrid,
  ReportsHeader,
  ReportsImage,
  ReportsSearchBar,
  ReportsText,
} from "./styles";
import Group from "./Images/Group.png";
import { LandingTitle } from "../Common";
import { ArrowDownIcon, ArrowRightIcon, SearchIcon } from "../Common/Icons";

const reports = [
  {
    image: Group,
    text: "The Role of Blockchain Technology in the Investment Funds Industry",
  },
  {
    image: Group,
    text: "The Role of Blockchain Technology in the Investment Funds Industry",
  },
  {
    image: Group,
    text: "The Role of Blockchain Technology in the Investment Funds Industry",
  },
  {
    image: Group,
    text: "The Role of Blockchain Technology in the Investment Funds Industry",
  },
  {
    image: Group,
    text: "The Role of Blockchain Technology in the Investment Funds Industry",
  },
  {
    image: Group,
    text: "The Role of Blockchain Technology in the Investment Funds Industry",
  },
  {
    image: Group,
    text: "The Role of Blockchain Technology in the Investment Funds Industry",
  },
  {
    image: Group,
    text: "The Role of Blockchain Technology in the Investment Funds Industry",
  },
];

const ReportsContent = () => {
  return (
    <ReportsContainer>
      <LandingTitle>All Reports</LandingTitle>
      <ReportsHeader>
        <ReportsSearchBar>
          <input type="text" placeholder="Search" />
          <SearchIcon />
        </ReportsSearchBar>
        <ReportsFilter>
          <span>Sort by</span>
          <ArrowDownIcon />
        </ReportsFilter>
      </ReportsHeader>
      <ReportsGrid>
        {reports &&
          reports.map((result:any, index: any) => (
            <ReportsCard>
              <ReportsImage key={index} src={result.image.src} />
              <div>
                <ReportFloat>Report</ReportFloat>
                <ReportsText>{result.text}</ReportsText>
                <DownloadNow>
                  Download Now
                  <ArrowRightIcon />
                </DownloadNow>
              </div>
            </ReportsCard>
          ))}
      </ReportsGrid>
    </ReportsContainer>
  );
};

export default ReportsContent;
