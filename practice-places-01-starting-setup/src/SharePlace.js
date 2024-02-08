import { Modal } from "./UI/Modal.js";
import { Map } from "./UI/Map.js";

class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-btn");

    locateUserBtn.addEventListener(
      "click",
      this.locateUserHandler.bind(this)
    );
    addressForm.addEventListener("submit", this.findAddressHandler);
  }

  selectPlace(coordinates) {
    if (this.map) {
      this.map.render();
    } else {
      this.map = new Map(coordinates);
    }
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert("Location feature is not available in your browser!");
      return;
    }

    const modal = new Modal(
      "loading-modal-content",
      "Loading location - please wait."
    );
    modal.show();

    navigator.geolocation.getCurrentPosition(
      (successResult) => {
        modal.hide();
        const coordinates = {
          lat: successResult.coords.latitude,
          lng: successResult.coords.longitude,
        };
        this.selectPlace(coordinates);
      },
      (err) => {
        modal.hide();
        alert("Could not locate you. Please enter an adress manually!");
      }
    );
  }

  findAddressHandler() {}
}

new PlaceFinder();
