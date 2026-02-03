let CURRENT_SUBJECT = "general";

function setSubject(subject) {
  CURRENT_SUBJECT = subject;

  document
    .querySelectorAll(".mode-tabs button")
    .forEach(btn => btn.classList.remove("active"));

  event.target.classList.add("active");
}