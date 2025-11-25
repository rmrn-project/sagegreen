document.addEventListener("DOMContentLoaded", function() {
  const cover    = document.getElementById("cover");
  const main     = document.getElementById("main");
  const openBtn  = document.getElementById("openBtn");
  const music    = document.getElementById("bgMusic");
  const musicBtn = document.getElementById("musicBtn");

  openBtn.addEventListener("click", () => {
    cover.classList.add("hidden");
    main.classList.remove("hidden");
    document.body.style.overflow = "auto";
    setTimeout(() => music.play(), 800);
    musicBtn.classList.add("playing");
  });

  musicBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      musicBtn.classList.add("playing");
    } else {
      music.pause();
      musicBtn.classList.remove("playing");
    }
  });

  // Nama tamu dari URL
  const urlParams = new URLSearchParams(window.location.search);
  const nama = urlParams.get('to');
  if (nama) {
    document.querySelector('.guest-name').textContent = decodeURIComponent(nama);
  }
});
