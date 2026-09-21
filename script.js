(() => {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("mobile-menu");
  const copyBtn = document.getElementById("copy-ca");
  const ca = document.getElementById("ca");

  if (toggle && menu) {
    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      menu.hidden = !open;
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };

    toggle.addEventListener("click", () => {
      setOpen(menu.hidden);
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });
  }

  if (copyBtn && ca) {
    copyBtn.addEventListener("click", async () => {
      const value = ca.textContent.trim();
      try {
        await navigator.clipboard.writeText(value);
      } catch {
        const range = document.createRange();
        range.selectNodeContents(ca);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand("copy");
        selection.removeAllRanges();
      }
      copyBtn.textContent = "Copied";
      copyBtn.classList.add("copied");
      setTimeout(() => {
        copyBtn.textContent = "Copy";
        copyBtn.classList.remove("copied");
      }, 1600);
    });
  }
})();
