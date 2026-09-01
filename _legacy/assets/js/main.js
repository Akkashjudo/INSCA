/* ============================================================
   INSCA — interactions & motion
   Vanilla JS + GSAP/ScrollTrigger (progressive enhancement).
   Everything degrades gracefully if GSAP fails to load.
   ============================================================ */
(function () {
  "use strict";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var isTouch = window.matchMedia("(hover: none)").matches;

  /* ---------- Year ---------- */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  /* ---------- Header scroll state + progress ---------- */
  var header = document.getElementById("header");
  var progress = document.getElementById("progress");
  var sticky = document.getElementById("stickyCta");
  var hero = document.getElementById("hero");

  function onScroll() {
    var sc = window.scrollY || document.documentElement.scrollTop;
    if (header) header.classList.toggle("scrolled", sc > 24);
    if (progress) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (h > 0 ? (sc / h) * 100 : 0) + "%";
    }
    if (sticky) {
      var past = hero ? sc > hero.offsetHeight * 0.7 : sc > 500;
      sticky.classList.toggle("show", past);
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  var burger = document.getElementById("burger");
  var menu = document.getElementById("mobileMenu");
  function closeMenu() {
    if (!menu) return;
    menu.classList.remove("open");
    burger.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
  if (burger && menu) {
    burger.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---------- Smooth anchor scroll (with header offset) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (id === "#" || id === "#top") return;
      var el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      var top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: top, behavior: reduceMotion ? "auto" : "smooth" });
    });
  });

  /* ---------- Reveal on scroll (IntersectionObserver) ---------- */
  var reveals = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Counter animation ---------- */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count")) || 0;
    var suffix = el.getAttribute("data-suffix") || "";
    if (reduceMotion) { el.textContent = target + suffix; return; }
    var start = 0, dur = 1600, t0 = null;
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(start + (target - start) * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { animateCount(en.target); cio.unobserve(en.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(animateCount);
  }

  /* ---------- Magnetic buttons (desktop only) ---------- */
  if (!isTouch && !reduceMotion) {
    document.querySelectorAll(".magnetic").forEach(function (btn) {
      var strength = 0.28;
      btn.addEventListener("mousemove", function (e) {
        var r = btn.getBoundingClientRect();
        var x = e.clientX - r.left - r.width / 2;
        var yy = e.clientY - r.top - r.height / 2;
        btn.style.transform = "translate(" + x * strength + "px," + yy * strength + "px)";
      });
      btn.addEventListener("mouseleave", function () { btn.style.transform = ""; });
    });
  }

  /* ---------- Lightbox ---------- */
  var lb = document.getElementById("lightbox");
  var lbImg = document.getElementById("lbImg");
  var lbClose = document.getElementById("lbClose");
  function openLb(src, alt) {
    if (!lb) return;
    lbImg.src = src; lbImg.alt = alt || "";
    lb.classList.add("open"); lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeLb() {
    if (!lb) return;
    lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = ""; lbImg.src = "";
  }
  document.querySelectorAll("[data-lb]").forEach(function (fig) {
    fig.addEventListener("click", function () {
      var img = fig.querySelector("img");
      openLb(fig.getAttribute("data-lb"), img ? img.alt : "");
    });
  });
  if (lbClose) lbClose.addEventListener("click", closeLb);
  if (lb) lb.addEventListener("click", function (e) { if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeLb(); });

  /* ---------- GSAP-powered depth & parallax (progressive) ---------- */
  window.addEventListener("load", function () {
    if (reduceMotion || typeof window.gsap === "undefined") return;
    var gsap = window.gsap;
    if (window.ScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);

    /* Hero collage parallax on scroll */
    document.querySelectorAll("[data-parallax]").forEach(function (el) {
      var depth = parseFloat(el.getAttribute("data-parallax")) || 0.1;
      if (window.ScrollTrigger) {
        gsap.to(el, {
          y: function () { return -window.innerHeight * depth * 0.35; },
          ease: "none",
          scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true }
        });
      }
    });

    /* Mouse-based depth (desktop) */
    if (!isTouch) {
      var collage = document.querySelector(".hero-collage");
      if (collage) {
        var frames = collage.querySelectorAll("[data-parallax]");
        collage.addEventListener("mousemove", function (e) {
          var r = collage.getBoundingClientRect();
          var mx = (e.clientX - r.left) / r.width - 0.5;
          var my = (e.clientY - r.top) / r.height - 0.5;
          frames.forEach(function (f) {
            var depth = parseFloat(f.getAttribute("data-parallax")) || 0.1;
            gsap.to(f, { x: mx * depth * 90, rotateY: mx * 4, rotateX: -my * 4, duration: 0.6, ease: "power2.out" });
          });
        });
        collage.addEventListener("mouseleave", function () {
          frames.forEach(function (f) { gsap.to(f, { x: 0, rotateX: 0, rotateY: 0, duration: 0.8 }); });
        });
      }
    }
  });
})();
