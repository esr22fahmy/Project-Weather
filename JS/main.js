
let currentDay = document.getElementById("currentDay");
let nextDay = document.getElementById("nextDay");
let thirdDay = document.getElementById("thirdDay");
let dateCard = document.getElementById("dateCard");
let currentcity = document.getElementById("currentcity");
let currentTemp = document.getElementById("currentTemp");
let imgWheather = document.getElementById("imgWheather");
let currentState = document.getElementById("currentState");
let nextMaxTemp = document.querySelector(".nextMaxTemp");
let nextMinTemp = document.querySelector(".nextMinTemp");
let nextState = document.querySelector(".nextState");
let nextImgTemp = document.getElementById("nextImgTemp");
let thirdIcon = document.getElementById("thirdIcon");
let thirdMaxTemp = document.querySelector(".thirdMaxTemp");
let thirdMinTemp = document.querySelector(".thirdMinTemp");
let thirdState = document.querySelector(".thirdState");
let usercity = document.getElementById("usercity");

let wheatherDate = [];

async function getWeatherToday(city = "cairo") {
  let myKey = "c22e51960dac495ca4565757211809";
  let placeCity = city;
      let http = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${myKey}&q=${placeCity}&days=3`
      );


  wheatherDate = await http.json();

  // console.log(wheatherDate);

  currentcity.innerHTML = wheatherDate.location.name;
  currentTemp.innerHTML = `${wheatherDate.current.temp_c} <sup>o</sup>C`;
  currentState.innerHTML = wheatherDate.current.condition.text;
  getIcon();

  // scend card
  nextState.innerHTML = wheatherDate.forecast.forecastday[1].day.condition.text;
  nextMaxTemp.innerHTML = `${wheatherDate.forecast.forecastday[1].day.maxtemp_c} <sup>o</sup>C `;
  nextMinTemp.innerHTML = `${wheatherDate.forecast.forecastday[1].day.mintemp_c} <sup>o</sup>`;

  getIconScend();

  // third card

  thirdMaxTemp.innerHTML = `${wheatherDate.forecast.forecastday[2].day.maxtemp_c} <sup>o</sup>C`;
  thirdMinTemp.innerHTML = `${wheatherDate.forecast.forecastday[2].day.mintemp_c} <sup>o</sup>`;
  thirdState.innerHTML =
    wheatherDate.forecast.forecastday[2].day.condition.text;

  getIconThird();
    
  getDayName();
  search();
}

function getIcon() {
  let imgTemp = wheatherDate.current.condition.text;
  let currentImg;
  console.log(imgTemp);

  if (imgTemp == "Patchy rain possible") {

    currentImg = "https://cdn.weatherapi.com/weather/64x64/night/176.png";

    imgWheather.setAttribute("src", currentImg);
  } else if (imgTemp == "Mist") {
    currentImg = "https://cdn.weatherapi.com/weather/64x64/night/143.png";

    imgWheather.setAttribute("src", currentImg);
  } else if (imgTemp == "Partly cloudy") {
    currentImg = "https://cdn.weatherapi.com/weather/64x64/night/116.png";

    imgWheather.setAttribute("src", currentImg);
  } else if (imgTemp == "Cloudy") {
    currentImg = "https://cdn.weatherapi.com/weather/64x64/day/119.png";

    imgWheather.setAttribute("src", currentImg);
  } else if (imgTemp == "Light rain shower") {
    currentImg = "https://cdn.weatherapi.com/weather/64x64/day/353.png";

    imgWheather.setAttribute("src", currentImg);
  } else if (imgTemp == "Sunny") {
    currentImg = "https://cdn.weatherapi.com/weather/64x64/day/113.png";

    imgWheather.setAttribute("src", currentImg);
  } else if (imgTemp == "Clear") {
    currentImg = "https://cdn.weatherapi.com/weather/64x64/night/113.png";

    imgWheather.setAttribute("src", currentImg);
  } else if (imgTemp == "Patchy light rain with thunder") {
    currentImg = "https://cdn.weatherapi.com/weather/64x64/day/386.png";

    imgWheather.setAttribute("src", currentImg);
  } else if (imgTemp == "Moderate rain") {
    currentImg = "https://cdn.weatherapi.com/weather/64x64/day/302.png";

    imgWheather.setAttribute("src", currentImg);
  } else if (imgTemp == "Moderate or heavy rain shower") {
    currentImg = "https://cdn.weatherapi.com/weather/64x64/night/356.png";

    imgWheather.setAttribute("src", currentImg);
  }
}

function getIconScend() {
  let nextImg = wheatherDate.forecast.forecastday[1].day.condition.text;
  let currentImg;
  //   console.log(nextImgTemp);

  if (nextImg == "Patchy rain possible") {

    currentImg = "https://cdn.weatherapi.com/weather/64x64/night/176.png";

    nextImgTemp.setAttribute("src", currentImg);
  } else if (nextImg == "Mist") {
    currentImg = "https://cdn.weatherapi.com/weather/64x64/night/143.png";

    nextImgTemp.setAttribute("src", currentImg);
  } else if (nextImg == "Partly cloudy") {
    currentImg = "https://cdn.weatherapi.com/weather/64x64/night/116.png";

    nextImgTemp.setAttribute("src", currentImg);
  } else if (nextImg == "Cloudy") {
    currentImg = "https://cdn.weatherapi.com/weather/64x64/day/119.png";

    nextImgTemp.setAttribute("src", currentImg);
  } else if (nextImg == "Light rain shower") {
    currentImg = "https://cdn.weatherapi.com/weather/64x64/day/353.png";

    nextImgTemp.setAttribute("src", currentImg);
  } else if (nextImg == "Sunny") {
    currentImg = "https://cdn.weatherapi.com/weather/64x64/day/113.png";

    nextImgTemp.setAttribute("src", currentImg);
  } else if (nextImg == "Clear") {
    currentImg = "https://cdn.weatherapi.com/weather/64x64/night/113.png";

    nextImgTemp.setAttribute("src", currentImg);
  } else if (nextImg == "Patchy light rain with thunder") {
    currentImg = "https://cdn.weatherapi.com/weather/64x64/day/386.png";

    nextImgTemp.setAttribute("src", currentImg);
  } else if (nextImg == "Moderate rain") {
    currentImg = "https://cdn.weatherapi.com/weather/64x64/day/302.png";

    nextImgTemp.setAttribute("src", currentImg);
  } else if (nextImg == "Moderate or heavy rain shower") {
    currentImg = "https://cdn.weatherapi.com/weather/64x64/night/356.png";

    nextImgTemp.setAttribute("src", currentImg);
  }
}

function getIconThird() {
  let thirdImg = wheatherDate.forecast.forecastday[2].day.condition.text;
  let currentImg;
  //   console.log(nextImgTemp);

  if (thirdImg == "Patchy rain possible") {

    currentImg = "https://cdn.weatherapi.com/weather/64x64/night/176.png";

    thirdIcon.setAttribute("src", currentImg);
  } else if (thirdImg == "Mist") {
    currentImg = "https://cdn.weatherapi.com/weather/64x64/night/143.png";

    thirdIcon.setAttribute("src", currentImg);
  } else if (thirdImg == "Partly cloudy") {
    currentImg = "https://cdn.weatherapi.com/weather/64x64/night/116.png";

    thirdIcon.setAttribute("src", currentImg);
  } else if (thirdImg == "Cloudy") {
    currentImg = "https://cdn.weatherapi.com/weather/64x64/day/119.png";

    thirdIcon.setAttribute("src", currentImg);
  } else if (thirdImg == "Light rain shower") {
    currentImg = "https://cdn.weatherapi.com/weather/64x64/day/353.png";

    thirdIcon.setAttribute("src", currentImg);
  } else if (thirdImg == "Sunny") {
    currentImg = "https://cdn.weatherapi.com/weather/64x64/day/113.png";

    thirdIcon.setAttribute("src", currentImg);
  } else if (thirdImg == "Clear") {
    currentImg = "https://cdn.weatherapi.com/weather/64x64/night/113.png";

    thirdIcon.setAttribute("src", currentImg);
  } else if (thirdImg == "Patchy light rain with thunder") {
    currentImg = "https://cdn.weatherapi.com/weather/64x64/day/386.png";

    thirdIcon.setAttribute("src", currentImg);
  } else if (thirdImg == "Moderate rain") {
    currentImg = "https://cdn.weatherapi.com/weather/64x64/day/302.png";

    thirdIcon.setAttribute("src", currentImg);
  } else if (thirdImg == "Moderate or heavy rain shower") {
    currentImg = "https://cdn.weatherapi.com/weather/64x64/night/356.png";

    thirdIcon.setAttribute("src", currentImg);
  }
}

function search() {
  usercity.addEventListener('keyup', function () {
     placeCity = usercity.value;
     getWeatherToday(placeCity);
  })
}

function getDayName() {
  let days = [
    "Sunday",
    "monday",
    "Tuesday",
    "Wendesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // Sun Jan 15 2023 00:19:53
  let date = new Date();
  // console.log(date);
  let dayDate = date.getDay();
  // console.log(dayDate) 5

  let getDay = days[dayDate];
  currentDay.innerHTML = getDay;


  //   nextDay.innerHTML = days + 1;

  // console.log(date.getDay());
  let next;
  if (getDay == 6) {
    next = 0;

  } else {
    next = dayDate + 1;
  }
  nextDay.innerHTML = days[next];
  // third card
  let third = next + 1;
  // console.log(third);
  let getThird = days[third];
  console.log(getThird);
  thirdDay.innerHTML = getThird;

//  
  // =======================================
  // display month
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
    let firstCardDate = date.getDate();
    let firstCardMonth = date.getMonth();
    let getNameMonth = months[firstCardMonth];
  //  console.log(getNameMonth);
    dateCard.innerHTML = firstCardDate+' '+ getNameMonth;

}
getWeatherToday();
