document.addEventListener("DOMContentLoaded", () => {
  const appState = {
    currentScreen: "inicio",
    toastTimer: null,
    messages: {
      login: "Tela pronta para conectar com a autenticação.",
      signup: "Tela pronta para conectar com o cadastro.",
      forgot: "Fluxo de recuperação de senha ainda não configurado."
    }
  };

  const screens = document.querySelectorAll(".screen");
  const toast = document.getElementById("toast");

  function showScreen(screenId) {
    const target = document.getElementById(screenId);
    if (!target || !target.classList.contains("screen")) {
      console.error("Não foi possível encontrar a tela:", screenId);
      return;
    }

    screens.forEach(screen => screen.classList.remove("active"));
    target.classList.add("active");
    appState.currentScreen = screenId;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }


  document.addEventListener("click", (event) => {
    const control = event.target.closest("[data-go]");
    if (!control) return;
    event.preventDefault();
    showScreen(control.getAttribute("data-go"));
  });

  const startButton = document.getElementById("btn-comecar");
  if (startButton) {
    startButton.addEventListener("click", () => showScreen("cadastro"));
  }

  function showMessage(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(appState.toastTimer);
    appState.toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
  }

  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", event => {
      event.preventDefault();
      showMessage(appState.messages.login);
    });
  }

  const signupForm = document.getElementById("signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", event => {
      event.preventDefault();
      showMessage(appState.messages.signup);
    });
  }

  const forgotPassword = document.getElementById("forgot-password");
  if (forgotPassword) {
    forgotPassword.addEventListener("click", event => {
      event.preventDefault();
      showMessage(appState.messages.forgot);
    });
  }

  showScreen(appState.currentScreen);
});
