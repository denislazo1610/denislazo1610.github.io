// document.querySelector("#favchap").value = "Nooo";
const input = document.querySelector("#favchap"); // Informacion del input
const button = document.querySelector("button"); // boton

const lista = document.querySelector(".list"); // lista

button.addEventListener("click", () => {
  let li = document.createElement("li");
  li.textContent = document.querySelector("#favchap").value;

  const deletebutton = document.createElement("button");
  deletebutton.textContent = "❌";

  li.append(deletebutton);

  document.querySelector(".list").append(li);

  deletebutton.addEventListener("click", () => {
    lista.removeChild(li);
  });
});

// document.querySelector("#favchap").value = "nooo";
// console.log(document.querySelector("#favchap").value);
