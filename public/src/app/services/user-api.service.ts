import { Injectable } from '@angular/core';
import { HttpClient  }  from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

export class User {
  // sign up form
  fullName:  string;
  avatar: string;
  email: string;

  // sign up & login forms
  username:  string;
  password:  string;

  // assigned by the database
  _id:       string;
  createdAt: string;
  updatedAt: string;
}


@Injectable()
export class UserApiService {

  currentUser: User;

  constructor(private httpThang: HttpClient) { }
  //POST /api/signup
    postSignup(userInfo: User) {
        return this.httpThang.post(
          `${environment.backendUrl}/api/signup`,
          userInfo,

          // send the cookies even to a different domain
          { withCredentials: true }
        )
        .toPromise()
        .then((apiResult: any) => {
            //update "currentUser" since we are logged in
            this.currentUser = apiResult.userInfo;
            // return "apiResult" for the component
            return apiResult;
        });
    }//=============================END /api/signup==============================


  //POST /api/login
    postLogin(userInfo: User) {
        return this.httpThang.post(
          `${environment.backendUrl}/api/login`,
          userInfo,

          // send the cookies even to a different domain
          { withCredentials: true }
        )
        .toPromise()
        .then((apiResult: any) => {
            // update "currentUser" since we are logged in
            this.currentUser = apiResult.userInfo;
            // return "apiResult" for the component
            return apiResult;
        });
    }//=============================END /api/login===============================

  //========    DELETE /api/logout  ========
  logout() {
      return this.httpThang.delete(
          `${environment.backendUrl}/api/logout`,

          // send the cookies even to a different domain
          { withCredentials: true }
        )
        .toPromise()
        .then((apiResult)=> {
            this.currentUser = null;
            //return "apiResult" for the component
            return apiResult;
        });
  }
  //========    GET /api/checklogin ========
  getCheckLogin() {
      return this.httpThang.get(
        `${environment.backendUrl}/api/checklogin`,

        // send the cookies even to a different domain
        { withCredentials: true }
      )
      .toPromise()
      .then((apiResult: any) => {
          // update "currentUser" in case we are logged in
          this.currentUser = apiResult.userInfo;
          // return "apiResult" for the component
          return apiResult;
      });
    }

}
