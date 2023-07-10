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
            data: [8.7, 8.1, 6.4, 7.2, 6.0, 5.9,3],
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
