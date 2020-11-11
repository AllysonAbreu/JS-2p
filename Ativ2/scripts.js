// faça seu código neste arquivo

var modalOverlay = document.getElementById("modal");

var modal = document.getElementsByClassName("modal")[0];
var modalContent = document.getElementsByClassName("modal-content")[0];

function abrirModal(url) {
  console.log(url);
  modalContent.innerHTML = '<iframe src="' + url + '"></iframe>';
  modalOverlay.classList.add("active");
}
function fecharModal() {
  modalOverlay.classList.remove("active");
}
function maximizar() {
  if (modal.classList.contains("maximize")) {
    modal.classList.remove("maximize");
  } else {
    modal.classList.add("maximize");
  }
}