
// Button hyperlink button converter
document.querySelectorAll(".game-button").forEach(btn => {
    btn.addEventListener("click", () => {
      window.location.href = btn.dataset.link;
    });
  });