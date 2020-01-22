import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient
  ) { }

  getCakes() {
    return this._http.get('api/cakes');

  }

  getCakeById(id: string) {
    this._http.get('api/cakes/' + id)
      .subscribe(data => console.log(data))
  }

  createCake(newCake) {
    return this._http.post('api/cakes', newCake);
  }

  rateCake(rating) {
    return this._http.post('api/rating/', rating);
  }

  addRatingToCake(id: string, rating){
    console.log(id, rating)
    return this._http.put('api/cakes/' + id, rating);
  }

  deleteCake(id: string) {
    return this._http.delete('api/cakes/' + id);
  }

  updateCake(id: string, cake: object) {
    return this._http.put('api/cakes/' + id, cake);

  }
}
