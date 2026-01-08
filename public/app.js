// TYPING EFFECT
const text = ["Software engineer", "cybersecurity engineer in training", "building electrician", "audiovisual technician"];
let i = 0, j = 0;

function type() {
  if (j < text[i].length) {
    document.getElementById("typing").innerHTML += text[i][j];
    j++;
    setTimeout(type, 80);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (j > 0) {
    document.getElementById("typing").innerHTML =
      text[i].substring(0, j - 1);
    j--;
    setTimeout(erase, 40);
  } else {
    i = (i + 1) % text.length;
    setTimeout(type, 500);
  }
}
type();

// FORM SUBMIT NO REDIRECT
document.getElementById("contactForm").addEventListener("submit", async e => {
  e.preventDefault();
  const data = new FormData(e.target);

  await fetch("https://formsubmit.co/TON_EMAIL@gmail.com", {
    method: "POST",
    body: data,
    headers: { "Accept": "application/json" }
  });

  document.getElementById("ok").classList.remove("hidden");
  e.target.reset();
});
