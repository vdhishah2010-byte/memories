const params = new URLSearchParams(window.location.search);
let currentIndex = parseInt(params.get("event"));
if (isNaN(currentIndex)) currentIndex = 0;

const eventData = events[currentIndex];

/* Random soft background */
const colors = ["#f6efe6","#f3eadf","#efe5d8","#f7f1e7","#f2e8db"];
document.body.style.background =
  colors[Math.floor(Math.random() * colors.length)];

/* Title */
document.getElementById("eventTitle").innerText = eventData.title;

/* Captions */
document.getElementById("captionMe").innerText = eventData.captionMe;
document.getElementById("captionPartner").innerText = eventData.captionPartner;

/* IMAGE COLUMN — FLEX BASED (NO POSITION MATH) */
const group = document.querySelector(".imageColumn");
group.innerHTML = "";

eventData.images.forEach((src) => {

  const polaroid = document.createElement("div");
  polaroid.className = "polaroid";

  const img = document.createElement("img");
  img.src = src;
  img.alt = "";

  polaroid.appendChild(img);
  group.appendChild(polaroid);

});

/* Navigation */
const nextArrow = document.getElementById("nextArrow");

if (currentIndex < events.length - 1) {
  nextArrow.onclick = function () {
    window.location.href = "event.html?event=" + (currentIndex + 1);
  };
} else {
  nextArrow.style.display = "none";
}
