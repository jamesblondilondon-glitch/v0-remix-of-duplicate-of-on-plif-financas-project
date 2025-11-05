// Newsletter Form Handler
document.getElementById("newsletterForm").addEventListener("submit", function (e) {
  e.preventDefault()

  const email = this.querySelector('input[type="email"]').value
  const messageEl = document.getElementById("newsletter-message")

  // Simula envio
  messageEl.textContent = "✓ Inscrição realizada com sucesso! Verifique seu email."
  messageEl.style.color = "#10b981"
  messageEl.style.fontWeight = "600"

  this.reset()

  setTimeout(() => {
    messageEl.textContent = ""
  }, 5000)
})

// Back to Top Button
const backToTopBtn = document.getElementById("backToTopBtn")

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add("visible")
  } else {
    backToTopBtn.classList.remove("visible")
  }
})

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})
