var date = new Date();
let first_day = new Date().toLocaleString("en-us", { weekday: "long" });
document.querySelector(".first_day").textContent = first_day;

date.setDate(new Date().getDate() + 1);
let second_day = date.toLocaleString("en-us", { weekday: "long" });
document.querySelector(".second_day").textContent = second_day;

date.setDate(new Date().getDate() + 2);
let third_day = date.toLocaleString("en-us", { weekday: "long" });
document.querySelector(".third_day").textContent = third_day;
