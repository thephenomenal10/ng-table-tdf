import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor(private _http: HttpClient) { }

  _url = "http://localhost:8000/api/v1/tours/enroll";

  enroll(user: User){
    return this._http.post<any>(this._url, user);
  }
}
