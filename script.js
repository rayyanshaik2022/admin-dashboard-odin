// Select various sidebar buttons
sideBarBtns = document.querySelectorAll(".sidebar-btn");
sideBarBtnActive = document.querySelector(".sidebar-btn.selected");

sideBarBtns.forEach((btn) => {
    if (!btn.classList.contains("no-select")) {
        btn.addEventListener("click", (e) => {
            sideBarBtnActive.classList.remove("selected");
            btn.classList.add("selected");
            sideBarBtnActive = btn;
        });
    }
});

// Git Commit Card
// Generate random # of commits & % change
commitCounter = document.querySelector("#commit-counter");
commitTag = document.querySelector("#commit-tag");
commitDesc = document.querySelector("#commit-tag-desc");

let counter = Math.floor(Math.random() * 70) + 12;
let tagPercent = Math.floor(Math.random() * 120) + 5;

commitCounter.textContent = counter;
commitTag.textContent = `+${tagPercent}%`;

// Random chance for negative
if (Math.random() < 0.4) {
    tagPercent = Math.floor(Math.random() * 25) + 3;
    commitTag.textContent = `-${tagPercent}%`;
    commitDesc.textContent = "decrease from yesterday";

    commitTag.classList.remove("green");
    commitTag.classList.add("red");
}

// Chart logic
const line_chart_data = {
    labels: ["July", "August", "September", "October", "November", "December"],
    datasets: [
        {
            label: "Average Hours Slept",
            backgroundColor: "rgb(139, 211, 250)",
            borderColor: "rgb(139, 211, 250)",
            data: [8.7, 8.1, 6.4, 7.2, 6.0, 5.9, 3],
        },
    ],
};

const line_chart_config = {
    type: "line",
    data: line_chart_data,
    options: { responsive: true },
};

const lineChart = new Chart(
    document.getElementById("sleep-chart"),
    line_chart_config
);

// Welcome text & Calendar
const date = new Date();
const hour = date.getHours();
const timeText = document.querySelector(".time-text");
if (hour < 12 && hour >= 3) {
    timeText.textContent = "Good morning";
} else if (hour < 12 + 6 && hour >= 12) {
    timeText.textContent = "Good afternoon";
} else {
    timeText.textContent = "Good evening";
}

const calDay = document.querySelector("#cal-day");
const calMonth = document.querySelector("#cal-month");
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

calDay.textContent = date.getDate();
calMonth.textContent = months[date.getMonth()];

// Update calendar card
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const today = new Date();
const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

const prevText = document.querySelector("#prev-tile > .day-text");
const prevNum = document.querySelector("#prev-tile > .day-num");
const currText = document.querySelector("#curr-tile > .day-text");
const currNum = document.querySelector("#curr-tile > .day-num");
const nextText = document.querySelector("#next-tile > .day-text");
const nextNum = document.querySelector("#next-tile > .day-num");

prevText.textContent = weekdays[yesterday.getDay()];
prevNum.textContent = yesterday.getDate();

currText.textContent = weekdays[today.getDay()];
currNum.textContent = today.getDate();

nextText.textContent = weekdays[tomorrow.getDay()];
nextNum.textContent = tomorrow.getDate();
