function login() {
    const nameEl = document.querySelector("#name");
    console.log(nameEl.value)
    localStorage.setItem('userName', nameEl.value);
    window.location.href = "play.html";
  }