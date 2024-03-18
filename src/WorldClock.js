import React, { useState, useEffect } from "react";
import "./App.css";
import moment from "moment-timezone";

export default function WorldClock() {
  const [city, setCity] = useState("");
  const [cityName, setCityName] = useState("");
  const [citySelected, setCitySelected] = useState(false);
  const [currentTime, setCurrentTime] = useState(moment());


  useEffect(() => {
    const intervalTime = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);
    return () => clearInterval(intervalTime);
  }, []);

  let currentLocation = (moment.tz.guess()).replace("_", " ").split("/")[1];
 

  function showTimezone(event) {
    const name =
      event.target.options[event.target.selectedIndex].getAttribute("name");
    const selectedCity = event.target.value;

    if (selectedCity) {
      setCity(selectedCity);
      setCityName(name);
      setCitySelected(true);
    } else {
      setCitySelected(false);
    }
  }

  function resetCity() {
    setCity("");
    setCityName("");
    setCitySelected(false);
  }

  return (
    <div className="container text-center mt-5 shadow p-3 mb-5 bg-body-tertiary rounded">
      <div className="fs-2 fw-bold">World Clock</div>

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
        <option name={currentLocation} value={moment.tz.guess()}>
          Current Location/Timezone
        </option>
      </select>

      {citySelected && (
        <div id="cityTimezone" className="row mt-3 border-bottom">
          <div className="col-6">
            <h3 className="mb-0">{cityName}</h3>
            <p>{currentTime.tz(city).format("dddd Do MMMM YYYY")}</p>
          </div>
          <div className="col-6">
            <h3 className="mt-2">
              <span className="align-middle fs-2">
                {currentTime.tz(city).format("hh:mm:ss")}
              </span>
              <span className="ms-2 fs-6 align-middle">
                {currentTime.tz(city).format("A")}
              </span>
            </h3>
          </div>
        </div>
      )}
      {citySelected && (
        <button type="button" class="btn mt-3">
          <a
            href="/"
            onClick={resetCity}
            className="text-dark text-decoration-none"
          >
            Go back
          </a>
        </button>
      )}
      {!citySelected && (
        <div>
          <div className="row mt-3 border-bottom">
            <div className="col-6">
              <h3 className="mb-0">Dubai</h3>
              <p>{currentTime.tz("Asia/Dubai").format("dddd Do MMMM YYYY")}</p>
            </div>
            <div className="col-6">
              <h3 className="mt-2">
                <span className="align-middle fs-2">
                  {currentTime.tz("Asia/Dubai").format("hh:mm:ss")}
                </span>
                <span className="ms-2 fs-6 align-middle">
                  {currentTime.tz("Asia/Dubai").format("A")}
                </span>
              </h3>
            </div>
          </div>
          <div className="row mt-3 border-bottom">
            <div className="col-6">
              <h3 className="mb-0">Paris</h3>
              <p>
                {currentTime.tz("Europe/Paris").format("dddd Do MMMM YYYY")}
              </p>
            </div>
            <div className="col-6">
              <h3 className="mt-2">
                <span className="align-middle fs-2">
                  {currentTime.tz("Europe/Paris").format("hh:mm:ss")}
                </span>
                <span className="ms-2 fs-6 align-middle">
                  {currentTime.tz("Europe/Paris").format("A")}
                </span>
              </h3>
            </div>
          </div>
          <div className="row mt-3 border-bottom">
            <div className="col-6">
              <h3 className="mb-0">Beijing</h3>
              <p>{moment().tz("Asia/Hong_Kong").format("dddd Do MMMM YYYY")}</p>
            </div>
            <div className="col-6">
              <h3 className="mt-2">
                <span className="align-middle fs-2">
                  {moment().tz("Asia/Hong_Kong").format("hh:mm:ss")}
                </span>
                <span className="ms-2 fs-6 align-middle">
                  {moment().tz("Asia/Hong_Kong").format("A")}
                </span>
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
