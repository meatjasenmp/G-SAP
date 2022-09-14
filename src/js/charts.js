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

const tickConfig = {
  ticks: {
    color: "black",
    font: {
      family: "MagdelinBold",
    },
  },
};

const titleConfig = {
  display: true,
  color: "black",
  font: {
    family: "MagdelinBold",
    size: 20,
  },
};

const legendConfig = {
  legend: {
    position: "bottom",
    labels: {
      color: "black",
      font: {
        family: "MagdelinRegular",
        size: 14,
      },
    },
  },
};

const getOrCreateTooltip = (chart) => {
  let tooltipEl = chart.canvas.parentNode.querySelector("div");

  if (!tooltipEl) {
    tooltipEl = document.createElement("div");
    tooltipEl.style.background = "rgba(0, 0, 0, 0.7)";
    tooltipEl.style.borderRadius = "3px";
    tooltipEl.style.color = "white";
    tooltipEl.style.opacity = 1;
    tooltipEl.style.pointerEvents = "none";
    tooltipEl.style.position = "absolute";
    tooltipEl.style.transform = "translate(-50%, 0)";
    tooltipEl.style.transition = "all .1s ease";
    tooltipEl.style.boxShadow =
      "0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%)";
    tooltipEl.style.maxWidth = "350px";

    const toolTipContainer = document.createElement("div");
    toolTipContainer.className = "tooltip-container";
    toolTipContainer.style.width = "100%";

    tooltipEl.appendChild(toolTipContainer);
    chart.canvas.parentNode.appendChild(tooltipEl);
  }

  return tooltipEl;
};

const externalTooltipHandler = (context) => {
  // Tooltip Element
  const { chart, tooltip } = context;
  const tooltipEl = getOrCreateTooltip(chart);

  // Hide if no tooltip
  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = 0;
    return;
  }

  // Set Text
  if (tooltip.body) {
    const titleLines = tooltip.title || [];
    const bodyLines = tooltip.body.map((b) => b.lines);

    const toolTipHeader = document.createElement("header");

    titleLines.forEach((title) => {
      const titleLineDiv = document.createElement("div");

      titleLineDiv.style.color = "black";
      titleLineDiv.style.width = "100%";
      const text = document.createTextNode(title);
      const h3 = document.createElement("h3");
      h3.style.fontFamily = "MagdelinRegular";
      h3.style.fontSize = "14px";
      h3.style.marginBottom = "0.25rem";

      h3.appendChild(text);
      titleLineDiv.appendChild(h3);
      toolTipHeader.appendChild(titleLineDiv);
    });

    const toolTipBody = document.createElement("div");
    toolTipBody.style.width = "100%";

    bodyLines.forEach((body, i) => {
      const colors = tooltip.labelColors[i];

      const span = document.createElement("span");
      span.style.background = colors.backgroundColor;
      span.style.borderColor = colors.borderColor;
      span.style.borderWidth = "2px";
      span.style.marginRight = "10px";
      span.style.height = "10px";
      span.style.width = "10px";
      span.style.display = "block";

      const flexBox = document.createElement("div");
      flexBox.style.display = "flex";
      flexBox.style.width = "100%";
      flexBox.style.alignItems = "center";

      const p = document.createElement("p");
      p.style.color = "black";
      p.style.margin = "0";
      p.style.fontFamily = "MagdelinBold";
      p.style.textTransform = "uppercase";
      p.style.fontSize = "12px";

      const text = document.createTextNode(body);

      flexBox.appendChild(span);
      p.appendChild(text);
      flexBox.appendChild(p);
      toolTipBody.appendChild(flexBox);
    });

    const tableRoot = tooltipEl.querySelector(".tooltip-container");

    // Remove old children
    while (tableRoot.firstChild) {
      tableRoot.firstChild.remove();
    }

    // Add new children
    tableRoot.appendChild(toolTipHeader);
    tableRoot.appendChild(toolTipBody);
  }

  const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

  // Display, position, and set styles for font
  tooltipEl.style.opacity = 1;
  tooltipEl.style.left = positionX + tooltip.caretX + "px";
  tooltipEl.style.top = positionY + tooltip.caretY + "px";
  tooltipEl.style.font = tooltip.options.bodyFont.string;
  tooltipEl.style.backgroundColor = "#FFF";
  tooltipEl.style.padding =
    tooltip.options.padding + "px " + tooltip.options.padding + "px";
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
            label: "Total Number of Credit Sufficient Students",
            data: [995, 1061, 1027, 1011, 1012, 819, 1086],
            backgroundColor: "#FF8900",
            order: 1,
          },
          {
            label: "Total Number of Students Enrolled",
            data: [1164, 1201, 1218, 1238, 1201, 1164, 1285],
            backgroundColor: "#0D3691",
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
          tooltip: {
            enabled: false,
            position: "nearest",
            external: externalTooltipHandler,
          },
          title: {
            text: "CREDIT SUFFICIENT STUDENTS",
            ...titleConfig,
          },
          ...legendConfig,
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: true,
            ...tickConfig,
          },
          y: {
            stacked: true,
            ...tickConfig,
          },
          y2: {
            display: true,
            position: "right",
            ...tickConfig,
          },
        },
      },
    });
  }
};

