import { Chart } from "chart.js";
import "chartjs-adapter-date-fns";

// GRAPHIQUE EN LIGNE (STYLE BOURSE) 
const prices = [
    1200, 1250, 1230, 1280, 1300, 1290, 1350,
    1340, 1380, 1420, 1410, 1450, 1480, 1460,
    1500, 1550, 1530, 1580, 1600, 1590, 1620,
    1650, 1640, 1680, 1700, 1750, 1730, 1800
];
const labels = ["10:00", "10:01", "10:02", "10:03", "10:04", "10:05", "10:06"];

const tradingChart = new Chart(document.querySelector("#lineChart").getContext("2d"), {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Valeur Q-Credit',
            data: prices,
            borderColor: '#F4D03F',
            backgroundColor: 'rgba(244, 208, 63, 0.15)',
            borderWidth: 2,
            tension: 0.2,
            pointRadius: 0,
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 0 },
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                color: "#F4D03F",
                font: { family: "Orbitron", size: 16, weight: "600" },
                align: 'start'
            }
        },
        scales: {
            x: { display: false },
            y: {
                position: 'right',
                grid: {
                    color: 'rgba(212, 160, 23, 0.15)',
                    borderDash: [5, 5]
                },
                ticks: {
                    color: '#F9E79F',
                    font: { family: "Orbitron", size: 11 }
                },
                border: { display: false }
            }
        }
    }
});

// ANIMATION GRAPHIQUE EN LIGNE
setInterval(() => {
    const lastPrice = prices[prices.length - 1];

    const randomMove = Math.floor(Math.random() * 100 - 50);
    let newPrice = lastPrice + randomMove;
    if (newPrice < 0) newPrice = 0;

    prices.push(newPrice);

    const now = new Date();
    labels.push(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);

    if (prices.length > 30) {
        prices.shift();
        labels.shift();
    }

    tradingChart.update();
}, 1000);

// GRAPHIQUE EN BARRE EN Y
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

// ANIMATION BARRE EN Y
setInterval(() => {
    for (let ds of graphBarOne.data.datasets) {
        for (let i = 0; i < ds.data.length; i++) {
            ds.data[i] = Math.round(Math.random() * 80 + 20);
        }
    }
    graphBarOne.update();
}, 1000);


// ANIMATION GRAPHIQUE POLAIRE
const polarGraph = new Chart(document.querySelector("#polarChart").getContext("2d"), {
    type: "polarArea",
    data: {
        labels: ["United Western Alliance", "Neo-China Federation", "Euro-Fed Bloc", "Pacific Rim Coalition", "Russian Cyber-State", "Indian Tech-Bloc", "Brazilian Sector", "Pan-African Union", "Arabian Nexus", "Oceanic Territories"],
        datasets: [{
            data: [150, 142, 120, 95, 80, 75, 60, 55, 40, 30],
            backgroundColor: [
                "rgba(244, 208, 63, 0.9)",
                "rgba(212, 160, 23, 0.85)",
                "rgba(244, 208, 63, 0.8)",
                "rgba(212, 160, 23, 0.75)",
                "rgba(244, 208, 63, 0.7)",
                "rgba(212, 160, 23, 0.65)",
                "rgba(244, 208, 63, 0.6)",
                "rgba(212, 160, 23, 0.55)",
                "rgba(244, 208, 63, 0.5)",
                "rgba(212, 160, 23, 0.45)"
            ],
            borderColor: "#D4A017",
            borderWidth: 1,
            hoverOffset: 15
        }]
    },
    options: {
        locale: "fr-CA",
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            title: {
                display: true,
                color: "#F4D03F",
                font: { family: "Orbitron", size: 16, weight: "600" },
                padding: { bottom: 20 }
            },
            legend: {
                position: 'right',
                labels: {
                    color: "#F9E79F",
                    font: { family: "Orbitron", size: 13 },
                    boxWidth: 13
                }
            },
            tooltip: {
                backgroundColor: 'rgba(28, 28, 28, 0.95)',
                titleColor: '#F4D03F',
                bodyColor: '#fff',
                titleFont: { family: 'Orbitron' },
                bodyFont: { family: 'Orbitron' },
                borderColor: '#D4A017',
                borderWidth: 1,
                callbacks: {
                    label: function (context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += context.parsed.r + ' T Q₡';
                        return label;
                    }
                }
            }
        },

        scales: {
            r: {
                grid: {
                    color: "rgba(212, 160, 23, 0.15)"
                },
                angleLines: {
                    color: "rgba(212, 160, 23, 0.25)"
                },
                pointLabels: {
                    display: false
                },
                beginAtZero: true,
                ticks: {
                    color: "#D4A017",
                    font: { family: "Orbitron", size: 9 },
                    backdropColor: "transparent",
                    stepSize: 50,
                    count: 4
                }
            }
        }
    }
});

