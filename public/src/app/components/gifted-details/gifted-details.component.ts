import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GiftedApiService, Gifted } from '../../services/gifted-api.service'

@Component({
  selector: 'app-gifted-details',
  templateUrl: './gifted-details.component.html',
  styleUrls: ['./gifted-details.component.css']
})
export class GiftedDetailsComponent implements OnInit {

  giftedInfo = new Gifted();

  constructor(
    private activatedThang: ActivatedRoute,
    private giftedThang: GiftedApiService,
    private routerThang: Router
  ) { }

  ngOnInit() {
      // get the URL parameters of this route
      this.activatedThang.params.subscribe((myReqParams) => {
          //   { path: 'gifted/:id'
          //                     |
        console.log(myReqParams.id);

        this.startAjaxCall(myReqParams.id);
    });
  } // ngOnInit()

  startAjaxCall(urlId) {
    this.giftedThang.getOneGifted(urlId)
      .then((giftedResult: Gifted) => {
          // THE MAGIC HAPPENS HERE
          // (assign API results to component property)
          this.giftedInfo = giftedResult;
      })
      .catch((err) => {
          alert("Sorry! Something went wrong.");
          console.log("Gifted Details Error");
          console.log(err);
      });
  } // startAjaxCall()

  startDeleteAjax() {
    if (!confirm('Are you sure?')){
        return;
    }

    this.giftedThang.deleteOneGifted(this.giftedInfo._id)
      .then(() => {
          // redirect with the Angular router to list of gifted
          this.routerThang.navigate(['/gifted-list']);
      })
      .catch((err) => {
          alert("Sorry! Something went wrong.");
          console.log("Gifted Delete Error");
          console.log(err);
      });
  } // startDeleteAjax()

}
