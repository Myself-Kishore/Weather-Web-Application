const name = prompt("Enter You Name ");
const day = document.getElementById("date");
const c_time = document.getElementById("c-time");
const m_temp = document.getElementById("m-temp");
const locat = document.getElementById("city");
const searchCity = document.getElementById("sinput");
const search = document.getElementById("btn");
const hummidity = document.getElementById("hum");
const condition = document.getElementById("cond");
const wind = document.getElementById("wind");
const s_temp = document.getElementById("s-temp");
const h_0 = document.getElementById("h-0");
const h_1 = document.getElementById("h-1");
const h_2 = document.getElementById("h-2");
const h_3 = document.getElementById("h-3");
const h_4 = document.getElementById("h-4");
const h_5 = document.getElementById("h-5");
const h_6 = document.getElementById("h-6");
const h_7 = document.getElementById("h-7");
const h_8 = document.getElementById("h-8");
const h_9 = document.getElementById("h-9");
const h_10 = document.getElementById("h-10");
const h_11 = document.getElementById("h-11");
const h_12 = document.getElementById("h-12");
const h_13 = document.getElementById("h-13");
const h_14 = document.getElementById("h-14");
const h_15 = document.getElementById("h-15");
const h_16 = document.getElementById("h-16");
const h_17 = document.getElementById("h-17");
const h_18 = document.getElementById("h-18");
const h_19 = document.getElementById("h-19");
const h_20 = document.getElementById("h-20");
const h_21 = document.getElementById("h-21");
const h_22 = document.getElementById("h-22");
const h_23 = document.getElementById("h-23");
//hour tempareture update
const p_0 = document.getElementById("t-0");
const p_1 = document.getElementById("t-1");
const p_2 = document.getElementById("t-2");
const p_3 = document.getElementById("t-3");
const p_4 = document.getElementById("t-4");
const p_5 = document.getElementById("t-5");
const p_6 = document.getElementById("t-6");

const p_7 = document.getElementById("t-7");
const p_8 = document.getElementById("t-8");
const p_9 = document.getElementById("t-9");
const p_10 = document.getElementById("t-10");
const p_11 = document.getElementById("t-11");
const p_12 = document.getElementById("t-12");
const p_13 = document.getElementById("t-13");
const p_14 = document.getElementById("t-14");
const p_15 = document.getElementById("t-15");
const p_16 = document.getElementById("t-16");
const p_17 = document.getElementById("t-17");
const p_18 = document.getElementById("t-18");
const p_19 = document.getElementById("t-19");
const p_20 = document.getElementById("t-20");
const p_21 = document.getElementById("t-21");
const p_22 = document.getElementById("t-22");
const p_23 = document.getElementById("t-23");
// week date update
const day_1 = document.getElementById("day-1");
const day_2 = document.getElementById("day-2");
const day_3 = document.getElementById("day-3");
const day_4 = document.querySelector(".day-4");
const day_5 = document.getElementById("day-5");
const day_6 = document.getElementById("day-6");
const day_7 = document.getElementById("day-7");
//week tempareture update
const temp_1 = document.getElementById("t-1");
const temp_2 = document.getElementById("t-2");
const temp_3 = document.getElementById("t-3");
const temp_4 = document.getElementById("t-4");
const temp_5 = document.getElementById("t-5");
const temp_6 = document.getElementById("t-6");
const temp_7 = document.getElementById("t-7");
// week condition update
const icon_1 = document.getElementById("icon-1");
const icon_2 = document.getElementById("icon-2");
const icon_3 = document.getElementById("icon-3");
const icon_4 = document.getElementById("icon-4");
const icon_5 = document.getElementById("icon-5");
const icon_6 = document.getElementById("icon-6");
const icon_7 = document.getElementById("icon-7");
//main icon update
const main_icon = document.getElementById("main-icon");
//hourly reprt
const hour_h = document.getElementById("h-crd");
//week icon update
const weekIcon1 = document.getElementById("week-icon1");
const weekIcon2 = document.getElementById("week-icon2");
const weekIcon3 = document.getElementById("week-icon3");
const weekIcon4 = document.getElementById("week-icon4");
const weekIcon5 = document.getElementById("week-icon5");
const weekIcon6 = document.getElementById("week-icon6");
const weekIcon7 = document.getElementById("week-icon7");

