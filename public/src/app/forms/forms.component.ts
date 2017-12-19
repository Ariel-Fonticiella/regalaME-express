import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserApiService, User } from '../services/user-api.service';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {



  constructor(
    private userThang: UserApiService,
    private routerThang: Router
  ) { }

  ngOnInit() {
    this.userThang.getCheckLogin()
      .catch((err) => {
        alert("Sorry! Something Went Wrong.");
        console.log("Check Login Error");
        console.log(err);
      });
  }

}
