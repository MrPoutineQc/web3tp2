import { Chart } from "chart.js";
import "chartjs-adapter-date-fns";


// GRAPHIQUE EN LIGNE
const dataQCredit = [
    { x: "2025-04-08T00:00:00", y: 0.0 },
    { x: "2025-04-09T00:00:00", y: 41856.9 },
    { x: "2025-04-10T00:00:00", y: 682955.1 },
    { x: "2025-04-11T00:00:00", y: 526729.8 },
    { x: "2025-04-12T00:00:00", y: 519423.6 },
    { x: "2025-04-13T00:00:00", y: 399147.8 },
    { x: "2025-04-14T00:00:00", y: 354060.8 },
    { x: "2025-04-15T00:00:00", y: 332866.8 },
    { x: "2025-04-16T00:00:00", y: 316656.0 },
    { x: "2025-04-17T00:00:00", y: 328163.5 },
    { x: "2025-04-18T00:00:00", y: 386818.3 },
    { x: "2025-04-19T00:00:00", y: 390287.7 },
    { x: "2025-04-20T00:00:00", y: 284609.0 },
    { x: "2025-04-21T00:00:00", y: 264556.5 },
    { x: "2025-04-22T00:00:00", y: 244658.2 },
    { x: "2025-04-23T00:00:00", y: 236314.7 },
    { x: "2025-04-24T00:00:00", y: 251658.7 },
    { x: "2025-04-25T00:00:00", y: 302331.5 },
    { x: "2025-04-26T00:00:00", y: 309558.5 },
    { x: "2025-04-27T00:00:00", y: 221439.5 },
    { x: "2025-04-28T00:00:00", y: 289263.0 },
    { x: "2025-04-29T00:00:00", y: 376700.0 },
    { x: "2025-04-30T00:00:00", y: 340958.9 },
    { x: "2025-05-01T00:00:00", y: 375753.9 },
    { x: "2025-05-02T00:00:00", y: 403760.3 },
    { x: "2025-05-03T00:00:00", y: 294349.5 },
    { x: "2025-05-04T00:00:00", y: 267803.6 },
    { x: "2025-05-05T00:00:00", y: 251258.6 },
    { x: "2025-05-06T00:00:00", y: 244285.7 },
    { x: "2025-05-07T00:00:00", y: 243364.2 },
    { x: "2025-05-08T00:00:00", y: 276700.7 }
];

const graphLine = new Chart(document.querySelector("#lineChart").getContext("2d"), {
    type: "line",
    data: {
        datasets: [
            {
                label: "Q-Credit Value",
                data: dataQCredit,
                borderWidth: 3,
                tension: 0.35,
                fill: true,
                borderColor: "#F4D03F",
                backgroundColor: "rgba(244,208,63,0.15)",
                pointRadius: 0,
                pointHoverRadius: 0
            }
        ]
    },

    options: {
        locale: "en-US",
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: { display: false },
            title: {
                display: true,
                color: "#F4D03F",
                font: { family: "Orbitron", size: 18, weight: "600" }
            }
        },

        scales: {
            x: {
                type: "time",
                time: { tooltipFormat: "yyyy-MM-dd" },
                ticks: {
                    color: "#F9E79F",
                    font: { family: "Orbitron", size: 11 }
                },
                grid: {
                    color: "rgba(212,160,23,0.15)"
                },
                border: { color: "#D4A017" }
            },

            y: {
                ticks: {
                    color: "#F9E79F",
                    font: { family: "Orbitron", size: 11 }
                },
                grid: {
                    color: "rgba(212,160,23,0.15)"
                },
                border: { color: "#D4A017" }
            }
        }
    }
});

// ANIMATION GRAPHIQUE LIGNE
setInterval(() => {
  for (let ds of graphLine.data.datasets) {
    for (let i = 0; i < ds.data.length; i++) {
      const currentY = parseFloat(ds.data[i].y);
      const random = Math.round(Math.random() * 20000 - 10000);
      ds.data[i].y = Math.max(0, currentY + random);
    }
  }
  graphLine.update();
}, 125);


// GRAPHIQUE EN BARRE Y
const graphBarOne = new Chart(document.querySelector("#barChartOne").getContext("2d"), {
    type: "bar",
    data: {
        labels: ["P2P Transfers", "Quantum Mining", "Vault Reserves", "Ext. Markets", "Gov. Contracts"],
        datasets: [
            {
                label: "Inbound Flux",
                data: [6500, 4200, 8100, 3200, 5500],
                backgroundColor: "rgba(244, 208, 63, 0.8)",
                borderColor: "#F4D03F",
                borderWidth: 1,
                borderRadius: 4,
                barPercentage: 0.7,
                categoryPercentage: 0.8
            },
            {
                label: "Outbound Flux",
                data: [4100, 3000, 2500, 4800, 1200],
                backgroundColor: "rgba(212, 160, 23, 0.4)",
                borderColor: "#D4A017",
                borderWidth: 1,
                borderRadius: 4,
                barPercentage: 0.7,
                categoryPercentage: 0.8
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',

        plugins: {
            legend: {
                display: true,
                labels: {
                    color: "#F9E79F",
                    font: { family: "Orbitron", size: 10 }
                }
            },
            title: {
                display: true,
                color: "#F4D03F",
                font: { family: "Orbitron", size: 16, weight: "600" }
            }
        },

        scales: {
            x: {
                grid: {
                    color: "rgba(212,160,23,0.15)"
                },
                ticks: {
                    color: "#F9E79F",
                    font: { family: "Orbitron", size: 14 }
                },
                border: { color: "#D4A017" }
            },

            y: {
                grid: {
                    color: "rgba(212,160,23,0.05)"
                },
                ticks: {
                    color: "#F9E79F",
                    font: { family: "Orbitron", size: 14 }
                },
                border: { color: "#D4A017" }
            }
        }
    }
});

// ANIMATION BARRE Y
setInterval(() => {
  for (let ds of graphBarOne.data.datasets) {
    for (let i = 0; i < ds.data.length; i++) {
      ds.data[i] = Math.round(Math.random() * 80 + 20);
    }
  }
  graphBarOne.update();
}, 1000);
