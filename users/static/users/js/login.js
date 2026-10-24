(() => {
  const form = document.getElementById("loginForm");
  if (!form) return;

  const btn = form.querySelector("button[type='submit']");
  const spinner = btn?.querySelector(".spinner");
  const btnText = btn?.querySelector(".btn-text");

  form.addEventListener("submit", () => {
    if (!btn) return;
    btn.disabled = true;
    btn.setAttribute("aria-busy", "true");
    if (btnText) btnText.textContent = "در حال ورود...";
    if (spinner) spinner.classList.add("show");
  });
})();
