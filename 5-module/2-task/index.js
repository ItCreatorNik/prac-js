function toggleText() {

  const btn = document.querySelector(".toggle-text-button");


  btn.addEventListener('click', () => {
    document.querySelector("#text").hidden = !document.querySelector("#text").hidden
  })


}
