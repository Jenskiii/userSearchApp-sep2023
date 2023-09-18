const darkmodeSwitcher = document.querySelector(".darkmode");
const darkmodeText = document.querySelector(".darkmode-text");
const darkmodeIcon = document.querySelector(".darkmode-icon");

let activeTheme = localStorage.getItem("theme");
darkmodeSwitcher.addEventListener("click", updateTheme);

function updateTheme() {
  const themeToActivate = darkmodeSwitcher.id;
  switchTheme(themeToActivate);
}

// updates theme in local storage 
function switchTheme(theme) {
  // if theme is dark will update to light
  if (theme === "dark") {
    localStorage.setItem("theme", theme);
    document.body.setAttribute("data-theme", theme);
    handleLightTheme();
  } else {  // if theme is light will update to dark
    localStorage.setItem("theme", theme);
    document.body.setAttribute("data-theme", theme);
    handleDarkTheme();
  }
}


//  set theme to dark 
function handleDarkTheme() {
  darkmodeText.innerText = "Dark";
  // changes svg to moon
  darkmodeIcon.setAttribute("xlink:href", "#icon-moon");
  darkmodeSwitcher.id = "dark";
  activeTheme = localStorage.setItem("theme", "light");
}

//  set theme to light
function handleLightTheme() {
  darkmodeText.innerText = "Light";
  // changes svg to sun
  darkmodeIcon.setAttribute("xlink:href", "#icon-sun");
  darkmodeSwitcher.id = "light";
  activeTheme = localStorage.setItem("theme", "dark");
}
// update theme on page load
window.onload = () => {
  if (activeTheme) {
    switchTheme(activeTheme);
  }
};
