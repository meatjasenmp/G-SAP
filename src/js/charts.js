import {
  Chart,
  BarController,
  BarElement,
  LinearScale,
  CategoryScale,
  LineController,
  PointElement,
  LineElement,
} from "chart.js";

Chart.register(
  BarController,
  BarElement,
  LinearScale,
  CategoryScale,
  LineController,
  LineElement,
  PointElement
);

const percentage = (num, per) => {
  return (num / 100) * per;
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
          },
          {
            label: "Total Number of Credit Sufficient Students",
            data: [995, 1061, 1027, 1011, 1012, 819, 1086],
            backgroundColor: "#FF8900",
          },
          {
            label: "Percentage of Credit Sufficient Students",
            data: [
              percentage(1164, 70),
              percentage(1201, 84),
              percentage(1218, 81),
              percentage(1238, 84),
              percentage(1201, 85),
              percentage(1164, 79),
              percentage(1285, 83),
            ],
            backgroundColor: "#2EB16B",
            type: "line",
            yAxisID: "y2",
          },
        ],
      },
      options: {
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
