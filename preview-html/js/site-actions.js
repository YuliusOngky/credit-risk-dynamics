(function () {
  var CAP_LOGIN = "https://cap.creditriskdynamics.com/login";
  var DEMO_EMAIL = "demo123@gmail.com";
  var DEMO_PASSWORD = "12345678";
  var BRIEFING_HREF =
    "mailto:yuliusongky@creditriskdynamics.com?subject=" +
    encodeURIComponent("Request Briefing — Credit Risk Dynamics");

  function submitCapDemo() {
    var form = document.createElement("form");
    form.method = "post";
    form.action = CAP_LOGIN;
    form.style.display = "none";

    var email = document.createElement("input");
    email.type = "hidden";
    email.name = "tester_email";
    email.value = DEMO_EMAIL;
    form.appendChild(email);

    var password = document.createElement("input");
    password.type = "hidden";
    password.name = "user_password";
    password.value = DEMO_PASSWORD;
    form.appendChild(password);

    document.body.appendChild(form);
    form.submit();
  }

  function bindLiveDemo(el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      submitCapDemo();
    });
  }

  function bindBriefing(el) {
    if (el.tagName === "A") {
      el.setAttribute("href", BRIEFING_HREF);
      return;
    }
    el.addEventListener("click", function () {
      window.location.href = BRIEFING_HREF;
    });
  }

  document.querySelectorAll(".js-live-demo, .demo, .cta-secondary").forEach(bindLiveDemo);
  document.querySelectorAll(".js-request-briefing").forEach(bindBriefing);

  document.querySelectorAll(".cta-primary").forEach(function (el) {
    if (/request\s+briefing/i.test(el.textContent)) {
      bindBriefing(el);
    }
  });

  document.querySelectorAll("a.btn-primary, a.btn-gold").forEach(function (el) {
    var text = el.textContent.trim();
    if (/live\s+demo/i.test(text)) {
      bindLiveDemo(el);
    } else if (/request\s+briefing/i.test(text)) {
      bindBriefing(el);
    }
  });
})();