const m_name = document.getElementById("name");
m_name.innerText = "Hello! " + " " + name;
//update card
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const card5 = document.getElementById("card5");
const card6 = document.getElementById("card6");
const card7 = document.getElementById("card7");
const Hourly_Report = document.getElementById("Hourly_Report");
const mainhouedata = document.getElementById("mainhouedata");
const weekliyUpdate = document.getElementById("weekliyUpdatedata");
const nextDaycondition = document.getElementById("nextDaycondition");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");
const day1date = document.getElementById("day1date");
const day1description = document.getElementById("day1description");

const currentcity = "",
  units = "c",
  weekly = "week";
function getDateTime() {
  let now = new Date(),
    hour = now.getHours(),
    minutes = now.getMinutes(),
    year = now.getFullYear(),
    month = now.getMonth(),
    second = now.getSeconds(),
    d = now.getDate();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (second < 10) {
    second = "0" + second;
  }

  let daystring = days[now.getDay()];
  c_time.innerText = `${hour}:${minutes}:${second}`;
  return `${daystring},${d}-${month + 1}-${year}`;
}
day.innerText = getDateTime();
setInterval(() => {
  day.innerText = getDateTime();
}, 1000);

function getWetherData(city, units, hourlyweek) {
  let key = "DFHDERJGMWPCLZ2MCWMH2ZRGX";
  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeli
ne/${city}?unitGroup=metric&key=${key}&contentType=json`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      let maindata = data;
      let days = data.days;
      let today = data.currentConditions;
      m_temp.innerText = Math.round(today.temp) + "°C";
      locat.innerText = maindata.address;
      hummidity.innerText = Math.round(days[0].humidity) + "%";
      condition.innerText = today.conditions;
      wind.innerText = Math.round(days[0].windspeed);
      s_temp.innerText = Math.round(days[0].temp) + "°C";
      h_0.innerText = days[0].hours[0].datetime.split(":")[0] + ":00 Am";
      h_1.innerText = days[0].hours[1].datetime.split(":")[0] + ":00 AM";
      h_2.innerText = days[0].hours[2].datetime.split(":")[0] + ":00 AM";
      h_3.innerText = days[0].hours[3].datetime.split(":")[0] + ":00 AM";
      h_4.innerText = days[0].hours[4].datetime.split(":")[0] + ":00 AM";
      h_5.innerText = days[0].hours[5].datetime.split(":")[0] + ":00 AM";
      h_6.innerText = days[0].hours[6].datetime.split(":")[0] + ":00 AM";
      h_7.innerText = days[0].hours[7].datetime.split(":")[0] + ":00 AM";
      h_8.innerText = days[0].hours[8].datetime.split(":")[0] + ":00 AM";
      h_9.innerText = days[0].hours[9].datetime.split(":")[0] + ":00 AM";
      h_10.innerText = days[0].hours[10].datetime.split(":")[0] + ":00 AM";
      h_11.innerText = days[0].hours[11].datetime.split(":")[0] + ":00 AM";
      h_12.innerText = days[0].hours[12].datetime.split(":")[0] + ":00 PM";
      h_13.innerText = days[0].hours[13].datetime.split(":")[0] + ":00 PM";
      h_14.innerText = days[0].hours[14].datetime.split(":")[0] + ":00 PM";
      h_15.innerText = days[0].hours[15].datetime.split(":")[0] + ":00 PM";
      h_16.innerText = days[0].hours[16].datetime.split(":")[0] + ":00 PM";
      h_17.innerText = days[0].hours[17].datetime.split(":")[0] + ":00 PM";

      h_18.innerText = days[0].hours[18].datetime.split(":")[0] + ":00 PM";
      h_19.innerText = days[0].hours[19].datetime.split(":")[0] + ":00 PM";
      h_20.innerText = days[0].hours[20].datetime.split(":")[0] + ":00 PM";
      h_21.innerText = days[0].hours[21].datetime.split(":")[0] + ":00 PM";
      h_22.innerText = days[0].hours[22].datetime.split(":")[0] + ":00 PM";
      h_23.innerText = days[0].hours[23].datetime.split(":")[0] + ":00 PM";
      // hour tempareture
      p_0.innerText = Math.round(days[0].hours[0].temp) + "°C";
      p_1.innerText = Math.round(days[0].hours[1].temp) + "°C";
      p_2.innerText = Math.round(days[0].hours[2].temp) + "°C";
      p_3.innerText = Math.round(days[0].hours[3].temp) + "°C";
      p_4.innerText = Math.round(days[0].hours[4].temp) + "°C";
      p_5.innerText = Math.round(days[0].hours[5].temp) + "°C";
      p_6.innerText = Math.round(days[0].hours[6].temp) + "°C";
      p_7.innerText = Math.round(days[0].hours[7].temp) + "°C";
      p_8.innerText = Math.round(days[0].hours[8].temp) + "°C";
      p_9.innerText = Math.round(days[0].hours[9].temp) + "°C";
      p_10.innerText = Math.round(days[0].hours[10].temp) + "°C";
      p_11.innerText = Math.round(days[0].hours[11].temp) + "°C";
      p_12.innerText = Math.round(days[0].hours[12].temp) + "°C";
      p_13.innerText = Math.round(days[0].hours[13].temp) + "°C";
      p_14.innerText = Math.round(days[0].hours[14].temp) + "°C";
      p_15.innerText = Math.round(days[0].hours[15].temp) + "°C";
      p_16.innerText = Math.round(days[0].hours[16].temp) + "°C";
      p_17.innerText = Math.round(days[0].hours[17].temp) + "°C";
      p_18.innerText = Math.round(days[0].hours[18].temp) + "°C";
      p_19.innerText = Math.round(days[0].hours[19].temp) + "°C";
      p_20.innerText = Math.round(days[0].hours[20].temp) + "°C";
      p_21.innerText = Math.round(days[0].hours[21].temp) + "°C";
      p_22.innerText = Math.round(days[0].hours[22].temp) + "°C";
      p_23.innerText = Math.round(days[0].hours[23].temp) + "°C";
      // week report
      day_1.innerText = days[1].datetime.split("-")[2];
      day_2.innerText = days[2].datetime.split("-")[2];
      day_3.innerText = days[3].datetime.split("-")[2];
      day_4.innerText = days[4].datetime.split("-")[2];
      day_5.innerText = days[5].datetime.split("-")[2];
      day_6.innerText = days[6].datetime.split("-")[2];
      day_7.innerText = days[7].datetime.split("-")[2];
      //week temp report
      temp_1.innerText = Math.round(days[1].temp) + "°C";
      temp_2.innerText = Math.round(days[2].temp) + "°C";
      temp_3.innerText = Math.round(days[3].temp) + "°C";
      temp_4.innerText = Math.round(days[4].temp) + "°C";
      temp_5.innerText = Math.round(days[5].temp) + "°C";
      temp_6.innerText = Math.round(days[6].temp) + "°C";
      temp_7.innerText = Math.round(days[7].temp) + "°C";
      // week condition report
      icon_1.innerText = days[1].icon;
      icon_2.innerText = days[2].icon;
      icon_3.innerText = days[3].icon;
      icon_4.innerText = days[4].icon;
      icon_5.innerText = days[5].icon;
      icon_6.innerText = days[6].icon;

      icon_7.innerText = days[7].icon;
      //hourly report
      //icons updates
      if (today.icon == "clear-day") {
        main_icon.src = "clear3.png";
      } else if (today.icon == "rain,overcast") {
        main_icon.src = "rain-overcar.png";
      } else if (today.icon == "clear-night") {
        main_icon.src = "clear-night.png";
      } else if (today.icon == "cloudy") {
        main_icon.src = "cloudy1.png";
      } else if (today.icon == "fog") {
        main_icon.src = "fog.png";
      } else if (today.icon == "overcat") {
        main_icon.src = "overcast1.png";
      } else if (today.icon == "partly-cloudy-night") {
        main_icon.src = "partly-croudy-day.gif";
      } else if (today.icon == "snow") {
        main_icon.src = "snow1.png";
      } else if (today.icon == "thunder-rain") {
        main_icon.src = "thunder1.png";
      } else if (today.icon == "rain") {
        main_icon.src = "rain2.png";
      } else {
        main_icon.src = "main icon.gif";
      }
      // week icon update
      if (days[1].icon == "clear-day") {
        weekIcon1.src = "clear2.gif";
      } else if (days[1].icon == "clear-night") {
        weekIcon1.src = "clear-night.gif";
      } else if (days[1].icon == "cloudy") {
        weekIcon1.src = "cloudy.gif";
      } else if (days[1].icon == "fog") {
        weekIcon1.src = "fog.png";
      } else if (days[1].icon == "overcat") {
        weekIcon1.src = "overcast.gif";
      } else if (days[1].icon == "partly-cloudy-night") {
        weekIcon1.src = "partly-croudy-day.gif";
      } else if (days[1].icon == "snow") {
        weekIcon1.src = "snow.gif";
      } else if (days[1].icon == "thunder-rain") {
        weekIcon1.src = "thunder-rqain.gif";
      } else if (days[1].icon == "rain") {
        weekIcon1.src = "rain1.png";
      } else {
        weekIcon1.src = "main icon.gif";
      }
      //week day2
      if (days[2].icon == "clear-day") {
        weekIcon2.src = "clear2.gif";
      } else if (days[2].icon == "clear-night") {
        weekIcon2.src = "clear-night.gif";
      } else if (days[2].icon == "cloudy") {
        weekIcon2.src = "cloudy.gif";
      } else if (days[2].icon == "fog") {
        weekIcon2.src = "fog.png";
      } else if (days[2].icon == "overcat") {
        weekIcon2.src = "overcast.gif";
      } else if (days[2].icon == "partly-cloudy-night") {
        weekIcon2.src = "partly-croudy-day.gif";
      } else if (days[2].icon == "snow") {
        weekIcon2.src = "snow.gif";
      } else if (days[2].icon == "thunder-rain") {
        weekIcon2.src = "thunder-rqain.gif";
      } else if (days[2].icon == "rain") {
        weekIcon2.src = "rain1.png";
      } else {
        weekIcon2.src = "main icon.gif";
      }
      //day 3
      if (days[3].icon == "clear-day") {
        weekIcon3.src = "clear2.gif";
      } else if (days[3].icon == "clear-night") {
        weekIcon3.src = "clear-night.gif";
      } else if (days[3].icon == "cloudy") {
        weekIcon3.src = "cloudy.gif";
      } else if (days[3].icon == "fog") {
        weekIcon3.src = "fog.png";
      } else if (days[3].icon == "overcat") {
        weekIcon3.src = "overcast.gif";
      } else if (days[3].icon == "partly-cloudy-night") {
        weekIcon3.src = "partly-croudy-day.gif";
      } else if (days[3].icon == "snow") {
        weekIcon3.src = "snow.gif";
      } else if (days[3].icon == "thunder-rain") {
        weekIcon3.src = "thunder-rqain.gif";
      } else if (days[3].icon == "rain") {
        weekIcon3.src = "rain1.png";
      } else {
        weekIcon3.src = "main icon.gif";
      }
      //day 4
      if (days[4].icon == "clear-day") {
        weekIcon4.src = "clear2.gif";
      } else if (days[4].icon == "clear-night") {
        weekIcon4.src = "clear-night.gif";
      } else if (days[4].icon == "cloudy") {
        weekIcon4.src = "cloudy.gif";
      } else if (days[4].icon == "fog") {
        weekIcon4.src = "fog.png";
      } else if (days[4].icon == "overcat") {
        weekIcon4.src = "overcast.gif";
      } else if (days[4].icon == "partly-cloudy-night") {
        weekIcon4.src = "partly-croudy-day.gif";
      } else if (days[4].icon == "snow") {
        weekIcon4.src = "snow.gif";
      } else if (days[4].icon == "thunder-rain") {
        weekIcon4.src = "thunder-rqain.gif";
      } else if (days[4].icon == "rain") {
        weekIcon4.src = "rain1.png";
      } else {
        weekIcon4.src = "main icon.gif";
      }

      //day 5
      if (days[5].icon == "clear-day") {
        weekIcon5.src = "clear2.gif";
      } else if (days[5].icon == "clear-night") {
        weekIcon5.src = "clear-night.gif";
      } else if (days[5].icon == "cloudy") {
        weekIcon5.src = "cloudy.gif";
      } else if (days[5].icon == "fog") {
        weekIcon5.src = "fog.png";
      } else if (days[5].icon == "overcat") {
        weekIcon5.src = "overcast.gif";
      } else if (days[5].icon == "partly-cloudy-night") {
        weekIcon5.src = "partly-croudy-day.gif";
      } else if (days[5].icon == "snow") {
        weekIcon5.src = "snow.gif";
      } else if (days[5].icon == "thunder-rain") {
        weekIcon5.src = "thunder-rqain.gif";
      } else if (days[5].icon == "rain") {
        weekIcon5.src = "rain1.png";
      } else {
        weekIcon5.src = "main icon.gif";
      }
      //day 6
      if (days[6].icon == "clear-day") {
        weekIcon6.src = "clear2.gif";
      } else if (days[6].icon == "clear-night") {
        weekIcon6.src = "clear-night.gif";
      } else if (days[6].icon == "cloudy") {
        weekIcon6.src = "cloudy.gif";
      } else if (days[6].icon == "fog") {
        weekIcon6.src = "fog.png";
      } else if (days[6].icon == "overcat") {
        weekIcon6.src = "overcast.gif";
      } else if (days[6].icon == "partly-cloudy-night") {
        weekIcon6.src = "partly-croudy-day.gif";
      } else if (days[6].icon == "snow") {
        weekIcon6.src = "snow.gif";
      } else if (days[6].icon == "thunder-rain") {
        weekIcon6.src = "thunder-rqain.gif";
      } else if (days[6].icon == "rain") {
        weekIcon6.src = "rain1.png";
      } else {
        weekIcon6.src = "main icon.gif";
      }
      //day 7
      if (days[7].icon == "clear-day") {
        weekIcon7.src = "clear2.gif";
      } else if (days[7].icon == "clear-night") {
        weekIcon7.src = "clear-night.gif";
      } else if (days[7].icon == "cloudy") {
        weekIcon7.src = "cloudy.gif";
      } else if (days[7].icon == "fog") {
        weekIcon7.src = "fog.png";
      } else if (days[7].icon == "overcat") {
        weekIcon7.src = "overcast.gif";
      } else if (days[7].icon == "partly-cloudy") {
        weekIcon7.src = "partly-croudy-day.gif";
      } else if (days[7].icon == "snow") {
        weekIcon7.src = "snow.gif";
      } else if (days[7].icon == "thunder-rain") {
        weekIcon7.src = "thunder-rqain.gif";
      } else if (days[7].icon == "rain") {
        weekIcon7.src = "rain1.png";
      } else {
        weekIcon7.src = "main icon.gif";
      }
    });
}
search.addEventListener("click", () => {
  getWetherData(searchCity.value);
  card_1(searchCity.value);
  card_2(searchCity.value);
  card_3(searchCity.value);
  card_4(searchCity.value);
  card_5(searchCity.value);
  card_6(searchCity.value);
  card_7(searchCity.value);
});

searchCity.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    e.preventDefault();
  }
  document.getElementById("btn").click();
});
// function 1
function card_1(city) {
  let key = "DFHDERJGMWPCLZ2MCWMH2ZRGX";
  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeli
ne/${city}?unitGroup=metric&key=${key}&contentType=json`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      let card_data = data.days;
      nextDaycondition.innerText = card_data[1].conditions;
      sunrise.innerText = card_data[1].sunrise;
      sunset.innerText = card_data[1].sunset;
      day1description.innerText = "Description : " + card_data[1].description;
      let time_day = new Date();

      let day_s = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let day_string = day_s[time_day.getDay() + 1];
      day1date.innerText = "Date : " + card_data[1].datetime + "," + day_string;
    });
}
card1.addEventListener("click", () => {
  Hourly_Report.style.display = "none";
  mainhouedata.style.display = "none";
  weekliyUpdate.style.display = "block";
  card_1("new delhi");
});
card1.addEventListener("dblclick", () => {
  Hourly_Report.style.display = "block";
  mainhouedata.style.display = "block";
  weekliyUpdate.style.display = "none";
});
// function 2
function card_2(city) {
  let key = "DFHDERJGMWPCLZ2MCWMH2ZRGX";
  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeli
ne/${city}?unitGroup=metric&key=${key}&contentType=json`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      let card_data = data.days;
      nextDaycondition.innerText = card_data[2].conditions;
      sunrise.innerText = card_data[2].sunrise;
      sunset.innerText = card_data[2].sunset;
      day1description.innerText = "Description : " + card_data[2].description;
      let time_day = new Date();

      let day_s = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let day_string = day_s[time_day.getDay() + 2];
      day1date.innerText = "Date : " + card_data[2].datetime + "," + day_string;
    });
}
card2.addEventListener("click", () => {
  Hourly_Report.style.display = "none";
  mainhouedata.style.display = "none";
  weekliyUpdate.style.display = "block";
  card_2("new delhi");
});
card2.addEventListener("dblclick", () => {
  Hourly_Report.style.display = "block";
  mainhouedata.style.display = "block";
  weekliyUpdate.style.display = "none";
});
// function 3

function card_3(city) {
  let key = "DFHDERJGMWPCLZ2MCWMH2ZRGX";
  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeli
ne/${city}?unitGroup=metric&key=${key}&contentType=json`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      let card_data = data.days;
      nextDaycondition.innerText = card_data[3].conditions;
      sunrise.innerText = card_data[3].sunrise;
      sunset.innerText = card_data[3].sunset;
      day1description.innerText = "Description : " + card_data[3].description;
      let time_day = new Date();

      let day_s = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let days_tring = day_s[time_day.getDay() + 3];
      day1date.innerText = "Date : " + card_data[3].datetime + "," + days_tring;
    });
}
card3.addEventListener("click", () => {
  Hourly_Report.style.display = "none";
  mainhouedata.style.display = "none";
  weekliyUpdate.style.display = "block";
  card_3("new delhi");
});
card3.addEventListener("dblclick", () => {
  Hourly_Report.style.display = "block";
  mainhouedata.style.display = "block";
  weekliyUpdate.style.display = "none";
});
// function 4
function card_4(city) {
  let key = "DFHDERJGMWPCLZ2MCWMH2ZRGX";
  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeli
ne/${city}?unitGroup=metric&key=${key}&contentType=json`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      let card_data = data.days;
      nextDaycondition.innerText = card_data[4].conditions;
      sunrise.innerText = card_data[4].sunrise;
      sunset.innerText = card_data[4].sunset;
      day1description.innerText = "Description : " + card_data[4].description;
      let time_day = new Date();

      let day_s = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let day_string = day_s[time_day.getDay() + 4];
      day1date.innerText = "Date : " + card_data[4].datetime + "," + day_string;
    });
}
card4.addEventListener("click", () => {
  Hourly_Report.style.display = "none";
  mainhouedata.style.display = "none";
  weekliyUpdate.style.display = "block";
  card_4("new delhi");
});
card4.addEventListener("dblclick", () => {
  Hourly_Report.style.display = "block";
  mainhouedata.style.display = "block";
  weekliyUpdate.style.display = "none";
});
// function 5
function card_5(city) {
  let key = "DFHDERJGMWPCLZ2MCWMH2ZRGX";
  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeli
ne/${city}?unitGroup=metric&key=${key}&contentType=json`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      let card_data = data.days;
      nextDaycondition.innerText = card_data[5].conditions;
      sunrise.innerText = card_data[5].sunrise;
      sunset.innerText = card_data[5].sunset;
      day1description.innerText = "Description : " + card_data[5].description;
      let time_day = new Date();

      let day_s = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let day_string = day_s[time_day.getDay() + 5];
      day1date.innerText = "Date : " + card_data[5].datetime + "," + day_string;
    });
}
card5.addEventListener("click", () => {
  Hourly_Report.style.display = "none";
  mainhouedata.style.display = "none";
  weekliyUpdate.style.display = "block";
  card_5("new delhi");
});
card5.addEventListener("dblclick", () => {
  Hourly_Report.style.display = "block";
  mainhouedata.style.display = "block";
  weekliyUpdate.style.display = "none";
});
// function 6
function card_6(city) {
  let key = "DFHDERJGMWPCLZ2MCWMH2ZRGX";
  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${key}&contentType=json`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      let card_data = data.days;

      nextDaycondition.innerText = card_data[6].conditions;
      sunrise.innerText = card_data[6].sunrise;
      sunset.innerText = card_data[6].sunset;
      day1description.innerText = "Description : " + card_data[6].description;
      let time_day = new Date();

      let day_s = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let day_string = day_s[time_day.getDay() + 6];
      day1date.innerText = "Date : " + card_data[6].datetime + "," + day_string;
    });
}
card6.addEventListener("click", () => {
  Hourly_Report.style.display = "none";
  mainhouedata.style.display = "none";
  weekliyUpdate.style.display = "block";
  card_6("new delhi");
});
card6.addEventListener("dblclick", () => {
  Hourly_Report.style.display = "block";
  mainhouedata.style.display = "block";
  weekliyUpdate.style.display = "none";
});
// function 7
function card_7(city) {
  let key = "DFHDERJGMWPCLZ2MCWMH2ZRGX";
  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${key}&contentType=json`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      let card_data = data.days;
      nextDaycondition.innerText = card_data[7].conditions;
      sunrise.innerText = card_data[7].sunrise;
      sunset.innerText = card_data[7].sunset;
      day1description.innerText = "Description : " + card_data[7].description;

      let time_day = new Date();

      let day_s = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let day_string = day_s[time_day.getDay()];
      day1date.innerText = "Date : " + card_data[7].datetime + "," + day_string;
    });
}
card7.addEventListener("click", () => {
  Hourly_Report.style.display = "none";
  mainhouedata.style.display = "none";
  weekliyUpdate.style.display = "block";
  card_7("new delhi");
});
card7.addEventListener("dblclick", () => {
  Hourly_Report.style.display = "block";
  mainhouedata.style.display = "block";
  weekliyUpdate.style.display = "none";
});

getWetherData(" "); //defult location