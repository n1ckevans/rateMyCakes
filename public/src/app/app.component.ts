import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Rate My Cakes';
  cakes: any[] = [];
  selectedCake = null;
  newCake: any;


  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getCakesFromService();
    this.newCake = {
      baker: '',
      photo: '',
    };

  }

  getCakesFromService() {
    let observable = this._httpService.getCakes();
    observable.subscribe(data => {
      this.cakes = data['cakes']
      this.selectedCake = null;
    });
  }

  selectCake(cake) {
      this.selectedCake = cake;
      this.avgRating(this.selectedCake.rating);
    return this.selectedCake;
  }


 
  avgRating(rating) {
    let sum = 0;
    let count = rating.length;

    for (let i = 0; i < rating.length; i++) {
      sum += rating[i].rating;
    };
    let avg = sum / count;
    return avg;
  };

  edit(cake) {

    let observable = this._httpService.updateCake(cake._id, cake);
    observable.subscribe(data => {
      console.log("Successfully updated!", data);
      this.selectedCake = null;
    })
  }

  delete(cake) {
    console.log(cake._id);
    let observable = this._httpService.deleteCake(cake._id);
    observable.subscribe(data => {
      console.log("No more cake for you, for a year!", data);
      return this.getCakesFromService();
    })
  }

  create() {
    let observable = this._httpService.createCake(this.newCake);
    observable.subscribe(data => {
      console.log(data);
      this.cakes.push(this.newCake);
      this.newCake = {
        baker: '',
        photo: '',
      }
    })
  }
}