// document.querySelector("#favchap").value = "Nooo";
const input = document.querySelector("#favchap"); // Informacion del input
const button = document.querySelector("button"); // boton

const lista = document.querySelector(".listcontainer"); // lista

button.addEventListener("click", () => {
  let li = document.createElement("li");
  li.textContent = document.querySelector("#favchap").value;

  const deletebutton = document.createElement("button");
  deletebutton.textContent = "❌";

  li.append(deletebutton);

  document.querySelector(".list").append(li);
});

deleteButton.addEventListener("click", function () {
  let node = document.querySelector(li);
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
});

// document.querySelector("#favchap").value = "nooo";
// console.log(document.querySelector("#favchap").value);
