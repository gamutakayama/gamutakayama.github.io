---
title: 体重
date: 2023-09-08 12:34:56
category:
  - 其他
order: 3
---

# 体重

<!-- more -->

::: echarts

```js
const response = await fetch("https://pan.wome.ng/d/wome.ng/weight.json");
const weightList = await response.json();

const data = weightList.reduce((accumulator, currentValue) => {
  const key = new Date(`${currentValue.date}T00:00:00`).getTime();
  accumulator[key] = currentValue.weight;
  return accumulator;
}, {});

const lineData = [];
const start = new Date(2023, 3, 12).getTime();
const end = Date.now();
let current = start;
while (current < end - 24 * 60 * 60 * 1000) {
  current += 24 * 60 * 60 * 1000;
  lineData.push([current, data[current]]);
}

const formatTimestamp = (timestamp) => {
  let date = new Date(timestamp);
  const offset = date.getTimezoneOffset();
  return new Date(date.getTime() - offset * 60 * 1000)
    .toISOString()
    .slice(0, 10);
};

const option = {
  dataZoom: [
    {
      brushSelect: false,
      end: 100,
      labelFormatter: (value) => formatTimestamp(Math.round(value)),
      minSpan: 5,
      start: 0,
    },
  ],
  series: [
    {
      connectNulls: true,
      data: lineData,
      markLine: {
        data: [
          {
            yAxis: 64,
          },
        ],
        silent: true,
        symbol: ["none", "none"],
      },
      smooth: true,
      showSymbol: false,
      type: "line",
    },
  ],
  tooltip: {
    formatter: (params) => {
      const date = formatTimestamp(params[0].value[0]);
      const weight = params[0].value[1] || "-";
      return `${date}<br /><div style="font-weight: bold; text-align: left">${weight}</div>`;
    },
    trigger: "axis",
  },
  xAxis: {
    boundaryGap: false,
    type: "time",
  },
  yAxis: {
    max: (value) => Math.ceil(value.max),
    min: (value) => Math.floor(value.min - 1),
    minInterval: 1,
    type: "value",
  },
};
```

:::
