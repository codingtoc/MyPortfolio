import { LightningElement, wire } from "lwc";
import getMovies from "@salesforce/apex/IMDBController1.getMovies";

export default class MoviesList1 extends LightningElement {
  enteredText = "";
  searchText = "";
  showText = "Please Enter Valid Movie Name";

  movies = [];

  processing = false;

  handleChange(event) {
    this.enteredText = event.target.value;
  }

  handleClick(event) {
    if (this.enteredText.trim() === "") {
      this.movies = [];
      this.showText = "Please Enter Valid Movie Name";
    } else if (this.enteredText.trim() === this.searchText) {
      this.processing = false;
    } else {
      this.processing = true;
      this.searchText = this.enteredText.trim();
    }
  }

  @wire(getMovies, { searchText: "$searchText" })
  fetchMovies(response) {
    if (response.data || response.error) {
      this.processing = false;
    }
    if (response.data) {
      let data = JSON.parse(response.data);
      if (data.success) {
        this.movies = data.result;
        this.showText = "";
      } else {
        this.movies = [];
        this.showText = "Please Enter Valid Movie Name";
      }
    } else if (response.error) {
      console.log("Error occured while searching movies: " + response.error);
      this.showText = "Error occured while searching movies: " + response.error;
    }
  }
}