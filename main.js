const login = () => {
  window.location.href = "main.html";
};

const register = () => {
  window.location.href = "register.html";
};

const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");

const toggleMenu = () => {
  dropdownMenu.classList.toggle("hidden");
};

// dropdownButton.addEventListener("click", () => {
//   dropdownMenu.classList.toggle("hidden");
// });

const menuItems = dropdownMenu.querySelectorAll("a");
for (const menuItem of menuItems) {
  menuItem.addEventListener("click", () => {
    dropdownMenu.classList.toggle("hidden");
  });
}

const xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

new Chart("bloodChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        label: "Blood pressure",
        data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
        borderColor: "rgba(255, 99, 132, 1)",
        fill: false,
      },
      {
        label: "Blood glucose",
        data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
        borderColor: "rgba(54, 162, 235, 1)",
        fill: false,
      },
    ],
  },
  options: {},
});

const sleepingTimeData = {
  labels: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  datasets: [
    {
      label: "Sleeping Time (hours)",
      data: [8, 7.5, 8, 7, 8.5, 9, 9.5], // Example data, you can replace with your own
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 99, 132, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(255, 99, 132, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

// Configuration options
const chartOptions = {
  legend: false,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const sleepingTimeChart = new Chart("sleepChart", {
  type: "bar",
  data: sleepingTimeData,
  options: chartOptions,
});

new Chart("weightChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        data: [57, 56, 53, 52, 56, 57, 57, 58, 57, 55],
        borderColor: "rgba(255, 99, 132, 1)",
        fill: false,
      },
    ],
  },
  options: {
    legend: false,
  },
});

const waterIntakePercentage = 75;

const waterIntakeData = {
  labels: ["Water Intake", "Remaining"],
  datasets: [
    {
      data: [waterIntakePercentage, 100 - waterIntakePercentage],
      borderColor: "transparent",
      backgroundColor: ["rgba(54, 162, 235, 0.4)", "rgba(234, 234, 234, 0.5)"],
      hoverBackgroundColor: ["rgba(54, 162, 235, 1)", "rgba(234, 234, 234, 1)"],
    },
  ],
};

const waterIntakeOptions = {
  responsive: false,
  maintainAspectRatio: false,
  animation: {
    animateScale: true,
    animateRotate: true,
  },
  legend: {
    display: false,
  },
};

new Chart("waterChart", {
  type: "doughnut",
  data: waterIntakeData,
  options: waterIntakeOptions,
});
///////////////////////////////////////////////////////////
const doughnutData = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

new Chart("activityChart", {
  type: "doughnut",
  data: doughnutData,
  options: { legend: { position: "bottom" } },
});
