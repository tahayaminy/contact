const $ = (el) => {
  return document.getElementById(el);
};

function del(el) {
  el.parentElement.parentElement.remove();
}
function cls() {
  $("name").value = "";
  $("numb").value = "";
  $("glass").style.display = "none";
}
function add() {
  if ($("name").value.length >= 3 && $("name").value.length >= 3) {
    var content = `<div>
    <p class="name">${$("name").value}</p>
    <p class="numb">${
      $("numb").value
    } <i onclick="del(this)" class="fas fa-trash-alt"></i></p>
    <p class="clear"></p>
  </div>`;
    $("article").insertAdjacentHTML("beforeend", content);
    cls();
  }
}
