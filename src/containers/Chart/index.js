import { ChartComponent } from "components";

const dataset = {
  xData: [
    1672531200, 1672531200, 1672531200, 1672531200, 1672617600, 1672617600,
    1672617600, 1672617600, 1672704000, 1672704000, 1672704000, 1672704000,
    1672790400, 1672790400, 1672790400, 1672790400, 1672876800, 1672876800,
    1672876800, 1672876800, 1672963200, 1672963200, 1672963200, 1672963200,
    1673049600, 1673049600, 1673049600, 1673049600,
  ],
  yData: [
    45, 50, 52, 54, 48, 42, 36, 22, 18, 9, 2, -3, -7, 9, 29, 32, 34, 33, 29, 24,
    12, -2, -15, -25, -40, -60, -10, 0,
  ],
};

const oneDay = 24 * 3600;

const option = {
  title: [
    {
      text: "Portfolio Chart",
      align: "center",
    },
  ],
  tooltip: [
    {
      trigger: "axis",
      formatter: (params) => {
        return `
                ${new Date(params[0].axisValue * 1000).toDateString()}<br />
                ${params[0].seriesName}: ${params[0].value}
               `;
      },
    },
  ],
  xAxis: [
    {
      type: "category",
      interval: oneDay,
      boundaryGap: false,
      deduplication: true,
      data: dataset.xData,
      axisLine: {
        onZero: false,
        onZeroAxisIndex: -100,
      },
      axisTick: {
        alignWithLabel: true,
      },
      axisLabel: {
        interval: 4,
        formatter: (value) => {
          const valueinms = value * 1000;
          return (
            new Date(valueinms).toLocaleString("default", {
              month: "short",
            }) +
            " " +
            new Date(valueinms).getDate()
          );
        },
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      position: "right",
      min: -100,
      max: 100,
      axisPointer: {
        snap: true,
      },
    },
  ],
  series: [
    {
      type: "line",
      name: "Portfolio",
      smooth: true,
      symbol: "none",
      data: dataset.yData,
      showSymbol: false,
    },
  ],
};

const ChartContainer = () => {
  return <ChartComponent option={option} />;
};

export default ChartContainer;
