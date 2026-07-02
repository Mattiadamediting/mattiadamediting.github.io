// Timecode HUD: lo scroll avanza il timecode come una timeline di montaggio.
(function () {
  var tc = document.getElementById("timecode");
  if (!tc) return;
  var DURATION = 2 * 60 + 47; // "durata del reel": 02:47 + frame

  function pad(n) { return String(n).padStart(2, "0"); }

  function update() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    var p = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    var totalFrames = Math.round(p * DURATION * 24);
    var f = totalFrames % 24;
    var s = Math.floor(totalFrames / 24);
    var h = Math.floor(s / 3600);
    var m = Math.floor((s % 3600) / 60);
    tc.textContent = pad(h) + ":" + pad(m) + ":" + pad(s % 60) + ":" + pad(f);
  }

  window.addEventListener("scroll", update, { passive: true });
  update();
})();

// Reveal on scroll (rispetta prefers-reduced-motion via CSS)
(function () {
  var els = document.querySelectorAll(".works .work, .feature-card, .about-grid, .contact-row");
  els.forEach(function (el) { el.classList.add("reveal"); });
  if (!("IntersectionObserver" in window)) {
    els.forEach(function (el) { el.classList.add("on"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("on"); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  els.forEach(function (el) { io.observe(el); });
})();
