const zombieAssaultButton = document.getElementById("zombieAssaultBtn");
const cryptoScraperButton = document.getElementById("cryptoScraperBtn");
const weatherAppButton = document.getElementById("weatherAppBtn");

const zombieAssault = document.getElementById("zombieAssault");
const cryptoScraper = document.getElementById("cryptoScraper");
const weatherApp = document.getElementById("weatherApp");

zombieAssaultButton.addEventListener("click", () => {
  zombieAssault.classList = "";
  cryptoScraper.classList = "hidden";
  weatherApp.classList = "hidden";

  zombieAssaultButton.classList = "selectedButton";
  cryptoScraperButton.classList = "";
  weatherAppButton.classList = "";
});

cryptoScraperButton.addEventListener("click", () => {
  cryptoScraper.classList = "";
  zombieAssault.classList = "hidden";
  weatherApp.classList = "hidden";

  zombieAssaultButton.classList = "";
  cryptoScraperButton.classList = "selectedButton";
  weatherAppButton.classList = "s";
});

weatherAppButton.addEventListener("click", () => {
  cryptoScraper.classList = "hidden";
  zombieAssault.classList = "hidden";
  weatherApp.classList = "";

  zombieAssaultButton.classList = "";
  cryptoScraperButton.classList = "";
  weatherAppButton.classList = "selectedButton";
});
