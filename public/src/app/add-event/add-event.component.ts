import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GiftedApiService, Gifted } from '../services/gifted-api.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  theGifted = new Gifted();

  constructor(
    private giftedThang: GiftedApiService,
    private routerThang: Router) { }

  ngOnInit() {}

  startNewEventAjax() {
      this.giftedThang.postNewEvent(this.theGifted)
        .then(() => {
            this.routerThang.navigate(['/user-profile']);
        })
        .catch((err) => {
          alert('Sorry! Something went wrong.');
          console.log('Sign up error');
          console.log(err);
        });
  }
}
