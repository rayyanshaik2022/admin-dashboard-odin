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