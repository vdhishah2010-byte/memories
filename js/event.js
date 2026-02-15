const params = new URLSearchParams(window.location.search);
let currentIndex = parseInt(params.get("event"));
if (isNaN(currentIndex)) currentIndex = 0;

const eventData = events[currentIndex];

/* Title */
document.getElementById("eventTitle").innerText = eventData.title;

/* Captions */
document.getElementById("captionMe").innerText = eventData.captionMe;
document.getElementById("captionPartner").innerText = eventData.captionPartner;

/* IMAGE COLUMN */
const group = document.querySelector(".imageColumn");
group.innerHTML = "";

eventData.images.forEach((src) => {

  const polaroid = document.createElement("div");
  polaroid.className = "polaroid";

  const img = document.createElement("img");
  img.src = src;
  img.alt = "";

  polaroid.appendChild(img);

  /* Balanced scrapbook tilt (-12deg to +12deg) */
  const tilt = (Math.random() * 24) - 12;
  polaroid.style.transform = `rotate(${tilt}deg)`;

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
