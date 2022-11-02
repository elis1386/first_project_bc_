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
function showEmptyCartModal()
{   
  let amount = 0
  if(amount == 0)
  {
    const cartDialog = document.querySelector('#cart_dialog')
    cartDialog.showModal()
  }
  
}