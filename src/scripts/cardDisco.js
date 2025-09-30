function abrirCard() {
  let card = document.getElementById("cardDisco")
  card.classList.remove("hidden")
}

function fecharCard() {
  let card = document.getElementById("cardDisco")
  card.classList.add("hidden")
}

window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formDisco")
  if (form) {
    form.addEventListener("submit", (e) => {
        let card = document.getElementById("cardDisco")
  card.classList.add("hidden")
      e.preventDefault()
      const disco = document.getElementById("disco").value
      window.location.href = `/residentEvil2?disco=${disco}`
    })
  }
})
