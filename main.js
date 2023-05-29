"use strict";

const save = document.getElementById("save");
const text = document.getElementById("text");
const remove = document.getElementById("remove");
const saveMessage = document.getElementById("saveMessage");

if (localStorage.getItem("memo") === null) {
  text.value = "";
} else {
  text.value = localStorage.getItem("memo");
}

save.addEventListener("click", () => {
  localStorage.setItem("memo", text.value);
  saveMessage.classList.add("appear");
  setTimeout(() => {
    saveMessage.classList.remove("appear");
  }, 1000);
});

remove.addEventListener("click", () => {
    text.value = "";
    localStorage.removeItem();
}
)