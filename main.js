import "./style.css";
import moment from "moment-timezone";

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
