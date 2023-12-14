console.log("EXERCICE 3");
// EXERCICE 3
// VARIABLES
let inputEvent = document.getElementById("event");
let inputDate = document.getElementById("date");
let inputDescrip = document.getElementById("descrip");
let btnAjout = document.getElementById("btn");
let liste = document.getElementById("liste");
// MODAL
let modal = document.getElementById("modal");
let title = document.getElementById("title");
let modalDate = document.getElementById("Date");
let modalDescrip = document.getElementById("des");
btnAjout.addEventListener("click", function () {
  // 1. AJOUT D'EVENEMENTS
  let div = document.createElement("div");
  liste.append(div);
  div.innerHTML += `Titre : ${inputEvent.value}, Description:${inputDescrip.value}, Date:${inputDate.value}`;
  div.style.backgroundColor = "#fff";
  div.style.width = "55%";
  div.style.padding = "20px";
  div.style.borderRadius = "10px";
  div.style.boxShadow = "0 0 10px #000";
  div.style.margin = " 10px";
  //  CREATION D'UN BUTTON POUR SUPPRIMER
  let button = document.createElement("button");
  liste.append(button);
  button.textContent = "Delete";
  button.style.backgroundColor = "red";
  button.style.border = "0";
  button.style.color = "#fff";
  button.style.padding = "10px";
  button.style.borderRadius = "10px";
  button.style.marginLeft = "30px";
  //
  // 2. POUR SUPPRIMER
  button.addEventListener("click", function (e) {
    let target = e.target;
    target.parentElement.remove();
  });
  // 3. POUR MODIFIER
  let Button = document.createElement("button");
  liste.append(Button);
  Button.innerHTML = "Edit";
  Button.style.backgroundColor = "green";
  Button.style.border = "0";
  Button.style.color = "#fff";
  Button.style.padding = "10px";
  Button.style.borderRadius = "10px";
  Button.style.marginLeft = "30px";
  Button.addEventListener("click", function () {
    div.innerHTML = "";
  });
  // 5. AFFICHER LES DETAILS DANS UNE MODAL
  div.addEventListener("click", function () {
    div.style.display = "none";
    modal.style.display = "block";
    title.innerHTML = inputEvent.value;
    modalDate.innerHTML = inputDate.value;
    modalDescrip.innerHTML = inputDescrip.value;
  });
  inputDate.value = "";
  inputEvent.value = "";
  inputDescrip.value = "";
});
