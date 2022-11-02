function viewMore() {
  const gallery2 = document.querySelector(".gallery2");
  gallery2.style.display = "grid";
}
function sendMessageModal() {
  const dialog = document.querySelector("#dialog");
  dialog.showModal();
}
function closeModal()
{
    const closeModal = document.querySelector('#clodeModal')
    closeModal.closeModal()
}