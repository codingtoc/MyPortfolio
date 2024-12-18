import { LightningElement } from "lwc";
import getCurrentWeather from "@salesforce/apex/WeatherAPI.getCurrentWeather";

export default class CurrentWeather extends LightningElement {
  location = "";
  locationName;
  locationCountry;
  weatherIcon;
  weatherText;
  currentTemperature;
  showInfo = false;

  connectedCallback() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.location =
          position.coords.latitude + "," + position.coords.longitude;
        this.handleButtonClick();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  handleInputChange(event) {
    this.location = event.target.value;
  }

  handleButtonClick() {
    getCurrentWeather({ location: this.location })
      .then((result) => {
        this.showInfo = true;
        let weatherData = JSON.parse(result);
        this.locationName = weatherData.location.name;
        this.locationCountry = weatherData.location.country;
        this.weatherIcon = weatherData.current.condition.icon;
        this.weatherText = weatherData.current.condition.text;
        this.currentTemperature = weatherData.current.temp_c;
      })
      .catch((error) => {
        this.showInfo = false;
        console.log(error);
      });
  }
}