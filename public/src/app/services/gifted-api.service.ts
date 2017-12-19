import { Injectable } from '@angular/core'       ;
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise'             ;

import { environment } from '../../environments/environment';

export class Gifted {
  name:             string;
  relationship:     string;
  interest:          string[];
  priceRange:       string;
  giftLink:         string;
  birthday:         string;

  // these are assigned by the database
  _id:       string;
  createdAt: string;
  updatedAt: string;
  event: any;
}

@Injectable()
export class GiftedApiService {

  constructor(private httpThang: HttpClient) { }

  // GET    /api/gifted
  getGifted() {
      return this.httpThang.get(
        `${environment.backendUrl}/api/gifted`,

        // send the cookies even to a different domain
        { withCredentials: true }
      ).toPromise();
}

    postNewEvent(giftedInfo: Gifted) {
      return this.httpThang.post(
        `${environment.backendUrl}/api/gifted`,
        giftedInfo,

        { withCredentials: true }
        )
        .toPromise()
    }


  // GET    /api/gifted/:id
  getOneGifted(oneId: string) {
      return this.httpThang.get(
        `${environment.backendUrl}/api/gifted/${oneId}`,

        // send the cookies even to a different domain
        { withCredentials: true }
      ).toPromise();
}

  // DELETE /api/gifted/:id
  deleteOneGifted(oneId: string) {
      return this.httpThang.delete(
        `${environment.backendUrl}/api/gifted/${oneId}`,

        // send the cookies even to a different domain
        { withCredentials: true }
      ).toPromise();
  }

}
