import { IconGrid, LandingForm, LandingTitle } from "../Common";
import {
  BaseBody,
  BaseFlex,
  BaseList,
  BaseTitle,
  CheckedMark,
  DownloadReport,
  KeyTakeaways,
  NewsContainer,
  ReportBase,
  ReportCertification,
  ReportCheck,
  ReportFormContainer,
  ReportFormFooter,
  ReportFormTitle,
  ReportGrid,
  ReportImage,
  ReportUpdated,
  ViewReports,
} from "./styles";
import ReportCover from "./Images/reportCover.png";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import {
  DarkFacebookIcon,
  DarkInstagramIcon,
  DarkLinkedinIcon,
  DarkTwitterIcon,
} from "../Common/Icons";

const NewsContent = () => {
  const [checked, setChecked] = useState(false);
  const handleCheck = () => {
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

  const handleReportRoute = () => {
    Router.push("/Reports");
  };
  return (
    <NewsContainer>
      <LandingTitle>News & Reports</LandingTitle>
      <ReportGrid>
        <div>
          <ReportImage>
            <img height="100%" src={ReportCover.src} />
          </ReportImage>
          <ReportUpdated>
            <li>
              Updated May 17, 2022. View author information,
              <Link href="/Reports">
                <a>here</a>
              </Link>
            </li>
          </ReportUpdated>
          <ViewReports onClick={handleReportRoute}>See all Reports</ViewReports>
        </div>
        <div>
          <ReportFormContainer>
            <ReportFormTitle>
              To download this report, kindly complete the form below.
            </ReportFormTitle>
            <LandingForm>
              <label>Your Name</label>
              <input type="text" placeholder="Type or Paste here" />
              <label>Business Email</label>
              <input type="text" placeholder="Type or Paste here" />
              <label>Company(Optional)</label>
              <input type="text" placeholder="Type or Paste here" />
              <label>Phone(Optional)</label>
              <input type="text" placeholder="Type or Paste here" />
            </LandingForm>
            <ReportCertification>
              <ReportCheck active={checked} onClick={handleCheck}>
                {checked && <CheckedMark />}
              </ReportCheck>
              <p>
                I hereby agree to receive electronic newsletters, updates,
                promotions and related messages regarding Tangl products.
              </p>
            </ReportCertification>
            <DownloadReport>Download</DownloadReport>
            <ReportFormFooter>
              <span>Or Contact Us On:</span>
              <IconGrid>
                <DarkFacebookIcon />
                <DarkTwitterIcon />
                <DarkInstagramIcon />
                <DarkLinkedinIcon />
              </IconGrid>
            </ReportFormFooter>
          </ReportFormContainer>
        </div>
      </ReportGrid>
      <ReportBase>
        <BaseTitle>
          <h1>
            Global fund performance holds strong, but a decline could be on the
            horizon
          </h1>
        </BaseTitle>
        <BaseBody>
          <BaseFlex margin="0rem 2.5rem 0rem 0rem">
            <p>
              One-year horizon IRRs through Q3 2021 remained incredibly strong
              despite another wave of COVID-19 during the quarter that raised
              concerns about a pullback in performance. Returns to date indicate
              that the majority of private market funds have been able to pivot
              to handle pandemic-related challenges.
            </p>
            <p>
              Our latest Global Fund Performance Report uses data through Q3
              2021 as well as some preliminary Q4 figures to provide a
              comprehensive look at the returns of various fund strategies. We
              also examine why public market comparisons may lead to
              disappointing private markets performance in coming quarters.
            </p>
            <KeyTakeaways>Key Takeaways</KeyTakeaways>
            <BaseList>
              <li>
                Private equity returns cooled in Q3 2021, dropping to 6.8% amid
                a quickly changing macroeconomic backdrop. That figure
                represents the strategy’s lowest quarterly IRR since Q1 2020.
              </li>
            </BaseList>
          </BaseFlex>
          <BaseFlex margin="0rem 0rem 0rem 2.5rem">
            <BaseList>
              <li>
                Real estate hit a 17.2% one-year horizon IRR, its best one-year
                performance since 2014, with preliminary Q4 IRR suggesting a
                bright future for the asset class.
              </li>
              <li>
                Private debt performance waned drastically during the quarter,
                but still remains strong on an annual basis, though deceleration
                of these figures is anticipated in coming quarters
              </li>
              <li>
                Secondaries funds stepped up to a new level of fundraising in
                2020 and experienced a substantial uptick in performance during
                2021, notching a one-year horizon IRR of 52.5%.
              </li>
              <li>
                This report was reuploaded on May 13, 2022, to update the legend
                of the chart on page 3.
              </li>
            </BaseList>
          </BaseFlex>
        </BaseBody>
      </ReportBase>
    </NewsContainer>
  );
};

export default NewsContent;
