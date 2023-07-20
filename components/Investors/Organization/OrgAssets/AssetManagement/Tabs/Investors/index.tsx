import React from "react";
import {
  ChartContainer,
  ChartTimeFilter,
  InvestorChartHeaderDescription,
  InvestorChartHeaders,
  InvestorChartWrapper,
} from "./styles";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  Area,
} from "recharts";
import { investorData } from "../../../../../../../constants/fakeData";
import {
  TableSection,
  TableTitle,
  TableTitleText,
} from "../../../assets/common";
import { GenButton } from "../../../assets/buttons";

const Investors = () => {
  return (
    <div>
      <InvestorChartWrapper>
        <InvestorChartHeaders>
          <InvestorChartHeaderDescription>
            <p>Total number of investors</p>
            <h6>57</h6>
          </InvestorChartHeaderDescription>
          <ChartTimeFilter>
            <p>24H</p>
            <p>1D</p>
            <p>1M</p>
            <p>6M</p>
            <p>YTD</p>
            <p>ALL</p>
          </ChartTimeFilter>
        </InvestorChartHeaders>
        <ChartContainer>
          <ResponsiveContainer width={"100%"} height={300}>
            <AreaChart
              data={investorData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#40BAFF" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#40BAFF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="name"
                includeHidden
                interval={"preserveStartEnd"}
              />
              {/* <YAxis /> */}
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#40BAFF"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </InvestorChartWrapper>
      <TableSection>
        <TableTitle>
          <TableTitleText>Recent Transactions</TableTitleText>
          <GenButton>Add Investors</GenButton>
        </TableTitle>
      </TableSection>
    </div>
  );
};

export default Investors;
