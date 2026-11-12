const toggle = document.getElementById("theme-toggle");
  const label = document.getElementById("theme-label");

  // 1. On load, check saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggle.checked = true;
    label.textContent = "🔆";
  } else {
    label.textContent = "🌙";
  }

  // 2. When switch is flipped
  function toggleTheme() {
    if (toggle.checked) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
      label.textContent = "🔆";
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
      label.textContent = "🌙";
    }
  }
  