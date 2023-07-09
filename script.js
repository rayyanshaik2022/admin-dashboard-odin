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

let counter = Math.floor( Math.random() * 70 ) + 12;
let tagPercent = Math.floor( Math.random() * 120 ) + 5;

commitCounter.textContent = counter;
commitTag.textContent = `+${tagPercent}%`;

// Random chance for negative
if (Math.random() < 0.4) {
    tagPercent = Math.floor( Math.random() * 25 ) + 3;
    commitTag.textContent = `-${tagPercent}%`;
    commitDesc.textContent = "decrease from yesterday";

    commitTag.classList.remove("green");
    commitTag.classList.add("red");
}