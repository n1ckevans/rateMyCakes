import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() cake: any;
    rating = {
    rating: '',
    comment: '',
  };
  
  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
  }


  rate(){
    let observable = this._httpService.rateCake(this.rating);
       observable.subscribe(data => {
      this.cake.rating.push(this.rating);
      this.addRatingToCake(this.cake._id, this.rating);
      this.rating = {
        rating: '',
        comment: '',
      };
    
  })
}

  addRatingToCake(id, rating){
    let observable = this._httpService.addRatingToCake(id, rating);
    observable.subscribe(data => {
      console.log(data);
    })
   
  }

}
