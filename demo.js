let salambtn = document.querySelector("button");
salambtn.addEventListener("click", inputmsg);

function inputmsg() {
  let name = prompt("enter name of student");
  salambtn.textContent = "roll no. 01 : " + name;
}