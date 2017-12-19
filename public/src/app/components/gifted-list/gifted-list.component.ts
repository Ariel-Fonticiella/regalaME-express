import { Component, OnInit } from '@angular/core';

import { GiftedApiService, Gifted } from '../../services/gifted-api.service';


@Component({
  selector: 'app-gifted-list',
  templateUrl: './gifted-list.component.html',
  styleUrls: ['./gifted-list.component.css']
})
export class GiftedListComponent implements OnInit {

  gifted: Gifted[] = [];

  constructor(private giftedThang: GiftedApiService) { }

  ngOnInit() {
    this.giftedThang.getGifted()
        .then((giftedResults: Gifted[]) => {
            // THE MAGIC HAPPENS HERE
            // (assign API results to component property)
            this.gifted = giftedResults;
        })
        .catch((err) => {
            alert("Sorry! Something went wrong.");
            console.log("Gifted List Error");
            console.log(err);
        });
  } // ngOnInit()

}