// ANIMATION GRAPHIQUE POLAIRE
setInterval(() => {
    for (let ds of polarGraph.data.datasets) {
        for (let i = 0; i < ds.data.length; i++) {
            ds.data[i] = Math.floor(Math.random() * 130 + 10);
        }
    }
    polarGraph.update();
}, 3000);


// GRAPHIQUE BARRE EN X
new Chart(document.querySelector("#barChartTwo").getContext("2d"), {
    type: "bar",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [
            {
                label: "Volume (in Million Q₡)",
                data: [120, 190, 150, 220, 180, 250, 310, 280],
                backgroundColor: "rgba(244, 208, 63, 0.5)",
                borderColor: "#F4D03F",
                borderWidth: 1,
                borderRadius: 4,
                hoverBackgroundColor: "#F4D03F"
            }
        ]
    },
    options: {
        locale: "en-US",
        responsive: true,
        maintainAspectRatio: false,
        animation: false,

        plugins: {
            title: {
                display: true,
                color: "#F4D03F",
                font: { family: "Orbitron", size: 16, weight: "700" },
                padding: { top: 15, bottom: 10 }
            },
            legend: {
                labels: {
                    color: "#F9E79F",
                    font: { family: "Orbitron", size: 14 }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(28, 28, 28, 0.9)',
                titleColor: '#F4D03F',
                bodyColor: '#fff',
                titleFont: { family: 'Orbitron' },
                bodyFont: { family: 'Orbitron' },
                borderColor: '#D4A017',
                borderWidth: 1
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Amount (M Q₡)",
                    color: "#D4A017",
                    font: { family: "Orbitron", size: 12 }
                },
                grid: {
                    color: "rgba(212, 160, 23, 0.15)",
                    lineWidth: 1.5
                },
                border: {
                    display: false
                },
                ticks: {
                    color: "#F9E79F",
                    font: { family: "Orbitron", size: 10, weight: "500" },
                    callback: (v) => v + " M"
                }
            },
            x: {
                grid: {
                    display: false
                },
                border: {
                    color: "rgba(212, 160, 23, 0.3)",
                    dash: [4, 4]
                },
                ticks: {
                    color: "#F9E79F",
                    font: { family: "Orbitron", size: 10, weight: "500" }
                }
            }
        }
    }
});


// GRAPHIQUE EN TARTE
const pieChart = new Chart(document.querySelector("#pieChart").getContext("2d"), {
    type: "pie",
    data: {
        labels: ["Q-Credits", "Q-Bonds", "Q-Nexus", "Q-Flux Derivatives"],
        datasets: [
            {
                data: [45, 25, 20, 10],
                backgroundColor: [
                    "rgba(244, 208, 63, 0.9)",
                    "rgba(212, 160, 23, 0.9)",
                    "rgba(249, 231, 159, 0.9)",
                    "rgba(154, 125, 10, 0.9)"
                ],
                borderColor: "#1C1C1C",
                borderWidth: 4,
                hoverOffset: 25
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                color: "#F4D03F",
                font: { family: "Orbitron", size: 16, weight: "700" },
                padding: { top: 10, bottom: 20 }
            },
            legend: {
                position: "right",
                labels: {
                    color: "#F9E79F",
                    font: { family: "Orbitron", size: 12 },
                    padding: 15,
                    usePointStyle: true,
                    pointStyle: "circle"
                }
            },
            tooltip: {
                backgroundColor: "rgba(28, 28, 28, 0.95)",
                titleColor: "#F4D03F",
                bodyColor: "#fff",
                titleFont: { family: "Orbitron" },
                bodyFont: { family: "Orbitron" },
                borderColor: "#D4A017",
                borderWidth: 1
            }
        }
    }
});

// ANIMATION GRAPHIQUE EN TARTE 
setInterval(() => {
    for (let ds of pieChart.data.datasets) {
        for (let i = 0; i < ds.data.length; i++) {
            ds.data[i] = Math.round(Math.random() * 20);
        }
    }
    pieChart.update();
}, 3000);