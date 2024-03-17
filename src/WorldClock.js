import React, { useState, useEffect } from "react";
import "./App.css";
import moment from "moment-timezone";

export default function WorldClock() {
  const [city, setCity] = useState("");
  const [citySelected, setCitySelected] = useState(false);

  useEffect(() => {
    showDisplayedCities();
  }, []);

  function showDisplayedCities() {
    let dubai_city = document.querySelector(".dubai_city");
    dubai_city.innerHTML = "Dubai";
    let dubai_time = document.querySelector(".dubai_time");
    dubai_time.innerHTML = moment().tz("Asia/Dubai").format("HH:mm:ss ");
    let dubai_date = document.querySelector(".dubai_date");
    dubai_date.innerHTML = moment()
      .tz("Asia/Dubai")
      .format(" dddd Do MMMM YYYY");

    let paris_city = document.querySelector(".paris_city");
    paris_city.innerHTML = "Paris";
    let paris_time = document.querySelector(".paris_time");
    paris_time.innerHTML = moment().tz("Europe/Paris").format("HH:mm:ss ");
    let paris_date = document.querySelector(".paris_date");
    paris_date.innerHTML = moment()
      .tz("Europe/Paris")
      .format(" dddd Do MMMM YYYY");

    let hong_kong_city = document.querySelector(".hong_kong_city");
    hong_kong_city.innerHTML = "Beijing";
    let hong_kong_time = document.querySelector(".hong_kong_time");
    hong_kong_time.innerHTML = moment()
      .tz("Asia/Hong_Kong")
      .format("HH:mm:ss ");
    let hong_kong_date = document.querySelector(".hong_kong_date");
    hong_kong_date.innerHTML = moment()
      .tz("Asia/Hong_Kong")
      .format(" dddd Do MMMM YYYY");
  }

  function showTimezone(event) {
    const selectedCity = event.target.value;
    if (selectedCity) {
      setCity(selectedCity);
      setCitySelected(true);
    } else {
      setCitySelected(false);
    }
  }

  function resetCity() {
    setCity("");
    setCitySelected(false);
  }

  return (
    <div className="container text-center mt-5 shadow p-3 mb-5 bg-body-tertiary rounded">
      <div className="fs-2 fw-bold">World Clock</div>
      <div>
        <select id="cities" className="w-50" onChange={showTimezone}>
          <option value=""> Select a city</option>

          <option name="Rome" value="Europe/Rome">
            Rome
          </option>
          <option name="Tokyo" value="Asia/Tokyo">
            Tokyo
          </option>
          <option name="Sydney" value="Australia/Sydney">
            Sydney
          </option>
          <option name="New York" value="America/New_York">
            New York
          </option>
          <option name="Current Location" value={moment.tz.guess()}>
            Current Location
          </option>
        </select>
        {citySelected && (
          <div id="cityTimezone">
            {city && moment().tz(city).format("dddd Do MMMM YYYY HH:mm:ss ")}
          </div>
        )}
        {citySelected && (
          <a href="#" onClick={resetCity}>
            Go back to cities
          </a>
        )}
      </div>
      {!citySelected && (
        <div>
          <div className="row mt-3 border-bottom">
            <div className="col-6">
              <h3 className="dubai_city mb-0">Dubai</h3>
              <p className="dubai_date">
                {moment().tz("Asia/Dubai").format("dddd Do MMMM YYYY")}
              </p>
            </div>
            <div className="col-6">
              <h3 className="dubai_time mt-2">
                {moment().tz("Asia/Dubai").format("HH:mm:ss ")}
              </h3>
            </div>
          </div>
          <div className="row mt-3 border-bottom">
            <div className="col-6">
              <h3 className="paris_city mb-0">Paris</h3>
              <p className="paris_date">
                {moment().tz("Europe/Paris").format("dddd Do MMMM YYYY")}
              </p>
            </div>
            <div className="col-6">
              <h3 className="paris_time mt-2">
                {moment().tz("Europe/Paris").format("HH:mm:ss ")}
              </h3>
            </div>
          </div>
          <div className="row mt-3 border-bottom">
            <div className="col-6">
              <h3 className="hong_kong_city mb-0">Beijing</h3>
              <p className="hong_kong_date">
                {moment().tz("Asia/Hong_Kong").format("dddd Do MMMM YYYY")}
              </p>
            </div>
            <div className="col-6">
              <h3 className="hong_kong_time mt-2">
                {moment().tz("Asia/Hong_Kong").format("HH:mm:ss ")}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
