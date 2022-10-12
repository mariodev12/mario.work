import "./style.css";
import moment from "moment-timezone";

gsap.set(".lettering svg.isVisible", { autoAlpha: 1 });

gsap.set(".lettering svg:first-of-type g.masks path", { drawSVG: 0 });

gsap.to("svg.isVisible g.masks path", {
  drawSVG: "100%",
  duration: 0.9,
  stagger: { each: 0.25, from: "start" },
});

const timeOfTheDay = () => {
  const [hour] = moment().tz("Europe/Madrid").format("H").split(",");
  let result = { icon: "", text: "" };

  if (hour >= 22 || hour < 6) {
    result.icon = "😴";
    result.text = "I'm sleeping";
  } else {
    result.icon = "☕️";
    result.text = "Working on something";
  }

  return result;
};

const res = timeOfTheDay();

document.querySelector("#available").innerHTML = `
  <div class="available-container">
    <span class="available--icon">${res.icon}</span>
    <span class="available--text">${res.text}</span>
  </div>
`;
