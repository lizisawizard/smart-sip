function currentTime() {
    let date = new Date(); 
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let time = '';
    let militaryTime = hours + ":" + minutes;
    let am_pm = "AM";

    if(hours > 12){
        hours = hours - 12;
        am_pm = "PM";
    }
    else if(hours === 0){
        hours = 12;
    }

    if (minutes < 10) {
        time = hours + ":0" + minutes + " " + am_pm;
    }
    else {
        time = hours + ":" + minutes + " " + am_pm;
    }
  
    if (document.querySelector("#time-format").value === "military") { document.querySelector(".clock").innerText = militaryTime; }
    else { document.querySelector(".clock").innerText = time; }
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  
currentTime();

function currentDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    document.querySelector(".homepage.date").innerText = today; 
}
currentDate();

let temp = 10;
function displayTemp() {
    var temperature = temp + '˚' + document.querySelector("#temp-unit").value;
    document.querySelector(".temp-page.temp").innerText = temperature;
    document.querySelector(".home-page.temp-stat").innerText = temperature; 
    document.querySelector(".temp-page.display-temp").innerText = temp; 
    document.querySelector(".watch.display-temp").innerText = temp; 
}
displayTemp();

function addTemp() {
    temp += 1;
    displayTemp();
}

function minusTemp() {
    temp -= 1;
    displayTemp();
}

function toggleLowPower(lowerPower) {
    if (lowerPower === false) {
        document.querySelector("#lowpower-on").classList.remove("deselect-button");
        document.querySelector("#lowpower-on").classList.add("select-button");

        document.querySelector("#lowpower-off").classList.remove("select-button");
        document.querySelector("#lowpower-off").classList.add("deselect-button");

        document.querySelectorAll(".battery-bar").forEach((bar => {
            bar.classList.add("battery-bar-low");
        }));

        lowerPower = true;
    }
    else {
        document.querySelector("#lowpower-on").classList.remove("select-button");
        document.querySelector("#lowpower-on").classList.add("deselect-button");

        document.querySelector("#lowpower-off").classList.remove("deselect-button");
        document.querySelector("#lowpower-off").classList.add("select-button");

        document.querySelectorAll(".battery-bar").forEach((bar => {
            bar.classList.remove("battery-bar-low");
        }));

        lowerPower = false
    }
}

function toggleSolarPower(solarPower) {
    if (solarPower === false) {
        document.querySelector("#solar-on").classList.remove("deselect-button");
        document.querySelector("#solar-on").classList.add("select-button");

        document.querySelector("#solar-off").classList.remove("select-button");
        document.querySelector("#solar-off").classList.add("deselect-button");

        solarPower = true;
    }
    else {
        document.querySelector("#solar-on").classList.remove("select-button");
        document.querySelector("#solar-on").classList.add("deselect-button");

        document.querySelector("#solar-off").classList.remove("deselect-button");
        document.querySelector("#solar-off").classList.add("select-button");

        solarPower = false
    }
}