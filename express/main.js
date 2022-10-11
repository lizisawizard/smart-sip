function currentTime() {
    let date = new Date(); 
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let time = '';
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
  
    document.querySelector(".clock").innerText = time; 
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
    var temperature = temp + '˚F';
    document.querySelector(".temp-page.temp").innerText = temperature;
    document.querySelector(".home-page.temp-stat").innerText = temperature; 
    document.querySelector(".temp-page.display-temp").innerText = temp; 
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