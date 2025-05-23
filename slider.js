const img = document.getElementById("slide-img");
const cityText = document.getElementById("city");
const areaText = document.getElementById("area");
const timeText = document.getElementById("time");
const costText = document.getElementById("coast");
const dots = document.querySelectorAll(".dot");
const titles = document.querySelectorAll(".head__city");

const slides = [
  {
    img: "https://i.imgur.com/tI9xgZD.png",
    city: "Rostov-on-Don LCD admiral",
    area: "81 m2",
    time: "3.5 months",
    cost: "Upon request",
    title: "Rostov-on-Don Admiral"
  },
  {
    img: "https://i.imgur.com/CEqRDsc.png",
    city: "Sochi Thieves",
    area: "105 m2",
    time: "4 months",
    cost: "Upon request",
    title: "Sochi Thieves"
  },
  {
    img: "https://i.imgur.com/oNq51Ec.png",
    city: "Rostov-on-Don Patriotic",
    area: "93 m2",
    time: "4.5 months",
    cost: "Upon request",
    title: "Rostov-on-Don Patriotic"
  }
];

const leftArrow = document.getElementById("arrow-left");
const rightArrow = document.getElementById("arrow-right");

let count = 0;

function newSlide (index) {
    const slide = slides[index];
    img.src = slide.img;
    img.alt = slide.title;
    cityText.textContent = slide.city;
    areaText.textContent = slide.area;
    timeText.textContent = slide.time;
    costText.textContent = slide.cost;
    
        dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    
    titles.forEach((title, i) => {
        title.classList.toggle('active', i === index);
    });
}

leftArrow.addEventListener("click", () => {
    count = (count - 1 + slides.length) % slides.length;
    newSlide(count);
})
rightArrow.addEventListener("click", () => {
    count = (count + 1) % slides.length;
    newSlide(count)
})

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        count = index;
        newSlide(count);
    });
});

titles.forEach((title, index) => {
    title.addEventListener('click', () => {
        count = index;
        newSlide(count);
    });
});

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        count = (count - 1 + slides.length) % slides.length;
        newSlide(count);
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        count = (count + 1) % slides.length;
        newSlide(count)
    }
})