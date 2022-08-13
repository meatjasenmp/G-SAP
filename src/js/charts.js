import {
  Chart,
  BarController,
  BarElement,
  LinearScale,
  CategoryScale,
  LineController,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip,
} from "chart.js";

Chart.register(
  BarController,
  BarElement,
  LinearScale,
  CategoryScale,
  LineController,
  LineElement,
  PointElement,
  Legend,
  Title,
  Tooltip
);

const percentage = (partialValue, totalValue) => {
  return Number((partialValue / totalValue) * 100).toFixed(2);
};

const creditSufficientStudy = () => {
  const ctx = document
    .getElementById("credit-sufficient-students")
    .getContext("2d");

  if (ctx) {
    return new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          2016,
          2017,
          2018,
          2019,
          2020,
          "COVID Year 2021",
          "Post-COVID Year 2022",
        ],
        datasets: [
          {
            label: "Total Number of Students Enrolled",
            data: [1164, 1201, 1218, 1238, 1201, 1164, 1285],
            backgroundColor: "#0D3691",
            order: 1,
          },
          {
            label: "Total Number of Credit Sufficient Students",
            data: [995, 1061, 1027, 1011, 1012, 819, 1086],
            backgroundColor: "#FF8900",
            order: 1,
          },
          {
            label: "Percentage of Credit Sufficient Students",
            data: [
              percentage(995, 1164),
              percentage(1061, 1201),
              percentage(1027, 1218),
              percentage(1011, 1238),
              percentage(1012, 1201),
              percentage(819, 1164),
              percentage(1086, 1285),
            ],
            backgroundColor: "#A5A5A5",
            type: "line",
            yAxisID: "y2",
            order: 0,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "CREDIT SUFFICIENT STUDENTS",
            font: {
              family: "MagdelinRegular",
              size: 14,
            },
          },
          legend: {
            position: "bottom",
          },
        },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
          y2: {
            type: "linear",
            display: true,
            position: "right",
          },
        },
      },
    });
  }
};

const charts = () => {
  creditSufficientStudy();
};

export default charts;