const graduationRate = () => {
  const ctx = document.getElementById("graduation-rate").getContext("2d");

  if (ctx) {
    return new Chart(ctx, {
      type: "bar",
      data: {
        labels: [2016, 2017, 2018, 2019, 2020, 2021],
        datasets: [
          {
            label: "Total Number of 2 or 3-Year Cumulative Dropouts",
            data: [136, 124, 121, 91, 107, 91],
            backgroundColor: "#FF8900",
            order: 1,
          },
          {
            label: "Total Number of Students Graduating in 4 Years",
            data: [1025, 1090, 1014, 1151, 1025, 1151],
            backgroundColor: "#0D3691",
            order: 1,
          },
          {
            label: "API Graduation Rate",
            data: [
              percentage(1025, 136),
              percentage(1090, 124),
              percentage(1014, 121),
              percentage(1151, 91),
              percentage(1025, 107),
              percentage(1151, 91),
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
          tooltip: {
            enabled: false,
            position: "nearest",
            external: externalTooltipHandler,
          },
          title: {
            text: "GRADUATION RATE",
            ...titleConfig,
          },
          ...legendConfig,
        },
        layout: {
          padding: 20,
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: true,
            ...tickConfig,
          },
          y: {
            stacked: true,
            ...tickConfig,
          },
          y2: {
            display: true,
            position: "right",
            ...tickConfig,
          },
        },
      },
    });
  }
};

const dropOuts = () => {
  const ctx = document.getElementById("dropouts").getContext("2d");

  if (ctx) {
    return new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "2015-2016",
          "2016-2017",
          "2017-2018",
          "2018-2019",
          "2019-2020",
          "2020-2021",
        ],
        datasets: [
          {
            label: "Total Number of Dropouts",
            data: [15, 8, 7, 7, 29, 20],
            backgroundColor: "#FF8900",
            order: 1,
          },
          {
            label: "Total Number of Students Enrolled",
            data: [1301, 1238, 1267, 1264, 1217, 1196],
            backgroundColor: "#0D3691",
            order: 1,
          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            enabled: false,
            position: "nearest",
            external: externalTooltipHandler,
          },
          title: {
            text: "9TH GRADE  GRADUATION RATE",
            ...titleConfig,
          },
          ...legendConfig,
        },
        layout: {
          padding: 20,
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: true,
            ...tickConfig,
          },
          y: {
            stacked: true,
            ...tickConfig,
          },
          y2: {
            display: true,
            position: "right",
            ...tickConfig,
          },
        },
      },
    });
  }
};

const charts = () => {
  creditSufficientStudy();
  graduationRate();
  dropOuts();
};

export default charts;
