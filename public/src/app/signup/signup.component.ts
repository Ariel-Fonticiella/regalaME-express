import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserApiService, User } from '../services/user-api.service';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    theUser = new User();

    constructor(
      private userThang: UserApiService,
      private routerThang: Router
    ) { }

    ngOnInit() {}
    startSignupAjax() {
          this.userThang.postSignup(this.theUser)
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
